from django.db import models
from django.forms import ModelForm
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from multiselectfield import MultiSelectField
from PIL import PdfImagePlugin
REGION= [
    ("",""),
("15","AUTONOMOUS REGION IN MUSLIM MINDANAO (ARMM)"),
    ("14","CORDILLERA ADMINISTRATIVE REGION (CAR)"),
    ("13","NATIONAL CAPITAL REGION (NCR)"),
     ("01","REGION I (ILOCOS REGION)"),
      ("02","REGION II (CAGAYAN VALLEY)"),
       ("03","REGION III (CENTRAL LUZON)"),
        ("04","REGION IV-A (CALABARZON)"),
         ("17","REGION IV-B (MIMAROPA)"),
          ("09","REGION IX (ZAMBOANGA PENINSULA)"),
           ("05", "REGION V (BICOL REGION)"),
            ("06", "REGION VI (WESTERN VISAYAS)"),
             ("07", "REGION VII (CENTRAL VISAYAS)"),
              ("08", "REGION VIII (EASTERN VISAYAS)"),
               ("10", "REGION X (NORTHERN MINDANAO)"),
                ("11", "REGION XI (DAVAO REGION)"),
                 ("12", "REGION XII (SOCCSKSARGEN)"),
                  ("16", "REGION XIII (Caraga)")
]

PROVINCE= [
    ("", ""),
    ("1401", "ABRA"),
    ("1602", "AGUSAN DEL NORTE"),
    ("1603", "AGUSAN DEL SUR"),
    ("0604", "AKLAN"),
    ("0505",  "ALBAY"),
    ("0606",  "ANTIQUE"),
    ("1481",  "APAYAO"),
    ("0377",  "AURORA"),
    ("1507",  "BASILAN"),
    ("0308",  "BATAAN"),
    ("0209",  "BATANES"),
    ("0410",  "BATANGAS"),
    ("1411",  "BENGUET"),
    ("0878",  "BILIRAN"),
    ("0712",  "BOHOL"),
    ("1013",  "BUKIDNON"),
    ("0314",  "BULACAN"),
    ("0215",  "CAGAYAN"),
    ("0516",  "CAMARINES NORTE"),
    ("0517",  "CAMARINES SUR"),
    ("1018",  "CAMIGUIN"),
    ("0619",  "CAPIZ"),
    ("0722",  "CEBU"),
    ("0997",  "CITY OF ISABELA"),
    ("1339",  "CITY OF MANILA"),
    ("1182",  "COMPOSTELA VALLEY"),
    ("1247",  "COTABATO (NORTH COTABATO)"),
    ("1298",  "COTABATO CITY"),
    ("1123",  "DAVAO DEL NORTE"),
    ("1124",  "DAVAO DEL SUR"),
    ("1186",  "DAVAO OCCIDENTAL"),
    ("1125",  "DAVAO ORIENTAL"),
    ("1685",  "DINAGAT ISLANDS"),
    ("0826",  "EASTERN SAMAR"),
    ("0679",  "GUIMARAS"),
    ("1427",  "IFUGAO"),("0128",  "ILOCOS NORTE"),
    ("0129",  "ILOCOS SUR"),
    ("0630",  "ILOILO"),
    ("0231",  "ISABELA"),
    ("1432",  "KALINGA"),
    ("0133",  "LA UNION"),
    ("0434",  "LAGUNA"),
    ("1035",  "LANAO DEL NORTE"),
    ("1536",  "LANAO DEL SUR"),
    ("0837",  "LEYTE"),
    ("1538",  "MAGUINDANAO"),
    ("1740",  "MARINDUQUE"),
    ("0541",  "MASBATE"),
    ("1042",  "MISAMIS OCCIDENTAL"),
    ("1043",  "MISAMIS ORIENTAL"),
    ("1444",  "MOUNTAIN PROVINCE"),
    ("1339",  "NCR,  CITY OF MANILA,  FIRST DISTRICT"),
    ("1376",  "NCR,  FOURTH DISTRICT"),
    ("1374",  "NCR,  SECOND DISTRICT"),
    ("1375",  "NCR,  THIRD DISTRICT"),
    ("0645",  "NEGROS OCCIDENTAL"),
    ("0746",  "NEGROS ORIENTAL"),
    ("0848",  "NORTHERN SAMAR"),
    ("0349",  "NUEVA ECIJA"),
    ("0250",  "NUEVA VIZCAYA"),
    ("1751",  "OCCIDENTAL MINDORO"),
    ("1752",  "ORIENTAL MINDORO"),
    ("1753",  "PALAWAN"),
    ("0354",  "PAMPANGA"),
    ("0155",  "PANGASINAN"),
    ("0456",  "QUEZON"),
    ("0257",  "QUIRINO"),
    ("0458",  "RIZAL"),
    ("1759",  "ROMBLON"),
    ("0860",  "SAMAR (WESTERN SAMAR)"),
    ("1280",  "SARANGANI"),
    ("0761",  "SIQUIJOR"),
    ("0562",  "SORSOGON"),
    ("1263",  "SOUTH COTABATO"),
    ("0864",  "SOUTHERN LEYTE"),
    ("1265",  "SULTAN KUDARAT"),
    ("1566",  "SULU"),
    ("1667",  "SURIGAO DEL NORTE"),
    ("1668",  "SURIGAO DEL SUR"),
    ("0369",  "TARLAC"),
    ("1570",  "TAWI-TAWI"),
    ("0371",  "ZAMBALES"),
    ("0972",  "ZAMBOANGA DEL NORTE"),
    ("0973",  "ZAMBOANGA DEL SUR"),
    ("0983",  "ZAMBOANGA SIBUGAY")
]

