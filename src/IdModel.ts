/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */

/// <reference path="../typings/tsd.d.ts" />


import { Utils } from "./utils";
import { challengeData } from "./challengeData";
import { EventDispatcher } from "./EventDispatcher";
import { AutoChallange } from "./autogenerated/AutoChallange";


// Generic "model" object. You can use whatever
// framework you want. For this application it
// may not even be worth separating this logic
// out, but we do this to demonstrate one way to
// separate out parts of your application.
class IdModel{

	public key : string;
	public challenges:Challenges;
	public modelState:IdModelState = new IdModelState();

	constructor(key) {
		//super();
		this.key = key;
		this.challenges = challengeData;
		this.modelState = Utils.store(this.key, null); // load
	}


	public inform():void {
		Utils.store(this.key, this.modelState); // save (and load)
		super.notify();
	}

	public getCC():Challenge{
		return this.challenges[this.modelState.currentChalengeNumber];
	}
}

class IdModelState extends EventDispatcher {

	constructor() {
		super();
	}

	private _currentChalengeNumber:number = null;
	public get currentChalengeNumber() : number {
		return this._currentChalengeNumber;
	}
	public set currentChalengeNumber(value:number) {
		this._currentChalengeNumber = value;
		this.notify();
	}

	private _totalPoints:number = null;
	public get totalPoints() : number {
		return this._totalPoints;
	}
	public set totalPoints(value:number) {
		this._totalPoints = value;
		this.notify();
	}
}

class Challenges implements Array<Challenge>{

	constructor() {
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


class Challenge extends AutoChallange{

	constructor() {
		super();
	}
	public answerBad:Array<string> = [];

}


export {IdModel, IdModelState, Challenges, Challenge};
