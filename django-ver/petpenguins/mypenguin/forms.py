from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User


class UserRegistrationForm(UserCreationForm):
    username = forms.CharField(max_length=200)
    email = forms.EmailField()
    andrewid = forms.CharField(max_length=50)

    class Meta:
        model = User
        fields = ['username', 'andrewid', 'email', 'password1', 'password2']
