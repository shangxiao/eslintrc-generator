import _ from 'lodash';
import commaDangle from 'eslint/lib/rules/comma-dangle';
import noCondAssign from 'eslint/lib/rules/no-cond-assign';
import noConsole from 'eslint/lib/rules/no-console';
import noConstantCondition from 'eslint/lib/rules/no-constant-condition';
import noControlRegex from 'eslint/lib/rules/no-control-regex';
import noDebugger from 'eslint/lib/rules/no-debugger';
import noDupeArgs from 'eslint/lib/rules/no-dupe-args';
import noDupeKeys from 'eslint/lib/rules/no-dupe-keys';
import noDuplicateCase from 'eslint/lib/rules/no-duplicate-case';
import noEmptyCharacterClass from 'eslint/lib/rules/no-empty-character-class';
import noEmpty from 'eslint/lib/rules/no-empty';
import noExAssign from 'eslint/lib/rules/no-ex-assign';
import noExtraBooleanCast from 'eslint/lib/rules/no-extra-boolean-cast';
import noExtraParens from 'eslint/lib/rules/no-extra-parens';
import noExtraSemi from 'eslint/lib/rules/no-extra-semi';
import noFuncAssign from 'eslint/lib/rules/no-func-assign';
import noInnerDeclarations from 'eslint/lib/rules/no-inner-declarations';
import noInvalidRegexp from 'eslint/lib/rules/no-invalid-regexp';
import noIrregularWhitespace from 'eslint/lib/rules/no-irregular-whitespace';
import noNegatedInLhs from 'eslint/lib/rules/no-negated-in-lhs';
import noObjCalls from 'eslint/lib/rules/no-obj-calls';
import noRegexSpaces from 'eslint/lib/rules/no-regex-spaces';
import noSparseArrays from 'eslint/lib/rules/no-sparse-arrays';
import noUnreachable from 'eslint/lib/rules/no-unreachable';
import useIsnan from 'eslint/lib/rules/use-isnan';
import validJsdoc from 'eslint/lib/rules/valid-jsdoc';
import validTypeof from 'eslint/lib/rules/valid-typeof';
import noUnexpectedMultiline from 'eslint/lib/rules/no-unexpected-multiline';
import accessorPairs from 'eslint/lib/rules/accessor-pairs';
import blockScopedVar from 'eslint/lib/rules/block-scoped-var';
import complexity from 'eslint/lib/rules/complexity';
import consistentReturn from 'eslint/lib/rules/consistent-return';
import curly from 'eslint/lib/rules/curly';
import defaultCase from 'eslint/lib/rules/default-case';
import dotNotation from 'eslint/lib/rules/dot-notation';
import dotLocation from 'eslint/lib/rules/dot-location';
import eqeqeq from 'eslint/lib/rules/eqeqeq';
import guardForIn from 'eslint/lib/rules/guard-for-in';
import noAlert from 'eslint/lib/rules/no-alert';
import noCaller from 'eslint/lib/rules/no-caller';
import noDivRegex from 'eslint/lib/rules/no-div-regex';
import noElseReturn from 'eslint/lib/rules/no-else-return';
import noEmptyLabel from 'eslint/lib/rules/no-empty-label';
import noEqNull from 'eslint/lib/rules/no-eq-null';
import noEval from 'eslint/lib/rules/no-eval';
import noExtendNative from 'eslint/lib/rules/no-extend-native';
import noExtraBind from 'eslint/lib/rules/no-extra-bind';
import noFallthrough from 'eslint/lib/rules/no-fallthrough';
import noFloatingDecimal from 'eslint/lib/rules/no-floating-decimal';
import noImplicitCoercion from 'eslint/lib/rules/no-implicit-coercion';
import noImpliedEval from 'eslint/lib/rules/no-implied-eval';
import noInvalidThis from 'eslint/lib/rules/no-invalid-this';
import noIterator from 'eslint/lib/rules/no-iterator';
import noLabels from 'eslint/lib/rules/no-labels';
import noLoneBlocks from 'eslint/lib/rules/no-lone-blocks';
import noLoopFunc from 'eslint/lib/rules/no-loop-func';
import noMultiSpaces from 'eslint/lib/rules/no-multi-spaces';
import noMultiStr from 'eslint/lib/rules/no-multi-str';
import noNativeReassign from 'eslint/lib/rules/no-native-reassign';
import noNewFunc from 'eslint/lib/rules/no-new-func';
import noNewWrappers from 'eslint/lib/rules/no-new-wrappers';
import noNew from 'eslint/lib/rules/no-new';
import noOctalEscape from 'eslint/lib/rules/no-octal-escape';
import noOctal from 'eslint/lib/rules/no-octal';
import noParamReassign from 'eslint/lib/rules/no-param-reassign';
import noProcessEnv from 'eslint/lib/rules/no-process-env';
import noProto from 'eslint/lib/rules/no-proto';
import noRedeclare from 'eslint/lib/rules/no-redeclare';
import noReturnAssign from 'eslint/lib/rules/no-return-assign';
import noScriptUrl from 'eslint/lib/rules/no-script-url';
import noSelfCompare from 'eslint/lib/rules/no-self-compare';
import noSequences from 'eslint/lib/rules/no-sequences';
import noThrowLiteral from 'eslint/lib/rules/no-throw-literal';
import noUnusedExpressions from 'eslint/lib/rules/no-unused-expressions';
import noUselessCall from 'eslint/lib/rules/no-useless-call';
import noVoid from 'eslint/lib/rules/no-void';
import noWarningComments from 'eslint/lib/rules/no-warning-comments';
import noWith from 'eslint/lib/rules/no-with';
import radix from 'eslint/lib/rules/radix';
import varsOnTop from 'eslint/lib/rules/vars-on-top';
import wrapIife from 'eslint/lib/rules/wrap-iife';
import yoda from 'eslint/lib/rules/yoda';
import strict from 'eslint/lib/rules/strict';
import initDeclarations from 'eslint/lib/rules/init-declarations';
import noCatchShadow from 'eslint/lib/rules/no-catch-shadow';
import noDeleteVar from 'eslint/lib/rules/no-delete-var';
import noLabelVar from 'eslint/lib/rules/no-label-var';
import noShadowRestrictedNames from 'eslint/lib/rules/no-shadow-restricted-names';
import noShadow from 'eslint/lib/rules/no-shadow';
import noUndefInit from 'eslint/lib/rules/no-undef-init';
import noUndef from 'eslint/lib/rules/no-undef';
import noUndefined from 'eslint/lib/rules/no-undefined';
import noUnusedVars from 'eslint/lib/rules/no-unused-vars';
import noUseBeforeDefine from 'eslint/lib/rules/no-use-before-define';
import callbackReturn from 'eslint/lib/rules/callback-return';
import handleCallbackErr from 'eslint/lib/rules/handle-callback-err';
import noMixedRequires from 'eslint/lib/rules/no-mixed-requires';
import noNewRequire from 'eslint/lib/rules/no-new-require';
import noPathConcat from 'eslint/lib/rules/no-path-concat';
import noProcessExit from 'eslint/lib/rules/no-process-exit';
import noRestrictedModules from 'eslint/lib/rules/no-restricted-modules';
import noSync from 'eslint/lib/rules/no-sync';
import arrayBracketSpacing from 'eslint/lib/rules/array-bracket-spacing';
import braceStyle from 'eslint/lib/rules/brace-style';
import camelcase from 'eslint/lib/rules/camelcase';
import commaSpacing from 'eslint/lib/rules/comma-spacing';
import commaStyle from 'eslint/lib/rules/comma-style';
import computedPropertySpacing from 'eslint/lib/rules/computed-property-spacing';
import consistentThis from 'eslint/lib/rules/consistent-this';
import eolLast from 'eslint/lib/rules/eol-last';
import funcNames from 'eslint/lib/rules/func-names';
import funcStyle from 'eslint/lib/rules/func-style';
import idLength from 'eslint/lib/rules/id-length';
import indent from 'eslint/lib/rules/indent';
import keySpacing from 'eslint/lib/rules/key-spacing';
import linesAroundComment from 'eslint/lib/rules/lines-around-comment';
import linebreakStyle from 'eslint/lib/rules/linebreak-style';
import maxNestedCallbacks from 'eslint/lib/rules/max-nested-callbacks';
import newCap from 'eslint/lib/rules/new-cap';
import newParens from 'eslint/lib/rules/new-parens';
import newlineAfterVar from 'eslint/lib/rules/newline-after-var';
import noArrayConstructor from 'eslint/lib/rules/no-array-constructor';
import noContinue from 'eslint/lib/rules/no-continue';
import noInlineComments from 'eslint/lib/rules/no-inline-comments';
import noLonelyIf from 'eslint/lib/rules/no-lonely-if';
import noMixedSpacesAndTabs from 'eslint/lib/rules/no-mixed-spaces-and-tabs';
import noMultipleEmptyLines from 'eslint/lib/rules/no-multiple-empty-lines';
import noNestedTernary from 'eslint/lib/rules/no-nested-ternary';
import noNewObject from 'eslint/lib/rules/no-new-object';
import noSpacedFunc from 'eslint/lib/rules/no-spaced-func';
import noTernary from 'eslint/lib/rules/no-ternary';
import noTrailingSpaces from 'eslint/lib/rules/no-trailing-spaces';
import noUnderscoreDangle from 'eslint/lib/rules/no-underscore-dangle';
import noUnneededTernary from 'eslint/lib/rules/no-unneeded-ternary';
import objectCurlySpacing from 'eslint/lib/rules/object-curly-spacing';
import oneVar from 'eslint/lib/rules/one-var';
import operatorAssignment from 'eslint/lib/rules/operator-assignment';
import operatorLinebreak from 'eslint/lib/rules/operator-linebreak';
import paddedBlocks from 'eslint/lib/rules/padded-blocks';
import quoteProps from 'eslint/lib/rules/quote-props';
import quotes from 'eslint/lib/rules/quotes';
import idMatch from 'eslint/lib/rules/id-match';
import semiSpacing from 'eslint/lib/rules/semi-spacing';
import semi from 'eslint/lib/rules/semi';
import sortVars from 'eslint/lib/rules/sort-vars';
import spaceAfterKeywords from 'eslint/lib/rules/space-after-keywords';
import spaceBeforeBlocks from 'eslint/lib/rules/space-before-blocks';
import spaceBeforeFunctionParen from 'eslint/lib/rules/space-before-function-paren';
import spaceInParens from 'eslint/lib/rules/space-in-parens';
import spaceInfixOps from 'eslint/lib/rules/space-infix-ops';
import spaceReturnThrowCase from 'eslint/lib/rules/space-return-throw-case';
import spaceUnaryOps from 'eslint/lib/rules/space-unary-ops';
import spacedComment from 'eslint/lib/rules/spaced-comment';
import wrapRegex from 'eslint/lib/rules/wrap-regex';
import arrowParens from 'eslint/lib/rules/arrow-parens';
import arrowSpacing from 'eslint/lib/rules/arrow-spacing';
import constructorSuper from 'eslint/lib/rules/constructor-super';
import generatorStarSpacing from 'eslint/lib/rules/generator-star-spacing';
import noClassAssign from 'eslint/lib/rules/no-class-assign';
import noConstAssign from 'eslint/lib/rules/no-const-assign';
import noThisBeforeSuper from 'eslint/lib/rules/no-this-before-super';
import noVar from 'eslint/lib/rules/no-var';
import objectShorthand from 'eslint/lib/rules/object-shorthand';
import preferConst from 'eslint/lib/rules/prefer-const';
import preferSpread from 'eslint/lib/rules/prefer-spread';
import preferReflect from 'eslint/lib/rules/prefer-reflect';
import requireYield from 'eslint/lib/rules/require-yield';
import maxDepth from 'eslint/lib/rules/max-depth';
import maxLen from 'eslint/lib/rules/max-len';
import maxParams from 'eslint/lib/rules/max-params';
import maxStatements from 'eslint/lib/rules/max-statements';
import noBitwise from 'eslint/lib/rules/no-bitwise';
import noPlusplus from 'eslint/lib/rules/no-plusplus';


