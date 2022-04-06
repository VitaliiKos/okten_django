from rest_framework.generics import DestroyAPIView, ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import CarModel
from .serializers import CarSerializer


class CarListCreateView(ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = CarSerializer

    def get_queryset(self):
        queryset = CarModel.objects.all()
        auto_park_id = self.request.query_params.get('autoParkId', None)
        if auto_park_id:
            queryset = queryset.filter(auto_park_id__exact=auto_park_id)
            print('*'*50)
            print('queryset', queryset)
            print('*'*50)
        return queryset


class ReadUpdateDeleteView(RetrieveUpdateAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer


class CarGetById(RetrieveAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer


class CarDelete(DestroyAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer
