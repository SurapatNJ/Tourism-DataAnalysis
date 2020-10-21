from django.db import models

# Create your models here.
class gps_data(models.Model):
    time_stamp = models.DateTimeField()
    vid	= models.CharField(max_length=250)
    lat	= models.CharField(max_length=250)
    lon	= models.CharField(max_length=250)
    speed = models.IntegerField(default=0)
    unit_type = models.IntegerField(default=0)
    
