from django.shortcuts import render
from .serializers import ReservationSerializer,UserSerializer
from .models import Reservation
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.contrib.auth.models import User
# Create your views here.
class CreateUser(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]

class ReservationListCreate(generics.ListCreateAPIView):
    serializer_class=ReservationSerializer
    permission_classes=[IsAuthenticated]

    def get_queryset(self):
        return Reservation.objects.filter(user=self.request.user)

    def perform_create(self,serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
class DeleteReservation(generics.DestroyAPIView):
    serializer_class=ReservationSerializer
    permission_classes=[IsAuthenticated]

    def get_queryset(self):
        return Reservation.objects.filter(user=self.request.user)
