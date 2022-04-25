from django.urls import path

from surveys import views

urlpatterns = [
    path('surveys/save-survey/', views.save_survey),
    path('surveys/get-survey-title/', views.get_survey_title),
]
