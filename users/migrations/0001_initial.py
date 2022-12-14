# Generated by Django 3.2.7 on 2021-09-30 02:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('agency', models.CharField(blank=True, choices=[('CPA', 'Cebu Port Authority'), ('MARINA', 'Maritime Industry Authority'), ('PCG', 'Philippine Coast Guard'), ('PPA', 'Philippine Ports Authority'), ('PMMA', 'Philippine Maritime Merchant Academy')], max_length=250, null=True)),
                ('privacy', models.CharField(blank=True, max_length=120, null=True)),
                ('image', models.ImageField(default='default.jpg', upload_to='profile_pics')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
