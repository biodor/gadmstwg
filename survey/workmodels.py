from django.db import models
from django.forms import ModelForm
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from multiselectfield import MultiSelectField

YOUR_PLACE_WORK = [
    ('Metro Manila', 'Metro Manila'),
    ('Province', 'Province'),
]

YN_CHOICES = [
    ('Yes', 'Yes'),
    ('No', 'No')
]

MODE_TRANSPORT = [
    ('Public Utility Jeep (PUJ)', 'Public Utility Jeep (PUJ)'),
    ('Public Utility Bus (PUB)', 'Public Utility Bus (PUB)'),
    ('Utility Vehicle Express (UV Express)', 'Utility Vehicle Express (UV Express)'),
    ('Government Vehicle (Shuttle Service)', 'Government Vehicle (Shuttle Service)'),
    ('Government Vehicle (Issued Service)', 'Government Vehicle (Issued Service)'),
    ('Motorcycle taxi', 'Motorcycle taxi'),
    ('Taxi', 'Taxi'),
    ('Tricycle/e-trike', 'Tricycle/e-trike'),
    ('GRAB', 'GRAB'),
    ('Metro train', 'Metro train'),
    ('Private Vehicle (Own car)', 'Private Vehicle (Own car)'),
    ('Bicycle/e-bike/Scooter', 'Bicycle/e-bike/Scooter'),
    ('Own Motorcycle', 'Own Motorcycle'),
    ('Carpool', 'Carpool'),
    ('Not Applicable', 'Not Applicable'),
]

TRAVEL_TIME = (
    ('30 minutes to 1 hour', '30 minutes to 1 hour'),
    ('1 hour to 2 hours', '1 hour to 2 hours'),
    ('2 hours to 3 hours', '2 hours to 3 hours'),
    ('4 hours or more', '4 hours or more')
)

AMOUNT_TRANSPORT_FARE = (
    ('0 to 25 Pesos', '0 to 25 Pesos'),
    ('26 to 50 pesos', '26 to 50 pesos'),
    ('51 to 75 pesos', '51 to 75 pesos'),
    ('76 to 100 pesos', '76 to 100 pesos'),
    ('101 to 125 pesos', '101 to 125 pesos'),
    ('126 to 150 pesos', '126 to 150 pesos'),
    ('151 to 175 pesos', '151 to 175 pesos'),
    ('176 pesos or more', '176 pesos or more')
)

YEARS_SERVICE = (
    ('0-5 years', '0-5 years'),
    ('6-10 years', '6-10 years'),
    ('11-15 years', '11-15 years'),
    ('16-20 years', '16-20 years'),
    ('21-30 years', '21-30 years'),
    ('31 years and above', '31 years and above')
)