// some notes:
// - the rule schemas don't contain any information about defaults (not sure if json schema can actually specify this or not)
// - the docs are also inconsistent with the options/args, some (func-style) not showing info about defaults
// - the rules are somewhat inconsistent in the way arguments are passed: some use args, options object or both
// - args naturally aren't named in the schema, so using index but makes hard for boolean as there's no string value to help identify
// - 'no-restricted-modules' is an odd rule in that it takes n args and specifies the schema different to others,
//   including the enabled flag (which is left out by all other rules)
// - 'func-style' specifies no default in the docs, but looks as though it's 'expression' from the source
// - 'key-spacing' is missing a default for the 'align' property, looks like 'colon' from the source
// - 'max-nested-callbacks' has no default at all, required argument
// - 'new-cap' capIsNewExceptions default is not overridable
// - 'no-mixed-spaces-and-tabs' has 'smart-tabs', true & false for options
// - 'no-multiple-empty-lines' no default in docs, specified in code
// - 'no-trailing-spaces' no default in docs, specified in code
// - 'object-curly-spacing' bool options needed to be determined from code
// - 'one-var' uses a complex oneOf schema
// - 'quote-props' uses anyOf
// - 'id-match' first argument is required
// - 'no-multi-spaces' uses regex for object props, and has bools nested under 'exceptions' property
// - 'comma-style' looks like it has a dynamic schema for the exceptions field of the options object
// - 'indent' dynamic schema
// - 'space-before-function-paren' has 'oneOf' in the schema
// - 'generator-star-spacing' also has a 'oneOf' schema


