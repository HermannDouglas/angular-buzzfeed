import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  standalone: false,
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})
export class QuizzComponent implements OnInit {
  title: string = '';

  questions: any;
  questionsSelected: any;

  answers: string[] = [];
  answerSelected: string = '';
  
  questionIndex: number = 0;
  questionMaxIndex: number = 0;
  finished: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
