
from django.db import models


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
    processStartDate = models.DateField


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


class SchoolProcess(models.Model):
    id = models.AutoField(primary_key=True)
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE, related_name='school_name')
    contactID = models.ForeignKey(Contact, on_delete=models.CASCADE, related_name='contact_name')
    processID = models.ForeignKey(ProcessSteps, on_delete=models.CASCADE, related_name='processStep_name')
    lastActionDate = models.DateField(auto_now=True)
    schedule = models.TextField(default="none", blank=True)

# School.objects = School.objects.using('core')
# SchoolProcess.objects = SchoolProcess.objects.using('core')
