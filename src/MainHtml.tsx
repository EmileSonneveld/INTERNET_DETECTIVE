/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />


import { Utils } from "./utils";
import { IdModel } from "./IdModel";
import { IdModelState } from "./IdModelState";
import { AutocompleteField } from "./AutocompleteField";

class MainHtmlProps {

	public constructor() {
	}
	public idModel:IdModel;
}

class MainHtml extends React.Component<MainHtmlProps, {}> {


	public render() {


		var test = this.props.idModel.getCC();
		return (
		<div className="container">

			<div className="row">
				<div className="col-sm-12">
					<div className="panel panel-default">
						<div className="panel-body">{this.props.idModel.getCC().answerBad}</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-12">
					<img src="img/crazyPrince.png" />
				</div>
			</div>

			<div className="row">
				<AutocompleteField idModel={this.props.idModel}/>
			</div>

			<div id="myModal" className="modal fade" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">×</button>
							<h4 id="id_win_titel" className="modal-title">this.props.idModel.getCC().</h4>
						</div>
						<div className="modal-body">
							<p id="id_win_message">this.props.idModel.getCC().winmessage</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Previous</button>
							<button type="button" className="btn btn-default" data-dismiss="modal">Next!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export { MainHtml };
