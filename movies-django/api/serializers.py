from rest_framework import serializers
from .models import MovieMetrics

class MovieMetricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieMetrics
        fields = '__all__'
