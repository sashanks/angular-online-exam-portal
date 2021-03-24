import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id: number;
    name: string;
    description: string;
    config: QuizConfig;
    questions: Question[];

    constructor(data: any) {
        if (data) {
            this.questions = [];
            console.log(data.question);
            data.forEach((q: any) => {
                this.questions.push(new Question(q));
            });
        }
    }
}