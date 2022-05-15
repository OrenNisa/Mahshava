from rest_framework import serializers

from .models import *


class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


class ProcessStepsSerializers(serializers.ModelSerializer):
    taskID = TaskSerializers(read_only=True)

    class Meta:
        model = ProcessSteps
        fields = "__all__"


class LeadershipAndOrganizationalCultureSurveySerializers(serializers.ModelSerializer):
    class Meta:
        model = LeadershipAndOrganizationalCulture_Survey
        fields = "__all__"


class RelationshipNetworksSurveySerializers(serializers.ModelSerializer):
    class Meta:
        model = RelationshipNetworks_Survey
        fields = "__all__"


class WillingnessToChangeSurveySerializers(serializers.ModelSerializer):
    class Meta:
        model = WillingnessToChange_Survey
        fields = "__all__"


class SurveysResultsSerializers(serializers.ModelSerializer):
    # startDate = serializers.DateTimeField(format=mahshava_settings.DATETIME_FORMAT)
    # endDate = serializers.DateTimeField(format='DD-MM-YYYY')
    leadershipAndOrganizationalCultureSurvey = LeadershipAndOrganizationalCultureSurveySerializers(read_only=True)
    relationshipNetworksSurvey = RelationshipNetworksSurveySerializers(read_only=True)
    willingnessToChangeSurvey = WillingnessToChangeSurveySerializers(read_only=True)

    class Meta:
        model = SurveysResults
        fields = "__all__"


class SchoolSerializers(serializers.ModelSerializer):
    surveysRes = SurveysResultsSerializers(read_only=True)

    class Meta:
        model = School
        fields = "__all__"


class SchoolProcessSerializers(serializers.ModelSerializer):
    schoolID = SchoolSerializers(read_only=True)
    contactID = ContactSerializers(read_only=True)
    processID = ProcessStepsSerializers(read_only=True)

    class Meta:
        model = SchoolProcess
        fields = "__all__"
