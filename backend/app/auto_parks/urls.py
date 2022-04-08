from django.urls import path

from .views import AutoParkAddCarView, AutoParkDelete, AutoParkGetById, AutoParkListCreateView

urlpatterns = [
    path('', AutoParkListCreateView.as_view(), name='auto_parks_create'),
    path('/<int:pk>', AutoParkGetById.as_view(), name='auto_parks_get_by_id'),

    path('/<int:pk>/add_car', AutoParkAddCarView.as_view(), name='auto_parks_add_car'),
    path('/<int:pk>/delete', AutoParkDelete.as_view(), name='auto_parks_delete'),
]
