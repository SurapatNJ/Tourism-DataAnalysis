from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

class role(models.Model):
    name = models.CharField(max_length=60)
    auth_level = models.IntegerField(default=0)

    class Meta:
        pass

    def __str__(self):
        return str(self.name)

class User(models.Model):
    username = models.CharField(max_length=60)
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    displayname = models.CharField(max_length=60)
    role_id = models.ForeignKey(role, on_delete=models.SET_NULL, blank=True, null=True)
    active = models.BooleanField(default=True)

    class Meta:
        pass

    def __str__(self):
        return str(self.displayname)
    