NUMBER_XPROMOTED = [
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

YES_ATTENDANCE_TRAINING = (
    ('1-5 times', '1-5 times'),
    ('6-10 times', '6-10 times'),
    ('11-15 times', '11-15 times'),
    ('16-20 times', '16-20 times'),
    ('21 times and above', '21 times and above')
)

NO_ATTENDANCE_TRAINING = (
    ('Not interested', 'Not interested'),
    ('No budget', 'No budget'),
    ('Health Reason', 'Health Reason'),
    ('Management Decision', 'Management Decision'),
    ('Favoritism', 'Favoritism'),
    ('Personal reason', 'Personal reason'),
    ('No opportunity', 'No opportunity'),
    ('Others', 'Others'),
    ('', '')
)

LEVEL_SATISFACTION = [
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5')
]

GAD_TRAINING = [
    ('Gender Sensitivity Training', 'Gender Sensitivity Training'),
    ('Gender Mainstreaming Seminar', 'Gender Mainstreaming Seminar'),
    ('GAD Planning and Budgeting', 'GAD Planning and Budgeting'),
    ('Laws on Women (VAWC etc.)', 'Laws on Women (VAWC, etc.)'),
    ('Gender Audit', 'Gender Audit'),
    ('Gender Analysis Training', 'Gender Analysis Training'),
    ('None', 'None'),
    ('Others', 'Others, please specify')
]

REASON_NOT_AVAIL_CODI = [
    ('Not familiar with CODI', 'Not familiar with CODI'),
    ('No functional CODI', 'No functional CODI'),
    ('No CODI', 'No CODI'),
    ('Others', 'Others, please identify')
]

WHOM_SEEK_HELP = [
    ('Immediate family', 'Immediate family'),
    ('Friends/ co-workers', 'Friends/ co-workers'),
    ('Women’s Desk (Municipal Level)', 'Women’s Desk (Municipal Level)'),
    ('Barangay', 'Barangay'),
    ('Courts', 'Courts'),
    ('Others', 'Others, please identify')
]

class WorkRelatedInfo(models.Model):
    place_ofwork = models.CharField(max_length=1, blank=True, null=True)
    place_work_region = models.CharField("Region:", max_length=30)
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    place_work_city = models.CharField("City/Municipality:", max_length=30)
    mode_transport = MultiSelectField("1.1. Mode of transportation, going to work and vice versa",
                                      choices=MODE_TRANSPORT, max_length=500)
    travel_time_form_home = models.CharField("Travel time from home to work including traffic (not including fieldwork)",
                                             choices=TRAVEL_TIME, max_length=30)
    travel_time_from_work = models.CharField("Travel time from work to home including traffic (not including fieldwork)",
                                             choices=TRAVEL_TIME, max_length=30)
    amount_transport_fare = models.CharField("Amount spent for transportation fare (per day) going to work and vice versa:",
                                             choices=AMOUNT_TRANSPORT_FARE, max_length=30)
    years_service = models.CharField("Years of service in your agency:", choices=YEARS_SERVICE, max_length=60)
    number_x_promoted = models.CharField("Number of times you have been promoted:", choices=NUMBER_XPROMOTED, max_length=30)
    attendance_inter_training = models.CharField("Attendance to any INTERNATIONAL trainings/seminars/workshops related to your work:",
                                                 choices=YN_CHOICES, max_length=30)
    yes_inter_training = models.CharField(choices=YES_ATTENDANCE_TRAINING, max_length=120, null=True, blank=True)
    #no_inter_training = MultiSelectField("If no, why?", choices=NO_ATTENDANCE_TRAINING, max_length=120, null=True, blank=True)
    #FOR INTER TRAINING
    no_inter_training = MultiSelectField(choices=NO_ATTENDANCE_TRAINING, max_length=500, null=True, blank=True)
    #no_inter_training = models.CharField(choices=NO_ATTENDANCE_TRAINING, max_length=500)
    no_inter_training_reason = models.CharField("Reason, why?", max_length=1000, null=True, blank=True)

    attendance_local_training = models.CharField("Attendance to any LOCAL trainings/seminars/workshops related to your "
                                                 "work in the past 5 year:", choices=YN_CHOICES, max_length=30)
    yes_local_training = models.CharField(choices=YES_ATTENDANCE_TRAINING, max_length=120, null=True, blank=True)
    #FOR LOCAL TRAINING
    no_local_training = MultiSelectField(choices=NO_ATTENDANCE_TRAINING, max_length=500, null=True, blank=True)
    no_local_training_reason = models.CharField("Reason, why?", max_length=1000, null=True, blank=True)

    attendance_inter_confer = models.CharField("Attendance to any INTERNATIONAL conferences/meetings:",
                                               choices=YN_CHOICES, max_length=30)
    yes_inter_confer = models.CharField(choices=YES_ATTENDANCE_TRAINING, max_length=120, null=True, blank=True)
    #FOR INTER CONFER
    no_inter_confer = MultiSelectField(choices=NO_ATTENDANCE_TRAINING, max_length=500, null=True, blank=True)
    no_inter_confer_reason = models.CharField("Reason, why?", max_length=1000, null=True, blank=True)

    attendance_local_confer = models.CharField("Attendance to any LOCAL conferences/meetings in the past 3 years:",
                                               choices=YN_CHOICES, max_length=30)
    yes_local_confer = models.CharField("If yes, how often?", choices=YES_ATTENDANCE_TRAINING, max_length=120, null=True, blank=True)
    #NO LOCAL CONFER
    no_local_confer = MultiSelectField(choices=NO_ATTENDANCE_TRAINING, max_length=500, null=True, blank=True)
    no_local_confer_reason = models.CharField("Reason, why?", max_length=1000, null=True, blank=True)

    rate_technical = models.CharField("Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Technical Expertise", choices=LEVEL_SATISFACTION, max_length=30)
    rate_technical_reason = models.CharField("Kindly state your reason:", max_length=1000)
    rate_people = models.CharField("Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of People Relations/Management", choices=LEVEL_SATISFACTION, max_length=30)
    rate_people_reason = models.CharField("Kindly state your reason:", max_length=1000)
    rate_tranparency = models.CharField("Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Transparency/Accountability/Integrity", choices=LEVEL_SATISFACTION, max_length=30)
    rate_tranparency_reason = models.CharField("Kindly state your reason:", max_length=1000)
    rate_gad = models.CharField("Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Gender and Development", choices=LEVEL_SATISFACTION, max_length=30)
    rate_gad_reason = models.CharField("Kindly state your reason:", max_length=1000)
    gad_training =MultiSelectField("GAD - Related Training attended:", choices=GAD_TRAINING, max_length=1000)
    gad_other_training = models.CharField("Others, please specify", max_length=1000)
    rate_gender_awareness = models.CharField("Rate your level of gender awareness/sensitivity from 1 "
                                             "to 5, with 5 being the highest:", choices=LEVEL_SATISFACTION, max_length=30)
    experience_sexual_harass = models.CharField("Have you personally experienced sexual harassment?",
                                                choices=YN_CHOICES, max_length=30)
    yes_seek_assistance_codi = models.CharField("If yes, did you ever seek assistance of the Committee on "
                                                "Decorum Investi- gation (CODI)?", choices=YN_CHOICES, max_length=30)
    yes_satisfied = models.CharField("If yes, are you satisfied with the way they handled the case?",
                                     choices=YN_CHOICES, max_length=30)
    satisfied_reason = models.CharField("Cite your reason:", max_length=1000)
    reason_noavail_codi = models.CharField("Reason for not availing CODI:", choices=REASON_NOT_AVAIL_CODI, max_length=1000)
    other_noavail_reason = models.CharField("Please identify:", max_length=1000)
    experience_domestic_violence = models.CharField("Have you personally experienced domestic violence?",
                                                    choices=YN_CHOICES, max_length=30)
    yes_seek_help = models.CharField("If yes, did you ever seek help?", choices=YN_CHOICES, max_length=30)
    yes_towhom = models.CharField("If yes, with whom?", choices=WHOM_SEEK_HELP, max_length=120)
    domestic_seek_nohelp = models.CharField("Please identify", max_length=1000)
    reason_noseek_help = models.CharField("If no, reason for not seeking help:", max_length=1000)
    iswork_affected = models.CharField("Is your work performance affected by these domestic violence "
                                       "and sexual harassment?", choices=YN_CHOICES, max_length=120)
    yes_reason = models.CharField("If YES, kindly state your reason?", max_length=1000)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'

