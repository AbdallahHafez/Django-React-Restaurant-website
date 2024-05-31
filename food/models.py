from django.db import models


# Create your models here.
class Category(models.Model):
    name=models.CharField(max_length=150)
    def __str__(self):
        return self.name

class Food(models.Model):
    category=models.ForeignKey(Category,on_delete=models.SET_NULL,null=True,blank=True)
    name=models.CharField(max_length=200)
    ingredients=models.CharField(max_length=400)
    vegetarian=models.BooleanField(default=False)
    image=models.ImageField(upload_to='media',null=True,blank=True)
    price=models.DecimalField(max_digits=5,decimal_places=2)
    preparation=models.TextField(max_length=700)

    def __str__(self):
        return self.name
