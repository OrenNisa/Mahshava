from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    contactName = models.CharField(max_length=50, default="")
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=10, default="")


class Task(models.Model):
    id = models.AutoField(primary_key=True)
    taskName = models.CharField(max_length=50, default="")
    isDone = models.BooleanField(default=False)


class ProcessSteps(models.Model):
    id = models.AutoField(primary_key=True)
    processName = models.CharField(max_length=50, default="")
    taskID = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='task_name')
    isDone = models.BooleanField(default=False)


class LeadershipAndOrganizationalCulture_Survey(models.Model):
    id = models.AutoField(primary_key=True)
    awarenessOfTheSituation = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    teamInvolvement = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    teamCohesion = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    innovationAndCreativity = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    decisionMaking = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])


class RelationshipNetworks_Survey(models.Model):
    id = models.AutoField(primary_key=True)
    effectivePartnerships = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    multiProfessionalism = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    leverageKnowledge = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    internalCrises = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])


class WillingnessToChange_Survey(models.Model):
    id = models.AutoField(primary_key=True)
    proactiveStance = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    objectiveClarity = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    checkPlans = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])
    planningStrategy = models.IntegerField(default=0, validators=[MaxValueValidator(7), MinValueValidator(0)])


class SurveysResults(models.Model):
    id = models.AutoField(primary_key=True)
    noOfParticipants = models.IntegerField(default=0)
    startDate = models.DateField(null=True, blank=True)
    endDate = models.DateField(null=True, blank=True)
    leadershipAndOrganizationalCultureSurvey = models.ForeignKey(LeadershipAndOrganizationalCulture_Survey,
                                                                 on_delete=models.CASCADE)
    relationshipNetworksSurvey = models.ForeignKey(RelationshipNetworks_Survey, on_delete=models.CASCADE)
    willingnessToChangeSurvey = models.ForeignKey(WillingnessToChange_Survey, on_delete=models.CASCADE)


class School(models.Model):
    id = models.AutoField(primary_key=True)
    schoolName = models.CharField(max_length=50, default="")
    city = models.CharField(max_length=50, default="")
    district = models.CharField(max_length=50, default="")
    pic = models.URLField(max_length=200, blank=True)
    phoneNo = models.CharField(max_length=13, default="")
    noOfTeachers = models.IntegerField(default=0)
    noOfStudents = models.IntegerField(default=0)
    consultant = models.CharField(max_length=50, default="")
    psychologist = models.CharField(max_length=50, default="")
    processStartDate = models.DateField(null=True, blank=True)
    religiousAffiliation = models.CharField(max_length=50, default="")
    lengthOfStudy = models.CharField(max_length=20, default="")
    surveysRes = models.ForeignKey(SurveysResults, on_delete=models.CASCADE)


class SchoolProcess(models.Model):
    id = models.AutoField(primary_key=True)
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE, related_name='school_name')
    contactID = models.ForeignKey(Contact, on_delete=models.CASCADE, related_name='contact_name')
    processID = models.ForeignKey(ProcessSteps, on_delete=models.CASCADE, related_name='processStep_name')
    lastActionDate = models.DateField(auto_now=True)
    schedule = models.TextField(default="none", blank=True)
