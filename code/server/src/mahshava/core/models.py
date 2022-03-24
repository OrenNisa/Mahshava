from django.db import models


class School(models.Model):
    # default_image = "data:image/png;base64,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"
    # contact_info_image = models.CharField(max_length=5000, default=default_image)
    # contact_info_name = models.CharField(max_length=50)
    # contact_info_email = models.EmailField(max_length=50)
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
    idDone = models.BooleanField(default=False)


class ProcessSteps(models.Model):
    id = models.AutoField(primary_key=True)
    processName = models.CharField(max_length=50, default="")
    taskID = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='task_name')
    idDone = models.BooleanField(default=False)


class SchoolProcess(models.Model):
    id = models.AutoField(primary_key=True)
    schoolID = models.ForeignKey(School, on_delete=models.CASCADE, related_name='school_name')
    contactID = models.ForeignKey(Contact, on_delete=models.CASCADE, related_name='contact_name')
    processID = models.ForeignKey(ProcessSteps, on_delete=models.CASCADE, related_name='processStep_name')
    lastActionDate = models.DateField
    schedule = models.TextField(default="")

# School.objects = School.objects.using('core')
# SchoolProcess.objects = SchoolProcess.objects.using('core')
