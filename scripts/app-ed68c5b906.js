webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _componentsGeneratorTable = __webpack_require__(157);

	var _componentsGeneratorTable2 = _interopRequireDefault(_componentsGeneratorTable);

	_react2['default'].render(_react2['default'].createElement(_componentsGeneratorTable2['default'], null), document.getElementById('app-container'));

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _autobindDecorator = __webpack_require__(158);

	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

	var _generatorTableRow = __webpack_require__(159);

	var _generatorTableRow2 = _interopRequireDefault(_generatorTableRow);

	var _rules = __webpack_require__(160);

	var _rules2 = _interopRequireDefault(_rules);

	var GeneratorTable = (function (_React$Component) {
	  function GeneratorTable() {
	    _classCallCheck(this, GeneratorTable);

	    _get(Object.getPrototypeOf(GeneratorTable.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      eslintrc: '',
	      includeDisabled: false
	    };
	  }

	  _inherits(GeneratorTable, _React$Component);

	  _createDecoratedClass(GeneratorTable, [{
	    key: 'renderRows',
	    value: function renderRows() {
	      var currCategory = null;
	      return _rules2['default'].map(function (rule) {
	        var rows = [];
	        if (currCategory != rule[0]) {
	          rows.push(_react2['default'].createElement(
	            'tr',
	            null,
	            _react2['default'].createElement(
	              'td',
	              { colSpan: '5', className: 'separator' },
	              _react2['default'].createElement(
	                'h4',
	                null,
	                rule[0]
	              )
	            )
	          ));
	          currCategory = rule[0];
	        }
	        rows.push(_react2['default'].createElement(_generatorTableRow2['default'], { rule: rule, key: rule[1], ref: rule[1] }));
	        return rows;
	      });
	    }
	  }, {
	    key: 'eslintrc',
	    value: function eslintrc() {
	      var _this = this;

	      var refsToUse = Object.keys(this.refs);
	      if (!this.state.includeDisabled) {
	        refsToUse = refsToUse.filter(function (ref) {
	          return _this.refs[ref].getValue() != 0;
	        });
	      }
	      var rules = refsToUse.map(function (key) {
	        var ref = _this.refs[key];
	        return '"' + key + '": ' + ref.getValue();
	      });
	      var rulestring = rules.join(',\n    ');

	      return '{\n  "rules": {\n    ' + rulestring + '\n  }\n}';
	    }
	  }, {
	    key: 'generateEslintrc',
	    decorators: [_autobindDecorator2['default']],
	    value: function generateEslintrc(e) {
	      e.preventDefault();
	      this.setState({
	        eslintrc: this.eslintrc()
	      });
	    }
	  }, {
	    key: 'updateIncludeDisabled',
	    decorators: [_autobindDecorator2['default']],
	    value: function updateIncludeDisabled(e) {
	      this.setState({
	        includeDisabled: e.target.checked
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'form',
	        { role: 'form', className: 'container', onSubmit: this.generateEslintrc },
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'ESLint Rule Generator'
	        ),
	        _react2['default'].createElement(
	          'table',
	          { className: 'table table-bordered table-hover' },
	          _react2['default'].createElement(
	            'thead',
	            null,
	            _react2['default'].createElement(
	              'tr',
	              null,
	              _react2['default'].createElement(
	                'th',
	                null,
	                'Rule'
	              ),
	              _react2['default'].createElement(
	                'th',
	                null,
	                'Description'
	              ),
	              _react2['default'].createElement(
	                'th',
	                null,
	                'Recommended?'
	              ),
	              _react2['default'].createElement(
	                'th',
	                null,
	                'Warning'
	              ),
	              _react2['default'].createElement(
	                'th',
	                null,
	                'Error'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'tbody',
	            null,
	            this.renderRows()
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'post-form' },
	          _react2['default'].createElement(
	            'p',
	            null,
	            _react2['default'].createElement(
	              'label',
	              null,
	              _react2['default'].createElement('input', { type: 'checkbox', checked: this.state.includeDisabled, onChange: this.updateIncludeDisabled }),
	              ' Include disabled rules'
	            )
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            _react2['default'].createElement(
	              'button',
	              { className: 'btn btn-primary btn-lg' },
	              'Generate rules'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          _react2['default'].createElement('textarea', { className: 'form-control', rows: '20', value: this.state.eslintrc })
	        )
	      );
	    }
	  }]);

	  return GeneratorTable;
	})(_react2['default'].Component);

	exports['default'] = GeneratorTable;
	module.exports = exports['default'];

/***/ },

/***/ 158:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/**
	 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
	 *
	 * The decorator may be used on classes or methods
	 * ```
	 * @autobind
	 * class FullBound {}
	 *
	 * class PartBound {
	 *   @autobind
	 *   method () {}
	 * }
	 * ```
	 */
	exports['default'] = autobind;

	function autobind() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  if (args.length === 1) {
	    return boundClass.apply(undefined, args);
	  } else {
	    return boundMethod.apply(undefined, args);
	  }
	}

	/**
	 * Use boundMethod to bind all methods on the target.prototype
	 */
	function boundClass(target) {
	  // (Using reflect to get all keys including symbols)
	  Reflect.ownKeys(target.prototype).forEach(function (key) {
	    // Ignore special case target method
	    if (key === 'constructor') {
	      return;
	    }

	    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	    // Only methods need binding
	    if (typeof descriptor.value === 'function') {
	      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
	    }
	  });
	  return target;
	}

	/**
	 * Return a descriptor removing the value and returning a getter
	 * The getter will return a .bind version of the function
	 * and memoize the result against a symbol on the instance
	 */
	function boundMethod(target, key, descriptor) {
	  var fn = descriptor.value;

	  if (typeof fn !== 'function') {
	    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
	  }

	  return {
	    configurable: true,
	    get: function get() {
	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, key, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _autobindDecorator = __webpack_require__(158);

	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

	var GeneratorTableRow = (function (_React$Component) {
	  function GeneratorTableRow() {
	    _classCallCheck(this, GeneratorTableRow);

	    _get(Object.getPrototypeOf(GeneratorTableRow.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      warningChecked: false,
	      errorChecked: false
	    };
	  }

	  _inherits(GeneratorTableRow, _React$Component);

	  _createDecoratedClass(GeneratorTableRow, [{
	    key: 'getValue',
	    value: function getValue() {
	      if (this.state.errorChecked) {
	        return 2;
	      } else if (this.state.warningChecked) {
	        return 1;
	      } else {
	        return 0;
	      }
	    }
	  }, {
	    key: 'updateWarning',
	    decorators: [_autobindDecorator2['default']],
	    value: function updateWarning(e) {
	      this.setState({ warningChecked: e.target.checked });
	      if (e.target.checked) {
	        this.setState({ errorChecked: false });
	      }
	    }
	  }, {
	    key: 'updateError',
	    decorators: [_autobindDecorator2['default']],
	    value: function updateError(e) {
	      this.setState({ errorChecked: e.target.checked });
	      if (e.target.checked) {
	        this.setState({ warningChecked: false });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var url = 'http://eslint.org/docs/rules/' + this.props.rule[1];
	      var recommended = this.props.rule[3] == 'yes' ? 'Yes' : '';
	      var warningClass = 'checkbox-container ' + (this.state.warningChecked ? 'bg-info' : '');
	      var errorClass = 'checkbox-container ' + (this.state.errorChecked ? 'bg-info' : '');

	      return _react2['default'].createElement(
	        'tr',
	        null,
	        _react2['default'].createElement(
	          'td',
	          null,
	          this.props.rule[1]
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'a',
	            { href: url },
	            this.props.rule[2]
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          recommended
	        ),
	        _react2['default'].createElement(
	          'td',
	          { className: warningClass },
	          _react2['default'].createElement(
	            'label',
	            { className: 'stretch' },
	            _react2['default'].createElement('input', { type: 'checkbox', checked: this.state.warningChecked, onChange: this.updateWarning })
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          { className: errorClass },
	          _react2['default'].createElement(
	            'label',
	            { className: 'stretch' },
	            _react2['default'].createElement('input', { type: 'checkbox', checked: this.state.errorChecked, onChange: this.updateError })
	          )
	        )
	      );
	    }
	  }]);

	  return GeneratorTableRow;
	})(_react2['default'].Component);

	exports['default'] = GeneratorTableRow;
	module.exports = exports['default'];

/***/ },

/***/ 160:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var rules = [

	// Possible Errors
	// The following rules point out areas where you might have made mistakes.
	['Possible Errors', 'comma-dangle', 'disallow or enforce trailing commas', 'yes'], ['Possible Errors', 'no-cond-assign', 'disallow assignment in conditional expressions', 'yes'], ['Possible Errors', 'no-console', 'disallow use of console in the node environment', 'yes'], ['Possible Errors', 'no-constant-condition', 'disallow use of constant expressions in conditions', 'yes'], ['Possible Errors', 'no-control-regex', 'disallow control characters in regular expressions', 'yes'], ['Possible Errors', 'no-debugger', 'disallow use of debugger', 'yes'], ['Possible Errors', 'no-dupe-args', 'disallow duplicate arguments in functions', 'yes'], ['Possible Errors', 'no-dupe-keys', 'disallow duplicate keys when creating object literals', 'yes'], ['Possible Errors', 'no-duplicate-case', 'disallow a duplicate case label.', 'yes'], ['Possible Errors', 'no-empty-character-class', 'disallow the use of empty character classes in regular expressions', 'yes'], ['Possible Errors', 'no-empty', 'disallow empty statements', 'yes'], ['Possible Errors', 'no-ex-assign', 'disallow assigning to the exception in a catch block', 'yes'], ['Possible Errors', 'no-extra-boolean-cast', 'disallow double-negation boolean casts in a boolean context', 'yes'], ['Possible Errors', 'no-extra-parens', 'disallow unnecessary parentheses', 'no'], ['Possible Errors', 'no-extra-semi', 'disallow unnecessary semicolons', 'yes'], ['Possible Errors', 'no-func-assign', 'disallow overwriting functions written as function declarations', 'yes'], ['Possible Errors', 'no-inner-declarations', 'disallow function or variable declarations in nested blocks', 'yes'], ['Possible Errors', 'no-invalid-regexp', 'disallow invalid regular expression strings in the RegExp constructor', 'yes'], ['Possible Errors', 'no-irregular-whitespace', 'disallow irregular whitespace outside of strings and comments', 'yes'], ['Possible Errors', 'no-negated-in-lhs', 'disallow negation of the left operand of an in expression', 'yes'], ['Possible Errors', 'no-obj-calls', 'disallow the use of object properties of the global object (Math and JSON) as functions', 'yes'], ['Possible Errors', 'no-regex-spaces', 'disallow multiple spaces in a regular expression literal', 'yes'], ['Possible Errors', 'no-sparse-arrays', 'disallow sparse arrays', 'yes'], ['Possible Errors', 'no-unreachable', 'disallow unreachable statements after a return, throw, continue, or break statement', 'yes'], ['Possible Errors', 'use-isnan', 'disallow comparisons with the value NaN', 'yes'], ['Possible Errors', 'valid-jsdoc', 'Ensure JSDoc comments are valid', 'no'], ['Possible Errors', 'valid-typeof', 'Ensure that the results of typeof are compared against a valid string', 'yes'], ['Possible Errors', 'no-unexpected-multiline', 'Avoid code that looks like two expressions but is actually one', 'no'],

	// Best Practices
	// These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.
	['Best Practices', 'accessor-pairs', 'Enforces getter/setter pairs in objects', 'no'], ['Best Practices', 'block-scoped-var', 'treat var statements as if they were block scoped', 'no'], ['Best Practices', 'complexity', 'specify the maximum cyclomatic complexity allowed in a program', 'no'], ['Best Practices', 'consistent-return', 'require return statements to either always or never specify values', 'no'], ['Best Practices', 'curly', 'specify curly brace conventions for all control statements', 'no'], ['Best Practices', 'default-case', 'require default case in switch statements', 'no'], ['Best Practices', 'dot-notation', 'encourages use of dot notation whenever possible', 'no'], ['Best Practices', 'dot-location', 'enforces consistent newlines before or after dots', 'no'], ['Best Practices', 'eqeqeq', 'require the use of === and !==', 'no'], ['Best Practices', 'guard-for-in', 'make sure for-in loops have an if statement', 'no'], ['Best Practices', 'no-alert', 'disallow the use of alert, confirm, and prompt', 'no'], ['Best Practices', 'no-caller', 'disallow use of arguments.caller or arguments.callee', 'no'], ['Best Practices', 'no-div-regex', 'disallow division operators explicitly at beginning of regular expression', 'no'], ['Best Practices', 'no-else-return', 'disallow else after a return in an if', 'no'], ['Best Practices', 'no-empty-label', 'disallow use of labels for anything other than loops and switches', 'no'], ['Best Practices', 'no-eq-null', 'disallow comparisons to null without a type-checking operator', 'no'], ['Best Practices', 'no-eval', 'disallow use of eval()', 'no'], ['Best Practices', 'no-extend-native', 'disallow adding to native types', 'no'], ['Best Practices', 'no-extra-bind', 'disallow unnecessary function binding', 'no'], ['Best Practices', 'no-fallthrough', 'disallow fallthrough of case statements', 'yes'], ['Best Practices', 'no-floating-decimal', 'disallow the use of leading or trailing decimal points in numeric literals', 'no'], ['Best Practices', 'no-implicit-coercion', 'disallow the type conversions with shorter notations', 'no'], ['Best Practices', 'no-implied-eval', 'disallow use of eval()-like methods', 'no'], ['Best Practices', 'no-invalid-this', 'disallow this keywords outside of classes or class-like objects', 'no'], ['Best Practices', 'no-iterator', 'disallow usage of __iterator__ property', 'no'], ['Best Practices', 'no-labels', 'disallow use of labeled statements', 'no'], ['Best Practices', 'no-lone-blocks', 'disallow unnecessary nested blocks', 'no'], ['Best Practices', 'no-loop-func', 'disallow creation of functions within loops', 'no'], ['Best Practices', 'no-multi-spaces', 'disallow use of multiple spaces', 'no'], ['Best Practices', 'no-multi-str', 'disallow use of multiline strings', 'no'], ['Best Practices', 'no-native-reassign', 'disallow reassignments of native objects', 'no'], ['Best Practices', 'no-new-func', 'disallow use of new operator for Function object', 'no'], ['Best Practices', 'no-new-wrappers', 'disallows creating new instances of String,Number, and Boolean', 'no'], ['Best Practices', 'no-new', 'disallow use of the new operator when not part of an assignment or comparison', 'no'], ['Best Practices', 'no-octal-escape', 'disallow use of octal escape sequences in string literals, such as var foo = "Copyright \\251";', 'no'], ['Best Practices', 'no-octal', 'disallow use of octal literals', 'yes'], ['Best Practices', 'no-param-reassign', 'disallow reassignment of function parameters', 'no'], ['Best Practices', 'no-process-env', 'disallow use of process.env', 'no'], ['Best Practices', 'no-proto', 'disallow usage of __proto__ property', 'no'], ['Best Practices', 'no-redeclare', 'disallow declaring the same variable more than once', 'yes'], ['Best Practices', 'no-return-assign', 'disallow use of assignment in return statement', 'no'], ['Best Practices', 'no-script-url', 'disallow use of javascript: urls.', 'no'], ['Best Practices', 'no-self-compare', 'disallow comparisons where both sides are exactly the same', 'no'], ['Best Practices', 'no-sequences', 'disallow use of the comma operator', 'no'], ['Best Practices', 'no-throw-literal', 'restrict what can be thrown as an exception', 'no'], ['Best Practices', 'no-unused-expressions', 'disallow usage of expressions in statement position', 'no'], ['Best Practices', 'no-useless-call', 'disallow unnecessary .call() and .apply()', 'no'], ['Best Practices', 'no-void', 'disallow use of the void operator', 'no'], ['Best Practices', 'no-warning-comments', 'disallow usage of configurable warning terms in comments', 'e.g. TODO or FIXME', 'no'], ['Best Practices', 'no-with', 'disallow use of the with statement', 'no'], ['Best Practices', 'radix', 'require use of the second argument for parseInt()', 'no'], ['Best Practices', 'vars-on-top', 'require declaration of all vars at the top of their containing scope', 'no'], ['Best Practices', 'wrap-iife', 'require immediate function invocation to be wrapped in parentheses', 'no'], ['Best Practices', 'yoda', 'require or disallow Yoda conditions', 'no'],

	// Strict Mode
	// These rules relate to using strict mode.
	['Strict Mode', 'strict', 'controls location of Use Strict Directives', 'no'],

	// Variables
	// These rules have to do with variable declarations.
	['Variables', 'init-declarations', 'enforce or disallow variable initializations at definition', 'no'], ['Variables', 'no-catch-shadow', 'disallow the catch clause parameter name being the same as a variable in the outer scope', 'no'], ['Variables', 'no-delete-var', 'disallow deletion of variables', 'yes'], ['Variables', 'no-label-var', 'disallow labels that share a name with a variable', 'no'], ['Variables', 'no-shadow-restricted-names', 'disallow shadowing of names such as arguments', 'no'], ['Variables', 'no-shadow', 'disallow declaration of variables already declared in the outer scope', 'no'], ['Variables', 'no-undef-init', 'disallow use of undefined when initializing variables', 'no'], ['Variables', 'no-undef', 'disallow use of undeclared variables unless mentioned in a /*global */ block', 'yes'], ['Variables', 'no-undefined', 'disallow use of undefined variable', 'no'], ['Variables', 'no-unused-vars', 'disallow declaration of variables that are not used in the code', 'yes'], ['Variables', 'no-use-before-define', 'disallow use of variables before they are defined', 'no'],

	// Node.js
	// These rules are specific to JavaScript running on Node.js.
	['Node.js', 'callback-return', 'enforce return after a callback', 'no'], ['Node.js', 'handle-callback-err', 'enforce error handling in callbacks', 'no'], ['Node.js', 'no-mixed-requires', 'disallow mixing regular variable and require declarations', 'no'], ['Node.js', 'no-new-require', 'disallow use of new operator with the require function', 'no'], ['Node.js', 'no-path-concat', 'disallow string concatenation with __dirname and __filename', 'no'], ['Node.js', 'no-process-exit', 'disallow process.exit()', 'no'], ['Node.js', 'no-restricted-modules', 'restrict usage of specified node modules', 'no'], ['Node.js', 'no-sync', 'disallow use of synchronous methods', 'no'],

	// Stylistic Issues
	// These rules are purely matters of style and are quite subjective.
	['Stylistic Issues', 'array-bracket-spacing', 'enforce spacing inside array brackets', 'no'], ['Stylistic Issues', 'brace-style', 'enforce one true brace style', 'no'], ['Stylistic Issues', 'camelcase', 'require camel case names', 'no'], ['Stylistic Issues', 'comma-spacing', 'enforce spacing before and after comma', 'no'], ['Stylistic Issues', 'comma-style', 'enforce one true comma style', 'no'], ['Stylistic Issues', 'computed-property-spacing', 'require or disallow padding inside computed properties', 'no'], ['Stylistic Issues', 'consistent-this', 'enforce consistent naming when capturing the current execution context', 'no'], ['Stylistic Issues', 'eol-last', 'enforce newline at the end of file, with no multiple empty lines', 'no'], ['Stylistic Issues', 'func-names', 'require function expressions to have a name', 'no'], ['Stylistic Issues', 'func-style', 'enforce use of function declarations or expressions', 'no'], ['Stylistic Issues', 'id-length', 'this option enforces minimum and maximum identifier lengths (variable names, property names etc.) (off by default)', 'no'], ['Stylistic Issues', 'indent', 'specify tab or space width for your code', 'no'], ['Stylistic Issues', 'key-spacing', 'enforce spacing between keys and values in object literal properties', 'no'], ['Stylistic Issues', 'lines-around-comment', 'enforce empty lines around comments', 'no'], ['Stylistic Issues', 'linebreak-style', 'disallow mixed \'LF\' and \'CRLF\' as linebreaks', 'no'], ['Stylistic Issues', 'max-nested-callbacks', 'specify the maximum depth callbacks can be nested', 'no'], ['Stylistic Issues', 'new-cap', 'require a capital letter for constructors', 'no'], ['Stylistic Issues', 'new-parens', 'disallow the omission of parentheses when invoking a constructor with no arguments', 'no'], ['Stylistic Issues', 'newline-after-var', 'require or disallow an empty newline after variable declarations', 'no'], ['Stylistic Issues', 'no-array-constructor', 'disallow use of the Array constructor', 'no'], ['Stylistic Issues', 'no-continue', 'disallow use of the continue statement', 'no'], ['Stylistic Issues', 'no-inline-comments', 'disallow comments inline after code', 'no'], ['Stylistic Issues', 'no-lonely-if', 'disallow if as the only statement in an else block', 'no'], ['Stylistic Issues', 'no-mixed-spaces-and-tabs', 'disallow mixed spaces and tabs for indentation', 'yes'], ['Stylistic Issues', 'no-multiple-empty-lines', 'disallow multiple empty lines', 'no'], ['Stylistic Issues', 'no-nested-ternary', 'disallow nested ternary expressions', 'no'], ['Stylistic Issues', 'no-new-object', 'disallow the use of the Object constructor', 'no'], ['Stylistic Issues', 'no-spaced-func', 'disallow space between function identifier and application', 'no'], ['Stylistic Issues', 'no-ternary', 'disallow the use of ternary operators', 'no'], ['Stylistic Issues', 'no-trailing-spaces', 'disallow trailing whitespace at the end of lines', 'no'], ['Stylistic Issues', 'no-underscore-dangle', 'disallow dangling underscores in identifiers', 'no'], ['Stylistic Issues', 'no-unneeded-ternary', 'disallow the use of Boolean literals in conditional expressions', 'no'], ['Stylistic Issues', 'object-curly-spacing', 'require or disallow padding inside curly braces', 'no'], ['Stylistic Issues', 'one-var', 'require or disallow one variable declaration per function', 'no'], ['Stylistic Issues', 'operator-assignment', 'require assignment operator shorthand where possible or prohibit it entirely', 'no'], ['Stylistic Issues', 'operator-linebreak', 'enforce operators to be placed before or after line breaks', 'no'], ['Stylistic Issues', 'padded-blocks', 'enforce padding within blocks', 'no'], ['Stylistic Issues', 'quote-props', 'require quotes around object literal property names', 'no'], ['Stylistic Issues', 'quotes', 'specify whether backticks, double or single quotes should be used', 'no'], ['Stylistic Issues', 'id-match', 'require identifiers to match the provided regular expression', 'no'], ['Stylistic Issues', 'semi-spacing', 'enforce spacing before and after semicolons', 'no'], ['Stylistic Issues', 'semi', 'require or disallow use of semicolons instead of ASI', 'no'], ['Stylistic Issues', 'sort-vars', 'sort variables within the same declaration block', 'no'], ['Stylistic Issues', 'space-after-keywords', 'require a space after certain keywords', 'no'], ['Stylistic Issues', 'space-before-blocks', 'require or disallow a space before blocks', 'no'], ['Stylistic Issues', 'space-before-function-paren', 'require or disallow a space before function opening parenthesis', 'no'], ['Stylistic Issues', 'space-in-parens', 'require or disallow spaces inside parentheses', 'no'], ['Stylistic Issues', 'space-infix-ops', 'require spaces around operators', 'no'], ['Stylistic Issues', 'space-return-throw-case', 'require a space after return, throw, and case', 'no'], ['Stylistic Issues', 'space-unary-ops', 'require or disallow spaces before/after unary operators', 'no'], ['Stylistic Issues', 'spaced-comment', 'require or disallow a space immediately following the // or /* in a comment', 'no'], ['Stylistic Issues', 'wrap-regex', 'require regex literals to be wrapped in parentheses', 'no'],

	// ECMAScript 6
	// These rules are only relevant to ES6 environments.
	['ECMAScript 6', 'arrow-parens', 'require parens in arrow function arguments', 'no'], ['ECMAScript 6', 'arrow-spacing', 'require space before/after arrow function\'s arrow', 'no'], ['ECMAScript 6', 'constructor-super', 'verify calls of super() in constructors', 'no'], ['ECMAScript 6', 'generator-star-spacing', 'enforce spacing around the * in generator functions', 'no'], ['ECMAScript 6', 'no-class-assign', 'disallow modifying variables of class declarations', 'no'], ['ECMAScript 6', 'no-const-assign', 'disallow modifying variables that are declared using const', 'no'], ['ECMAScript 6', 'no-this-before-super', 'disallow use of this/super before calling super() in constructors.', 'no'], ['ECMAScript 6', 'no-var', 'require let or const instead of var', 'no'], ['ECMAScript 6', 'object-shorthand', 'require method and property shorthand syntax for object literals', 'no'], ['ECMAScript 6', 'prefer-const', 'suggest using const declaration for variables that are never modified after declared', 'no'], ['ECMAScript 6', 'prefer-spread', 'suggest using the spread operator instead of .apply().', 'no'], ['ECMAScript 6', 'prefer-reflect', 'suggest using Reflect methods where applicable', 'no'], ['ECMAScript 6', 'require-yield', 'disallow generator functions that do not have yield', 'no'],

	// Legacy
	// The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.
	['Legacy', 'max-depth', 'specify the maximum depth that blocks can be nested', 'no'], ['Legacy', 'max-len', 'specify the maximum length of a line in your program', 'no'], ['Legacy', 'max-params', 'limits the number of parameters that can be used in the function declaration.', 'no'], ['Legacy', 'max-statements', 'specify the maximum number of statement allowed in a function', 'no'], ['Legacy', 'no-bitwise', 'disallow use of bitwise operators', 'no'], ['Legacy', 'no-plusplus', 'disallow use of unary operators, ++ and --', 'no']];

	exports['default'] = rules;
	module.exports = exports['default'];

/***/ }

});