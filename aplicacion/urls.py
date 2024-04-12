from django.urls import path, include
from .views import *

urlpatterns = [
    path('', home, name="home"),
    path('formulario/', formulario, name="formulario"),
    path('docente/', docente, name="docente"),
    path('director/', director, name="director"),
    path('director_2/', director_2, name="director_2"),
    path("__reload__/", include("django_browser_reload.urls")),
]