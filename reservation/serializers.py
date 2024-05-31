from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Reservation
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    email=serializers.EmailField(required=True)
    class Meta:
        model=User
        fields=['id','username','email','password']
        extra_kwargs={'password':{'write_only':True}}
    
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        return user

class ReservationSerializer(ModelSerializer):

    class Meta:
        model=Reservation
        fields=['id','date','notes','user','personsNum']
        extra_kwargs={'user':{'read_only':True}}