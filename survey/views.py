from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
#from django.db import connection
#from django.contrib import messages
from django.template import loader
from django import template
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, FileResponse, Http404
from django.db import transaction, DatabaseError
from django.db.models import Avg, Max, Min, Sum, Count
from users.models import Profile
from django.utils import timezone

from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
#from requests import request
from .models import Post, RespondentProfile, HouseholdInfo, MembershipOrganization, Suggestions, OtherPersonalInfo, OtherConcern, PracticesCondition
from .forms import BulletinForm, PracticesForm, RespondentProfileForm, HouseholdInfoForm, MembershipOrganizationForm, SuggestionsForm, OtherPersonalInfoForm, OtherConcernForm
from .workmodels import WorkRelatedInfo
from .workforms import WorkRelatedInfoForm
from .privacymodel import Privacy
from .privacyforms import PrivacyForm
#from .practicemodel import PracticesCondition
#from .practiceforms import PracticesForm

@login_required(login_url="/login/")
def pages(request):
    context = {}
    # All resource paths end in .html.
    # Pick out the html file name from the url. And load that template.
    try:

        load_template = request.path.split('/')[-1]
        context['segment'] = load_template

        html_template = loader.get_template(load_template)
        return HttpResponse(html_template.render(context, request))

    except template.TemplateDoesNotExist:

        html_template = loader.get_template('page-404.html')

        return HttpResponse(html_template.render(context, request))

    except:

        html_template = loader.get_template('page-500.html')
        return HttpResponse(html_template.render(context, request))

# ------------------------------ Bulletin ---------------------------------------------------

def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'survey/home.html', context)

class PostListView(ListView):
    model = Post
    template_name = 'survey/home.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['-date_posted']
    paginate_by = 5

class UserPostListView(ListView):
    model = Post
    template_name = 'survey/user_posts.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    paginate_by = 5

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Post.objects.filter(author=user).order_by('-date_posted')

class PostDetailView(DetailView):
    model = Post

class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['Btitle', 'content', 'pdf']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

def postUploadDocs(request):
    if request.method == 'POST':
        form = BulletinForm(request.POST,request.FILES)

        if form.is_valid():
            form.instance.author = request.user
            form.save()
            return redirect('/')
    else:
        form = BulletinForm()
        context = {
            'form':form,
        }
    return render(request, 'survey/UploadDocs.html', context)

class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['Btitle', 'content', 'pdf']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

