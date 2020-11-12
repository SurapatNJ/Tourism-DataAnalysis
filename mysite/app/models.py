from django.conf import settings
from django.db import models

# Create your models here.
class Heatmap(models.Model):
    lat_center = models.IntegerField()
    lon_center = models.IntegerField()
    date_start = models.DateField()
    time_start = models.TimeField()
    date_end = models.DateField()
    time_end = models.TimeField()
    