from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from ..profile.models import ProfileModel
from .permissions import CanActivateUser, IsSuperUser
from .serializers import UserSerializer

from app.profile.serializers import AddAvatarSerializer, ProfileSerializer

UserModel = get_user_model()


class UserListCreateView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return AllowAny(),
        return super().get_permissions()


class AddAvatarView(UpdateAPIView):
    serializer_class = AddAvatarSerializer

    def get_object(self):
        return self.request.user.profile


class UserDeleteView(APIView):
    permission_classes = (IsAdminUser,)
    queryset = UserModel.objects.all()

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
        admin_status = self.request.query_params.get('admin_status', None)
        user = self.get_object()

        if admin_status == 'setadmin':
            if user.is_staff:
                raise ValueError('User is already admin')
            user.is_staff = True
        elif admin_status == 'resetadmin':
            if not user.is_staff:
                raise ValueError('User isn\'t admin')
            user.is_staff = False

        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data, status.HTTP_200_OK)


class UserSetResetActivateView(RetrieveUpdateAPIView):
    permission_classes = (CanActivateUser,)
    queryset = UserModel.objects.all()

    def patch(self, *args, **kwargs):
        active_status = self.request.query_params.get('setstatus', None)
        user = self.get_object()

        if active_status == 'setactive':
            if user.is_active:
                raise ValueError('User is already active')
            user.is_active = True

        elif active_status == 'resetactive':
            if not user.is_active:
                raise ValueError('User is already inactive')
            user.is_active = False

        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data, status.HTTP_200_OK)


class UserListView(ListCreateAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        queryset = ProfileModel.objects.all()
        user_id = self.request.user.id
        if user_id:
            queryset = queryset.exclude(user_id__exact=user_id)
        return queryset
