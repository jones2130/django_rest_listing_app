# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-11 01:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='listing',
            options={'ordering': ('-date_modified',)},
        ),
        migrations.AlterField(
            model_name='listing',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
