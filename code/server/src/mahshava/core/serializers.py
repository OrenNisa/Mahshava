from rest_framework import serializers

from .models import School, Contact, Task, ProcessSteps, SchoolProcess


class SchoolSerializers(serializers.ModelSerializer):
    # process = ProcessSerializers(read_only=True, many=True)

    class Meta:
        model = School
        fields = "__all__"


class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


class ProcessStepsSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProcessSteps
        fields = "__all__"


class SchoolProcessSerializers(serializers.ModelSerializer):
    class Meta:
        model = SchoolProcess
        fields = "__all__"
