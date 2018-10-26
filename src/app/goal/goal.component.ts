import { Component, OnInit } from '@angular/core';
import { Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  targets = 'goals';
  goals = [
    new Goal('Mon', 1, 'Watch Finding Nemo' , 'Find an online version and watch merlin find his son', new Date(2018, 10, 27)),
    new Goal('Tue', 2, 'Buy Cookies' , 'I have to buy cookies for the parrot' ,  new Date(2018, 10, 28)),
    new Goal('Wed', 3, 'Get new Phone Case' , 'Diana has her birthday coming up soon' , new Date(2018, 10, 29)),
    new Goal('Thur', 4, 'Get Dog Food' , 'Pupper likes expensive sancks' , new Date(2018, 10, 30)),
    new Goal('Fri' , 5, 'Solve math homework' , 'Damn Math' ,  new Date(2018, 10, 31)),
    new Goal('Sat' , 6, 'Plot my world domination plan' , 'Cause I am an evil overlord' ,  new Date(2018, 11, 1)),

];
  toogleDetails(i) {
    this.goals[i].showDescription = !this.goals[i].showDescription;
  }
  completeGoal(isComplete, index) {
    if (isComplete) {
        this.goals.splice(index, 1);
        }
        }

        addNewGoal(goal) {
          const goalLength = this.goals.length;
          goal.id = goalLength + 1;
          goal.completeDate = new Date(goal.completeDate);
          this.goals.unshift(goal);
      }
  constructor() { }

  ngOnInit() {
  }

}
