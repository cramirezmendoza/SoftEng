from django.contrib import admin
from .models import Note, PostResource, DocumentModel, UpcomingEvent, Profile

admin.site.register(Note)
admin.site.register(PostResource)
admin.site.register(DocumentModel)
admin.site.register(UpcomingEvent)
admin.site.register(Profile)
