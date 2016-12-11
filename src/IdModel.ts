/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */

/// <reference path="../typings/tsd.d.ts" />


import { IdEventDispatcher } from "./IdEventDispatcher";
import { Utils } from "./utils";
import { challengeData } from "./challengeData";
import { AutoChallange } from "./autogenerated/AutoChallange";
import { IdModelState } from "./IdModelState";


class Challenge extends AutoChallange {

	/*public constructor() {
		super();
	}*/
	public answerBad:Array<string> = [];

    
    public constructor(init?:Partial<Challenge>) {
		super();
        (<any>Object).assign(this, init);
    }
}

/*
class Challenges implements Array<Challenge> {

    public constructor() {
        Array.apply(this, arguments);
        return new Array();
    }

    // we need this, or TS will show an error,
    //XArray["prototype"] = new Array(); will replace with native js arrray function
    //push(val:Challenge): number { return 0; };
    //length: number;

     // dummy declarations
    // "massaged" the Array interface definitions in lib.d.ts to fit here
    toString:()=> string;
    toLocaleString:()=> string;
    concat:<U extends Challenge[]>(...items:U[])=> Challenge[];
    join:(separator?:string)=> string;
    pop:()=> Challenge;
    push:(...items:Challenge[])=> number;
    reverse:()=> Challenge[];
    shift:()=> Challenge;
    slice:(start?:number, end?:number)=> Challenge[];
    sort:(compareFn?:(a:Challenge, b:Challenge) => number)=> Challenge[];
    splice:(start?:number, deleteCount?:number, ...items:Challenge[])=> Challenge[];
    unshift:(...items:Challenge[])=> number;
    indexOf:(searchElement:Challenge, fromIndex?:number)=> number;
    lastIndexOf:(searchElement:Challenge, fromIndex?:number)=> number;
    every:(callbackfn:(value:Challenge, index:number, array:Challenge[]) => boolean, thisArg?:any)=> boolean;
    some:(callbackfn:(value:Challenge, index:number, array:Challenge[]) => boolean, thisArg?:any)=> boolean;
    forEach:(callbackfn:(value:Challenge, index:number, array:Challenge[]) => void, thisArg?:any)=> void;
    map:<U>(callbackfn:(value:Challenge, index:number, array:Challenge[]) => U, thisArg?:any)=> U[];
    filter:(callbackfn:(value:Challenge, index:number, array:Challenge[]) => boolean, thisArg?:any)=> Challenge[];
    reduce:<U>(callbackfn:(previousValue:U, currentValue:Challenge, currentIndex:number, array:Challenge[]) => U, initialValue:U)=> U;
    reduceRight:<U>(callbackfn:(previousValue:U, currentValue:Challenge, currentIndex:number, array:Challenge[]) => U, initialValue:U)=> U;
    length:number;
    [n: number]: Challenge;
}
// ? Challenges["prototype"] = new Array();
*/

// Generic "model" object. You can use whatever
// framework you want. For this application it
// may not even be worth separating this logic
// out, but we do this to demonstrate one way to
// separate out parts of your application.
class IdModel extends IdEventDispatcher {

	public key : string;
	public challenges:Array<Challenge>;
	public modelState:IdModelState = new IdModelState();

	public constructor(key) {
		super();
		this.key = key;
		this.challenges = challengeData;
		var tmpState = Utils.store(this.key, this.modelState); // load
        if(tmpState!=undefined)
            this.modelState = tmpState;
	}


	public inform():void {
		Utils.store(this.key, this.modelState); // save (and load)
		super.notify();
	}

	public getCC():Challenge {
		return this.challenges[this.modelState.currentChalengeNumber];
	}

    private autoCompleteList:Array<string> = null;

    public GetAutoCompleteList():Array<string> {
        if(this.autoCompleteList==null){
            this.autoCompleteList = [];
            this.challenges.forEach(function(challangeIt) {
                this.autoCompleteList.push(challangeIt.answerGood);
                if(challangeIt.answerBad != null){
                    challangeIt.answerBad.forEach(function(badIt) {
                        this.autoCompleteList.push(badIt);
                    });
                }
            });
        }
        return this.autoCompleteList;
    }
}


export {IdModel, Challenge};
