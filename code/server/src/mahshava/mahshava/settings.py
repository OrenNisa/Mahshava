import datetime
import os
from os.path import dirname, abspath
from pathlib import Path

from dotenv import load_dotenv

ENV_FILE_DIR = dirname(dirname(abspath(__file__)))
load_dotenv(os.path.join(ENV_FILE_DIR, '.env'))

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_jwt',
    'core',
    'surveys',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication'
    ),
}

JWT_AUTH = {
    'JWT_ALLOW_REFRESH': True,
    'JWT_EXPIRATION_DELTA': datetime.timedelta(hours=1),
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7),
}

ROOT_URLCONF = 'mahshava.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mahshava.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {},
    'core': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('CORE_DATABASE_NAME', 'mahshava'),
        'USER': os.environ.get('CORE_DATABASE_USER', 'mahshava_db_root'),
        'PASSWORD': os.environ.get('CORE_DATABASE_PASSWORD', 'd99579913a98ba9e20edb016c12ed10b'),
        'HOST': os.environ.get('CORE_DATABASE_HOST', 'localhost'),
        'PORT': os.environ.get('CORE_DATABASE_PORT', '3306'),
    },
    'surveys': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('SURVEYS_DATABASE_NAME', 'surveys'),
        'USER': os.environ.get('SURVEYS_DATABASE_USER', 'surveys_db_root'),
        'PASSWORD': os.environ.get('SURVEYS_DATABASE_PASSWORD', '593046ec62ac1a4aff6fb736759e1e3a'),
        'HOST': os.environ.get('SURVEYS_DATABASE_HOST', 'localhost'),
        'PORT': os.environ.get('SURVEYS_DATABASE_PORT', '3306'),
    }
}

DATABASE_ROUTERS = ['mahshava.db_routers.CoreRouter', 'mahshava.db_routers.SurveysRouter']

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

API_PREFIX = os.environ.get('API_PREFIX', default='')
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY', default=None)
