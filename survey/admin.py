from django.contrib import admin
from .models import Post, RespondentProfile, HouseholdInfo, OtherPersonalInfo, OtherConcern, Suggestions, MembershipOrganization, PracticesCondition
from .privacymodel import Privacy
from .workmodels import WorkRelatedInfo
#from .practicemodel import PracticesConditions


admin.site.register(Post)
admin.site.register(OtherPersonalInfo)
admin.site.register(OtherConcern)
admin.site.register(Suggestions)
admin.site.register(MembershipOrganization)
admin.site.register(HouseholdInfo)
admin.site.register(RespondentProfile)
admin.site.register(Privacy)
admin.site.register(WorkRelatedInfo)
admin.site.register(PracticesCondition)



