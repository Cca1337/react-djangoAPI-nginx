from django.contrib import admin

from api.models import Room
from spotify.models import SpotifyToken, Vote

# Register your models here.

admin.site.register(Room)
admin.site.register(SpotifyToken)
admin.site.register(Vote)
