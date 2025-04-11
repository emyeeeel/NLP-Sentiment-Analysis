import { Component } from '@angular/core';
import { SentimentService } from './services/sentiment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sentiment-analysis';

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
