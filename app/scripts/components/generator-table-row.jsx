import React from 'react';
import _ from 'lodash';
import autobind from 'autobind-decorator';
import OptionsRow from './options-row';


export default class GeneratorTableRow extends React.Component {

  state = {
    warningChecked: false,
    errorChecked: false,
  }

  constructor(props) {
    super(props);

    if (props.input) {
      var state = Array.isArray(props.input) ? props.input[0] : props.input;

      if (state == 2) {
        this.state.errorChecked = true;
      } else if (state == 1) {
        this.state.warningChecked = true;
      }
    }
  }

  getValue() {
    var value = this.getEnabledValue();
    var option;

    if (value != 0 && this.refs.options) {
      option = this.refs.options.getValue();
    }

    return option ? [value].concat(option) : value;
  }

  getEnabledValue() {
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
    var url = "http://eslint.org/docs/rules/" + this.props.rule.name;
    var recommended = this.props.rule.recommended ? 'Yes' : '';
    var warningClass = 'checkbox-container ' + (this.state.warningChecked ? 'bg-info' : '');
    var errorClass = 'checkbox-container ' + (this.state.errorChecked ? 'bg-info' : '');
    var optionsRow = null;
    var input = null;

    if (this.props.input && Array.isArray(this.props.input)) {
      input = this.props.input.slice();
      input.splice(0, 1);
    }

    if ((this.props.rule.schema &&
        (this.props.rule.schema.length &&
         this.props.rule.schema.length > 0 ||
         Object.keys(this.props.rule.schema).length > 0)) ||
         this.props.rule.manualOption) {
      optionsRow = <OptionsRow ref="options" rule={this.props.rule} show={this.state.warningChecked || this.state.errorChecked} input={input} />;
    }

    return (
      <tbody style={{borderTop: 'none'}}>
        <tr>
          <td>{this.props.rule.name}</td>
          <td className="rule-description"><a className="rule-description" href={url}>{this.props.rule.description}</a></td>
          <td>{recommended}</td>
          <td className={warningClass}>
            <label className="stretch"><input type="checkbox" checked={this.state.warningChecked} onChange={this.updateWarning} /></label>
          </td>
          <td className={errorClass}>
            <label className="stretch"><input type="checkbox" checked={this.state.errorChecked} onChange={this.updateError} /></label>
          </td>
        </tr>
        {optionsRow}
      </tbody>
    );
  }
}
