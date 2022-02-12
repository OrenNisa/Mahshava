from django.urls import path

from surveys import views

urlpatterns = [
    path('surveys/save-survey/', views.save_survey),
]


