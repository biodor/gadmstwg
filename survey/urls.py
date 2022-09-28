from django.urls import path
from django.contrib import admin
admin.site.site_header  =  "GADMS Survey Profiling admin"
admin.site.site_title  =  "GADMS Survey Profiling admin site"
admin.site.index_title  =  "GADMS Survey Profiling Admin"
from .views import (
    PostListView,
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPrivacyCreateView,
    UserPostListView
)
from . import views

urlpatterns = [
    path('survey/', UserPrivacyCreateView.as_view(), name='survey-start'),
    path('', PostListView.as_view(), name='post-bulletin'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new/', PostCreateView.as_view(), name='create-bulletin'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('about/', views.about, name='survey-about'),
    path('post/upload', views.postUploadDocs, name ='post-upload-docs'),

    path('survey/new/privacy/', UserPrivacyCreateView.as_view(), name='new-survey'),
    path('survey/', views.UserSurveyListView, name='list-survey'),
#    path('update-survey/<int:pk>/', views.updateSurvey, name='update-survey'),
    path('delete-survey/<int:pk>/', views.deleteSurvey, name='delete-survey'),

    path('update/profile/<int:pk>/', views.updateRPSurvey, name='update-profile'),
    path('update/household/<int:pk>/', views.updateHISurvey, name='update-household'),
    path('update/workinfo/<int:pk>/', views.updateWISurvey, name='update-workinfo'),
    path('update/practices/<int:pk>/', views.updatePCsurvey, name='update-practices'),
    path('update/membership/<int:pk>/', views.updateMOSurvey, name='update-membership'),
    path('update/otherinfo/<int:pk>/', views.updateOISurvey, name='update-otherinfo'),
    path('update/suggestion/<int:pk>/', views.updateSSurvey, name='update-suggestion'),
    path('update/otherconcern/<int:pk>/', views.updateOCSurvey, name='update-otherconcern'),

    path('survey/detail/<int:pk>/', views.respondent_details, name='survey-details'),
   # path('new/', views.SurveyInsert)
    path('dashboard/', views.dashboard, name='dashboard'),
]
