# DA-for-Tourism

# Django Local
# How to clone into you Localhost

git clone https://github.com/KoonOH5093/DA-for-Tourism

## Requirement

OS : Windows

## Setting up a virtual environment
py -m venv env
.\env\Scripts\activate
py -m pip install Django

## Pre run
cd mysite
py -m pip install -r requirements.txt

## How to run Django in Local (http://127.0.0.1:8000/)
cd mysite
py manage.py makemigrations
py manage.py migrate
py manage.py runserver