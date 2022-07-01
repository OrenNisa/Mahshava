from django.urls import path

from surveys import views

urlpatterns = [
    path('surveys/save-survey/', views.save_survey),
    path('surveys/save-survey-results/', views.save_survey_results),
    path('surveys/get-survey-json/', views.get_survey_json),
    path('surveys/get-survey-background-color/', views.get_survey_background_color),
    path('surveys/get-all-surveys/', views.get_all_surveys),
]
