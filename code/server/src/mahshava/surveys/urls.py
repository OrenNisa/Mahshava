from django.urls import path

from surveys import views

urlpatterns = [
    path('surveys/save-survey/', views.save_survey),
    path('surveys/get-survey-title/', views.get_survey_title),
    # path('surveys/get-surveys/', views.get_surveys),
    path('surveys/get-survey-json/', views.get_survey_json),
    path('surveys/get-survey-background-color/', views.get_survey_background_color),

]
