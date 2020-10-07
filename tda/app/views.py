from django.shortcuts import render
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive



# Create your views here.
def test(request):
    gauth = GoogleAuth()
    gauth.LocalWebserverAuth() # client_secrets.json need to be in the same directory as the script
    drive = GoogleDrive(gauth)
    return drive