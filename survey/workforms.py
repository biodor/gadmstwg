from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import RespondentProfile, HouseholdInfo, MembershipOrganization, OtherPersonalInfo, Suggestions, OtherConcern
from .workmodels import WorkRelatedInfo
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
    ('','')
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

class WorkRelatedInfoForm(forms.ModelForm):
    place_ofwork = forms.CharField(label="1. Your place of Work:", max_length=1, required=False)
    place_work_region = forms.CharField(label="Region:", max_length=30)
    place_work_city = forms.CharField(label="City/Municipality:", max_length=30)
    mode_transport = MultiSelectField("1.1. Mode of transportation, going to work and vice versa", MultiSelectField(choices=MODE_TRANSPORT), max_length=500)
    travel_time_form_home = forms.CharField(label="1.2. Travel time from home to work including traffic (not including fieldwork)", widget=forms.RadioSelect(choices=TRAVEL_TIME))
    travel_time_from_work = forms.CharField(label="1.3. Travel time from work to home including traffic (not including fieldwork)", widget=forms.RadioSelect(choices=TRAVEL_TIME))
    amount_transport_fare = forms.CharField(label="1.3. Amount spent for transportation fare (per day) going to work and vice versa:", widget=forms.RadioSelect(choices=AMOUNT_TRANSPORT_FARE))
    years_service = forms.CharField(label="2. Years of service in your agency:", widget=forms.RadioSelect(choices=YEARS_SERVICE))
    number_x_promoted = forms.CharField(label="3. Number of times you have been promoted:", widget=forms.RadioSelect(choices=NUMBER_XPROMOTED))
    attendance_inter_training = forms.CharField(label="4. Attendance to any INTERNATIONAL trainings/seminars/workshops related to your work:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_inter_training = forms.CharField(label=False, widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False)
    #no_inter_training = MultiSelectField("If no, why?", MultiSelectField(choices=NO_ATTENDANCE_TRAINING))
    # NO INTER TRAINING
    no_inter_training = forms.MultipleChoiceField(label=False, widget=forms.CheckboxSelectMultiple,choices=NO_ATTENDANCE_TRAINING)
    no_inter_training_reason = forms.CharField(label="Reason, why?", max_length=1000, required=False)

    attendance_local_training = forms.CharField(label="5. Attendance to any LOCAL trainings/seminars/workshops related to your work in the past 5 year:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_local_training = forms.CharField(label=False,  widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False)
    #NO LOCAL TRAINING
    no_local_training = forms.MultipleChoiceField(label=False, widget=forms.CheckboxSelectMultiple,choices=NO_ATTENDANCE_TRAINING)
    no_local_training_reason = forms.CharField(label=False, max_length=1000, required=False)

    attendance_inter_confer = forms.CharField(label="6. Attendance to any INTERNATIONAL conferences/meetings:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_inter_confer = forms.CharField(label=False, widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False)
    #NO INTER CONFER
    no_inter_confer = forms.MultipleChoiceField(label=False, widget=forms.CheckboxSelectMultiple,choices=NO_ATTENDANCE_TRAINING)
    no_inter_confer_reason = forms.CharField(label="Reason, why?", max_length=1000, required=False)

    attendance_local_confer = forms.CharField(label="7. Attendance to any LOCAL conferences/meetings in the past 3 years:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_local_confer = forms.CharField(label=False, widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False)
    #NO LOCAL CONFER
    no_local_confer = forms.MultipleChoiceField(label=False, widget=forms.CheckboxSelectMultiple,choices=NO_ATTENDANCE_TRAINING)
    no_local_confer_reason = forms.CharField(label="Reason, why?", max_length=1000, required=False)
    rate_technical = forms.CharField(label="8. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Technical Expertise", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_technical_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    rate_people = forms.CharField(label="9. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of People Relations/Management", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_people_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    rate_tranparency = forms.CharField(label="10. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Transparency/Accountability/Integrity", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_tranparency_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    rate_gad = forms.CharField(label="11. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Gender and Development", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_gad_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    gad_training = MultiSelectField("12. GAD - Related Training attended:", MultiSelectField(choices=GAD_TRAINING))
    gad_other_training = forms.CharField(label="Others, please specify", max_length=1000, required=False)
    rate_gender_awareness = forms.CharField(label="13. Rate your level of gender awareness/sensitivity from 1 to 5, with 5 being the highest:", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    experience_sexual_harass = forms.CharField(label="14 Have you personally experienced sexual harassment?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_seek_assistance_codi = forms.CharField(label="Did you ever seek assistance of the Committee on Decorum and Investigation (CODI)?", widget=forms.RadioSelect(choices=YN_CHOICES), required=False)
    yes_satisfied = forms.CharField(label="If yes, are you satisfied with the way they handled the case?", widget=forms.RadioSelect(choices=YN_CHOICES), required=False)
    satisfied_reason = forms.CharField(label="Cite your reason:", max_length=1000, required=False)
    reason_noavail_codi = forms.CharField(label="Reason for not availing CODI:", widget=forms.RadioSelect(choices=REASON_NOT_AVAIL_CODI), required=False)
    other_noavail_reason = forms.CharField(label="Please identify:", max_length=1000, required=False)
    experience_domestic_violence = forms.CharField(label="15. Have you personally experienced domestic violence?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_seek_help = forms.CharField(label="If yes, did you ever seek help?", widget=forms.RadioSelect(choices=YN_CHOICES), required=False)
    domestic_seek_nohelp = forms.CharField(label="Please identify", max_length=1000, required=False)
    yes_towhom = forms.CharField(label="If yes, with whom?", widget=forms.RadioSelect(choices=WHOM_SEEK_HELP), required=False)
    reason_noseek_help = forms.CharField(label="If no, reason for not seeking help:", max_length=1000, required=False)
    iswork_affected = forms.CharField(label="16. Is your work performance affected by these domestic violence and sexual harassment?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_reason = forms.CharField(label="If YES, kindly state your reason?", max_length=1000, required=False)

    class Meta:
        model = WorkRelatedInfo
        fields = '__all__'