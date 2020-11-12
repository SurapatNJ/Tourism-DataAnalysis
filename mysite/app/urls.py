from django.urls import path, include
from rest_framework import routers
from .views import HeatmapViewSet

router = routers.DefaultRouter()
router.register(r'heatMap', HeatmapViewSet)

urlpatterns = [
    path('', include(router.urls))
]