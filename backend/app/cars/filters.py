from django_filters import rest_framework as filters

from .models import CarModel


class CarFilter(filters.FilterSet):
    # price = filters.NumberFilter(field_name='price', lookup_expr='lt')
    price = filters.RangeFilter()
    brand_start = filters.CharFilter(field_name='brand', lookup_expr='istartswith')

    class Meta:
        model = CarModel
        fields = ('id', 'price', 'brand_start',)
