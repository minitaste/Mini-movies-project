# Generated by Django 4.2.7 on 2025-01-29 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MovieMetrics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('search_term', models.CharField(max_length=1000)),
                ('count', models.PositiveIntegerField(default=1)),
                ('poster_url', models.URLField(max_length=500)),
                ('movie_id', models.PositiveBigIntegerField(db_index=True)),
            ],
        ),
    ]
