from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes, authentication_classes, permission_classes
from rest_framework.renderers import JSONRenderer

from surveys.models import Surveys
from surveys.serializers import SurveysSerializer


@api_view(['POST'])
@renderer_classes([JSONRenderer])
@authentication_classes([])
@permission_classes([])
def save_survey(request):
    data = request.data
    survey_json = data['SurveyJSON']
    survey_obj = Surveys(title='dummy-title', surveyData=survey_json, author="author")
    survey_obj.save()
    serializer = SurveysSerializer(survey_obj)
    return Response(serializer.data, status=status.HTTP_200_OK)
