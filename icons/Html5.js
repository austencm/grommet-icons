'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html5 = function Html5(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Html5' }, props),
    _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M20.7435,21.5055 L12.003,24 L3.27000002,21.5055 L1.35000002,0 L22.662,0 L20.7435,21.5055 Z M6.70200002,17.8845 L6.37650002,14.2035 L8.65500002,14.2035 L8.82900002,16.137 L12.0345,16.809 L15.1845,16.1355 L15.5325,12.2835 L6.20250002,12.2835 L5.51550002,4.5825 L18.501,4.5825 L18.297,6.8595 L8.00250002,6.8595 L8.28000002,10.011 L18.0165,10.011 L17.313,17.8845 L12.003,19.491 L6.70200002,17.8845 Z' })
  );
};

exports.default = Html5;