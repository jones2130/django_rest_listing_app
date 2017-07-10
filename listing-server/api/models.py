# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Listing(models.Model):
    author = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=255, blank=False)
    text = models.TextField(blank=False)

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    related_name = 'listing'
    on_delete = models.CASCADE

    def __str__(self):
        return '{}'.format(self.title)
