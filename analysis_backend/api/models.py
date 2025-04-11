from django.db import models

class SentimentAnalysis(models.Model):
    text = models.TextField()
    sentiment = models.CharField(max_length=20)
    polarity = models.FloatField(default=0.0)
    subjectivity = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

