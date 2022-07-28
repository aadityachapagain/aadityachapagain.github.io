from fabric2 import connection

import os
import shutil
import sys
import git
import datetime

from pelican.server import ComplexHTTPRequestHandler, RootedHTTPServer
from pelican.settings import DEFAULT_CONFIG, get_settings_from_file

SETTINGS_FILE_BASE = 'pelicanconf.py'
SETTINGS = {}
SETTINGS.update(DEFAULT_CONFIG)
LOCAL_SETTINGS = get_settings_from_file(SETTINGS_FILE_BASE)
SETTINGS.update(LOCAL_SETTINGS)

CONFIG = {
    'settings_base': SETTINGS_FILE_BASE,
    'settings_publish': 'publishconf.py',
    # Output path. Can be absolute or relative to tasks.py. Default: 'output'
    'deploy_path': SETTINGS['OUTPUT_PATH'],
    # Github Pages configuration
    'github_pages_branch': 'master',
    'commit_message': "'Publish site on {}'".format(datetime.date.today().isoformat()),
    # Port for `serve`
    'port': 8000,
    'msg': "update blog !",
    'deploy_path' : 'output',
    'production' : 'root@localhost:22',
    'dest_path' : '/var/www',
}
cnx = connection.Connection('0.0.0.0', port=8000) # inline_ssh_env=True
cnx.config.update(CONFIG)

# Local path configuration (can be absolute or relative to fabfile)
deploy_path = 'output'
DEPLOY_PATH = deploy_path
msg = 'Update Blog'  # commit message

# Remote server configuration
production = 'root@localhost:22'
dest_path = '/var/www'

# Github Pages configuration
github_pages_branch = "master"

# Port for `serve`
SERVER = '127.0.0.1'
PORT = 8000

TEMPLATE = """
Title: {title}
Date: {year}-{month}-{day} {hour}:{minute}
Modified: {year}-{month}-{day} {hour}:{minute}
Category:
Tags:
Slug: {slug}
Summary:
Status: draft
"""


def newpost(title):
    """Generate template for new post"""
    today = datetime.today()
    slug = title.lower().strip().replace(' ', '-')
    file_location = "content/articles/{}.md".format(slug)
    t = TEMPLATE.strip().format(title=title,
                                year=today.year,
                                month=today.month,
                                day=today.day,
                                hour=today.hour,
                                minute=today.minute,
                                slug=slug)
    with open(file_location, 'w') as output_article:
        output_article.write(t)

def clean():
    """Remove generated files"""
    if os.path.isdir(DEPLOY_PATH):
        shutil.rmtree(DEPLOY_PATH)
        os.makedirs(DEPLOY_PATH)

def build():
    """Build local version of site"""
    cnx.local('pelican -s pelicanconf.py')

def rebuild():
    """`build` with the delete switch"""
    cnx.local('pelican -d -s pelicanconf.py')

def regenerate():
    """Automatically regenerate site upon file modification"""
    cnx.local('pelican -r -s pelicanconf.py')

def serve():
    """Serve site at http://localhost:8000/"""
    class AddressReuseTCPServer(RootedHTTPServer):
        allow_reuse_address = True

    server = AddressReuseTCPServer(
        CONFIG['deploy_path'],
        ('', CONFIG['port']),
        ComplexHTTPRequestHandler)

    sys.stderr.write('Serving on port {0} ...\n'.format(PORT))
    server.serve_forever()

def reserve():
    """`build`, then `serve`"""
    build()
    serve()

def preview():
    """Build production version of site"""
    cnx.local('pelican -s publishconf.py')

def cf_upload():
    """Publish to Rackspace Cloud Files"""
    rebuild()
    with cnx.cd(DEPLOY_PATH):
        cnx.local('swift -v -A https://auth.api.rackspacecloud.com/v1.0 '
              '-U {cloudfiles_username} '
              '-K {cloudfiles_api_key} '
              'upload -c {cloudfiles_container} .'.format(**cnx.config))

# @hosts(production)
def publish(commit_message):
    """Automatic deploy  to GitHub Pages"""
    
    cnx.config.update({'GH_TOKEN': os.getenv('TRAVIS_TOKEN')})
    cnx.config.update({'TRAVIS_REPO_SLUG': os.getenv('TRAVIS_REPO_SLUG')})
    clean()
    cnx.local('pelican -s publishconf.py')
    
    cnx.local("ghp-import -m '{msg}' -b {github_pages_branch} {deploy_path}".format(**cnx.config), hide = True)
    cnx.local("git push -fq https://{GH_TOKEN}@github.com/{TRAVIS_REPO_SLUG}.git {github_pages_branch}".format(**cnx.config))

def gh_pages():
    """Publish to GitHub Pages"""
    rebuild()
    cnx.local("ghp-import -b {github_pages_branch} {deploy_path} -p".format(**cnx.config))


def deploy():
    """Push to GitHub pages"""
    cnx.config.update({"msg": git.Repo().active_branch.commit.message})
    clean()
    preview()
    cnx.local("ghp-import {deploy_path} -m \"{msg}\" -b {github_pages_branch}".format(**cnx.config))
    cnx.local("git push origin {github_pages_branch}".format(**cnx.config))