from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.

class User(AbstractBaseUser):
  userid = models.AutoField(primary_key=True)
  username = models.CharField(max_length=200, null=False, unique=True)
  # password = models.CharField(max_length=200, null=False)
  email = models.EmailField(null=False, unique=True)
  andrewid = models.CharField(max_length=50, null=False, unique=True)
  onIsland = models.BooleanField(default=False)
  islandNum = models.IntegerField(default=0)
  lastActive = models.DateTimeField(default=None)
  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['userid', 'username', 'email', 'andrewid']