from django.urls import path


from surveys import views

urlpatterns = [
    path('surveys/save-surveyForm', views.save_survey),
]


