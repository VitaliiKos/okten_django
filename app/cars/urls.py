from django.urls import path

from .views import CarListCreateView, ReadUpdateDeleteView, CarGetById, CarDelete

urlpatterns = [
    path('', CarListCreateView.as_view(), name='cars_list_create'),
    path('/<int:pk>/update', ReadUpdateDeleteView.as_view(), name='cars_update_by_id'),
    path('/<int:pk>', CarGetById.as_view(), name='cars_get_by_id'),
    path('/<int:pk>/delete', CarDelete.as_view(), name='car_delete'),
]
