/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */

import { EventDispatcher } from "../EventDispatcher";
import { Challenge } from "../IdModel";

class AutoChallange  extends EventDispatcher {
	
	private _question:string = null;
	public get question() : string {
	if(this._question!=null)
		return this._question;
	if(this.parent!=null)
		return this.parent.question;
	else
		return "!problem here!";
	}
	public set question(value:string) {
		this._question = value;
	}


	private _answerGood:string = null;
	public get answerGood() : string {
	if(this._answerGood!=null)
		return this._answerGood;
	if(this.parent!=null)
		return this.parent.answerGood;
	else
		return "!problem here!";
	}
	public set answerGood(value:string) {
		this._answerGood = value;
	}


	private _responseCorrect:string = null;
	public get responseCorrect() : string {
	if(this._responseCorrect!=null)
		return this._responseCorrect;
	if(this.parent!=null)
		return this.parent.responseCorrect;
	else
		return "!problem here!";
	}
	public set responseCorrect(value:string) {
		this._responseCorrect = value;
	}


	private _responseWrong:string = null;
	public get responseWrong() : string {
	if(this._responseWrong!=null)
		return this._responseWrong;
	if(this.parent!=null)
		return this.parent.responseWrong;
	else
		return "!problem here!";
	}
	public set responseWrong(value:string) {
		this._responseWrong = value;
	}


	private _hint:string = null;
	public get hint() : string {
	if(this._hint!=null)
		return this._hint;
	if(this.parent!=null)
		return this.parent.hint;
	else
		return "!problem here!";
	}
	public set hint(value:string) {
		this._hint = value;
	}


	
// You can cook extra code here
public parent:AutoChallange = null;

}

export { AutoChallange };
