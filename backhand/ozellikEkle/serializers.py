from rest_framework import serializers, viewsets
from .models import Vaka

class VakaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vaka
        fields = '__all__'

class VakaViewSet(viewsets.ModelViewSet):
    queryset = Vaka.objects.all()
    serializer_class = VakaSerializer
