from django.shortcuts import render, redirect
from . import forms

# Create your views here.
def index(request):
  return render(request, 'index.html')

def home(request):
  return render(request, 'home.html')

def register(request):
    if request.method == 'POST':
        form = forms.UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()

            # messages.success(request, f'Your account has been created. You can log in now!')    
            return redirect('login')
    else:
        form = forms.UserRegistrationForm()

    context = {'form': form}
    return render(request, 'register.html', context)
