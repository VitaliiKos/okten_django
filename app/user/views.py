from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .permissions import IsSuperUser
from .serializers import UserSerializer

from app.profile.serializers import AddAvatarSerializer

UserModel = get_user_model()


class UserListCreateView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return AllowAny(),
        return super().get_permissions()


class UserToAdminView(GenericAPIView):
    permission_classes = (IsSuperUser,)
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        user = self.get_object()
        if user.is_staff:
            raise ValueError('User is already admin')
        user.is_staff = True
        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data, status.HTTP_200_OK)


class AddAvatarView(UpdateAPIView):
    serializer_class = AddAvatarSerializer

    def get_object(self):
        return  self.request.user.profile
