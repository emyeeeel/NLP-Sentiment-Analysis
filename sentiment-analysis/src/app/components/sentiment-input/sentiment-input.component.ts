import { Component } from '@angular/core';
import { SentimentService } from '../../services/sentiment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sentiment-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './sentiment-input.component.html',
  styleUrl: './sentiment-input.component.scss'
})
export class SentimentInputComponent {
  inputText = '';
  result: any = null;

  constructor(private sentimentService: SentimentService) { }

  analyze() {
    this.sentimentService.analyzeText(this.inputText).subscribe({
      next: (response) => this.result = response,
      error: (error) => console.error('Error:', error)
    });
  }
}