AGENCY_CHOICES = [
    ("", ""),
    ('CPA', 'Cebu Port Authority'),
    ('MARINA', 'Maritime Industry Authority'),
    ('PCG', 'Philippine Coast Guard'),
    ('PPA', 'Philippine Ports Authority'),
    ('PMMA', 'Philippine Maritime Merchant Academy')
]

class Post(models.Model):
    Btitle = models.CharField("Title:", max_length=100, default="No tile")
    content = models.TextField()
    pdf = models.FileField(upload_to='pdfs')
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.Btitle

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})

AGE_CHOICES = (
    ('20-30 years old', '20-30 years old'),
    ('31-40 years old', '31-40 years old'),
    ('41-50 years old', '41-50 years old'),
    ('51-60 years old', '51-60 years old'),
    ('61 years old and above', '61 years old and above')
)

SEX_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female')
)

CIVIL_STATUS = (
    ('Single', 'Single'),
    ('Married', 'Married'),
    ('Widow/er', 'Widow/er'),
    ('Annulled', 'Annulled'),
    ('Legally Separated', 'Legally Separated')
)

HIGHEST_EDUC_ATTAINED = (
    ('Doctorate Degree', 'Doctorate Degree'),
    ('Masters Degree', 'Masters Degree'),
    ('College Graduate', 'College Graduate'),
    ('Undergraduate', 'Undergraduate'),
    ('Vocational/Technical', 'Vocational/Technical'),
    ('Secondary', 'Secondary')
)

SALARY_LEVEL = (
    ('Executive/Managerial  SG 26-30        CAPT - ADM', 'Executive/Managerial  SG 26-30        CAPT - ADM'),
    ('Supervisory           SG 18-25        LTJG - CDR', 'Supervisory           SG 18-25        LTJG - CDR'),
    ('Technical             SG 10-17        ENS - CCGM', 'Technical             SG 10-17        ENS - CCGM'),
    ('Administrative/Clerical SG 9 and below', 'Administrative/Clerical SG 9 and below'),
)

GROSS_ALLOWANCE = (
    ('Above PhP 150,000.00', 'Above PhP 150,000.00'),
    ('PhP 149,100.00 - PhP 100,000.00', 'PhP 149,100.00 - PhP 100,000.00'),
    ('PhP 99,000.00 - PhP 50,000.00', 'PhP 99,000.00 - PhP 50,000.00'),
    ('PhP 49,000.00 - PhP 20,000.00', 'PhP 49,000.00 - PhP 20,000.00'),
    ('Below PhP 20,000.00', 'Below PhP 20,000.00')
)

