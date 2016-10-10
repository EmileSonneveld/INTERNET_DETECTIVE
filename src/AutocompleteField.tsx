/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/react/react.d.ts" />


import { Utils } from "./utils";
import { IdModel } from "./IdModel";
import { IdModelState } from "./IdModelState";

class AutocompleteFieldProps {
	public constructor() {
	}
	public idModel:IdModel;
}

class AutocompleteFieldState {
	public constructor() {
	}
	public inputText:string;
}

class AutocompleteField extends React.Component<AutocompleteFieldProps, AutocompleteFieldState> {

	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
		};
	}

	public componentDidMount() {
	}

	public liClicked(evt:React.FormEvent) {
		console.log(evt);
	}

	public inputChanged(evt:React.FormEvent) {
		var el = evt.target as any;
		console.log(el);
		this.setState({inputText: el.value});
		console.log("inputChanged");
		this.forceUpdate();
		this.props.idModel.inform();
	}

	public render() {
		console.log("render");
		var accumulatedAutocomplete:Array<string> = this.props.idModel.GetAutoCompleteList().filter(function(msg)
			{
    if(msg.toLowerCase().includes(this.state.inputText.toLowerCase()))
return true;
			});

		var lis = accumulatedAutocomplete.map((response) => {
			return (
				<li onClick={this.liClicked}>
					<a href=""/>{response}
				</li>
			);
		});

		//var test = this.props.idModel.getCC();
		return (
		<div className="col-sm-12">
					<div className="dropup open">
						<ul id="id_unordered_autocomplete_list" className="dropdown-menu" aria-labelledby="dropdownMenu1">
							{lis}
						</ul>
					</div>
					<form data-example-id="simple-input-groups">
						<div className="input-group">
							<input id="id_textinput" type="text" className="form-control"
							onChange={this.inputChanged.bind(this)} placeholder="Answer..." aria-describedby="basic-addon3"
							value={this.state.inputText} autoComplete={false}/>
							<span className="input-group-btn">
								<button className="btn btn-default" type="button">Go!</button>
							</span>
						</div>
					</form>
				</div>
		);
	}
}

export { AutocompleteField };
