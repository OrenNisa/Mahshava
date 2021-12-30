from rest_framework import serializers

from .models import School, Process


class ProcessSerializers(serializers.ModelSerializer):
    class Meta:
        model = Process
        field = "__all__"


class SchoolSerializers(serializers.ModelSerializer):
    process = ProcessSerializers(read_only=True)

    class Meta:
        model = School
        field = "__all__"
