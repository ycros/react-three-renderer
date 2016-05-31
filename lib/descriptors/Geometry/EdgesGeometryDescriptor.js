'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _BufferGeometryDescriptorBase = require('./BufferGeometryDescriptorBase');

var _BufferGeometryDescriptorBase2 = _interopRequireDefault(_BufferGeometryDescriptorBase);

var _ReactPropTypes = require('react/lib/ReactPropTypes');

var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EdgesGeometryDescriptor = function (_BufferGeometryDescri) {
  _inherits(EdgesGeometryDescriptor, _BufferGeometryDescri);

  function EdgesGeometryDescriptor(react3RendererInstance) {
    _classCallCheck(this, EdgesGeometryDescriptor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EdgesGeometryDescriptor).call(this, react3RendererInstance));

    _this.hasProp('thresholdAngle', {
      type: _ReactPropTypes2.default.number,
      update: _this.updateCacheAndReplace.bind(_this, 'thresholdAngle'),
      default: undefined
    });

    _this.hasProp('geometry', {
      type: _ReactPropTypes2.default.oneOf([_three2.default.Geometry, _three2.default.BufferGeometry]).isRequired,
      update: _this.updateCacheAndReplace.bind(_this, 'geometry'),
      default: undefined
    });
    return _this;
  }

  _createClass(EdgesGeometryDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var geometry = props.geometry;
      var thresholdAngle = props.thresholdAngle;


      return new _three2.default.EdgesGeometry(geometry, thresholdAngle);
    }
  }]);

  return EdgesGeometryDescriptor;
}(_BufferGeometryDescriptorBase2.default);

module.exports = EdgesGeometryDescriptor;