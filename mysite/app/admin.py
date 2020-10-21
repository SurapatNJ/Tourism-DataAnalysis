from django.contrib import admin
from app import models

# Register your models here.
class gps_data(admin.ModelAdmin):
    list_display = ('id', 'time_stamp', 'vid', 'lat', 'lon', 'speed', 'unit_type')
    ordering = ('id',)

    list_filter = ('vid', )

admin.site.register(models.gps_data,gps_data)