from django.shortcuts import render
from django.http import HttpResponse
from app import models
import pandas as pd

# Create your views here.
def test(request):
    df = pd.read_csv("2019-11-23_15.zip", compression='zip' )
    dataset = df[df['unit_type'] == 3].head(20)
    #dataset.to_json(r'json\data1.json', orient='split')
    '''for (time_stamp,vid,lat,lon,speed,unit_type) in zip(dataset['time_stamp'], dataset['vid'], dataset['lat'], dataset['lon'], dataset['speed'], dataset['unit_type']):
        print(time_stamp,vid,lat,lon,speed,unit_type)
        gps = models.gps_data(time_stamp=time_stamp,vid=vid,lat=lat,lon=lon,speed=speed,unit_type=unit_type)
        gps.save()'''
    
    return HttpResponse(dataset)