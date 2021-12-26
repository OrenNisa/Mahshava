from rest_framework import serializers

from core.models import Surveys


class SurveysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Surveys
        fields = ['id', 'creation_date', 'title', 'surveyFile', 'author', 'modify_date']
