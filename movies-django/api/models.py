from django.db import models

# Create your models here.
class MovieMetrics(models.Model):
    search_term = models.CharField(max_length=1000)
    count = models.PositiveIntegerField(default=1)
    poster_url = models.URLField(max_length=500)
    movie_id = models.PositiveBigIntegerField(db_index=True)

    def __str__(self):
        return f"{self.search_term} - {self.movie_id} ({self.count})"