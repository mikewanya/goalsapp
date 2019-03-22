import { Component, OnInit,Output,EventEmitter } from '@angular/core';
//added the line below to import goals
import {Goal} from '../goal';
//ends here

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  //added the line below
  newGoal=new Goal(0,"","",new Date());
  //ends here

  //below is new code for submit form
  @Output() addGoal=new EventEmitter<Goal>();
  submitGoal(){
        this.addGoal.emit(this.newGoal);
    }
  //ends here

  constructor() { }

  ngOnInit() {
  }

}
