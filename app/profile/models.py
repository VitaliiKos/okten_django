from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db import models

from utils.avatar_util import AvatarUtils

UserModel = get_user_model()


class ProfileModel(models.Model):
    class Meta:
        db_table = 'profile'
    name = models.CharField(max_length=32, validators=(
        RegexValidator(r'^(?=.{3,32}$)[a-zA-Z0-9]+(?<![_.])$',
                       'Name must contain only letters and must contain 4 to 32 characters'
                       ),
    ))
    surname = models.CharField(max_length=32, validators=(
        RegexValidator(r'^(?=.{3,32}$)[a-zA-Z0-9]+(?<![_.])$',
                       'Surname must contain only letters and must contain 4 to 32 characters'
                       ),
    ))
    born = models.DateField()
    phone = models.CharField(max_length=13, validators=(
        RegexValidator(r'^\+380[\d]{9}$', 'Invalid phone number ex. +380xxxxxxxxx'),
    ))
    avatar = models.ImageField(upload_to=AvatarUtils.upload_to, blank=True)
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='profile')
