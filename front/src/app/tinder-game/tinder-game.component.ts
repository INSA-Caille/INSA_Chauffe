import { Component } from '@angular/core';
import tinderQuestions from '../../assets/tinderQuestion.json';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';


export interface Question {
  id: number;
  question: string;
  answer: boolean;
  info: string;
  link: string;
}

@Component({
  selector: 'app-tinder-game',
  standalone: true,
  imports: [PanelModule, CardModule, ButtonModule, CommonModule],
  templateUrl: './tinder-game.component.html',
  styleUrl: './tinder-game.component.scss'
})
export class TinderGameComponent {
  questionsAlreadyGiven: number[] = [];
  questions: Question[] = [];
  currentQuestion!: Question;
  answer: boolean = false;
  hasAnswered: boolean = false;
  
  constructor() {
  }

  ngOnInit() {
    //get questions already answered with api
    this.questions = tinderQuestions.filter((question: Question) => {
      return !this.questionsAlreadyGiven.includes(question.id);
    })
    const randomQuestionIndex = this.getRandomInt(0, this.questions.length);
    this.currentQuestion = this.questions[randomQuestionIndex];
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  checkAnswer(answer: boolean) {
    this.answer = answer === this.currentQuestion?.answer;
    this.hasAnswered = true;
  }

  updateQuestion(){
    if(this.questions.length > 1) {
      this.questionsAlreadyGiven.push(this.currentQuestion.id)
      this.questions = tinderQuestions.filter((question: Question) => {
        return !this.questionsAlreadyGiven.includes(question.id);
      })
      const randomQuestionIndex = this.getRandomInt(0, this.questions.length);
      this.currentQuestion = this.questions[randomQuestionIndex];
      console.log(this.questions)
    }
    this.hasAnswered = false;
  }
}
