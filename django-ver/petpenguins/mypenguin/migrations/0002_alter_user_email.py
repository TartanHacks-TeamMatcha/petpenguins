# Generated by Django 3.2.10 on 2023-02-04 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mypenguin', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
