'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _MaterialDescriptorBase = require('./MaterialDescriptorBase');

var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeshLambertMaterialDescriptor = function (_MaterialDescriptorBa) {
  _inherits(MeshLambertMaterialDescriptor, _MaterialDescriptorBa);

  function MeshLambertMaterialDescriptor(react3RendererInstance) {
    _classCallCheck(this, MeshLambertMaterialDescriptor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MeshLambertMaterialDescriptor).call(this, react3RendererInstance));

    _this.hasColor();
    _this.hasColor('emissive', 0);
    _this.hasWireframe();
    return _this;
  }

  _createClass(MeshLambertMaterialDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var materialDescription = this.getMaterialDescription(props);

      return new _three2.default.MeshLambertMaterial(materialDescription);
    }
  }, {
    key: 'getMaterialDescription',
    value: function getMaterialDescription(props) {
      var materialDescription = _get(Object.getPrototypeOf(MeshLambertMaterialDescriptor.prototype), 'getMaterialDescription', this).call(this, props);

      if (props.hasOwnProperty('shininess')) {
        materialDescription.shininess = props.shininess;
      }

      if (props.hasOwnProperty('map')) {
        materialDescription.map = props.map;
      }

      return materialDescription;
    }
  }, {
    key: 'applyInitialProps',
    value: function applyInitialProps(threeObject, props) {
      _get(Object.getPrototypeOf(MeshLambertMaterialDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);

      if (!props.hasOwnProperty('map')) {
        threeObject.map = undefined;
      }
    }
  }]);

  return MeshLambertMaterialDescriptor;
}(_MaterialDescriptorBase2.default);

module.exports = MeshLambertMaterialDescriptor;