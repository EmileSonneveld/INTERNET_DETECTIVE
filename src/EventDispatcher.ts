
class EventDispatcher{
	private onChanges : Array<any>;

	constructor(){
		this.onChanges = [];
	}

	public subscribe(onChange):void {
		this.onChanges.push(onChange);
	}
	public notify()
	{
		this.onChanges.forEach(function (cb) { cb({target:this}); });
	}
}

export {EventDispatcher};
