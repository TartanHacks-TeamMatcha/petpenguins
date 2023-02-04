from django.shortcuts import render, redirect
from . import forms
from datetime import datetime
from django.contrib.auth import login, authenticate

# Create your views here.
def index(request):
  return render(request, 'index.html')

def home(request):
  return render(request, 'home.html')

def register(request):
    if request.method == 'POST':
        form = forms.UserRegistrationForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.lastActive = datetime.now()
            print(form.cleaned_data)
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
    print(username, password, "HERE")
    user = authenticate(request, username=username, password=password)
    print(user)
    if user is not None:
        return redirect('home')
    else:
        return redirect('register')
  else:
    return render(request, 'login.html')

def logout(request):
  pass
