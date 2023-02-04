from django.shortcuts import render, redirect
from . import forms
from datetime import datetime
from django.contrib.auth import login, authenticate
from .models import User

# Create your views here.
def index(request):
  return render(request, 'index.html')

def home(request):
  all_active = User.objects.all().values('username')
  all_active = list(all_active)
  all_active_list = [user['username'] for user in all_active]
  print('here', all_active_list)
  context = {
    'users': all_active_list,
  }
  return render(request, 'home.html', context)

def register(request):
    if request.method == 'POST':
        form = forms.UserRegistrationForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.lastActive = datetime.now()
            instance.isActive = True
            form.save()

            # messages.success(request, f'Your account has been created. You can log in now!')    
            return redirect('login')
    else:
        form = forms.UserRegistrationForm()

    context = {'form': form}
    return render(request, 'register.html', context)

def login(request):
  if request.method == 'POST':
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        return redirect('home')
    else:
        return redirect('register')
  else:
    return render(request, 'login.html')

def logout(request):
  pass
