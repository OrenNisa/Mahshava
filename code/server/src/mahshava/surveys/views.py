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
    json_data = json.loads(survey_json)
    survey_title = json_data['title']
    survey_obj = Surveys(title=survey_title, surveyData=survey_json, author="author")
    survey_obj.save()
    serializer = SurveysSerializer(survey_obj)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
@authentication_classes([])
@permission_classes([])
def get_survey_title(request):
    survey_id = int(request.GET['id'])

    return Response(Surveys.objects.get(pk=survey_id).title, status=status.HTTP_200_OK)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
@authentication_classes([])
@permission_classes([])
def get_survey_json(request):
    survey_id = int(request.GET['id'])
    try:
        survey_json = Surveys.objects.get(pk=survey_id).surveyData
        json_data = json.loads(survey_json)
    except Surveys.DoesNotExist:
        json_data = None
    return Response(json_data, status=status.HTTP_200_OK)


