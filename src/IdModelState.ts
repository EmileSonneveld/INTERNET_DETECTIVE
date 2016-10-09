import { EventDispatcher } from "./EventDispatcher";

class IdModelState extends EventDispatcher {

	public constructor() {
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

export {IdModelState};
