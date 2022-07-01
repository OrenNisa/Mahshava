"""
WSGI config for mahshava project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""
import os
import sys

from django.core.wsgi import get_wsgi_application

SERVER_BASE = 'c:/Apache24/_projects/mahshava/server'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mahshava.settings')

sys.path.append(SERVER_BASE)
sys.path.append(f'{SERVER_BASE}/mahshava')
sys.path.append(f'{SERVER_BASE}/core')
sys.path.append(f'{SERVER_BASE}/surveys')

application = get_wsgi_application()
