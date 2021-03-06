'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _GeometryDescriptorBase = require('./GeometryDescriptorBase');

var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);

var _ReactPropTypes = require('react/lib/ReactPropTypes');

var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);

var _propTypeInstanceOf = require('../../utils/propTypeInstanceOf');

var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TubeGeometryDescriptor = function (_GeometryDescriptorBa) {
  _inherits(TubeGeometryDescriptor, _GeometryDescriptorBa);

  function TubeGeometryDescriptor(react3RendererInstance) {
    _classCallCheck(this, TubeGeometryDescriptor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TubeGeometryDescriptor).call(this, react3RendererInstance));

    _this.hasProp('path', {
      type: (0, _propTypeInstanceOf2.default)(_three2.default.Curve).isRequired,
      update: _this.triggerRemount
    });

    _this.hasProp('segments', {
      type: _ReactPropTypes2.default.number,
      update: _this.triggerRemount,
      default: 64
    });

    _this.hasProp('radius', {
      type: _ReactPropTypes2.default.number,
      update: _this.triggerRemount,
      default: 1
    });

    _this.hasProp('radiusSegments', {
      type: _ReactPropTypes2.default.number,
      update: _this.triggerRemount,
      default: 8
    });

    _this.hasProp('closed', {
      type: _ReactPropTypes2.default.bool,
      update: _this.triggerRemount,
      default: false
    });
    return _this;
  }

  _createClass(TubeGeometryDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      // props from http://threejs.org/docs/#Reference/Extras.Geometries/TubeGeometry:
      var path = // boolean
      props.path;
      var // THREE.Curve
      segments = props.segments;
      var // number
      radius = props.radius;
      var // number
      radiusSegments = props.radiusSegments;
      var // number
      closed = props.closed;


      return new _three2.default.TubeGeometry(path, segments, radius, radiusSegments, closed);
    }
  }]);

  return TubeGeometryDescriptor;
}(_GeometryDescriptorBase2.default);

module.exports = TubeGeometryDescriptor;