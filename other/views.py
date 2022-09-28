from django.shortcuts import render
from django.http import HttpRequest

def simple_view(request):
    return HttpRequest('Hello!')

# Create your views here.
