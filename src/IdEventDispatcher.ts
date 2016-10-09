/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

/// <reference path="../typings/tsd.d.ts" />

class IdEventDispatcher
{

	public constructor()
	{
	}

	private onChanges : Array<(x:any)=>void> = [];

	public subscribe(onChange:(x: any)=>void):void {
		this.onChanges.push(onChange);
	}
	public notify()
	{
		this.onChanges.forEach(function (cb:(x: any)=>void) { cb({target:this}); });
	}
}

export {IdEventDispatcher};
