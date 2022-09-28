from django import forms
from django.contrib.auth.forms import UserCreationForm
from .privacymodel import Privacy

class PrivacyForm(forms.ModelForm):
    class Meta:
        model = Privacy
        fields = '__all__'