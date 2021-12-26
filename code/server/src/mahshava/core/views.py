from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from core.decorators import authorized_roles
from core.models import Surveys
from core.roles import Role
from core.serializers import SurveysSerializer


@api_view(['POST'])
@renderer_classes([JSONRenderer])
@authorized_roles(roles=[Role.MAHSHAVA_ADMIN, Role.SCHOOL_ADMIN])
def get_current_user(request):
    user = request.user
    roles = [row['name'] for row in user.groups.values('name')]
    content = {
        'id': user.id,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'roles': roles,
    }
    return Response(content, status=status.HTTP_200_OK)


@api_view(['POST'])
@renderer_classes([JSONRenderer])
def save_survey(request):
    survey_obj = Surveys(title="title", surveyFile="surveyFile", author="author")
    survey_obj.save()
    serializer = SurveysSerializer(survey_obj)
    return Response(serializer.data, status=status.HTTP_200_OK)
