from rest_framework import serializers

from surveys.models import Surveys


class SurveysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Surveys
        fields = ['id', 'creation_date', 'title', 'surveyData', 'author', 'modify_date']


# class SurveyResultsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Surveys
#         fields = ['id', 'creation_date', 'title', 'surveyData']
