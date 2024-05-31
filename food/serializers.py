from rest_framework.serializers import ModelSerializer
from .models import Category,Food

class CategorySerializer(ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'

class FoodSerializer(ModelSerializer):
    category=CategorySerializer()
    class Meta:
        model=Food
        fields=['id','name','image','ingredients','vegetarian','price','preparation','category']