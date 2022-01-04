from rest_framework import serializers

from .models import School, Process


class ProcessSerializers(serializers.ModelSerializer):
    class Meta:
        model = Process
        fields = "__all__"


class SchoolSerializers(serializers.ModelSerializer):
    process = ProcessSerializers(read_only=True, many=True)

    class Meta:
        model = School
        fields = "__all__"
