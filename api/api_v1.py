from django.urls import include, path

urlpatterns = [
    path('/cars', include('app.cars.urls')),
    path('/parks', include('app.auto_parks.urls')),
    path('/users', include('app.user.urls')),
    path('/auth', include('app.auth.urls')),
]
