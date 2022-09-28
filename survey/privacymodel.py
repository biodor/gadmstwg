from django.db import models
from django.forms import ModelForm
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from multiselectfield import MultiSelectField

TITLE = "INFORMED CONSENT FORM"
STATEMENT1 = "I confirm that I have read and understood the information about the project as explained by the researchers. " \
            "I confirm that I have had the opportunity to ask questions and the researchers have answered any questions about " \
            "the study to my satisfaction. I understand that my participation is voluntary and that I am free to withdraw from " \
            "the project at any time, without having to give a reason and without any consequences. I understand that any " \
            "information recorded in the questionnaire will remain confidential and no information that identifies me will " \
            "be made publicly available. I consent to use of the data in research, publications, sharing and archiving as " \
            "explained by the researchers."
STATEMENT2 = "With this, I should only input/answer information that is true, correct and complete. " \
            "Failure to do so may result of inaccurate data analysis."
STATEMENT3 = "By continuing in answering the survey (Pressing NEXT) means I agree and understand the statement."

TITLE1 = "DATA PRIVACY STATEMENT"
STATEMENT4 = "The information that you will provide in this form will be used as proof of attendance to the webinar/video conferencing conducted by Inclusive Transport Unit (INTRU) - GAD. With this: " \
           "a. I consent to allow my personal data be collected/processed for the above specific and legitimate purpose." \
           "b. I understand that my personal data will be processed in a manner that ensures appropriate privacy and security safeguards." \
           "c. I hereby affirm my right to be informed, object to processing, access and rectify, suspend and withdraw my personal data and be " \
           "indemnified in case of damages pursuant to the provisions of the Republic Act No. 10173 (Data Privacy Act of 2012) and its corresponding " \
             "Implementing Rules and Regulations. Pressing next means you agree and understand the statement above."


class Privacy(models.Model):
    title = models.CharField("",max_length=1000, default=TITLE)
    title1 = models.CharField("", max_length=1000, default=TITLE1)
    statement4 = models.TextField("", default=STATEMENT4, max_length=1000)
    statement1 = models.TextField("",default=STATEMENT1, max_length=1000)
    statement2 = models.TextField("",default=STATEMENT2, max_length=300)
    statement3 = models.TextField("",default=STATEMENT3, max_length=300)

    check = models.IntegerField(blank=True, null=True)
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'