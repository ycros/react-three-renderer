'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _MeshDescriptor2 = require('./MeshDescriptor');

var _MeshDescriptor3 = _interopRequireDefault(_MeshDescriptor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineSegmentDescriptor = function (_MeshDescriptor) {
  _inherits(LineSegmentDescriptor, _MeshDescriptor);

  function LineSegmentDescriptor() {
    _classCallCheck(this, LineSegmentDescriptor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LineSegmentDescriptor).apply(this, arguments));
  }

  _createClass(LineSegmentDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var geometry = props.hasOwnProperty('geometry') ? props.geometry : undefined;
      var material = props.hasOwnProperty('material') ? props.material : undefined;

      var mesh = new _three2.default.LineSegments(geometry, material);

      if (!geometry) {
        mesh.geometry.dispose();
        mesh.geometry = undefined;
      }

      if (!material) {
        mesh.material.dispose();
        mesh.material = undefined;
      }

      return mesh;
    }
  }]);

  return LineSegmentDescriptor;
}(_MeshDescriptor3.default);

module.exports = LineSegmentDescriptor;