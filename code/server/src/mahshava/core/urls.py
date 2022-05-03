from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from core import views
from core.views import SchoolProcessViewSet

router = DefaultRouter()
router.register('schoolProcess', SchoolProcessViewSet, basename='schoolProcess')

urlpatterns = [
    path('auth/obtain-token/', obtain_jwt_token),
    path('auth/refresh-token/', refresh_jwt_token),

    path('', include(router.urls)),
    path('users/get-current-user/', views.get_current_user),
    path('users/get-current-user/updated-table', views.updated_table),
    path('schoolInfo/', views.getSchoolProcess),

]
