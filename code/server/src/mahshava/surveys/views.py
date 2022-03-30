from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes, authentication_classes, permission_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
import json

from surveys.models import Surveys
from surveys.serializers import SurveysSerializer


@api_view(['POST'])
@renderer_classes([JSONRenderer])
@authentication_classes([])
@permission_classes([])
def save_survey(request):
    survey_json = request.data['survey']
    actual_json = json.loads(survey_json)
    survey_obj = Surveys(title=actual_json['title'], surveyData=survey_json, author="author")
    survey_obj.save()

    serializer = SurveysSerializer(survey_obj)
    return Response(serializer.data, status=status.HTTP_200_OK)