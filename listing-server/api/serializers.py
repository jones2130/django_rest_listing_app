from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = (
            'id',
            'author',
            'date_modified',
            'date_created',
            'description',
            'text',
            'title',
        )

        read_only_fields = (
            'date_created',
            'date_modified',
        )
