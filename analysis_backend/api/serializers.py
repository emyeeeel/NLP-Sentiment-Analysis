from rest_framework import serializers
from .models import SentimentAnalysis

class AnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = SentimentAnalysis
        fields = '__all__'