EMPLOY_STATUS = (
    ('Presidential Appointee', 'Presidential Appointee'),
    ('Co-Terminus', 'Co-Terminus'),
    ('Permanent', 'Permanent'),
    ('Temporary', 'Temporary'),
    ('Contractual', 'Contractual'),
    ('Casual', 'Casual'),
    ('Job Order', 'Job Order'),
    ('Technical Assistant/Consultant', 'Technical Assistant/Consultant')
)

REASON_STATUS = (
    ('Lack of Vacancy (Permanent)', 'Lack of Vacancy (Permanent)'),
    ('Limited units/credential required for the board exam', 'Limited units/credential required for the board exam'),
    ('No CS eligibility', 'No CS eligibility'),
    ('Others', 'Others'),
)

YES_NO = [
    ('YES', 'YES'),
    ('NO', 'NO')
]


class RespondentProfile(models.Model):
    agency = models.CharField(choices=AGENCY_CHOICES, max_length=250, null=True, blank=True)
    name = models.CharField("Name", max_length=150)
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    position = models.CharField("Position/Rank", max_length=150)
    age = models.CharField('Age',choices=AGE_CHOICES, max_length=60)
    sex = models.CharField('Sex', choices=SEX_CHOICES, max_length=12)
    civil_status = models.CharField('Civil Status', choices=CIVIL_STATUS, max_length=60)
    pursuant = models.CharField("Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000 (RA 8972), please answer the following items:", max_length=1, blank=True, null=True)
    indigenous = models.CharField("Are you a member of any indigenous group?", choices=YES_NO, max_length=12)
    indigenous_specify = models.CharField("Please specify:", max_length=250, null=True, blank=True)
    disability = models.CharField("Are you a Person With Disability?", choices=YES_NO, max_length=12)
    disability_specify = models.CharField("Please specify ID Number:", max_length=250,  null=True, blank=True)
    soloparent = models.CharField("Are you a SOLO Parent?", choices=YES_NO, max_length=12)
    soloparent_specify = models.CharField("Please specify ID Number:", max_length=250, null=True, blank=True)
    religion = models.CharField("Religion", max_length=100)
    res_region = models.CharField("Region", max_length=250)
    res_province = models.CharField("Province", max_length=250)
    res_city = models.CharField("City", max_length=120)
    highest_educ = models.CharField("Highest Educational Attained", choices=HIGHEST_EDUC_ATTAINED, max_length=120)
    educ_program = models.CharField("Specify program/course/year", max_length=120, null=True, blank=True)
    salary_grade = models.CharField('Employment Level/Salary Grade', choices=SALARY_LEVEL, max_length=250)
    gross_montly_allow = models.CharField('Gross Monthly Salary(Including Allowance/s)', choices=GROSS_ALLOWANCE, max_length=120)
    employment_status = models.CharField('Employment Status', choices=EMPLOY_STATUS, max_length=30)
    reason_status = models.CharField('Reason for being Temporary/Contractual/JO/Casual',
                                     choices=REASON_STATUS, max_length=150, blank=True)
    reason_status_others = models.CharField('Others, please cite', max_length=120, blank=True)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created} {self.sex}'

YN_CHOICES = [
    ('Yes', 'Yes'),
    ('No', 'No')
]

YNA_CHOICES = [
    ('Yes', 'Yes'),
    ('No', 'No'),
    ('NA', 'Not Applicable')
]

PLACE_WORK_SPOUSE = [
    ('Metro Manila', 'Metro Manila'),
    ('Province', 'Province'),
    ('Abroad', 'Abroad')
]

SOURCE_INCOME_SPOUSE = [
    ('Government Employee', 'Government Employee'),
    ('Private Employee', 'Private Employee'),
    ('Self-Employed', 'Self-Employed')
]

