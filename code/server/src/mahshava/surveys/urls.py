from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from surveys import views

urlpatterns = [
    path('api/surveys/save-surveyForm', views.save_survey),
]


