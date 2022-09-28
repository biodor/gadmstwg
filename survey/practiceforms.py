from django import forms
from django.contrib.auth.forms import UserCreationForm
from .practicemodel import PracticesConditions
from multiselectfield import MultiSelectField

class PracticesForm(forms.ModelForm):
    YN_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No')
    ]

    YNA_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No'),
        ('N/A', 'N/A')
    ]

    LEAVE_PRIVILEDGES = [
        ('Vacation Leave /Rest & Recreation Break', 'Vacation Leave /Rest & Recreation Break'),
        ('Maternity Leave (Expanded)', 'Maternity Leave (Expanded)'),
        ('Gynecological Leave', 'Gynecological Leave'),
        ('Sick Leave', 'Sick Leave'),
        ('Paternity Leave', 'Paternity Leave'),
        ('Study Leave/Academic/Scholarship Leave', 'Study Leave/Academic/Scholarship Leave'),
        ('Christmas/New Year’s Break', 'Christmas/New Year’s Break'),
        ('Forced Leave/Mandatory Leave', 'Forced Leave/Mandatory Leave'),
        ('Special Privilege Leave', 'Special Privilege Leave'),
        ('Solo Parent Leave', 'Solo Parent Leave'),
        ('Battered Women’s Leave (VAWC Leave)', 'Battered Women’s Leave (VAWC Leave)'),
        ('Rehabilitation Leave', 'Rehabilitation Leave'),
        ('Adoption Leave', 'Adoption Leave'),
        ('Calamity Leave/Emergency Leave', 'Calamity Leave/Emergency Leave'),
        ('Family/Home Visit Leave', 'Family/Home Visit Leave'),
        ('NONE', 'None'),
        ('Others', 'Others')
    ]

    ABSENCES_MONTH = [
        ('0', '0'),
        ('1-2 days', '1-2 days'),
        ('3-4 days', '3-4 days'),
        ('5-6 days', '5-6 days'),
        ('7-8 days', '7-8 days'),
        ('9-10 days', '9-10 days'),
        ('11 days or more', '11 days or more')
    ]

    HEALTH_REASON = [
        ('Schedule for dialysis', 'Schedule for dialysis'),
        ('Medical check-up', 'Medical check-up'),
        ('Others', 'Others'),
        ('','')
    ]

    FAMILY_REASON = [
        ('Attendance to a family member for health reasons', 'Attendance to a family member for health reasons'),
        ('Attendance to children’s needs/activities', 'Attendance to children’s needs/activities'),
        ('Leisure', 'Leisure'),
        ('Others', 'Others'),
        ('', '')
    ]

    OFFICE_REASON = [
        ('Co-worker', 'Co-worker'),
        ('Supervisor', 'Supervisor'),
        ('Others', 'Others'),
        ('', '')
    ]

    FACILITY_REASON = [
        ('I don’t need the facility', 'I don’t need the facility'),
        ('No time to use', 'No time to use'),
        ('Facility is sub-standard', 'Facility is sub-standard'),
        ('Others', 'Others')
    ]

    AVAILED_LOANS = [
        ('GSIS', 'GSIS'),
        ('SSS', 'SSS'),
        ('PAG-IBIG', 'PAG-IBIG'),
        ('PCG/SLAI', 'PCG/SLI'),
        ('AFPMBAI', 'AFBMBAI'),
        ('PNCGPPAI', 'PNCGPPAI'),
        ('Cooperative', 'Cooperative'),
        ('Loan Shark or 5/6', 'Loan Shark or 5/6'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

    REASON_AVAILED_LOANS = [
        ('Housing', 'Housing'),
        ('Education (Personal)', 'Education (Personal)'),
        ('Education (Family members)', 'Education (Family members)'),
        ('Health/Hospitalization', 'Health/Hospitalization'),
        ('Payment for existing loan/s', 'Payment for existing loan/s'),
        ('Business', 'Business'),
        ('Leisure', 'Leisure'),
        ('Others', 'Others'),
        ('','')
    ]

    FINANCIAL_ASSISTANCE = [
        ('Company/Organization', 'Company/Organization'),
        ('Employee Union', 'Employee Union'),
        ('Employee Association', 'Employee Association'),
        ('Others', 'Others')
    ]

    CAUSES_STRESS = [
        ('Family', 'Family'),
        ('financial', 'Financial'),
        ('Supervisor/Manager', 'Supervisor/Manager'),
        ('Workload', 'Workload'),
        ('Work-home distance', 'Work-home distance'),
        ('Co-worker', 'Co-worker'),
        ('Access to Internet', 'Access to Internet'),
        ('Relationship with family members', 'Relationship with family members'),
        ('Delayed compensation', 'Delayed compensation'),
        ('Health of family members (to include members with special needs)',
         'Health of family members (to include members with special needs)'),
        ('Others', 'Others')
    ]

    MANAGE_STRESS = [
        ('Sleeping', 'Sleeping'),
        ('Food', 'Food'),
        ('Alcohol', 'Alcohol'),
        ('Socialization', 'Socialization'),
        ('Recreation with family', 'Recreation with family'),
        ('Online recreation/social media', 'Online recreation/social media'),
        ('Movies', 'Movies'),
        ('Online (i.e. Blogging, vlogging)', 'Online (i.e. Blogging, vlogging)'),
        ('Health and wellness (salon, yoga, gym etc.)', 'Health and wellness (salon, yoga, gym etc.)'),
        ('Hobbies (i.e. shopping, cooking, travel, sports, gardening)',
         'Hobbies (i.e. shopping, cooking, travel, sports, gardening)'),
        ('Health of family members (to include members with special needs)',
         'Health of family members (to include members with special needs)'),
        ('Others', 'Others')
    ]

    SICK_LIFESTYLE = [
        ('Cardiovascular diseases', 'Cardiovascular diseases'),
        ('Stroke', 'Stroke'),
        ('Cancer', 'Cancer'),
        ('Chronic Obstructive Pulmonary Disease', 'Chronic Obstructive Pulmonary Disease'),
        ('Musculoskeletal', 'Musculoskeletal'),
        ('Diabetes', 'Diabetes'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

    SICK_GENETIC = [
        ('Asthma', 'Asthma'),
        ('Cancer', 'Cancer'),
        ('Allergies', 'Allergies'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

    SICK_WORKRELATED = [
        ('Asthma', 'Asthma'),
        ('Vision', 'Vision'),
        ('Psoriasis', 'Psoriasis'),
        ('Hypertension', 'Hypertension'),
        ('Urinary Tract Infection (UTI)', 'Urinary Tract Infection (UTI)'),
        ('Polycystic Ovary Syndrome (PCOS)', 'Polycystic Ovary Syndrome (PCOS)'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

    priviledges_pay = MultiSelectField("1.	Are you aware of the following Leave privileges with pay?", MultiSelectField(choices=LEAVE_PRIVILEDGES))
    others_privpay = forms.CharField(label="Please specify:", required=False, max_length=100)
    availed_leaved = MultiSelectField("1.1.	Have you ever availed the following leaves with pay?", MultiSelectField(choices=LEAVE_PRIVILEDGES))
    others_availeaved = forms.CharField(label="Please specify:", required=False, max_length=100)
    number_absences_mo = forms.CharField(label="2.	Usual number of ABSENCES incurred in a month:", required=False, widget=forms.RadioSelect(choices=ABSENCES_MONTH))
    reason_absent_health = MultiSelectField("2.1.	Usual reason of ABSENCES: HEALTH", MultiSelectField(choices=HEALTH_REASON), null=True, blank=True)
    other_reason_absent_health = forms.CharField(label="Others", max_length=300, required=False)
    reason_absent_family = MultiSelectField("2.2.	Usual reason of ABSENCES: FAMILY (Immediate)", MultiSelectField(choices=FAMILY_REASON), null=True, blank=True)
    other_reason_absent_family = forms.CharField(label="Others", max_length=300)
    reason_absent_office = MultiSelectField("2.3.	Usual reason of ABSENCES: Inter-personal office relations", MultiSelectField(choices=OFFICE_REASON), null=True, blank=True)
    other_reason_absent_office = forms.CharField(label="Others", max_length=300)
    number_tardines_mo = forms.CharField(label="2.2. Usual number of TARDINESS incurred in a month", widget=forms.RadioSelect(choices=ABSENCES_MONTH))
    reason_tardines_health = MultiSelectField("2.1.	Usual reason of TARDINESS: HEALTH", MultiSelectField(choices=HEALTH_REASON), null=True, blank=True)
    other_reason_tardines_health = forms.CharField(label="Others", max_length=300)
    reason_tardines_family = MultiSelectField("2.2.	Usual reason of TARDINESS: FAMILY (Immediate)", MultiSelectField(choices=FAMILY_REASON), null=True, blank=True)
    other_reason_tardines_family = forms.CharField(label="Others", max_length=300)
    reason_tardines_office = MultiSelectField("2.3.	Usual reason of TARDINESS: Inter-personal office relations", MultiSelectField(choices=OFFICE_REASON), null=True, blank=True)
    other_reason_tardines_office = forms.CharField(label="Others", max_length=300)
    number_undertime_mo = forms.CharField(label="2.3. Usual number of UNDERTIME incurred in a month", widget=forms.RadioSelect(choices=ABSENCES_MONTH))
    reason_undertime_health = MultiSelectField("2.1. Usual reason of UNDERTIME: HEALTH", MultiSelectField(choices=HEALTH_REASON), null=True, blank=True)
    other_reason_undertime_health = forms.CharField(label="Others", max_length=300)
    reason_undertime_family = MultiSelectField("2.2. Usual reason of UNDERTIME: FAMILY (Immediate)", MultiSelectField(choices=FAMILY_REASON), null=True, blank=True)
    other_reason_undertime_family = forms.CharField(label="Others", max_length=300)
    reason_undertime_office = MultiSelectField("2.3. Usual reason of TARDINESS: Inter-personal office relations", MultiSelectField(choices=OFFICE_REASON), null=True, blank=True)
    other_reason_undertime_office = forms.CharField(label="Others)", max_length=300)
    facility_nursing = forms.CharField(label="5. Does your organization provide Nursing Room/Lactation Station facilities?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_nursing_utilized = forms.CharField(label="5.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YNA_CHOICES))
    facility_nursing_utilized_satisfied = forms.CharField(label="5.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_nursing_utilized_satisfied_yes_reason = forms.CharField(label="5.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_nursing_utilized_satisfied_no_reason = forms.CharField(label="5.2.2. No, Kindly state your reasons", max_length=300)
    facility_nursing_utilized_no_reason = MultiSelectField("5.3.Reason of not utilizing the facility:", MultiSelectField(choices=FACILITY_REASON))
    facility_nursing_others = forms.CharField(label="Please specify:", max_length=1000)
    facility_daycare = forms.CharField(label="6. Does your organization provide Day Care/Kiddie Room/Child Minding facilities?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_daycare_utilized = forms.CharField(label="6.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YNA_CHOICES))
    facility_daycare_utilized_satisfied = forms.CharField(label="6.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_daycare_utilized_satisfied_yes_reason = forms.CharField(label="6.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_daycare_utilized_satisfied_no_reason = forms.CharField(label="6.2.2. No, Kindly state your reasons", max_length=300)
    facility_daycare_utilized_no_reason = MultiSelectField("6.3. Reason of not utilizing the facility:",MultiSelectField(choices=FACILITY_REASON))
    facility_daycare_others = forms.CharField(label="Please specify:", max_length=1000)
    facility_prayer = forms.CharField(label="7.	Does your organization provide Prayer/Worship/Chapel facilities?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_prayer_utilized = forms.CharField(label="7.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YNA_CHOICES))
    facility_prayer_utilized_satisfied = forms.CharField(label="7.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_prayer_utilized_satisfied_yes_reason = forms.CharField(label="7.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_prayer_utilized_satisfied_no_reason = forms.CharField(label="7.2.2. No, Kindly state your reasons", max_length=300)
    facility_prayer_utilized_no_reason = MultiSelectField("7.3. Reason of not utilizing the facility:", MultiSelectField(choices=FACILITY_REASON))
    facility_prayer_others = forms.CharField(label="Please specify:", max_length=1000)
    facility_medical = forms.CharField(label="8. Does your organization provide Medical or Dental Clinic?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_medical_utilized = forms.CharField(label="8.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_medical_utilized_satisfied = forms.CharField(label="8.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_medical_utilized_satisfied_yes_reason = forms.CharField(label="8.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_medical_utilized_satisfied_no_reason = forms.CharField(label="8.2.2. No, Kindly state your reasons", max_length=300)
    facility_medical_utilized_no_reason = MultiSelectField("8.3. Reason of not utilizing the facility:", MultiSelectField(choices=FACILITY_REASON))
    facility_medical_others = forms.CharField(label="Please specify:", max_length=1000)
    facility_recreation = forms.CharField(label="9.	Does your organization provide Recreation facilities (i.e. gym, wellness center, etc.)?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_recreation_utilized = forms.CharField(label="9.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_recreation_utilized_satisfied = forms.CharField(label="9.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_recreation_utilized_satisfied_yes_reason = forms.CharField(label="9.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_recreation_utilized_satisfied_no_reason = forms.CharField(label="9.2.2. No, Kindly state your reasons", max_length=300)
    facility_recreation_utilized_no_reason = MultiSelectField("9.3. Reason of not utilizing the facility:",MultiSelectField(choices=FACILITY_REASON), null=True, blank=True)
    facility_recreation_others = forms.CharField(label="Please specify:", max_length=1000)
    other_facility = forms.CharField(label="10.	Other available facility for employee:", max_length=1000)
    loans_availed = MultiSelectField("11.	Have you availed loans from any of the following?", MultiSelectField(choices=AVAILED_LOANS), null=True, blank=True)
    other_loans_availed = forms.CharField(label="Others", max_length=500)
    reason_loans_availed = MultiSelectField("11.1.	Reasons for availing", MultiSelectField(choices=REASON_AVAILED_LOANS), null=True, blank=True)
    other_loans_availed_reason = forms.CharField(label="Others", max_length=500)
    financial_assitance = forms.CharField(label="12.	Is there a financial assistance available in your organization?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_identified_financial_assitance = MultiSelectField("12.1. If yes, identify", MultiSelectField(choices=FINANCIAL_ASSISTANCE))
    other_financial_assist = forms.CharField(label="Please specify:", max_length=1000)
    been_benificiary_financial_assist = forms.CharField(label="12.1.	Have you ever been a beneficiary of this financial assistance?", widget=forms.RadioSelect(choices=YN_CHOICES))
    experience_negative_stress = forms.CharField(label="13.	Have you ever experienced negative stress?", widget=forms.RadioSelect(choices=YN_CHOICES))
    causes_negative_stress = MultiSelectField("13.1. If Yes, what are the causes?", MultiSelectField(choices=CAUSES_STRESS), null=True, blank=True)
    other_causes_stress = forms.CharField(label="13.1.1. Others", max_length=300)
    how_manage_stress = MultiSelectField("13.2.	How do you manage stress?", MultiSelectField(choices=MANAGE_STRESS), null=True, blank=True)
    other_how_manage_stress = forms.CharField(label="13.1.2. Others", max_length=300)
    sickness_lifestyle = MultiSelectField("14. Current Sickness: 1. Lifestyle", MultiSelectField(choices=SICK_LIFESTYLE), null=True, blank=True)
    other_sick_lifestyle = forms.CharField(label="14.1.1. Others", max_length=300)
    sickness_genetic = MultiSelectField("14. Current Sickness: 2. Genetic/Congenital", MultiSelectField(choices=SICK_GENETIC), null=True, blank=True)
    other_sick_genetic = forms.CharField(label="14.2.1. Others", max_length=300)
    sickness_workrelated = MultiSelectField("14. Current Sickness: 3. Work-related", MultiSelectField(choices=SICK_WORKRELATED), null=True, blank=True)
    other_sick_workrelated = forms.CharField(label="14.3.1. Others", max_length=300)
    mental_health = forms.CharField(label="15. Mental Health", widget=forms.RadioSelect(choices=YN_CHOICES))
    seek_professional = forms.CharField(label="15.1. If yes, did you ever seek professional help?", widget=forms.RadioSelect(choices=YN_CHOICES))
    no_seek_professional = forms.CharField(label="15.1.1. Kindly state your reasons", max_length=500)
    yes_seek_professional = forms.CharField(label="15.2.	If yes, did you have or are you taking medication/attending counselling?", widget=forms.RadioSelect(choices=YN_CHOICES))
    no_seek_professional_nomedication = forms.CharField(label="Kindly state your reason:", max_length=500)

    class Meta:
        model = PracticesConditions
        fields = '__all__'

