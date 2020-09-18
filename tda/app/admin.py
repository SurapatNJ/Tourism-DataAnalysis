from django.contrib import admin

from .models import User, role

# Register your models here.
@admin.register(User)
class User(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'displayname', 'role_id', 'active',)

    search_fields = ('username', 'email', 'displayname',)
    ordering = ('id',)

    def get_queryset(self, request):
        return super(User,self).get_queryset(request).all()

@admin.register(role)
class role(admin.ModelAdmin):
    list_display = ('id', 'name', 'auth_level')

    search_fields = ('name',)
    ordering = ('id',)

    def get_queryset(self, request):
        return super(role,self).get_queryset(request).all()