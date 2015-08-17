import React from 'react';
import autobind from 'autobind-decorator';
import GeneratorTableRow from './generator-table-row';
import rules from '../rules';


export default class GeneratorTable extends React.Component {

  state = {
    eslintrc: '',
    includeDisabled: false,
    includeDefaultOptions: false,
  }

  renderRows() {
    var currCategory = null;
    return Object.keys(rules).map((category) => {
      return [
        <tr><td colSpan="7" className="separator"><h4>{category}</h4></td></tr>
      ].concat(
        rules[category].map((rule) => {
          return <GeneratorTableRow rule={rule} key={rule.name} ref={rule.name} />;
        })
      );
    });
  }

  eslintrc() {
    var ruleValues = _.chain(this.refs)
      .keys()
      .reduce((acc, ref) => {
        acc[ref] = this.refs[ref].getValue();
        return acc;
      }, {}, this)
      .value();

    if (!this.state.includeDisabled) {
      ruleValues = _.reduce(ruleValues, (acc, val, key) => {
        if (val != 0) {
          acc[key] = val;
        }
        return acc;
      }, {});
    }

    var rulestring = _.map(ruleValues, (val, key) => {
      return '"' + key + '": ' + JSON.stringify(val);
    }).join(",\n    ");

    return `{
  "rules": {
    ${rulestring}
  }
}`;
  }

  @autobind
  generateEslintrc(e) {
    e.preventDefault();
    this.setState({
      eslintrc: this.eslintrc(),
    });
  }

  @autobind
  updateIncludeDisabled(e) {
    this.setState({
      includeDisabled: e.target.checked,
    });
  }

  @autobind
  updateIncludeDefaultOptions(e) {
    this.setState({
      includeDefaultOptions: e.target.checked,
    });
  }

  render() {
    return (
      <form role="form" className="container" onSubmit={this.generateEslintrc}>
        <h1>ESLint Rule Generator</h1>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Rule</th>
              <th>Description</th>
              <th>Recommended?</th>
              <th>Warning</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <div className="post-form">
          <p><label><input type="checkbox" checked={this.state.includeDisabled} onChange={this.updateIncludeDisabled} /> Include disabled rules</label></p>
          <p><label><input type="checkbox" checked={this.state.includeDefaultOptions} onChange={this.updateIncludeDefaultOptions} /> Include default options</label></p>
          <p><button className="btn btn-primary btn-lg">Generate rules</button></p>
        </div>
        <p>
          <textarea className="form-control" rows="20" value={this.state.eslintrc}/>
        </p>
      </form>
    );
  }
}