GROSS_SPOUSE = [
    ('More than P300,000.00', 'More than P300,000.00'),
    ('P299,000.00 - 250,000.00', 'P299,000.00 - 250,000.00'),
    ('P249,000.00 – 200, 000.00', 'P249,000.00 – 200, 000.00'),
    ('P199,000.00 – 150,000.00', 'P199,000.00 – 150,000.00'),
    ('P149,000.00 – 100, 000.00', 'P149,000.00 – 100, 000.00'),
    ('P99,000.00 – 50,000.00', 'P99,000.00 – 50,000.00'),
    ('P49,000.00 – 20, 000.00', 'P49,000.00 – 20, 000.00'),
    ('below P20,000.00', 'below P20,000.00')
]

NUMBER_CHILDS = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

AGES_CHILDS_HOUSEHOLD_CHOICES = [
    ('0-3 years old', '0-3 years old'),
    ('4-6 years old', '4-6 years old'),
    ('7-12 years old', '7-12 years old'),
    ('13-18 years old', '13-18 years old'),
    ('19 years old & above', '19 years old & above'),
    ('Not Applicable', 'Not Applicable'),
    ('','')
]

NUMBER_PEOPLE_OWN_FAMILY = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

NUMBER_OTHER_FAMILY = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

HOUSEHELP = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

NUMBER_PEOPLE_HOUSEHOLD = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

NUMBER_EARNING_CHILDREN = [
    ('0', '0'),
    ('1-2', '1-2'),
    ('3-4', '3-4'),
    ('5 or more', '5 or more')
]

NUMBER_OTHER_EARNING_HOUSEHOLD = [
    ('0', '0'),
    ('1-2', '1-2'),
    ('3-4', '3-4'),
    ('5 or more', '5 or more')
]

class HouseholdInfo(models.Model):
    breadwinner = models.CharField("Are you the breadwinner of the Household?", choices=YN_CHOICES, max_length=30)
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    spouse_employed = models.CharField("Is your spouse employed?", choices=YNA_CHOICES, max_length=30)
    place_work = models.CharField("Place of Work", choices=PLACE_WORK_SPOUSE, max_length=150, null=True, default="")
    place_where = models.CharField("Specify where:", max_length=100, blank=True)
    source_income_spouse = models.CharField("Source of income of your spouse",choices=SOURCE_INCOME_SPOUSE, max_length=30,blank=True)
    gross_mothly_salary_spouse = models.CharField("Gross Monthly salary of your spouse (including allowance/s)",
                                                  choices=GROSS_SPOUSE, max_length=60, blank=True)
    number_childs = models.CharField("Number of children", choices=NUMBER_CHILDS, max_length=30, blank="")
    ages_childs_household = MultiSelectField("4. Ages of children living in your household",
                                            choices=AGES_CHILDS_HOUSEHOLD_CHOICES, max_length=1000)
    num_people = models.CharField("5. Number of People living in your household:", max_length=1)
    number_people_live_household = models.CharField("Own family including yourself",
                                                    choices=NUMBER_PEOPLE_OWN_FAMILY, max_length=150, default="")
    other_family = models.CharField("Other family unit", choices=NUMBER_OTHER_FAMILY, max_length=30)
    house_help = models.CharField("Househelp", choices=HOUSEHELP, max_length=30)
    #total_number_in_household = models.CharField("Total number of persons in your household",
    #                                             choices=NUMBER_PEOPLE_HOUSEHOLD, max_length=30)
    # number_children_earning = models.CharField("Number of earning children in your household",
    #                                           choices=NUMBER_EARNING_CHILDREN, max_length=250)
    number_children_earning = models.CharField("Number of earning children in your household",
                                               max_length=12)
    # other_earning_household = models.CharField("Other earning members within the household",
    #                                           choices=NUMBER_OTHER_EARNING_HOUSEHOLD, max_length=120)
    other_earning_household = models.CharField("Other earning members within the household",
                                               max_length=12)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'

MEMBERSHIP_POSITION = [
    ('Officer', 'Officer'),
    ('Member', 'Member')
]