var requiredArgs = {
  'max-nested-callbacks': ['0'],
  'id-match': ['0'],
  'max-depth': ['0'],
};


var defaults = {
  'comma-dangle': {
    '0': 'never',
  },
  'no-cond-assign': {
    '0': 'except-parens',
  },
  'no-extra-parens': {
    '0': 'all',
  },
  'no-inner-declarations': {
    '0': 'functions',
  },
  'accessor-pairs': {
    'getWithoutSet': false,
    'setWithoutGet': true,
  },
  'curly': {
    '0': 'all',
  },
  'dot-notation': {
    'allowKeywords': true,
  },
  'dot-location': {
    '0': 'object',
  },
  'no-implicit-coercion': {
    'boolean': true,
    'number': true,
    'string': true,
  },
  // 'no-multi-spaces': {
    // 'Property': true,
    // 'VariableDeclaration': false,
    // 'ImportDeclaration': false,
  // },
  'no-param-reassign': {
    'props': false,
  },
  'no-redeclare': {
    'builtinGoals': false,
  },
  'no-return-assign': {
    '0': 'except-parens',
  },
  'wrap-iife': {
    '0': 'outside',
  },
  'yoda': {
    '0': 'never',
    'exceptRange': false,
    'onlyEquality': false,
  },
  'init-declarations': {
    '0': 'always',
  },
  'no-shadow': {
    'builtinGlobals': false,
    'hoist': 'functions',
  },
  'no-unused-vars': {
    'vars': 'all',
    'args': 'after-used',
  },
  'no-mixed-requires': {
    '0': 'false',
  },
  'array-bracket-spacing': {
    '0': 'never',
  },
  'brace-style': {
    '0': '1tbs',
    'allowSingleLine': false,
  },
  'camelcase': {
    'properties': 'always',
  },
  'computed-property-spacing': {
    '0': 'never',
  },
  'id-length': {
    'min': 2,
  },
  'no-warning-comments': {
    'terms': ['todo', 'fixme', 'xxx'],
    'location': 'start',
  },
  'comma-spacing': {
    'before': false,
    'after': true,
  },
  'comma-style': {
    '0': 'last',
  },
  'func-style': {
    '0': 'expression',
  },
  'key-spacing': {
    'beforeColon': false,
    'afterColon': true,
    'align': 'colon',
  },
  'lines-around-comment': {
    'beforeBlockComment': true,
    'afterBlockComment': false,
    'beforeLineComment': false,
    'afterLineComment': false,
    'allowBlockStart': false,
    'allowBlockEnd': false,
  },
  'linebreak-style': {
    '0': 'unix',
  },
  'new-cap': {
    'newIsCap': true,
    'capIsNew': true,
    'capIsNewExceptions': ['Array', 'Boolean', 'Date', 'Error', 'Function', 'Number', 'Object', 'RegExp', 'String', 'Symbol'],
  },
  'no-mixed-spaces-and-tabs': {
    '0': false,
  },
  'no-multiple-empty-lines': {
    'max': 2,
  },
  'no-trailing-spaces': {
    'skipBlankLines': false,
  },
  'object-curly-spacing': {
    '0': 'never',
    'arraysInObjects': false,
    'objectsInObjects': false,
  },
  'operator-linebreak': {
    '0': 'after',
  },
  'id-match': {
    'properties': true,
  },
  'semi-spacing': {
    'before': false,
    'after': true,
  },
  'semi': {
    '0': 'always',
  },
  'sort-vars': {
    'ignoreCase': false,
  },
  'space-in-parens': {
    '0': 'never',
  },
  'space-infix-ops': {
    'int32Hint': false,
  },
  'space-unary-ops': {
    'words': true,
    'nonwords': false,
  },
  'arrow-parens': {
    '0': 'always',
  },
  'object-shorthand': {
    '0': 'always',
  },
  'max-len': {
    '0': 80,
    '1': 4,
    'ignoreComments': false,
    'ignoreUrls': false,
  },
};


