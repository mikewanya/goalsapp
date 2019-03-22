/*
---------------------------------------------
#1
Below is the original code once i generTED STRIKETHROUGH DIRECTIVE

import { Directive } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor() { }

}

-------------------------------------------------*/






/*
---------------------------------------------------------------------
#2 Below if the first strikethrough code which strikes all the elements: TUESDAY DAY2 CUSTOM DIRECTIVES

import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='line-through';
  }
}
------------------------------------------------------
*/






/*
------------------------------------------------------
#3 The code below stops he strikethrough of all elememts

import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef){ }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
------------------------------------------------------
*/





/*
----------------------------------------------------
#4
The code below imports the HostListener annotation. This will be responsible for capturing events that occur on the host element.
Now when single click on the task title eg "Watch Finf=dig Nemo", it is striken through, then when you double click the strikethrough dissapears
----------------------------------------------------------------------
*/
import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {


  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
