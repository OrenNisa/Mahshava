from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer

from surveys.models import Surveys
from surveys.serializers import SurveysSerializer


@api_view(['POST'])
@renderer_classes([JSONRenderer])
def save_survey(request):
    survey_obj = Surveys(title=request.SurveyJSON.pages.title, surveyData=request.SurveyJSON, author="author")
    survey_obj.save()
    serializer = SurveysSerializer(survey_obj)
    return Response(serializer.data, status=status.HTTP_200_OK)
