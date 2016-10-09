/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

/// <reference path="../typings/tsd.d.ts" />

import { IdModel } from "./IdModel";
import { MainHtml } from "./MainHtml";


interface IAppProps{
	model:IdModel;
}

interface IAppState {

}

class IdApp extends React.Component<IAppProps, IAppState> {

	public state : IAppState;

	constructor(props : IAppProps) {
		super(props);
		this.state = {
			nowShowing: 5,
			editing: null
		};
	}

	public componentDidMount() {
		var setState = this.setState;
	}

	public handleNewTodoKeyDown(event : __React.KeyboardEvent) {

		/*event.preventDefault();

		var val = React.findDOMNode<HTMLInputElement>(this.refs["newField"]).value.trim();

		if (val) {
			this.props.model.addTodo(val);
			React.findDOMNode<HTMLInputElement>(this.refs["newField"]).value = '';
		}*/
	}


	public render() {
		var footer;
		var mainHtml;
		console.log("render");

		return (
			<MainHtml idModel={this.props.model}>
			</MainHtml>
			);
	}
}

var model:IdModel = new IdModel('react-todos');

function render() {
	React.render(
		<IdApp model={model}/>,
		document.getElementsByClassName('IdApp')[0]
		);
}
console.log("something");
model.subscribe(render);
render();
