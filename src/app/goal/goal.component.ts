import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})


/*#1
REPLACED THE CODE BELOW WITH TUESDAY PIPES to add date functionality
-------------------------------------------------------------------
export class GoalComponent implements OnInit {
    goals = [
        new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son'),
        new Goal(2,'Buy Cookies','I have to buy cookies for the parrot'),
        new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon'),
        new Goal(4, 'Get Dog Food','Pupper likes expensive sancks'),
        new Goal(5, 'Solve math homework','Damn Math'),
        new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord'),

    ]
-----------------------------------------------------------------------
*/

/*#2 we replace the whole code below when we get to wednesday deleting goal
export class GoalComponent implements OnInit {
    goals = [
        new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2019,3,14) ),
        new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9) ),
        new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12) ),
        new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2019,0,18) ),
        new Goal(5, 'Solve math homework','Damn Math',new Date(2019,2,14) ),
        new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14) ),

    ]


//the code below toggles the description
    toogleDetails(index){
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }

//the code below adds deletes
    completeGoal(isComplete,index){
          if (isComplete){
              this.goals.splice(index,1);
              }
              }
//delete functionality ends here
deleting whole code ene
#2 ends here */


/*#3
new code for wednesday starts here*/

export class GoalComponent implements OnInit {

/*#4 code before wednesday submit form
    goals = [
        new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2019,3,14) ),
        new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9) ),
        new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12) ),
        new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2019,0,18) ),
        new Goal(5, 'Solve math homework','Damn Math',new Date(2019,2,14) ),
        new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14) ),

    ]

#4 end of code before wednesday submit form*/

goals = [
        new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2019,3,14) ),
        new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9) ),
        new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12) ),
        new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2019,0,18) ),
        new Goal(5, 'Solve math homework','Damn Math',new Date(2019,2,14) ),
        new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14) ),

    ]


    //the code below toggles the description
        toogleDetails(index){
            this.goals[index].showDescription = !this.goals[index].showDescription;
        }

    deleteGoal(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if(toDelete){
                this.goals.splice(index,1)
            }
        }
    }

    /*function to add new goal srtat*/
        addNewGoal(goal){
                let goalLength = this.goals.length;
                goal.id=goalLength+1;
                goal.completeDate = new Date(goal.completeDate)
                this.goals.push(goal)

            }
    /*function to add new goal ends */

/* #3 new code for wednesday desccription ends here*/

  constructor() { }
  ngOnInit() {
  }

}
