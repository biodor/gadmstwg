from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Profile(models.Model):

    AGENCY_CHOICES = [
        ('CPA', 'Cebu Port Authority'),
        ('MARINA', 'Maritime Industry Authority'),
        ('PCG', 'Philippine Coast Guard'),
        ('PPA', 'Philippine Ports Authority'),
        ('PMMA', 'Philippine Maritime Merchant Academy')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    agency = models.CharField(choices=AGENCY_CHOICES, max_length=250, null=True, blank=True)
    privacy = models.CharField(null=True, blank=True, max_length=120)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, *args, **kwargs):
        super(Profile, self).save(*args, **kwargs)
        if self.image:
            img = Image.open(self.image.path)
            if img.height > 300 or img.width > 300:
                output_size = (300, 300)
                img.thumbnail(output_size)
                img.save(self.image.path)
