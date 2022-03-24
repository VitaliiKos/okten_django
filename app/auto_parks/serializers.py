from rest_framework.serializers import ModelSerializer

from app.auto_parks.models import AutoParkModel
from app.cars.serializers import CarSerializer


class AutoParkSerializer(ModelSerializer):
    cars = CarSerializer(many=True, read_only=True)

    class Meta:
        model = AutoParkModel
        fields = ('id', 'name', 'cars')
