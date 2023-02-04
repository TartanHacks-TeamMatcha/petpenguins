from django.shortcuts import render, redirect
from . import forms
from datetime import datetime
from django.contrib.auth import login, authenticate
from .models import User
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
  return render(request, 'index.html')

def about(request):
  return render(request, 'about.html')

@login_required(login_url='/login')
def home(request):
  current_user = request.user
  if request.method == 'POST':
    islandNum = request.POST['islandNum']
    User.objects.filter(userid=current_user.id).update(islandNum=islandNum)
    if islandNum == "0":
      return redirect('island1')
    elif islandNum == "1":
      return redirect('island2')
    else:
      return redirect('island3')
  else:
    return render(request, 'home.html', context={'curr_user': current_user.username})

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

@login_required(login_url='/login')
def island1(request):
  current_user = request.user
  all_active = User.objects.filter(islandNum = 0).values('username')
  all_active = list(all_active)
  all_active_list = [user['username'] for user in all_active]
  context = {
    'users': all_active_list,
    'curr_user': current_user.username,
  }
  return render(request, 'island1.html', context)

@login_required(login_url='/login')
def island2(request):
  current_user = request.user
  all_active = User.objects.filter(islandNum = 1).values('username')
  all_active = list(all_active)
  all_active_list = [user['username'] for user in all_active]
  context = {
    'users': all_active_list,
    'curr_user': current_user.username,
  }
  return render(request, 'island2.html', context)

@login_required(login_url='/login')
def island3(request):
  current_user = request.user
  all_active = User.objects.filter(islandNum = 2).values('username')
  all_active = list(all_active)
  all_active_list = [user['username'] for user in all_active]
  context = {
    'users': all_active_list,
    'curr_user': current_user.username,
  }
  return render(request, 'island3.html', context)
