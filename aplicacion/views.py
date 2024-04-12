from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "aplicacion/index.html")

def formulario(request):
    return render(request, "aplicacion/formulario.html")

def docente(request):
    return render(request, "aplicacion/docente.html")

def director(request):
    return render(request, "aplicacion/director.html")

def director_2(request):
    return render(request, "aplicacion/director_2.html")