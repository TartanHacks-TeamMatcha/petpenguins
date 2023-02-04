from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User


class UserRegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'andrewid', 'email', 'password1', 'password2']
        help_texts = {
            'password1': None,
            'password2': None,
            'password': None,
        }
