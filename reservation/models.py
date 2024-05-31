from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Reservation(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    personsNum=models.IntegerField()
    notes=models.TextField()
    date=models.DateTimeField()

    def __str__(self):
        return self.date