from django.urls import path
from .import views

urlpatterns = [
    path('user/',views.CreateUser.as_view(),name='register'),
    path('',views.ReservationListCreate.as_view(),name='reservation'),
    path('delete/<str:pk>/',views.DeleteReservation.as_view(),name='delete-reservation'),
]
