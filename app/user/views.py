from django.contrib.auth import get_user, get_user_model

from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView

from utils.jwt_util import JwtUtils

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


class UserDeleteView(APIView):
    permission_classes = (IsAdminUser,)

    def delete(self, *args, **kwargs):
        pk = kwargs.get('pk')
        if not UserModel.objects.filter(pk=pk).exists():
            return Response('User with this id is not exist', status.HTTP_404_NOT_FOUND)

        user = UserModel.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserToAdminView(GenericAPIView):
    permission_classes = (IsSuperUser,)
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        user = self.get_object()

        if user.is_staff:
            user.is_staff = False

            raise ValueError('User is already admin')
        # else:
        #     user.is_staff = True
        user.is_staff = True
        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data, status.HTTP_200_OK)


class AddAvatarView(UpdateAPIView):
    serializer_class = AddAvatarSerializer

    def get_object(self):
        return self.request.user.profile
