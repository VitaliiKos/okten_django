from django.urls import path

from .views import (
    AddAvatarView,
    UserDeleteView,
    UserListCreateView,
    UserListView,
    UserSetResetActivateView,
    UserToAdminView,
)

urlpatterns = [
    path('', UserListCreateView.as_view(), name='user_list_create'),
    path('/<int:pk>/admin', UserToAdminView.as_view(), name='user_set_to_admin'),
    path('/avatar', AddAvatarView.as_view(), name='user_add_avatar'),
    path('/<int:pk>/delete', UserDeleteView.as_view(), name='user_delete'),

    path('/<int:pk>/activestatus', UserSetResetActivateView.as_view(), name='user_set_reset_active_by_id'),
    path('/otherusers', UserListView.as_view(), name='users_without_authentication_user')

]
