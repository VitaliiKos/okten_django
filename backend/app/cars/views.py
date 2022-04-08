from rest_framework.generics import DestroyAPIView, ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .filters import CarFilter
from .models import CarModel
from .serializers import CarSerializer


class CarListCreateView(ListAPIView):
    """
    Get all cars with filters
    """
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer
    filterset_class = CarFilter


class ReadUpdateDeleteView(RetrieveUpdateAPIView):
    """
    get:
        Get car by ID
    put:
        Update car by id
    patch:
        Partial update car by id
    """
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer


class CarGetById(RetrieveAPIView):
    """
    Get car by ID
    """
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer


class CarDelete(DestroyAPIView):
    """
    Delete car by ID
    """
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer
