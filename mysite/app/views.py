from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.core import serializers
from rest_framework import filters, viewsets, permissions, status, views
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Heatmap
from .serializers import HeatmapSerializer

import numpy as np
import pandas as pd
from os import path
import pickle
import glob
import time    
from random import random

# Create your views here.


class HeatmapViewSet(viewsets.ModelViewSet):
    queryset = Heatmap.objects.all()
    serializer_class = HeatmapSerializer

    def create(self, request):
        searchData = request.data
        lat_center = searchData['lat_center']
        lon_center = searchData['lon_center']
        date_start = searchData['date_start']
        time_start = searchData['time_start']
        time_end = searchData['time_end']
        
        yourdata = [{"lat": random()*100, "lon": random()*100} for x in range(100)]

        
        #results = HeatmapSerializer(yourdata, many=True).data
        return Response(yourdata)