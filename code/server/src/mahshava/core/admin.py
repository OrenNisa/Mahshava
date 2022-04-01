from django.contrib import admin

from .models import School, Contact, Task, ProcessSteps, SchoolProcess

admin.site.register(School)
admin.site.register(Contact)
admin.site.register(Task)
admin.site.register(ProcessSteps)
admin.site.register(SchoolProcess)

