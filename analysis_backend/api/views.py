from rest_framework.views import APIView
from rest_framework.response import Response
from textblob import TextBlob
from .serializers import AnalysisSerializer

class AnalyzeSentiment(APIView):
    def post(self, request):
        text = request.data.get('text', '')
        analysis = TextBlob(text)
        polarity = analysis.sentiment.polarity
        subjectivity = analysis.sentiment.subjectivity

        sentiment = 'neutral'
        if polarity > 0.2:
            sentiment = 'positive'
        elif polarity < -0.2:
            sentiment = 'negative'

        data = {
            'text': text,
            'sentiment': sentiment,
            'polarity': polarity,
            'subjectivity': subjectivity,
        }
        serializer = AnalysisSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
