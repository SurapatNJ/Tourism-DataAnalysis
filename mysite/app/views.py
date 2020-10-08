from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd

# Create your views here.
def test(request):
    df = pd.read_csv("2019-11-23_15.zip", compression='zip' )
    dataset = df[df['unit_type'] == 3]
    car_id = list(dataset.head(20))
    #dataset.to_json(r'json\data1.json', orient='split')
    #for data in dataset:
    print(dataset.head(20))
    
    return HttpResponse(car_id)