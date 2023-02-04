from django.db import models

# Create your models here.

class User(models.Model):
  userid = models.AutoField(primary_key=True)
  username = models.CharField(max_length=200, null=False)
  password = models.CharField(max_length=200, null=False)
  email = models.EmailField(null=False)
  andrewid = models.CharField(max_length=50, null=False)
  onIsland = models.BooleanField(default=False)
  lastActive = models.DateTimeField()