class MembershipOrganization(models.Model):
    office = models.CharField("Office (union, etc.)", choices=YN_CHOICES, max_length=30)
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    office_position = models.CharField("If yes, identify position", choices=MEMBERSHIP_POSITION, max_length=30)
    community = models.CharField("Office (union, etc.)", choices=YN_CHOICES, max_length=30)
    community_position = models.CharField("If yes, identify position", choices=MEMBERSHIP_POSITION, max_length=30)
    religious = models.CharField("Office (union, etc.)", choices=YN_CHOICES, max_length=30)
    religious_position = models.CharField("If yes, identify position", choices=MEMBERSHIP_POSITION, max_length=30)
    other_membership = models.CharField("Other membership organizations", max_length=100)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'

class OtherPersonalInfo(models.Model):
    skills = models.CharField("Skills", max_length=1000)
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    Hobbies = models.CharField("Hobbies", max_length=1000)
    Allergies = models.CharField("Allergies", max_length=1000)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'

class Suggestions(models.Model):
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    suggestion = models.CharField("Kindly give your suggestions not covered in the survey indicators "
                                  "but will contribute in improving of this survey", max_length=1000)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'

class OtherConcern(models.Model):
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    concern = models.CharField("Kindly give your other concerns relative to your organization", max_length=1000)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'


#####prctices


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
    ('Battered Women’s Leave (VAWC Leave)','Battered Women’s Leave (VAWC Leave)'),
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
    ('', '')
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
    ('', '')
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
    ('Health of family members (to include members with special needs)', 'Health of family members (to include members with special needs)'),
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
    ('Online (i.e. Blogging, vlogging)' , 'Online (i.e. Blogging, vlogging)'),
    ('Health and wellness (salon, yoga, gym etc.)', 'Health and wellness (salon, yoga, gym etc.)'),
    ('Hobbies (i.e. shopping, cooking, travel, sports, gardening)', 'Hobbies (i.e. shopping, cooking, travel, sports, gardening)'),
    ('Health of family members (to include members with special needs)', 'Health of family members (to include members with special needs)'),
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

