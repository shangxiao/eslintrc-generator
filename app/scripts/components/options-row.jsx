import React from 'react';

export default class OptionsRow extends React.Component {

  state = {
    manualValue: '',
    values: {},
  }

  getValueByType(val, key) {
    if (val.type == 'object') {
      return _.mapValues(val.properties, this.getValueByType, this);

    // id-length uses 'number' to declare integers
    } else if (val.type == 'integer' || val.type == 'number') {
      return parseInt(this.state.values[key]);
    } else if (val.type == 'array' && this.state.values[key]) {
      return this.state.values[key].split(',');
    } else {
      return this.state.values[key];
    }
  }

  getValue() {
    if (this.props.rule.manualOption && this.state.manualValue) {
      try {
        return JSON.parse(this.state.manualValue.replace(/\s/g, ''));
      } catch (e) {
        return "Error parsing input";
      }
    } else if (_.keys(this.state.values).length > 0) {
      if (_.isArray(this.props.rule.schema)) {
        return _.map(this.props.rule.schema, this.getValueByType, this);
      }
    }
  }

  flattenSchema(schema) {
    var args = [_.chain(schema)
      .filter((val, i) => {
        return val.type != 'object';
      })
      .reduce((acc, val, i) => {
        acc[i] = val;
        return acc;
      }, {})
      .value()];

    var list = _.chain(schema)
      .filter((val, i) => {
        return val.type == 'object';
      })
      .reduce((acc, val, key) => {
        return _.merge(acc, val.properties);
      }, {})
      .value();
    var stuff = _.merge.apply(_, args.concat(list));
    return stuff;
  }

  renderOptions(key, options) {
    var optionOptions = [''].concat(options).map((option) => {
      return <option key={option}>{option}</option>;
    });
    var update = (e) => {
      this.state.values[key] = e.target.value;
      this.forceUpdate();
    };
    return (
      <td key={key}>
        <select className="form-control" value={this.state.values[key]} onChange={update}>{optionOptions}</select>
      </td>
    );
  }

  renderBooleans(options) {
    if (options.length == 0) {
      return null;
    }
    var cboxes = _.map(options, (option) => {
      var onUpdate = (e) => {
        this.state.values[option] = e.target.checked;
        this.forceUpdate();
      };
      return <div key={option}><label><input type="checkbox" checked={this.state.values[option]} onChange={onUpdate} /> {option}</label></div>;
    }, this);
    return <td key="booleans">{cboxes}</td>;
  }

  renderArray(key) {
    var update = (e) => {
      this.state.values[key] = e.target.value;
      this.forceUpdate();
    };
    return (
      <td key={key}>
        <input type="text" onChange={update} value={this.state.values[key]} placeholder="comma separate values" className="form-control" />
      </td>
    );
  }

  renderText(key) {
    var update = (e) => {
      this.state.values[key] = e.target.value;
      this.forceUpdate();
    };
    return (
      <td key={key}>
        <input type="text" onChange={update} value={this.state.values[key]} className="form-control" />
      </td>
    );
  }

  render() {
    var optionHeaders = [];
    var optionCells = [];
    var optionComponents = null;
    var optionComponent = [];
    var optionDefaults = null;
    var className = "rule-options";
    var cellClassName = "rule-options-cell";

    if (!this.props.show) {
      className += " nothing";
      cellClassName += " nothing";
    }

    if (this.props.rule.manualOption) {
      var update = (e) => {
        this.setState({'manualValue': e.target.value});
      }
      optionComponents = <textarea key="manual" onChange={update} defaultValue={this.state.manualValue} className="form-control" rows="5"/>;

    } else if (this.props.rule.schema) {

      var schema = this.flattenSchema(this.props.rule.schema);

      var booleans = _.pick(schema, (val, key) => {
        return val.type == 'boolean';
      });
      var otherFields = _.pick(schema, (val, key) => {
        return val.type != 'boolean';
      });

      optionHeaders = _.map(_.keys(otherFields), (val) => {
        var heading = val;
        if (parseInt(val, 10) == val) {
          val = parseInt(val, 10) + 1;
          if (val == 1) {
            heading = '1st';
          } else if (val == 2) {
            heading = '2nd';
          } else if (val == 3) {
            heading = '3rd';
          } else if (val == 4) {
            heading = '4th';
          }
          heading += ' argument';
        }
        return <td className="option-header">{heading}</td>;
      });

      if (_.keys(booleans).length > 0) {
        optionHeaders.push(<td className="option-header">Options</td>);
      }


      for (var name in otherFields) {
        if (otherFields[name].enum) {
          optionCells.push(this.renderOptions(name, otherFields[name].enum));

        } else if (otherFields[name].type == 'array') {
          optionCells.push(this.renderArray(name));

        } else if (otherFields[name].type == 'integer' || otherFields[name].type == 'string' || otherFields[name].type == 'number') {
          optionCells.push(this.renderText(name));
        }
      }
      optionCells.push(this.renderBooleans(_.keys(booleans)));

      if (this.props.rule.defaultValues) {
        optionDefaults = _.map(this.props.rule.defaultValues, (value, name) => {
          return name + ': '  + value;
        }).join(', ');
        // optionComponents.push(<td>{optionDefaults}</td>);
      } else {
        // optionComponents.push(<td></td>);
      }

      optionComponents = (
        <table className="options-table">
          <tr>
            {optionHeaders}
          </tr>
          <tr>
            {optionCells}
          </tr>
        </table>
      );
    }

    return (
      <tr>
        <td colSpan="7" className={cellClassName}>
          <div className={className} id={this.props.rule.name + '-options'} key={this.props.rule.name + '-options'}>
            {optionComponents}
          </div>
        </td>
      </tr>
    );
  }
}

OptionsRow.defaultProps = { show: false };
