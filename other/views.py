from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

def simple_view(request):
    return HttpResponse('Hello!')

# Create your views here.
