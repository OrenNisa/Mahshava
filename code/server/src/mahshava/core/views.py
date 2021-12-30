from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from core.decorators import authorized_roles
from core.roles import Role
from .models import School
from .serializers import SchoolSerializers


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
    school_info = School.object.all()
    serializer_info = SchoolSerializers(school_info)

    return Response(serializer_info.data, status=status.HTTP_200_OK)
