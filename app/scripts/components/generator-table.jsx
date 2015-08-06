import React from 'react';
import autobind from 'autobind-decorator';
import GeneratorTableRow from './generator-table-row';
import rules from '../rules';


export default class GeneratorTable extends React.Component {

  state = {
    eslintrc: '',
    includeDisabled: false,
  }

  renderRows() {
    var currCategory = null;
    return rules.map((rule) => {
      var rows = []
      if (currCategory != rule[0]) {
        rows.push(<tr><td colSpan="5" className="separator"><h4>{rule[0]}</h4></td></tr>);
        currCategory = rule[0];
      }
      rows.push(<GeneratorTableRow rule={rule} key={rule[1]} ref={rule[1]} />);
      return rows;
    });
  }

  eslintrc() {
    var refsToUse = Object.keys(this.refs);
    if (!this.state.includeDisabled) {
      refsToUse = refsToUse.filter((ref) => {
        return this.refs[ref].getValue() != 0;
      });
    }
    var rules = refsToUse.map((key) => {
      var ref = this.refs[key];
      return '"' + key + '": ' + ref.getValue();
    });
    var rulestring = rules.join(",\n    ");

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
          <p><button className="btn btn-primary btn-lg">Generate rules</button></p>
        </div>
        <p>
          <textarea className="form-control" rows="20" value={this.state.eslintrc}/>
        </p>
      </form>
    );
  }
}
