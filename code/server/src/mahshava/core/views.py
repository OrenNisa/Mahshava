from rest_framework import status, viewsets
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from core.decorators import authorized_roles
from core.roles import Role
from .serializers import *


class SchoolProcessViewSet(viewsets.ModelViewSet):
    queryset = SchoolProcess.objects.all()
    serializer_class = SchoolProcessSerializers


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


@api_view(['GET'])
@renderer_classes([JSONRenderer])
@authorized_roles(roles=[Role.MAHSHAVA_ADMIN, Role.SCHOOL_ADMIN])
def updated_table(request):
    school_info = School.objects.all()
    serializer_info = SchoolSerializers(school_info, many=True)

    return Response(serializer_info.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
@authorized_roles(roles=[Role.MAHSHAVA_ADMIN, Role.SCHOOL_ADMIN])
def getSchoolProcess(request):
    processInfo = SchoolProcess.objects.all()
    serializer_info = SchoolProcessSerializers(processInfo, many=True)

    return Response(serializer_info.data, status=status.HTTP_200_OK)
