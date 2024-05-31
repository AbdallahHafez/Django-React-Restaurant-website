from django.urls import path
from . import views
urlpatterns = [
    path('food_list/',views.foodList,name='foodList'),
    path('food_detail/<str:pk>',views.foodDetail,name='foodDetail'),
]
