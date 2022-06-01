from django.db import models


class Surveys(models.Model):
    id = models.AutoField(primary_key=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=40)
    surveyData = models.JSONField()
    author = models.CharField(max_length=40)
    modify_date = models.DateTimeField(auto_now_add=True)
    color = models.CharField(max_length=40, default="#fff")

    def __str__(self):
        return '%s' % self.title


# class Themes(models.Model):
#     id = models.AutoField(primary_key=True)
#     theme = models.JSONField()

