from django.db import models

# Create your models here.
class Product(models.Model):
    anaBaslik = models.CharField(max_length=200)
    
    altBaslik = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.anaBaslik