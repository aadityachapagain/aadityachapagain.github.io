#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITEURL = 'https://aadityachapagain.com'
DOMAIN = SITEURL
FEED_DOMAIN = SITEURL
HTTPS = True

RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
FEED_MAX_ITEMS = DEFAULT_PAGINATION

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

DISQUS_SITENAME = "aadityachapagain"
GOOGLE_ANALYTICS = "UA-175516093-1"
