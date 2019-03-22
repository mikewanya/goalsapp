export class Goal {
    public showDescription:boolean
    constructor(public id:number, public name:string,public description:string,public completeDate:Date){
        this.showDescription=false

    }
}

/*
---------------------------------------------------------
 code before we added a completion date for our goals - Before PIPES TOPIC Tuesday day 2

export class Goal {
    public showDescription:boolean;
    constructor(public id:number, public name:string,public description:string){
        this.showDescription=false

    }
}

---------------------------------------------------------
*/
