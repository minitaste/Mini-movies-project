from django.contrib import admin
from django.urls import path

from . import views 

urlpatterns = [
    path("", views.top_movies),
    path("add", views.add_search),
]