from django.contrib.auth.models import Group
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from .models import Heatmap

class HeatmapSerializer(serializers.ModelSerializer):

    class Meta:
        model = Heatmap
        fields = ['lat_center', 'lon_center', 'date_start', 'time_start', 'date_end', 'time_end']