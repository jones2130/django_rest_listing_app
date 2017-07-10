# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from .models import Listing

from rest_framework.test import APIClient
from rest_framework import status
from django.core.urlresolvers import reverse

class ModelTestCase(TestCase):
    def setUp(self):
        self.listing_title = 'Test Title'
        self.listing_text = 'Test Text'
        self.listing = Listing(title=self.listing_title, text=self.listing_text)

    def test_model_can_create_listing(self):
        old_count = Listing.objects.count()
        self.listing.save()
        new_count = Listing.objects.count()
        self.assertNotEqual(old_count, new_count)

class ViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.listing_data = {
            'title': 'Test Title',
            'text': 'Test Text',
        }

        self.response = self.client.post(
            reverse('create'),
            self.listing_data,
            format='json',
        )

    def test_api_can_create_listing(self):
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_listing(self):
        listing = Listing.objects.get()
        response = self.client.get(
            reverse('details', kwargs={'pk': listing.id}),
            format = 'json',
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, listing)

    def test_api_can_update_listing(self):
        listing = Listing.objects.get()
        change_listing = {'title': 'New Title', 'text': 'Updated Text!'}
        response = self.client.put(
            reverse('details', kwargs={'pk': listing.id}),
            change_listing,
            format = 'json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_can_delete_listing(self):
        listing = Listing.objects.get()
        response = self.client.delete(
            reverse('details', kwargs={'pk': listing.id}),
            format = 'json',
            follow = True,
        )

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
