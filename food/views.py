from django.shortcuts import render
from .models import Category,Food
from .serializers import FoodSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
# Create your views here.

@api_view(['GET'])
def foodList(request):
    query=request.GET.get('query')
    if query == None:
        query=''
    allFood=Food.objects.filter(Q(name__icontains=query)|Q(ingredients__icontains=query))
    serializer=FoodSerializer(allFood,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def foodDetail(request,pk):
    food=Food.objects.get(id=pk)
    serializer=FoodSerializer(food,many=False)
    return Response(serializer.data)