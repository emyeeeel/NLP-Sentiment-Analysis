from django.urls import path
from .views import AnalyzeSentiment

urlpatterns = [
    path('analyze/', AnalyzeSentiment.as_view(), name='analyze-sentiment'),
]