def pdf_view(request):
    try:
        return FileResponse(open('foobar.pdf', 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404()

class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = '/post/media/'

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

def about(request):
    return render(request, 'survey/about.html')

# ------------------------------ Survey ------------------------------

class UserPrivacyCreateView(LoginRequiredMixin, CreateView):
    template_name = 'survey/userPrivacy.html'
    form_class = PrivacyForm
    privacy = Privacy.objects.all()


    def form_valid(self, form):
        a = Profile.objects.get(pk=self.request.user.id)
        print(a)

        form.instance.author = self.request.user
        #Profile.objects.create(privacy=self.request.user)
        RespondentProfile.objects.create(author=self.request.user)
        WorkRelatedInfo.objects.create(author=self.request.user)
        PracticesCondition.objects.create(author=self.request.user)
        HouseholdInfo.objects.create(author=self.request.user)
        MembershipOrganization.objects.create(author=self.request.user)
        OtherPersonalInfo.objects.create(author=self.request.user)
        Suggestions.objects.create(author=self.request.user)
        OtherConcern.objects.create(author=self.request.user)
        a.privacy = str(self.request.user.id)
        a.save()
        print(form.cleaned_data)
        return super().form_valid(form)

        #return redirect('/update/profile/' + str(survey.author_id) + '/')

        #return HttpResponseRedirect("/survey/new/profile/")
    success_url = '/'

def UserSurveyListView(request):
    survey = RespondentProfile.objects.all()
    context = { 'survey':survey }

    return render(request, "survey/userSurvey.html", context)

def updateRPSurvey(request,pk):
    survey = RespondentProfile.objects.get(author_id=pk)
    form = RespondentProfileForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = RespondentProfileForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status  = 1
            form.save()
            return redirect('/update/household/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/respondentprofile_form.html', context)

def updateHISurvey(request,pk):
    survey = HouseholdInfo.objects.get(author_id=pk)
    form = HouseholdInfoForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = HouseholdInfoForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status = 1
            form.save()
            return redirect('/update/workinfo/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/householdinfo.html', context)


def updateWISurvey(request,pk):
    survey = WorkRelatedInfo.objects.get(author_id=pk)
    form = WorkRelatedInfoForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = WorkRelatedInfoForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status = 1
            form.save()
            return redirect('/update/practices/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/workinfo.html', context)

def updatePCsurvey(request,pk):
    survey = PracticesCondition.objects.get(author_id=pk)
    form = PracticesForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = PracticesForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status = 1
            form.save()
            return redirect('/update/membership/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/practices.html', context)

def updateMOSurvey(request,pk):
    survey = MembershipOrganization.objects.get(author_id=pk)
    form = MembershipOrganizationForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = MembershipOrganizationForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status = 1
            form.save()
            return redirect('/update/otherinfo/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/membership.html', context)

def updateOISurvey(request,pk):
    survey = OtherPersonalInfo.objects.get(author_id=pk)
    form = OtherPersonalInfoForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = OtherPersonalInfoForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status = 1
            form.save()
            return redirect('/update/suggestion/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/otherinfo.html', context)

def updateSSurvey(request,pk):
    survey = Suggestions.objects.get(author_id=pk)
    form = SuggestionsForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = SuggestionsForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status = 1
            form.save()
            return redirect('/update/otherconcern/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/suggestions.html', context)

def updateOCSurvey(request,pk):
    survey = OtherConcern.objects.get(author_id=pk)
    form = OtherConcernForm(instance=survey)

    if request.method == 'POST':
        #print('FORM DATA:', request.POST)
        form = OtherConcernForm(request.POST, instance=survey)
        if form.is_valid():
            form.instance.status = 1
            form.save()
            return redirect('/survey/detail/' + str(survey.author_id) + '/')

    context = {'form': form}
    return render(request, 'survey/otherconcerns.html', context)

def deleteSurvey(request,pk):
    survey = RespondentProfile.objects.get(id=pk)

    if request.method == 'POST':
        survey.delete()
        return redirect('/')
    return render(request, 'survey/deleteSurvey.html', {'object':survey})

@login_required(login_url="/login/")
def respondent_details(request, pk):
    responder = get_object_or_404(User, id=pk)
    context1 = {
        "responder": responder
    }

    return render(request, "survey/respondents_data.html",  context1 )

def dashboard(request):
    sddcount = RespondentProfile.objects.count()
    max_rating = RespondentProfile.objects.aggregate(Count('sex'))
    sex = RespondentProfile.objects.all()
#    sexsdd = RespondentProfile.objects.values("sex").annotate(Count("id"))

# -------------------- Daily respondent per day -----------------------
    ts = Privacy.objects.all()
    #ts = Privacy.objects.filter(created='privacy_date_day')

# -------------------- Sex ----------------------

    sexm = RespondentProfile.objects.filter(sex='Male').count()
    sexf = RespondentProfile.objects.filter(sex='Female').count()
    totsex = sexm + sexf
    malepercent=0
    femalepercent=0
    malepercent = (sexm / totsex) * 100
    femalepercent = (sexf / totsex) * 100

# ---------- Employment Status -------------------
    empstatPAsdd = RespondentProfile.objects.filter(employment_status="Presidential Appointee").count()
    empstatCTsdd = RespondentProfile.objects.filter(employment_status="Co-Terminus").count()
    empstatPsdd = RespondentProfile.objects.filter(employment_status="Permanent").count()
    empstatTsdd = RespondentProfile.objects.filter(employment_status="Temporary").count()
    empstatCsdd = RespondentProfile.objects.filter(employment_status="Contractual").count()
    empstatCAsdd = RespondentProfile.objects.filter(employment_status="Casual").count()
    empstatJOsdd = RespondentProfile.objects.filter(employment_status="Job Order").count()
    empstatREsdd = RespondentProfile.objects.filter(employment_status="Re-Enlistment").count()
    empstatTAsdd = RespondentProfile.objects.filter(employment_status="Technical Assistant/Consultant").count()

# ---------- Age -------------------
    agesdd20 = RespondentProfile.objects.filter(age="20-30 years old").count()
    agesdd31 = RespondentProfile.objects.filter(age="31-40 years old").count()
    agesdd41 = RespondentProfile.objects.filter(age="41-50 years old").count()
    agesdd51 = RespondentProfile.objects.filter(age="51-60 years old").count()
    agesdd61 = RespondentProfile.objects.filter(age="61 years old and above").count()

# ---------- Civil status -------------------
    cssdd20 = RespondentProfile.objects.filter(civil_status="Single").count()
    cssdd31 = RespondentProfile.objects.filter(civil_status="Married").count()
    cssdd41 = RespondentProfile.objects.filter(civil_status="Windower/s").count()
    cssdd51 = RespondentProfile.objects.filter(civil_status="Annulled").count()
    cssdd61 = RespondentProfile.objects.filter(civil_status="Legally Separated").count()

    # ---------- Agency -------------------
    cpasdd20 = RespondentProfile.objects.filter(agency="CPA").count()
    marinasdd31 = RespondentProfile.objects.filter(agency="MARINA").count()
    pcgsdd41 = RespondentProfile.objects.filter(agency="PCG").count()
    ppasdd51 = RespondentProfile.objects.filter(agency="PPA").count()
    pmmasdd61 = RespondentProfile.objects.filter(agency="PMMA").count()

    # ---------- Educational -------------------
    docsdd20 = RespondentProfile.objects.filter(highest_educ="Doctorate Degree").count()
    massdd31 = RespondentProfile.objects.filter(highest_educ="Masters Degree").count()
    collsdd41 = RespondentProfile.objects.filter(highest_educ="College Graduate").count()
    undersdd51 = RespondentProfile.objects.filter(highest_educ="Undergraduate").count()
    vocsdd61 = RespondentProfile.objects.filter(highest_educ="Vocational/Technical").count()
    highsdd61 = RespondentProfile.objects.filter(highest_educ="Secondary").count()

    # ---------- solo indigen pwd -------------------
    solom = RespondentProfile.objects.filter(soloparent="YES",sex="Male").count()
    solof = RespondentProfile.objects.filter(soloparent="YES", sex="Female").count()
    indigenm = RespondentProfile.objects.filter(indigenous="YES",sex="Male").count()
    indigenf = RespondentProfile.objects.filter(indigenous="YES", sex="Female").count()
    disabilitym = RespondentProfile.objects.filter(disability="YES",sex="Male").count()
    disabilityf = RespondentProfile.objects.filter(disability="YES", sex="Female").count()

    return render(request, 'survey/dashboard.html', {'sex': sex,'sexm':sexm, 'sexf':sexf, 'empstatPAsdd':empstatPAsdd,
                                                     'empstatCTsdd':empstatCTsdd, 'empstatPsdd':empstatPsdd, 'empstatTsdd':empstatTsdd,
                                                     'empstatCsdd':empstatCsdd, 'empstatCAsdd':empstatCAsdd, 'empstatJOsdd':empstatJOsdd,
                                                     'empstatREsdd':empstatREsdd, 'empstatTAsdd':empstatTAsdd, 'agesdd20':agesdd20,
                                                     'agesdd31':agesdd31, 'agesdd41':agesdd41, 'agesdd51':agesdd51, 'agesdd61':agesdd61,
                                                     'sddcount':sddcount, 'max_rating':max_rating, 'ts':ts, 'totsex':totsex,
                                                     'cssdd20':cssdd20, 'cssdd31':cssdd31, 'cssdd41':cssdd41, 'cssdd51':cssdd51, 'cssdd61':cssdd61,
                                                     'cpasdd20':cpasdd20, 'marinasdd31':marinasdd31, 'pcgsdd41':pcgsdd41, 'ppasdd51':ppasdd51,'pmmasdd61':pmmasdd61,
                                                     'docsdd20':docsdd20, 'massdd31':massdd31, 'collsdd41':collsdd41, 'undersdd51':undersdd51,
                                                     'vocsdd61':vocsdd61, 'highsdd61':highsdd61, 'solom':solom, 'solof':solof, 'indigenm':indigenm, 'indigenf':indigenf,
                                                     'disabilitym':disabilitym, 'disabilityf':disabilityf, 'malepercent':malepercent,'femalepercent':femalepercent} ,)

