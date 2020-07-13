#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

THEME ='themes/Flex'


AUTHOR = 'Aaditya Chapagain'
SITENAME = 'Aaditya Chapagain'

PATH = 'content'

TIMEZONE = 'Asia/Kathmandu'

DEFAULT_LANG = 'English'

THEME_COLOR_ENABLE_USER_OVERRIDE = True

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# Pelican plugins
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['assets', 'sitemap', 'post_stats', 'feed_summary']

STATIC_PATHS = ['images', 'extras']

SITEURL = 'https://aadityachapagain.github.io'
DOMAIN = SITEURL
FEED_DOMAIN = SITEURL
HTTPS = True


SITETITLE = 'Aaditya Chapagain'  # Replace with your name
SITESUBTITLE = 'notiones a solis ortu usque ad occasum'


# Sitemap Settings
SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.6,
        'indexes': 0.6,
        'pages': 0.5,
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly',
    }
}

# Add a link to your social media accounts
SOCIAL = (
    ('github', 'https://github.com/aadityachapagain'),
    ('linkedin','https://www.linkedin.com/in/aaditya-chapagain-b5170a104/'),
    ('twitter','https://twitter.com/chapagainA'),
    ('facebook','https://www.facebook.com/aaditya.chapagain')
)

STATIC_PATHS = ['images', 'extra']

SITELOGO = 'images/profile.jpg'
FAVICON = 'images/favicon.ico'

LINKS = [
    ('example', 'www.example.com')
]

# Main Menu Items
MAIN_MENU = True
MENUITEMS = (('Archives', '/archives'),('Categories', '/categories'),('Tags', '/tags'))

# Code highlighting the theme
PYGMENTS_STYLE = 'emacs'
PYGMENTS_STYLE_DARK = 'monokai'

ARTICLE_URL = '{date:%Y}/{date:%m}/{slug}/'
ARTICLE_SAVE_AS = ARTICLE_URL + 'index.html'

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = PAGE_URL + 'index.html'

ARCHIVES_SAVE_AS = 'archives.html'
YEAR_ARCHIVE_SAVE_AS = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%m}/index.html'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# HOME_HIDE_TAGS = True
FEED_USE_SUMMARY = True