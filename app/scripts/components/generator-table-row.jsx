import React from 'react';
import autobind from 'autobind-decorator';


export default class GeneratorTableRow extends React.Component {

  state = {
    warningChecked: false,
    errorChecked: false,
  }

  getValue() {
    if (this.state.errorChecked) {
      return 2;
    } else if (this.state.warningChecked) {
      return 1;
    } else {
      return 0;
    }
  }

  @autobind
  updateWarning(e) {
    this.setState({warningChecked: e.target.checked});
    if (e.target.checked) {
      this.setState({errorChecked: false});
    }
  }

  @autobind
  updateError(e) {
    this.setState({errorChecked: e.target.checked});
    if (e.target.checked) {
      this.setState({warningChecked: false});
    }
  }

  render() {
    var url = "http://eslint.org/docs/rules/" + this.props.rule[1];
    var recommended = this.props.rule[3] == 'yes' ? 'Yes' : '';
    var warningClass = 'checkbox-container ' + (this.state.warningChecked ? 'bg-info' : '');
    var errorClass = 'checkbox-container ' + (this.state.errorChecked ? 'bg-info' : '');

    return (<tr>
      <td>{this.props.rule[1]}</td>
      <td><a href={url}>{this.props.rule[2]}</a></td>
      <td>{recommended}</td>
      <td className={warningClass}>
        <label className="stretch"><input type="checkbox" checked={this.state.warningChecked} onChange={this.updateWarning} /></label>
      </td>
      <td className={errorClass}>
        <label className="stretch"><input type="checkbox" checked={this.state.errorChecked} onChange={this.updateError} /></label>
      </td>
    </tr>);
  }
}
