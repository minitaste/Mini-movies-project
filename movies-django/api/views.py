from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import MovieMetrics
from .serializers import MovieMetricsSerializer


@api_view(['GET'])
def top_movies(request):
    top_movies = MovieMetrics.objects.all().order_by('-count')[:5]

    serializer = MovieMetricsSerializer(top_movies, many=True)
    
    return Response(serializer.data)


@api_view(['POST'])
def add_search(request):
    search_term = request.data.get('searchTerm')
    poster_url = request.data.get('poster_url')
    movie_id = request.data.get('movie_id')

    if not search_term or not movie_id:
        return Response({"error": "Missing required fields"}, status=400)

    metric, created = MovieMetrics.objects.get_or_create(
        search_term=search_term,
        defaults={'poster_url': poster_url, 'movie_id': movie_id}
    )

    if not created:
        metric.count += 1
        metric.save()

    serializer = MovieMetricsSerializer(metric)
    return Response(serializer.data)
