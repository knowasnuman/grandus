from django.contrib import admin
from .models import Vaka

@admin.register(Vaka)
class VakaAdmin(admin.ModelAdmin):
    list_display = ('baslik', 'olusturulma_tarihi')
