from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from core import urls as mahshava_urls
from surveys import urls as surveys_urls

api_prefix = settings.API_PREFIX

urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'{api_prefix}', include(mahshava_urls)),
    path(f'{api_prefix}', include(surveys_urls)),
]
