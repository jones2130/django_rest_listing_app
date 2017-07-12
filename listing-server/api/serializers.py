from rest_framework import serializers
from .models import Listing

# from django.db.models.fields.DateTimeField

class ListingSerializer(serializers.ModelSerializer):
    date_created = serializers.DateTimeField(format='%B %d, %Y', read_only=True)
    date_modified = serializers.DateTimeField(format='%B %d, %Y', read_only=True)

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