class PracticesCondition(models.Model):
    priviledges_pay = MultiSelectField("1.	Are you aware of the following Leave privileges with pay?",
                                       max_length=500, choices=LEAVE_PRIVILEDGES)
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(blank=True, null=True)
    others_privpay = models.CharField("Please specify:", max_length=100, blank=True, null=True)
    availed_leaved = MultiSelectField("1.1.	Have you ever availed the following leaves with pay?",
                                      max_length=500, choices=LEAVE_PRIVILEDGES)
    others_availeaved = models.CharField("Please specify:", max_length=100, blank=True, null=True)
    number_absences_mo = models.CharField("2.	Usual number of ABCENSES incurred in a month:",
                                          choices=ABSENCES_MONTH, max_length=120)
    reason_absent_health = MultiSelectField("2.1.	Usual reason of ABSENCES: HEALTH", choices=HEALTH_REASON, max_length=300)
    other_reason_absent_health = models.CharField("Others", max_length=300, blank=True, null=True)
    reason_absent_family = MultiSelectField("2.2.	Usual reason of ABSENCES: FAMILY (Immediate)",
                                            choices=FAMILY_REASON, max_length=300)
    other_reason_absent_family = models.CharField("Others", max_length=300, blank=True, null=True)
    reason_absent_office = MultiSelectField("2.3.	Usual reason of ABSENCES: Inter-personal office relations",
                                            choices=OFFICE_REASON, max_length=300)
    other_reason_absent_office = models.CharField("Others", max_length=300, blank=True, null=True)
    number_tardines_mo = models.CharField("2.2. Usual number of TARDINESS incurred in a month",
                                          choices=ABSENCES_MONTH, max_length=120)
    reason_tardines_health = MultiSelectField("2.1.	Usual reason of TARDINESS: HEALTH",
                                              choices=HEALTH_REASON, max_length=300)
    other_reason_tardines_health = models.CharField("Others", max_length=300, blank=True, null=True)
    reason_tardines_family = MultiSelectField("2.2.	Usual reason of TARDINESS: FAMILY (Immediate)",
                                              choices=FAMILY_REASON, max_length=300)
    other_reason_tardines_family = models.CharField("Others", max_length=300, blank=True, null=True)
    reason_tardines_office = MultiSelectField("2.3.	Usual reason of TARDINESS: Inter-personal office relations",
                                              choices=OFFICE_REASON, max_length=300)
    other_reason_tardines_office = models.CharField("Others", max_length=300, blank=True, null=True)
    number_undertime_mo = models.CharField("2.3. Usual number of UNDERTIME incurred in a month", choices=ABSENCES_MONTH, max_length=120)
    reason_undertime_health = MultiSelectField("2.1.	Usual reason of UNDERTIME: HEALTH", choices=HEALTH_REASON, max_length=300)
    other_reason_undertime_health = models.CharField("Others", max_length=300, blank=True, null=True )
    reason_undertime_family = MultiSelectField("2.2.	Usual reason of UNDERTIME: FAMILY (Immediate)",
                                               choices=FAMILY_REASON, max_length=300)
    other_reason_undertime_family = models.CharField("Others", max_length=300, blank=True, null=True)
    reason_undertime_office = MultiSelectField("2.3.	Usual reason of TARDINESS: Inter-personal office relations",
                                               choices=OFFICE_REASON, max_length=300)
    other_reason_undertime_office = models.CharField("Others)", max_length=300, blank=True, null=True)
    facility_nursing = models.CharField("5.	Does your organization provide Nursing Room/Lactation Station facilities?",
                                        choices=YN_CHOICES, max_length=30, blank=True, null=True)
    facility_nursing_utilized = models.CharField("5.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30, blank=True, null=True)
    facility_nursing_utilized_satisfied = models.CharField("5.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30, blank=True, null=True)
    facility_nursing_utilized_satisfied_yes_reason = models.CharField("5.2.1. Yes, Kindly state your reasons", max_length=300, blank=True, null=True)
    facility_nursing_utilized_satisfied_no_reason = models.CharField("5.2.2. No, Kindly state your reasons", max_length=300, blank=True, null=True)
    facility_nursing_utilized_no_reason = MultiSelectField("5.3.Reason of not utilizing the facility:",
                                                           choices=FACILITY_REASON, max_length=500, blank=True, null=True)
    facility_nursing_others = models.CharField("Please specify:", max_length=1000, blank=True, null=True)
    facility_daycare = models.CharField("6.	Does your organization provide Day Care/Kiddie Room/Child Minding facilities?",
                                        choices=YN_CHOICES, max_length=30)
    facility_daycare_utilized = models.CharField("6.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
    facility_daycare_utilized_satisfied = models.CharField("6.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
    facility_daycare_utilized_satisfied_yes_reason = models.CharField("6.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_daycare_utilized_satisfied_no_reason = models.CharField("6.2.2. No, Kindly state your reasons", max_length=300)
    facility_daycare_utilized_no_reason = MultiSelectField("6.3. Reason of not utilizing the facility:",
                                                           choices=FACILITY_REASON, max_length=500)
    facility_daycare_others = models.CharField("Please specify:", max_length=1000)
    facility_prayer = models.CharField("7.	Does your organization provide Prayer Room facilities?", choices=YN_CHOICES, max_length=30)
    facility_prayer_utilized = models.CharField("7.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
    facility_prayer_utilized_satisfied = models.CharField("7.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
    facility_prayer_utilized_satisfied_yes_reason = models.CharField("7.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_prayer_utilized_satisfied_no_reason = models.CharField("7.2.2. No, Kindly state your reasons", max_length=300)
    facility_prayer_utilized_no_reason = MultiSelectField("7.3. Reason of not utilizing the facility:",
                                                          choices=FACILITY_REASON, max_length=500)
    facility_prayer_others = models.CharField("Please specify:", max_length=1000)
    facility_medical = models.CharField("8.	Does your organization provide Medical or Dental Clinic?",
                                        choices=YN_CHOICES, max_length=30)
    facility_medical_utilized = models.CharField("8.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
    facility_medical_utilized_satisfied = models.CharField("8.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
    facility_medical_utilized_satisfied_yes_reason = models.CharField("8.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_medical_utilized_satisfied_no_reason = models.CharField("8.2.2. No, Kindly state your reasons", max_length=300)
    facility_medical_utilized_no_reason = MultiSelectField("8.3. Reason of not utilizing the facility:",
                                                           choices=FACILITY_REASON, max_length=500)
    facility_medical_others = models.CharField("Please specify:", max_length=1000)
    facility_recreation = models.CharField("9.	Does your organization provide Recreation facilities (i.e. gym, wellness center, etc.)?",
                                           choices=YN_CHOICES, max_length=30)
    facility_recreation_utilized = models.CharField("9.1. Have you ever utilized the facility?", choices=YN_CHOICES, max_length=30)
    facility_recreation_utilized_satisfied = models.CharField("9.2. If YES, are you satisfied?", choices=YN_CHOICES, max_length=30)
    facility_recreation_utilized_satisfied_yes_reason = models.CharField("9.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_recreation_utilized_satisfied_no_reason = models.CharField("9.2.2. No, Kindly state your reasons", max_length=300)
    facility_recreation_utilized_no_reason = MultiSelectField("9.3. Reason of not utilizing the facility:",
                                                              choices=FACILITY_REASON, max_length=500)
    facility_recreation_others = models.CharField("Please specify:", max_length=1000)
    other_facility = models.CharField("10.	Other available facility for employee:", max_length=1000, null=True, blank=True)

    loans_availed = MultiSelectField("11.	Have you availed loans from any of the following?", choices=AVAILED_LOANS, max_length=500)
    other_loans_availed = models.CharField("Others", max_length=500)
    reason_loans_availed = MultiSelectField("11.1.	Reasons for availing", choices=REASON_AVAILED_LOANS, max_length=500)
    other_loans_availed_reason = models.CharField("Others", max_length=500)
    financial_assitance = models.CharField("12.	Is there a financial assistance available in your organization?",
                                           choices=YN_CHOICES, max_length=30)
    yes_identified_financial_assitance = MultiSelectField("12.1. If yes, identify", choices=FINANCIAL_ASSISTANCE, max_length=300)
    other_financial_assist = models.CharField("Please specify:", max_length=1000)
    been_benificiary_financial_assist = models.CharField("12.1.	Have you ever been a beneficiary of this financial assistance?",
                                                         choices=YN_CHOICES, max_length=30)
    experience_negative_stress = models.CharField("13.	Have you ever experienced negative stress?", choices=YN_CHOICES, max_length=30)
    causes_negative_stress = MultiSelectField("13.1. If Yes, what are the causes?", choices=CAUSES_STRESS, max_length=1000)
    other_causes_stress = models.CharField("13.1.1. Others", max_length=300)
    how_manage_stress = MultiSelectField("13.2.	How do you manage stress?", choices=MANAGE_STRESS, max_length=500)
    other_how_manage_stress = models.CharField("13.1.2. Others", max_length=300)
    sickness_lifestyle = MultiSelectField("14. Current Sickness: 1. Lifestyle", choices=SICK_LIFESTYLE,  max_length=500)
    other_sick_lifestyle = models.CharField("14.1.1. Others", max_length=300)
    sickness_genetic = MultiSelectField("14. Current Sickness: 2. Genetic/Congenital", choices=SICK_GENETIC, max_length=500)
    other_sick_genetic = models.CharField("14.2.1. Others", max_length=300)
    sickness_workrelated = MultiSelectField("14.	Current Sickness: 3. Work-related", choices=SICK_WORKRELATED, max_length=500)
    other_sick_workrelated = models.CharField("14.3.1. Others", max_length=300)
    mental_health = models.CharField("15. Mental Health", choices=YN_CHOICES, max_length=30)
    seek_professional = models.CharField("15.1.	If yes, did you ever seek professional help?", choices=YN_CHOICES, max_length=1000)
    no_seek_professional = models.CharField("15.1.1. Kindly state your reasons", max_length=500)
    yes_seek_professional = models.CharField("15.2.	If yes, did you have or are you taking medication/attending counselling?",
                                             choices=YN_CHOICES, max_length=30)
    no_seek_professional_nomedication = models.CharField("Kindly state your reason:", max_length=500)
    created = models.DateTimeField("Creation date", auto_now_add=True)
    updated = models.DateTimeField("Update date", auto_now=True)

    def __str__(self):
        return f'{self.author} {self.created}'



