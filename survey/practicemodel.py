# from django.db import models
# from django.forms import ModelForm
# from django.utils import timezone
# from django.contrib.auth.models import User
# from django.urls import reverse
# from multiselectfield import MultiSelectField
#
# YN_CHOICES = [
#     ('Yes', 'Yes'),
#     ('No', 'No')
# ]
#
# LEAVE_PRIVILEDGES = [
#     ('Vacation Leave /Rest & Recreation Break', 'Vacation Leave /Rest & Recreation Break'),
#     ('Maternity Leave (Expanded)', 'Maternity Leave (Expanded)'),
#     ('Gynecological Leave', 'Gynecological Leave'),
#     ('Sick Leave', 'Sick Leave'),
#     ('Paternity Leave', 'Paternity Leave'),
#     ('Study Leave/Academic/Scholarship Leave', 'Study Leave/Academic/Scholarship Leave'),
#     ('Christmas/New Year’s Break', 'Christmas/New Year’s Break'),
#     ('Forced Leave/Mandatory Leave', 'Forced Leave/Mandatory Leave'),
#     ('Special Privilege Leave', 'Special Privilege Leave'),
#     ('Solo Parent Leave', 'Solo Parent Leave'),
#     ('Battered Women’s Leave (VAWC Leave)','Battered Women’s Leave (VAWC Leave)'),
#     ('Rehabilitation Leave', 'Rehabilitation Leave'),
#     ('Adoption Leave', 'Adoption Leave'),
#     ('Calamity Leave/Emergency Leave', 'Calamity Leave/Emergency Leave'),
#     ('Family/Home Visit Leave', 'Family/Home Visit Leave'),
#     ('NONE', 'None'),
#     ('Others', 'Others')
# ]
#
# ABSENCES_MONTH = [
#     ('0', '0'),
#     ('1-2 days', '1-2 days'),
#     ('3-4 days', '3-4 days'),
#     ('5-6 days', '5-6 days'),
#     ('7-8 days', '7-8 days'),
#     ('9-10 days', '9-10 days'),
#     ('11 days or more', '11 days or more')
# ]
#
# HEALTH_REASON = [
#     ('Schedule for dialysis', 'Schedule for dialysis'),
#     ('Medical check-up', 'Medical check-up'),
#     ('Others', 'Others'),
#     ('', '')
# ]
#
# FAMILY_REASON = [
#     ('Attendance to a family member for health reasons', 'Attendance to a family member for health reasons'),
#     ('Attendance to children’s needs/activities', 'Attendance to children’s needs/activities'),
#     ('Leisure', 'Leisure'),
#     ('Others', 'Others'),
#     ('', '')
# ]
#
# OFFICE_REASON = [
#     ('Co-worker', 'Co-worker'),
#     ('Supervisor', 'Supervisor'),
#     ('Others', 'Others'),
#     ('', '')
# ]
#
# FACILITY_REASON = [
#     ('I don’t need the facility', 'I don’t need the facility'),
#     ('No time to use', 'No time to use'),
#     ('Facility is sub-standard', 'Facility is sub-standard'),
#     ('Others', 'Others')
# ]
#
# AVAILED_LOANS = [
#     ('GSIS', 'GSIS'),
#     ('SSS', 'SSS'),
#     ('PAG-IBIG', 'PAG-IBIG'),
#     ('PCG/SLAI', 'PCG/SLI'),
#     ('AFPMBAI', 'AFBMBAI'),
#     ('PNCGPPAI', 'PNCGPPAI'),
#     ('Cooperative', 'Cooperative'),
#     ('Loan Shark or 5/6', 'Loan Shark or 5/6'),
#     ('None', 'None'),
#     ('Others', 'Others')
# ]
#
# REASON_AVAILED_LOANS = [
#     ('Housing', 'Housing'),
#     ('Education (Personal)', 'Education (Personal)'),
#     ('Education (Family members)', 'Education (Family members)'),
#     ('Health/Hospitalization', 'Health/Hospitalization'),
#     ('Payment for existing loan/s', 'Payment for existing loan/s'),
#     ('Business', 'Business'),
#     ('Leisure', 'Leisure'),
#     ('Others', 'Others'),
#     ('', '')
# ]
#
# FINANCIAL_ASSISTANCE = [
#     ('Company/Organization', 'Company/Organization'),
#     ('Employee Union', 'Employee Union'),
#     ('Employee Association', 'Employee Association'),
#     ('Others', 'Others')
# ]
#
# CAUSES_STRESS = [
#     ('Family', 'Family'),
#     ('financial', 'Financial'),
#     ('Supervisor/Manager', 'Supervisor/Manager'),
#     ('Workload', 'Workload'),
#     ('Work-home distance', 'Work-home distance'),
#     ('Co-worker', 'Co-worker'),
#     ('Access to Internet', 'Access to Internet'),
#     ('Relationship with family members', 'Relationship with family members'),
#     ('Delayed compensation', 'Delayed compensation'),
#     ('Health of family members (to include members with special needs)', 'Health of family members (to include members with special needs)'),
#     ('Others', 'Others')
# ]
#
# MANAGE_STRESS = [
#     ('Sleeping', 'Sleeping'),
#     ('Food', 'Food'),
#     ('Alcohol', 'Alcohol'),
#     ('Socialization', 'Socialization'),
#     ('Recreation with family', 'Recreation with family'),
#     ('Online recreation/social media', 'Online recreation/social media'),
#     ('Movies', 'Movies'),
#     ('Online (i.e. Blogging, vlogging)' , 'Online (i.e. Blogging, vlogging)'),
#     ('Health and wellness (salon, yoga, gym etc.)', 'Health and wellness (salon, yoga, gym etc.)'),
#     ('Hobbies (i.e. shopping, cooking, travel, sports, gardening)', 'Hobbies (i.e. shopping, cooking, travel, sports, gardening)'),
#     ('Health of family members (to include members with special needs)', 'Health of family members (to include members with special needs)'),
#     ('Others', 'Others')
# ]
#
# SICK_LIFESTYLE = [
#     ('Cardiovascular diseases', 'Cardiovascular diseases'),
#     ('Stroke', 'Stroke'),
#     ('Cancer', 'Cancer'),
#     ('Chronic Obstructive Pulmonary Disease', 'Chronic Obstructive Pulmonary Disease'),
#     ('Musculoskeletal', 'Musculoskeletal'),
#     ('Diabetes', 'Diabetes'),
#     ('None', 'None'),
#     ('Others', 'Others')
# ]
#
# SICK_GENETIC = [
#     ('Asthma', 'Asthma'),
#     ('Cancer', 'Cancer'),
#     ('Allergies', 'Allergies'),
#     ('None', 'None'),
#     ('Others', 'Others')
# ]
#
# SICK_WORKRELATED = [
#     ('Asthma', 'Asthma'),
#     ('Vision', 'Vision'),
#     ('Psoriasis', 'Psoriasis'),
#     ('Hypertension', 'Hypertension'),
#     ('Urinary Tract Infection (UTI)', 'Urinary Tract Infection (UTI)'),
#     ('Polycystic Ovary Syndrome (PCOS)', 'Polycystic Ovary Syndrome (PCOS)'),
#     ('None', 'None'),
#     ('Others', 'Others')
# ]
#
# class PracticesConditions(models.Model):
#     priviledges_pay = MultiSelectField("1.	Are you aware of the following Leave privileges with pay?",
#                                        max_length=500, choices=LEAVE_PRIVILEDGES)
#     author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
#     status = models.IntegerField(blank=True, null=True)
#     others_privpay = models.CharField("Please specify:", max_length=100, blank=True, null=True)
#     availed_leaved = MultiSelectField("1.1.	Have you ever availed the following leaves with pay?",
#                                       max_length=500, choices=LEAVE_PRIVILEDGES)
#     others_availeaved = models.CharField("Please specify:", max_length=100, blank=True, null=True)
#     number_absences_mo = models.CharField("2.	Usual number of ABCENSES incurred in a month:",
#                                           choices=ABSENCES_MONTH, max_length=120)
#     reason_absent_health = MultiSelectField("2.1.	Usual reason of ABSENCES: HEALTH", choices=HEALTH_REASON, max_length=300)
#     other_reason_absent_health = models.CharField("Others", max_length=300)
#     reason_absent_family = MultiSelectField("2.2.	Usual reason of ABSENCES: FAMILY (Immediate)",
#                                             choices=FAMILY_REASON, max_length=300)
#     other_reason_absent_family = models.CharField("Others", max_length=300)
#     reason_absent_office = MultiSelectField("2.3.	Usual reason of ABSENCES: Inter-personal office relations",
#                                             choices=OFFICE_REASON, max_length=300)
#     other_reason_absent_office = models.CharField("Others", max_length=300)
#     number_tardines_mo = models.CharField("2.2. Usual number of TARDINESS incurred in a month",
#                                           choices=ABSENCES_MONTH, max_length=120)
#     reason_tardines_health = MultiSelectField("2.1.	Usual reason of TARDINESS: HEALTH",
#                                               choices=HEALTH_REASON, max_length=300)
#     other_reason_tardines_health = models.CharField("Others", max_length=300)
#     reason_tardines_family = MultiSelectField("2.2.	Usual reason of TARDINESS: FAMILY (Immediate)",
#                                               choices=FAMILY_REASON, max_length=300)
#     other_reason_tardines_family = models.CharField("Others", max_length=300)
#     reason_tardines_office = MultiSelectField("2.3.	Usual reason of TARDINESS: Inter-personal office relations",
#                                               choices=OFFICE_REASON, max_length=300)
#     other_reason_tardines_office = models.CharField("Others", max_length=300)
#     number_undertime_mo = models.CharField("2.3. Usual number of UNDERTIME incurred in a month", choices=ABSENCES_MONTH, max_length=120)
#     reason_undertime_health = MultiSelectField("2.1.	Usual reason of UNDERTIME: HEALTH", choices=HEALTH_REASON, max_length=300)
#     other_reason_undertime_health = models.CharField("Others", max_length=300)
#     reason_undertime_family = MultiSelectField("2.2.	Usual reason of UNDERTIME: FAMILY (Immediate)",
#                                                choices=FAMILY_REASON, max_length=300)
#     other_reason_undertime_family = models.CharField("Others", max_length=300)
#     reason_undertime_office = MultiSelectField("2.3.	Usual reason of TARDINESS: Inter-personal office relations",
#                                                choices=OFFICE_REASON, max_length=300)
#     other_reason_undertime_office = models.CharField("Others)", max_length=300)
#     facility_nursing = models.CharField("5.	Does your organization provide Nursing Room/Lactation Station facilities?",
#                                         choices=YN_CHOICES, max_length=30)
#     facility_nursing_utilized = models.CharField("5.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
#     facility_nursing_utilized_satisfied = models.CharField("5.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
#     facility_nursing_utilized_satisfied_yes_reason = models.CharField("5.2.1. Yes, Kindly state your reasons", max_length=300)
#     facility_nursing_utilized_satisfied_no_reason = models.CharField("5.2.2. No, Kindly state your reasons", max_length=300)
#     facility_nursing_utilized_no_reason = MultiSelectField("5.3.Reason of not utilizing the facility:",
#                                                            choices=FACILITY_REASON, max_length=500)
#     facility_nursing_others = models.CharField("Please specify:", max_length=1000)
#     facility_daycare = models.CharField("6.	Does your organization provide Day Care/Kiddie Room/Child Minding facilities?",
#                                         choices=YN_CHOICES, max_length=30)
#     facility_daycare_utilized = models.CharField("6.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
#     facility_daycare_utilized_satisfied = models.CharField("6.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
#     facility_daycare_utilized_satisfied_yes_reason = models.CharField("6.2.1. Yes, Kindly state your reasons", max_length=300)
#     facility_daycare_utilized_satisfied_no_reason = models.CharField("6.2.2. No, Kindly state your reasons", max_length=300)
#     facility_daycare_utilized_no_reason = MultiSelectField("6.3. Reason of not utilizing the facility:",
#                                                            choices=FACILITY_REASON, max_length=500)
#     facility_daycare_others = models.CharField("Please specify:", max_length=1000)
#     facility_prayer = models.CharField("7.	Does your organization provide Prayer Room facilities?", choices=YN_CHOICES, max_length=30)
#     facility_prayer_utilized = models.CharField("7.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
#     facility_prayer_utilized_satisfied = models.CharField("7.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
#     facility_prayer_utilized_satisfied_yes_reason = models.CharField("7.2.1. Yes, Kindly state your reasons", max_length=300)
#     facility_prayer_utilized_satisfied_no_reason = models.CharField("7.2.2. No, Kindly state your reasons", max_length=300)
#     facility_prayer_utilized_no_reason = MultiSelectField("7.3. Reason of not utilizing the facility:",
#                                                           choices=FACILITY_REASON, max_length=500)
#     facility_prayer_others = models.CharField("Please specify:", max_length=1000)
#     facility_medical = models.CharField("8.	Does your organization provide Medical or Dental Clinic?",
#                                         choices=YN_CHOICES, max_length=30)
#     facility_medical_utilized = models.CharField("8.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
#     facility_medical_utilized_satisfied = models.CharField("8.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
#     facility_medical_utilized_satisfied_yes_reason = models.CharField("8.2.1. Yes, Kindly state your reasons", max_length=300)
#     facility_medical_utilized_satisfied_no_reason = models.CharField("8.2.2. No, Kindly state your reasons", max_length=300)
#     facility_medical_utilized_no_reason = MultiSelectField("8.3. Reason of not utilizing the facility:",
#                                                            choices=FACILITY_REASON, max_length=500)
#     facility_medical_others = models.CharField("Please specify:", max_length=1000)
#     facility_recreation = models.CharField("9.	Does your organization provide Recreation facilities (i.e. gym, wellness center, etc.)?",
#                                            choices=YN_CHOICES, max_length=30)
#     facility_recreation_utilized = models.CharField("9.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
#     facility_recreation_utilized_satisfied = models.CharField("9.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
#     facility_recreation_utilized_satisfied_yes_reason = models.CharField("9.2.1. Yes, Kindly state your reasons", max_length=300)
#     facility_recreation_utilized_satisfied_no_reason = models.CharField("9.2.2. No, Kindly state your reasons", max_length=300)
#     facility_recreation_utilized_no_reason = MultiSelectField("9.3. Reason of not utilizing the facility:",
#                                                               choices=FACILITY_REASON, max_length=500)
#     facility_recreation_others = models.CharField("Please specify:", max_length=1000)
#     other_facility = models.CharField("10.	Other available facility for employee:", max_length=1000)
#
#     loans_availed = MultiSelectField("11.	Have you availed loans from any of the following?", choices=AVAILED_LOANS, max_length=500)
#     other_loans_availed = models.CharField("Others", max_length=500)
#     reason_loans_availed = MultiSelectField("11.1.	Reasons for availing", choices=REASON_AVAILED_LOANS, max_length=500)
#     other_loans_availed_reason = models.CharField("Others", max_length=500)
#     financial_assitance = models.CharField("12.	Is there a financial assistance available in your organization?",
#                                            choices=YN_CHOICES, max_length=30)
#     yes_identified_financial_assitance = MultiSelectField("12.1. If yes, identify", choices=FINANCIAL_ASSISTANCE, max_length=300)
#     other_financial_assist = models.CharField("Please specify:", max_length=1000)
#     been_benificiary_financial_assist = models.CharField("12.1.	Have you ever been a beneficiary of this financial assistance?",
#                                                          choices=YN_CHOICES, max_length=30)
#     experience_negative_stress = models.CharField("13.	Have you ever experienced negative stress?", choices=YN_CHOICES, max_length=30)
#     causes_negative_stress = MultiSelectField("13.1. If Yes, what are the causes?", choices=CAUSES_STRESS, max_length=1000)
#     other_causes_stress = models.CharField("13.1.1. Others", max_length=300)
#     how_manage_stress = MultiSelectField("13.2.	How do you manage stress?", choices=MANAGE_STRESS, max_length=500)
#     other_how_manage_stress = models.CharField("13.1.2. Others", max_length=300)
#     sickness_lifestyle = MultiSelectField("14. Current Sickness: 1. Lifestyle", choices=SICK_LIFESTYLE,  max_length=500)
#     other_sick_lifestyle = models.CharField("14.1.1. Others", max_length=300)
#     sickness_genetic = MultiSelectField("14. Current Sickness: 2. Genetic/Congenital", choices=SICK_GENETIC, max_length=500)
#     other_sick_genetic = models.CharField("14.2.1. Others", max_length=300)
#     sickness_workrelated = MultiSelectField("14.	Current Sickness: 3. Work-related", choices=SICK_WORKRELATED, max_length=500)
#     other_sick_workrelated = models.CharField("14.3.1. Others", max_length=300)
#     mental_health = models.CharField("15. Mental Health", choices=YN_CHOICES, max_length=30)
#     seek_professional = models.CharField("15.1.	If yes, did you ever seek professional help?", choices=YN_CHOICES, max_length=1000)
#     no_seek_professional = models.CharField("15.1.1. Kindly state your reasons", max_length=500)
#     yes_seek_professional = models.CharField("15.2.	If yes, did you have or are you taking medication/attending counselling?",
#                                              choices=YN_CHOICES, max_length=30)
#     no_seek_professional_nomedication = models.CharField("Kindly state your reason:", max_length=500)
#     created = models.DateTimeField("Creation date", auto_now_add=True)
#     updated = models.DateTimeField("Update date", auto_now=True)
#
#     def __str__(self):
#         return f'{self.author} {self.created}'
#