var rules = {

  // Possible Errors
  // The following rules point out areas where you might have made mistakes.
  'Possible Errors': [
    {
      'name': 'comma-dangle',
      'description': 'disallow or enforce trailing commas',
      'recommended': true,
      'schema': commaDangle.schema,
      // 'args': [{
        // 'type': 'string',
        // 'default': 'never',
        // 'args': ['always', 'always-multiline', 'never'],
      // }],
    },
    {
      'name': 'no-cond-assign',
      'description': 'disallow assignment in conditional expressions',
      'recommended': true,
      'schema': noCondAssign.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'except-parens',
      //   'enum': ['except-parens', 'always'],
      // }],
    },
    {
      'name': 'no-console',
      'description': 'disallow use of console in the node environment',
      'recommended': true,
      'schema': noConsole.schema,
    },
    {
      'name': 'no-constant-condition',
      'description': 'disallow use of constant expressions in conditions',
      'recommended': true,
      'schema': noConstantCondition.schema,
    },
    {
      'name': 'no-control-regex',
      'description': 'disallow control characters in regular expressions',
      'recommended': true,
      'schema': noControlRegex.schema,
    },
    {
      'name': 'no-debugger',
      'description': 'disallow use of debugger',
      'recommended': true,
      'schema': noDebugger.schema,
    },
    {
      'name': 'no-dupe-args',
      'description': 'disallow duplicate arguments in functions',
      'recommended': true,
      'schema': noDupeArgs.schema,
    },
    {
      'name': 'no-dupe-keys',
      'description': 'disallow duplicate keys when creating object literals',
      'recommended': true,
      'schema': noDupeKeys.schema,
    },
    {
      'name': 'no-duplicate-case',
      'description': 'disallow a duplicate case label.',
      'recommended': true,
      'schema': noDuplicateCase.schema,
    },
    {
      'name': 'no-empty-character-class',
      'description': 'disallow the use of empty character classes in regular expressions',
      'recommended': true,
      'schema': noEmptyCharacterClass.schema,
    },
    {
      'name': 'no-empty',
      'description': 'disallow empty statements',
      'recommended': true,
      'schema': noEmpty.schema,
    },
    {
      'name': 'no-ex-assign',
      'description': 'disallow assigning to the exception in a catch block',
      'recommended': true,
      'schema': noExAssign.schema,
    },
    {
      'name': 'no-extra-boolean-cast',
      'description': 'disallow double-negation boolean casts in a boolean context',
      'recommended': true,
      'schema': noExtraBooleanCast.schema,
    },
    {
      'name': 'no-extra-parens',
      'description': 'disallow unnecessary parentheses',
      'recommended': false,
      'schema': noExtraParens.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'all',
      //   'enum': ['all', 'functions'],
      // }],
    },
    {
      'name': 'no-extra-semi',
      'description': 'disallow unnecessary semicolons',
      'recommended': true,
      'schema': noExtraSemi.schema,
    },
    {
      'name': 'no-func-assign',
      'description': 'disallow overwriting functions written as function declarations',
      'recommended': true,
      'schema': noFuncAssign.schema,
    },
    {
      'name': 'no-inner-declarations',
      'description': 'disallow function or variable declarations in nested blocks',
      'recommended': true,
      'schema': noInnerDeclarations.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'functions',
      //   'values': ['functions', 'both'],
      // }],
    },
    {
      'name': 'no-invalid-regexp',
      'description': 'disallow invalid regular expression strings in the RegExp constructor',
      'recommended': true,
      'schema': noInvalidRegexp.schema,
    },
    {
      'name': 'no-irregular-whitespace',
      'description': 'disallow irregular whitespace outside of strings and comments',
      'recommended': true,
      'schema': noIrregularWhitespace.schema,
    },
    {
      'name': 'no-negated-in-lhs',
      'description': 'disallow negation of the left operand of an in expression',
      'recommended': true,
      'schema': noNegatedInLhs.schema,
    },
    {
      'name': 'no-obj-calls',
      'description': 'disallow the use of object properties of the global object (Math and JSON) as functions',
      'recommended': true,
      'schema': noObjCalls.schema,
    },
    {
      'name': 'no-regex-spaces',
      'description': 'disallow multiple spaces in a regular expression literal',
      'recommended': true,
      'schema': noRegexSpaces.schema,
    },
    {
      'name': 'no-sparse-arrays',
      'description': 'disallow sparse arrays',
      'recommended': true,
      'schema': noSparseArrays.schema,
    },
    {
      'name': 'no-unreachable',
      'description': 'disallow unreachable statements after a return, throw, continue, or break statement',
      'recommended': true,
      'schema': noUnreachable.schema,
    },
    {
      'name': 'use-isnan',
      'description': 'disallow comparisons with the value NaN',
      'recommended': true,
      'schema': useIsnan.schema,
    },
    {
      'name': 'valid-jsdoc',
      'description': 'Ensure JSDoc comments are valid',
      'recommended': false,
      'manualOption': true,
      'schema': validJsdoc.schema,
      //'args': {
        //'bools': ['requireReturn', 'requireParamDescription', 'requireParamDescription'],
      //},
    }, // TODO options
    {
      'name': 'valid-typeof',
      'description': 'Ensure that the results of typeof are compared against a valid string',
      'recommended': true,
      'schema': validTypeof.schema,
    },
    {
      'name': 'no-unexpected-multiline',
      'description': 'Avoid code that looks like two expressions but is actually one',
      'recommended': false,
      'schema': noUnexpectedMultiline.schema,
    },
  ],

  // Best Practices
  // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.
  'Best Practices': [
    {
      'name': 'accessor-pairs',
      'description': 'Enforces getter/setter pairs in objects',
      'recommended': false,
      'schema': accessorPairs.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'getWithoutSet': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //     'setWithoutGet': {
      //       'type': 'boolean',
      //       'default': true,
      //     },
      //   },
      // }],
    },
    {
      'name': 'block-scoped-var',
      'description': 'treat var statements as if they were block scoped',
      'recommended': false,
      'schema': blockScopedVar.schema,
    },
    {
      'name': 'complexity',
      'description': 'specify the maximum cyclomatic complexity allowed in a program',
      'recommended': false,
      'schema': complexity.schema,
    },
    {
      'name': 'consistent-return',
      'description': 'require return statements to either always or never specify values',
      'recommended': false,
      'schema': consistentReturn.schema,
    },
    {
      'name': 'curly',
      'description': 'specify curly brace conventions for all control statements',
      'recommended': false,
      'schema': curly.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'all',
      //   'enum': ['all', 'multi', 'multi-line', 'multi-or-nest'],
      // }],
    },
    {
      'name': 'default-case',
      'description': 'require default case in switch statements',
      'recommended': false,
      'schema': defaultCase.schema,
    },
    {
      'name': 'dot-notation',
      'description': 'encourages use of dot notation whenever possible',
      'recommended': false,
      'schema': dotNotation.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'allowKeywords': {
      //       'type': 'boolean',
      //       'default': true,
      //     },
      //     'allowPattern': {
      //       'type': 'string', // is there a regex type?
      //     },
      //   },
      // }],
    },
    {
      'name': 'dot-location',
      'description': 'enforces consistent newlines before or after dots',
      'recommended': false,
      'schema': dotLocation.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'object',
      //   'enum': ['object', 'property'],
      // }],
    },
    {
      'name': 'eqeqeq',
      'description': 'require the use of === and !==',
      'recommended': false,
      'schema': eqeqeq.schema,
      // 'args': [{
      //   'type': 'string',
      //   'values': ['smart', 'allow-null'],
      // }],
    },
    {
      'name': 'guard-for-in',
      'description': 'make sure for-in loops have an if statement',
      'recommended': false,
      'schema': guardForIn.schema,
    },
    {
      'name': 'no-alert',
      'description': 'disallow the use of alert, confirm, and prompt',
      'recommended': false,
      'schema': noAlert.schema,
    },
    {
      'name': 'no-caller',
      'description': 'disallow use of arguments.caller or arguments.callee',
      'recommended': false,
      'schema': noCaller.schema,
    },
    {
      'name': 'no-div-regex',
      'description': 'disallow division operators explicitly at beginning of regular expression',
      'recommended': false,
      'schema': noDivRegex.schema,
    },
    {
      'name': 'no-else-return',
      'description': 'disallow else after a return in an if',
      'recommended': false,
      'schema': noElseReturn.schema,
    },
    {
      'name': 'no-empty-label',
      'description': 'disallow use of labels for anything other than loops and switches',
      'recommended': false,
      'schema': noEmptyLabel.schema,
    },
    {
      'name': 'no-eq-null',
      'description': 'disallow comparisons to null without a type-checking operator',
      'recommended': false,
      'schema': noEqNull.schema,
    },
    {
      'name': 'no-eval',
      'description': 'disallow use of eval()',
      'recommended': false,
      'schema': noEval.schema,
    },
    {
      'name': 'no-extend-native',
      'description': 'disallow adding to native types',
      'recommended': false,
      'manualOption': true,
      'schema': noExtendNative.schema,
      // 'args': {
      //   'type': 'object',
      //   'properties': {
      //     'exceptions': {
      //       'type': 'array',
      //       'items': {
      //         'type': 'string',
      //       },
      //     },
      //   },
      // },
    },
    {
      'name': 'no-extra-bind',
      'description': 'disallow unnecessary function binding',
      'recommended': false,
      'schema': noExtraBind.schema,
    },
    {
      'name': 'no-fallthrough',
      'description': 'disallow fallthrough of case statements',
      'recommended': true,
      'schema': noFallthrough.schema,
    },
    {
      'name': 'no-floating-decimal',
      'description': 'disallow the use of leading or trailing decimal points in numeric literals',
      'recommended': false,
      'schema': noFloatingDecimal.schema,
    },
    {
      'name': 'no-implicit-coercion',
      'description': 'disallow the type conversions with shorter notations',
      'recommended': false,
      'schema': noImplicitCoercion.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'boolean': {
      //       'type': 'boolean',
      //       'default': true,
      //     },
      //     'number': {
      //       'type': 'boolean',
      //       'default': true,
      //     },
      //     'string': {
      //       'type': 'boolean',
      //       'default': true,
      //     },
      //   }
      // }],
    },
    {
      'name': 'no-implied-eval',
      'description': 'disallow use of eval()-like methods',
      'recommended': false,
      'schema': noImpliedEval.schema,
    },
    {
      'name': 'no-invalid-this',
      'description': 'disallow this keywords outside of classes or class-like objects',
      'recommended': false,
      'schema': noInvalidThis.schema,
    },
    {
      'name': 'no-iterator',
      'description': 'disallow usage of __iterator__ property',
      'recommended': false,
      'schema': noIterator.schema,
    },
    {
      'name': 'no-labels',
      'description': 'disallow use of labeled statements',
      'recommended': false,
      'schema': noLabels.schema,
    },
    {
      'name': 'no-lone-blocks',
      'description': 'disallow unnecessary nested blocks',
      'recommended': false,
      'schema': noLoneBlocks.schema,
    },
    {
      'name': 'no-loop-func',
      'description': 'disallow creation of functions within loops',
      'recommended': false,
      'schema': noLoopFunc.schema,
    },
    {
      'name': 'no-multi-spaces',
      'description': 'disallow use of multiple spaces',
      'recommended': false,
      'manualOption': true,
      // 'schema': noMultiSpaces.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'Property': {
      //       'type': 'boolean',
      //       'default': true,
      //     },
      //     'VariableDeclaration': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //     'ImportDeclaration': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //   },
      // }],
    },
    {
      'name': 'no-multi-str',
      'description': 'disallow use of multiline strings',
      'recommended': false,
      'schema': noMultiStr.schema,
    },
    {
      'name': 'no-native-reassign',
      'description': 'disallow reassignments of native objects',
      'recommended': false,
      'manualOption': true,
      'schema': noNativeReassign.schema,
      // 'args': {
      //   'type': 'object',
      //   'properties': {
      //     'exceptions': {
      //       'type': 'array',
      //       'items': {
      //         'type': 'string',
      //       },
      //     },
      //   },
      // },
    },
    {
      'name': 'no-new-func',
      'description': 'disallow use of new operator for Function object',
      'recommended': false,
      'schema': noNewFunc.schema,
    },
    {
      'name': 'no-new-wrappers',
      'description': 'disallows creating new instances of String,Number, and Boolean',
      'recommended': false,
      'schema': noNewWrappers.schema,
    },
    {
      'name': 'no-new',
      'description': 'disallow use of the new operator when not part of an assignment or comparison',
      'recommended': false,
      'schema': noNew.schema,
    },
    {
      'name': 'no-octal-escape',
      'description': 'disallow use of octal escape sequences in string literals, such as var foo = "Copyright \\251";',
      'recommended': false,
      'schema': noOctalEscape.schema,
    },
    {
      'name': 'no-octal',
      'description': 'disallow use of octal literals',
      'recommended': true,
      'schema': noOctal.schema,
    },
    {
      'name': 'no-param-reassign',
      'description': 'disallow reassignment of function parameters',
      'recommended': false,
      'schema': noParamReassign.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'props': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //   },
      // }],
    },
    {
      'name': 'no-process-env',
      'description': 'disallow use of process.env',
      'recommended': false,
      'schema': noProcessEnv.schema,
    },
    {
      'name': 'no-proto',
      'description': 'disallow usage of __proto__ property',
      'recommended': false,
      'schema': noProto.schema,
    },
    {
      'name': 'no-redeclare',
      'description': 'disallow declaring the same variable more than once',
      'recommended': true,
      'schema': noRedeclare.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'builtinGlobals': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //   },
      // }],
    },
    {
      'name': 'no-return-assign',
      'description': 'disallow use of assignment in return statement',
      'recommended': false,
      'schema': noReturnAssign.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'except-parens',
      //   'enum': ['always', 'except-parens'],
      // }],
    },
    {
      'name': 'no-script-url',
      'description': 'disallow use of javascript: urls.',
      'recommended': false,
      'schema': noScriptUrl.schema,
    },
    {
      'name': 'no-self-compare',
      'description': 'disallow comparisons where both sides are exactly the same',
      'recommended': false,
      'schema': noSelfCompare.schema,
    },
    {
      'name': 'no-sequences',
      'description': 'disallow use of the comma operator',
      'recommended': false,
      'schema': noSequences.schema,
    },
    {
      'name': 'no-throw-literal',
      'description': 'restrict what can be thrown as an exception',
      'recommended': false,
      'schema': noThrowLiteral.schema,
    },
    {
      'name': 'no-unused-expressions',
      'description': 'disallow usage of expressions in statement position',
      'recommended': false,
      'schema': noUnusedExpressions.schema,
    },
    {
      'name': 'no-useless-call',
      'description': 'disallow unnecessary .call() and .apply()',
      'recommended': false,
      'schema': noUselessCall.schema,
    },
    {
      'name': 'no-void',
      'description': 'disallow use of the void operator',
      'recommended': false,
      'schema': noVoid.schema,
    },
    {
      'name': 'no-warning-comments',
      'description': 'disallow usage of configurable warning terms in comments - e.g. TODO or FIXME',
      'recommended': false,
      'schema': noWarningComments.schema,
    },
    {
      'name': 'no-with',
      'description': 'disallow use of the with statement',
      'recommended': false,
      'schema': noWith.schema,
    },
    {
      'name': 'radix',
      'description': 'require use of the second argument for parseInt()',
      'recommended': false,
      'schema': radix.schema,
    },
    {
      'name': 'vars-on-top',
      'description': 'require declaration of all vars at the top of their containing scope',
      'recommended': false,
      'schema': varsOnTop.schema,
    },
    {
      'name': 'wrap-iife',
      'description': 'require immediate function invocation to be wrapped in parentheses',
      'recommended': false,
      'schema': wrapIife.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'outside',
      //   'enum': ['outside', 'inside', 'any'],
      // }],
    },
    {
      'name': 'yoda',
      'description': 'require or disallow Yoda conditions',
      'recommended': false,
      'schema': yoda.schema,
      // 'args': [{
      //   'type': 'string',
      //   'enum': ['never', 'always'],
      //   'default': 'never',
      // }, {
      //   'type': 'object',
      //   'properties': {
      //     'exceptRange': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //     'onlyEquality': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //   },
      // }],
    },
  ],

  // Strict Mode
  // These rules relate to using strict mode.
  'Strict Mode': [
    {
      'name': 'strict',
      'description': 'controls location of Use Strict Directives',
      'recommended': false,
      'schema': strict.schema,
    },
  ],

  // Variables
  // These rules have to do with variable declarations.
  'Variables': [
    {
      'name': 'init-declarations',
      'description': 'enforce or disallow variable initializations at definition',
      'recommended': false,
      'schema': initDeclarations.schema,
      // 'args': [{
      //   'type': 'string',
      //   'default': 'always',
      //   'enum': ['always', 'never'],
      // }],
    },
    {
      'name': 'no-catch-shadow',
      'description': 'disallow the catch clause parameter name being the same as a variable in the outer scope',
      'recommended': false,
      'schema': noCatchShadow.schema,
    },
    {
      'name': 'no-delete-var',
      'description': 'disallow deletion of variables',
      'recommended': true,
      'schema': noDeleteVar.schema,
    },
    {
      'name': 'no-label-var',
      'description': 'disallow labels that share a name with a variable',
      'recommended': false,
      'schema': noLabelVar.schema,
    },
    {
      'name': 'no-shadow-restricted-names',
      'description': 'disallow shadowing of names such as arguments',
      'recommended': false,
      'schema': noShadowRestrictedNames.schema,
    },
    {
      'name': 'no-shadow',
      'description': 'disallow declaration of variables already declared in the outer scope',
      'recommended': false,
      'schema': noShadow.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'builtinGlobals': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //     'hoist': {
      //       'type': 'string',
      //       'enum': ['all', 'functions', 'never'],
      //       'default': 'functions',
      //     },
      //   },
      // }],
    },
    {
      'name': 'no-undef-init',
      'description': 'disallow use of undefined when initializing variables',
      'recommended': false,
      'schema': noUndefInit.schema,
    },
    {
      'name': 'no-undef',
      'description': 'disallow use of undeclared variables unless mentioned in a /*global */ block',
      'recommended': true,
      'schema': noUndef.schema,
    },
    {
      'name': 'no-undefined',
      'description': 'disallow use of undefined variable',
      'recommended': false,
      'schema': noUndefined.schema,
    },
    {
      'name': 'no-unused-vars',
      'description': 'disallow declaration of variables that are not used in the code',
      'recommended': true,
      'schema': noUnusedVars.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'vars': {
      //       'type': 'string',
      //       'enum': ['all', 'local'],
      //       'default': 'all',
      //     },
      //     'args': {
      //       'type': 'string',
      //       'enum': ['all', 'after-used', 'none'],
      //       'default': 'after-used',
      //     },
      //   },
      // }],
    },
    {
      'name': 'no-use-before-define',
      'description': 'disallow use of variables before they are defined',
      'recommended': false,
      'schema': noUseBeforeDefine.schema,
    },
  ],

  // Node.js
  // These rules are specific to JavaScript running on Node.js.
  'Node.js': [
    {
      'name': 'callback-return',
      'description': 'enforce return after a callback',
      'recommended': false,
      'schema': callbackReturn.schema,
      // 'args': [{
      //   'type': 'array',
      //   'items': {
      //     'type': 'string',
      //   },
      // }],
    },
    {
      'name': 'handle-callback-err',
      'description': 'enforce error handling in callbacks',
      'recommended': false,
      'schema': handleCallbackErr.schema,
    },
    {
      'name': 'no-mixed-requires',
      'description': 'disallow mixing regular variable and require declarations',
      'recommended': false,
      'schema': noMixedRequires.schema,
      // 'args': [{
      //   'type': 'boolean',
      //   'default': false,
      // }],
    },
    {
      'name': 'no-new-require',
      'description': 'disallow use of new operator with the require function',
      'recommended': false,
      'schema': noNewRequire.schema,
    },
    {
      'name': 'no-path-concat',
      'description': 'disallow string concatenation with __dirname and __filename',
      'recommended': false,
      'schema': noPathConcat.schema,
    },
    {
      'name': 'no-process-exit',
      'description': 'disallow process.exit()',
      'recommended': false,
      'schema': noProcessExit.schema,
    },
    {
      'name': 'no-restricted-modules',
      'description': 'restrict usage of specified node modules',
      'recommended': false,
      'manualOption': true,
      'schema': noRestrictedModules.schema,
    }, // TODO options
    {
      'name': 'no-sync',
      'description': 'disallow use of synchronous methods',
      'recommended': false,
      'schema': noSync.schema,
    },
  ],

  // Stylistic Issues
  // These rules are purely matters of style and are quite subjective.
  'Stylistic Issues': [
    {
      'name': 'array-bracket-spacing',
      'description': 'enforce spacing inside array brackets',
      'recommended': false,
      'schema': arrayBracketSpacing.schema,
      // 'args': [{
      //   'type': 'string',
      //   'enum': ['never', 'always'],
      //   'default': 'never',
      // }, {
      //   'type': 'object',
      //   // the defaults here depend on the first setting
      //   'properties': {
      //     'singleValue': {
      //       'type': 'boolean',
      //     },
      //     'objectsInArrays': {
      //       'type': 'boolean',
      //     },
      //     'arraysInArrays': {
      //       'type': 'boolean',
      //     },
      //   },
      // }],
    },
    {
      'name': 'brace-style',
      'description': 'enforce one true brace style',
      'recommended': false,
      'schema': braceStyle.schema,
      // 'args': [{
      //   'type': 'string',
      //   'enum': ['1tbs', 'stroustrup'],
      //   'default': '1tbs',
      // }, {
      //   'type': 'object',
      //   'properties': {
      //     'allowSingleLine': {
      //       'type': 'boolean',
      //       'default': false,
      //     },
      //   },
      // }],
    },
    {
      'name': 'camelcase',
      'description': 'require camel case names',
      'recommended': false,
      'schema': camelcase.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'properties': {
      //       'enum': ['always', 'never'],
      //       'default': 'always'
      //     },
      //   },
      // }],
    },
    {
      'name': 'comma-spacing',
      'description': 'enforce spacing before and after comma',
      'recommended': false,
      'schema': commaSpacing.schema,
    },
    {
      'name': 'comma-style',
      'description': 'enforce one true comma style',
      'recommended': false,
      'manualOption': true,
      'schema': commaStyle.schema,
    },
    {
      'name': 'computed-property-spacing',
      'description': 'require or disallow padding inside computed properties',
      'recommended': false,
      'schema': computedPropertySpacing.schema,
      // 'args': [{
      //   'type': 'string',
      //   'enum': ['never', 'always'],
      //   'default': 'never',
      // }],
    },
    {
      'name': 'consistent-this',
      'description': 'enforce consistent naming when capturing the current execution context',
      'recommended': false,
      'schema': consistentThis.schema,
      // 'args': [{
      //   'type': 'string',
      // }],
    },
    {
      'name': 'eol-last',
      'description': 'enforce newline at the end of file, with no multiple empty lines',
      'recommended': false,
      'schema': eolLast.schema,
    },
    {
      'name': 'func-names',
      'description': 'require function expressions to have a name',
      'recommended': false,
      'schema': funcNames.schema,
    },
    {
      'name': 'func-style',
      'description': 'enforce use of function declarations or expressions',
      'recommended': false,
      'schema': funcStyle.schema,
      // 'args': [{
      //   'type': 'string',
      //   'enum': ['declaration', 'expression'],
      //   // required?
      // }],
    },
    {
      'name': 'id-length',
      'description': 'this option enforces minimum and maximum identifier lengths (variable names, property names etc.) (off by default)',
      'recommended': false,
      'schema': idLength.schema,
      // 'args': [{
      //   'type': 'object',
      //   'properties': {
      //     'min': {
      //       'type': 'integer',
      //       'default': 2,
      //     },
      //     'max': {
      //       'type': 'integer',
      //     },
      //     'exceptions': {
      //       'type': 'array',
      //       'items': {
      //         'type': 'string',
      //       },
      //     },
      //   },
      // }],
    },
    {
      'name': 'indent',
      'description': 'specify tab or space width for your code',
      'recommended': false,
      'manualOption': true,
      'schema': indent.schema,
      // 'args': [{
      //   'oneOf': [
      //     {'type': 'string', 'enum': 'tab'},
      //     {'type': 'integer'},
      //   ],
      // }, {
      //   'type': 'object',

      // }]
    },
    {
      'name': 'key-spacing',
      'description': 'enforce spacing between keys and values in object literal properties',
      'recommended': false,
      'schema': keySpacing.schema,
    },
    {
      'name': 'lines-around-comment',
      'description': 'enforce empty lines around comments',
      'recommended': false,
      'schema': linesAroundComment.schema,
    },
    {
      'name': 'linebreak-style',
      'description': 'disallow mixed \'LF\' and \'CRLF\' as linebreaks',
      'recommended': false,
      'schema': linebreakStyle.schema,
    },
    {
      'name': 'max-nested-callbacks',
      'description': 'specify the maximum depth callbacks can be nested',
      'recommended': false,
      'schema': maxNestedCallbacks.schema,
    },
    {
      'name': 'new-cap',
      'description': 'require a capital letter for constructors',
      'recommended': false,
      'schema': newCap.schema,
    },
    {
      'name': 'new-parens',
      'description': 'disallow the omission of parentheses when invoking a constructor with no arguments',
      'recommended': false,
      'schema': newParens.schema,
    },
    {
      'name': 'newline-after-var',
      'description': 'require or disallow an empty newline after variable declarations',
      'recommended': false,
      'schema': newlineAfterVar.schema,
    },
    {
      'name': 'no-array-constructor',
      'description': 'disallow use of the Array constructor',
      'recommended': false,
      'schema': noArrayConstructor.schema,
    },
    {
      'name': 'no-continue',
      'description': 'disallow use of the continue statement',
      'recommended': false,
      'schema': noContinue.schema,
    },
    {
      'name': 'no-inline-comments',
      'description': 'disallow comments inline after code',
      'recommended': false,
      'schema': noInlineComments.schema,
    },
    {
      'name': 'no-lonely-if',
      'description': 'disallow if as the only statement in an else block',
      'recommended': false,
      'schema': noLonelyIf.schema,
    },
    {
      'name': 'no-mixed-spaces-and-tabs',
      'description': 'disallow mixed spaces and tabs for indentation',
      'recommended': true,
      'schema': noMixedSpacesAndTabs.schema,
    },
    {
      'name': 'no-multiple-empty-lines',
      'description': 'disallow multiple empty lines',
      'recommended': false,
      'schema': noMultipleEmptyLines.schema,
    },
    {
      'name': 'no-nested-ternary',
      'description': 'disallow nested ternary expressions',
      'recommended': false,
      'schema': noNestedTernary.schema,
    },
    {
      'name': 'no-new-object',
      'description': 'disallow the use of the Object constructor',
      'recommended': false,
      'schema': noNewObject.schema,
    },
    {
      'name': 'no-spaced-func',
      'description': 'disallow space between function identifier and application',
      'recommended': false,
      'schema': noSpacedFunc.schema,
    },
    {
      'name': 'no-ternary',
      'description': 'disallow the use of ternary operators',
      'recommended': false,
      'schema': noTernary.schema,
    },
    {
      'name': 'no-trailing-spaces',
      'description': 'disallow trailing whitespace at the end of lines',
      'recommended': false,
      'schema': noTrailingSpaces.schema,
    },
    {
      'name': 'no-underscore-dangle',
      'description': 'disallow dangling underscores in identifiers',
      'recommended': false,
      'schema': noUnderscoreDangle.schema,
    },
    {
      'name': 'no-unneeded-ternary',
      'description': 'disallow the use of Boolean literals in conditional expressions',
      'recommended': false,
      'schema': noUnneededTernary.schema,
    },
    {
      'name': 'object-curly-spacing',
      'description': 'require or disallow padding inside curly braces',
      'recommended': false,
      'schema': objectCurlySpacing.schema,
    },
    {
      'name': 'one-var',
      'description': 'require or disallow one variable declaration per function',
      'recommended': false,
      'schema': oneVar.schema,
      'manualOption': true,
    }, // TODO options
    {
      'name': 'operator-assignment',
      'description': 'require assignment operator shorthand where possible or prohibit it entirely',
      'recommended': false,
      'schema': operatorAssignment.schema,
    },
    {
      'name': 'operator-linebreak',
      'description': 'enforce operators to be placed before or after line breaks',
      'recommended': false,
      'schema': operatorLinebreak.schema,
    },
    {
      'name': 'padded-blocks',
      'description': 'enforce padding within blocks',
      'recommended': false,
      'schema': paddedBlocks.schema,
    },
    {
      'name': 'quote-props',
      'description': 'require quotes around object literal property names',
      'recommended': false,
      'schema': quoteProps.schema,
      'manualOption': true,
    }, // TODO options
    {
      'name': 'quotes',
      'description': 'specify whether backticks, double or single quotes should be used',
      'recommended': false,
      'schema': quotes.schema,
    },
    {
      'name': 'id-match',
      'description': 'require identifiers to match the provided regular expression',
      'recommended': false,
      'schema': idMatch.schema,
    },
    {
      'name': 'semi-spacing',
      'description': 'enforce spacing before and after semicolons',
      'recommended': false,
      'schema': semiSpacing.schema,
    },
    {
      'name': 'semi',
      'description': 'require or disallow use of semicolons instead of ASI',
      'recommended': false,
      'schema': semi.schema,
    },
    {
      'name': 'sort-vars',
      'description': 'sort variables within the same declaration block',
      'recommended': false,
      'schema': sortVars.schema,
    },
    {
      'name': 'space-after-keywords',
      'description': 'require a space after certain keywords',
      'recommended': false,
      'schema': spaceAfterKeywords.schema,
    },
    {
      'name': 'space-before-blocks',
      'description': 'require or disallow a space before blocks',
      'recommended': false,
      'schema': spaceBeforeBlocks.schema,
    },
    {
      'name': 'space-before-function-paren',
      'description': 'require or disallow a space before function opening parenthesis',
      'recommended': false,
      'manualOption': true,
      'schema': spaceBeforeFunctionParen.schema,
    },
    {
      'name': 'space-in-parens',
      'description': 'require or disallow spaces inside parentheses',
      'recommended': false,
      'schema': spaceInParens.schema,
    },
    {
      'name': 'space-infix-ops',
      'description': 'require spaces around operators',
      'recommended': false,
      'schema': spaceInfixOps.schema,
    },
    {
      'name': 'space-return-throw-case',
      'description': 'require a space after return, throw, and case',
      'recommended': false,
      'schema': spaceReturnThrowCase.schema,
    },
    {
      'name': 'space-unary-ops',
      'description': 'require or disallow spaces before/after unary operators',
      'recommended': false,
      'schema': spaceUnaryOps.schema,
    },
    {
      'name': 'spaced-comment',
      'description': 'require or disallow a space immediately following the // or /* in a comment',
      'recommended': false,
      'schema': spacedComment.schema,
    },
    {
      'name': 'wrap-regex',
      'description': 'require regex literals to be wrapped in parentheses',
      'recommended': false,
      'schema': wrapRegex.schema,
    },
  ],

  // ECMAScript 6
  // These rules are only relevant to ES6 environments.
  'ECMAScript 6': [
    {
      'name': 'arrow-parens',
      'description': 'require parens in arrow function arguments',
      'recommended': false,
      'schema': arrowParens.schema,
    },
    {
      'name': 'arrow-spacing',
      'description': 'require space before/after arrow function\'s arrow',
      'recommended': false,
      'schema': arrowSpacing.schema,
    },
    {
      'name': 'constructor-super',
      'description': 'verify calls of super() in constructors',
      'recommended': false,
      'schema': constructorSuper.schema,
    },
    {
      'name': 'generator-star-spacing',
      'description': 'enforce spacing around the * in generator functions',
      'recommended': false,
      'manualOption': true,
      'schema': generatorStarSpacing.schema,
    },
    {
      'name': 'no-class-assign',
      'description': 'disallow modifying variables of class declarations',
      'recommended': false,
      'schema': noClassAssign.schema,
    },
    {
      'name': 'no-const-assign',
      'description': 'disallow modifying variables that are declared using const',
      'recommended': false,
      'schema': noConstAssign.schema,
    },
    {
      'name': 'no-this-before-super',
      'description': 'disallow use of this/super before calling super() in constructors.',
      'recommended': false,
      'schema': noThisBeforeSuper.schema,
    },
    {
      'name': 'no-var',
      'description': 'require let or const instead of var',
      'recommended': false,
      'schema': noVar.schema,
    },
    {
      'name': 'object-shorthand',
      'description': 'require method and property shorthand syntax for object literals',
      'recommended': false,
      'schema': objectShorthand.schema,
    },
    {
      'name': 'prefer-const',
      'description': 'suggest using const declaration for variables that are never modified after declared',
      'recommended': false,
      'schema': preferConst.schema,
    },
    {
      'name': 'prefer-spread',
      'description': 'suggest using the spread operator instead of .apply().',
      'recommended': false,
      'schema': preferSpread.schema,
    },
    {
      'name': 'prefer-reflect',
      'description': 'suggest using Reflect methods where applicable',
      'recommended': false,
      'schema': preferReflect.schema,
    },
    {
      'name': 'require-yield',
      'description': 'disallow generator functions that do not have yield',
      'recommended': false,
      'schema': requireYield.schema,
    },
  ],

  // Legacy
  // The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.
  'Legacy': [
    {
      'name': 'max-depth',
      'description': 'specify the maximum depth that blocks can be nested',
      'recommended': false,
      'schema': maxDepth.schema,
    },
    {
      'name': 'max-len',
      'description': 'specify the maximum length of a line in your program',
      'recommended': false,
      'schema': maxLen.schema,
    },
    {
      'name': 'max-params',
      'description': 'limits the number of parameters that can be used in the function declaration.',
      'recommended': false,
      'schema': maxParams.schema,
    },
    {
      'name': 'max-statements',
      'description': 'specify the maximum number of statement allowed in a function',
      'recommended': false,
      'schema': maxStatements.schema,
    },
    {
      'name': 'no-bitwise',
      'description': 'disallow use of bitwise operators',
      'recommended': false,
      'schema': noBitwise.schema,
    },
    {
      'name': 'no-plusplus',
      'description': 'disallow use of unary operators, ++ and --',
      'recommended': false,
      'schema': noPlusplus.schema,
    },
  ],

};


_.each(defaults, (defaultValues, name) => {
  _.each(rules, (categoryRules, category) => {
    var found = false;
    var rv = _.each(categoryRules, (rule) => {
      if (rule.name == name) {
        rule.defaultValues = defaultValues;
        found = true;
        return false;
      }
    });
    return !found;
  });
});

export default rules;
