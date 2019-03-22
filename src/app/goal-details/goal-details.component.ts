import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output() isComplete= new EventEmitter<boolean>();

/*
We replace the code below from 'complete' to 'delete' as we have done the same in 'goal-details.component.html'
--------------------------------------------------------
goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
--------------------------------------------------------
*/


goalDelete(complete:boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
