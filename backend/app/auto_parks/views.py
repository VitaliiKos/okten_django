from rest_framework.generics import CreateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveAPIView

from ..user.permissions import CanActivateUser
from .models import AutoParkModel
from .serializers import AutoParkSerializer

from app.cars.serializers import CarSerializer


class AutoParkListCreateView(ListCreateAPIView):
    serializer_class = AutoParkSerializer
    queryset = AutoParkModel.objects.all()


class AutoParkAddCarView(CreateAPIView):
    serializer_class = CarSerializer
    queryset = AutoParkModel.objects.all()

    def perform_create(self, serializer):
        auto_park = self.get_object()
        serializer.save(auto_park=auto_park)


class AutoParkGetById(RetrieveAPIView):
    queryset = AutoParkModel.objects.all()
    serializer_class = AutoParkSerializer


class AutoParkDelete(DestroyAPIView):
    # permission_classes = (CanActivateUser,)
    serializer_class = AutoParkSerializer
    queryset = AutoParkModel.objects.all()
