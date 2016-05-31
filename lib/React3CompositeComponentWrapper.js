'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ReactCompositeComponent = require('react/lib/ReactCompositeComponent');

var _ReactCompositeComponent2 = _interopRequireDefault(_ReactCompositeComponent);

var _ReactElement = require('react/lib/ReactElement');

var _ReactElement2 = _interopRequireDefault(_ReactElement);

var _ReactCurrentOwner = require('react/lib/ReactCurrentOwner');

var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ReactInstanceMap = require('react/lib/ReactInstanceMap');

var _ReactInstanceMap2 = _interopRequireDefault(_ReactInstanceMap);

var _ReactInstrumentation = require('react/lib/ReactInstrumentation');

var _ReactInstrumentation2 = _interopRequireDefault(_ReactInstrumentation);

var _emptyObject = require('fbjs/lib/emptyObject');

var _emptyObject2 = _interopRequireDefault(_emptyObject);

var _warning = require('fbjs/lib/warning');

var _warning2 = _interopRequireDefault(_warning);

var _ReactUpdateQueue = require('react/lib/ReactUpdateQueue');

var _ReactUpdateQueue2 = _interopRequireDefault(_ReactUpdateQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactCompositeComponentMixinImpl = function ReactCompositeComponentMixinImpl() {
  _classCallCheck(this, ReactCompositeComponentMixinImpl);
};

ReactCompositeComponentMixinImpl.prototype = _extends({}, ReactCompositeComponentMixinImpl.prototype, _ReactCompositeComponent2.default.Mixin);

function warnIfInvalidElement(Component, element) {
  if (process.env.NODE_ENV !== 'production') {
    (0, _warning2.default)(element === null || element === false || _ReactElement2.default.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component');
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function invokeComponentDidMountWithTimer() {
  var publicInstance = this._instance;
  if (this._debugID !== 0) {
    _ReactInstrumentation2.default.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentDidMount');
  }
  publicInstance.componentDidMount();
  if (this._debugID !== 0) {
    _ReactInstrumentation2.default.debugTool.onEndLifeCycleTimer(this._debugID, 'componentDidMount');
  }
}

var StatelessComponent = function () {
  function StatelessComponent() {
    _classCallCheck(this, StatelessComponent);
  }

  _createClass(StatelessComponent, [{
    key: 'render',
    value: function render() {
      var componentCreator = _ReactInstanceMap2.default.get(this)._currentElement.type;
      var element = componentCreator(this.props, this.context, this.updater);
      warnIfInvalidElement(componentCreator, element);
      return element;
    }
  }]);

  return StatelessComponent;
}();

var React3CompositeComponentWrapper = function (_ReactCompositeCompon) {
  _inherits(React3CompositeComponentWrapper, _ReactCompositeCompon);

  function React3CompositeComponentWrapper(element, react3RendererInstance) {
    _classCallCheck(this, React3CompositeComponentWrapper);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(React3CompositeComponentWrapper).call(this));

    _this._react3RendererInstance = react3RendererInstance;

    _this.construct(element);
    return _this;
  }

  _createClass(React3CompositeComponentWrapper, [{
    key: 'getNativeMarkup',
    value: function getNativeMarkup() {
      return _get(Object.getPrototypeOf(React3CompositeComponentWrapper.prototype), 'getNativeNode', this).call(this);
    }
  }, {
    key: 'construct',
    value: function construct(element) {
      _get(Object.getPrototypeOf(React3CompositeComponentWrapper.prototype), 'construct', this).call(this, element);

      this._threeObject = null;
    }
  }, {
    key: '_updateRenderedComponent',
    value: function _updateRenderedComponent(transaction, context) {
      _get(Object.getPrototypeOf(React3CompositeComponentWrapper.prototype), '_updateRenderedComponent', this).call(this, transaction, context);

      this._threeObject = this._renderedComponent._threeObject;
    }
  }, {
    key: '_instantiateReactComponent',
    value: function _instantiateReactComponent(element) {
      return this._react3RendererInstance.instantiateReactComponent(element);
    }

    // TODO: prevInstance

  }, {
    key: '_replaceNodeWithMarkup',
    value: function _replaceNodeWithMarkup(oldMarkup, nextMarkup) {
      var parentMarkup = oldMarkup.parentMarkup;

      var ownerChildrenMarkups = parentMarkup.childrenMarkup;

      var indexInParent = ownerChildrenMarkups.indexOf(oldMarkup);

      if (process.env.NODE_ENV !== 'production') {
        (0, _invariant2.default)(indexInParent !== -1, 'The node has no parent');
      } else {
        (0, _invariant2.default)(indexInParent !== -1);
      }

      var parentInternalComponent = parentMarkup.threeObject.userData.react3internalComponent;
      var originalInternalComponent = oldMarkup.threeObject.userData.react3internalComponent;

      parentInternalComponent.removeChild(originalInternalComponent, oldMarkup);
      var nextChild = nextMarkup.threeObject.userData.react3internalComponent;
      nextChild._mountIndex = indexInParent;
      parentInternalComponent.createChild(nextChild, null, nextMarkup);
    }

    // See ReactCompositeComponent.mountComponent

    /**
     * Initializes the component, renders markup, and registers event listeners.
     *
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {?object} nativeParent
     * @param {?object} nativeContainerInfo
     * @param {?object} context
     * @return {?string} Rendered markup to be inserted into the DOM.
     * @final
     * @internal
     */

  }, {
    key: 'mountComponent',
    value: function mountComponent(transaction, nativeParent, nativeContainerInfo, context) {
      this._context = context;
      this._mountOrder = this._react3RendererInstance.nextMountID++;
      this._nativeParent = nativeParent;
      this._nativeContainerInfo = nativeContainerInfo;

      var publicProps = this._processProps(this._currentElement.props);
      var publicContext = this._processContext(context);

      var Component = this._currentElement.type;

      // Initialize the public class
      var inst = this._constructComponent(publicProps, publicContext);
      var renderedElement = void 0;

      // Support functional components
      if (!shouldConstruct(Component) && (inst == null || inst.render == null)) {
        renderedElement = inst;
        warnIfInvalidElement(Component, renderedElement);
        (0, _invariant2.default)(inst === null || inst === false || _ReactElement2.default.isValidElement(inst), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component');
        inst = new StatelessComponent(Component);
      }

      if (process.env.NODE_ENV !== 'production') {
        // This will throw later in _renderValidatedComponent, but add an early
        // warning now to help debugging
        if (!inst.render) {
          (0, _warning2.default)(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component');
        }

        var propsMutated = inst.props !== publicProps;
        var componentName = Component.displayName || Component.name || 'Component';

        (0, _warning2.default)(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + 'up the same props that your component\'s constructor was passed.', componentName, componentName);
      }

      // These should be set up in the constructor, but as a convenience for
      // simpler class abstractions, we set them up after the fact.
      inst.props = publicProps;
      inst.context = publicContext;
      inst.refs = _emptyObject2.default;
      inst.updater = _ReactUpdateQueue2.default;

      this._instance = inst;

      // Store a reference from the instance back to the internal representation
      _ReactInstanceMap2.default.set(inst, this);

      if (process.env.NODE_ENV !== 'production') {
        // Since plain JS classes are defined without any special initialization
        // logic, we can not catch common errors early. Therefore, we have to
        // catch them here, at initialization time, instead.
        (0, _warning2.default)(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component');
        (0, _warning2.default)(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component');
        (0, _warning2.default)(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component');
        (0, _warning2.default)(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component');
        (0, _warning2.default)(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component');
        (0, _warning2.default)(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component');
        (0, _warning2.default)(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component');
      }
      var initialState = inst.state;
      if (initialState === undefined) {
        inst.state = initialState = null;
      }
      if (!((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState))) {
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent');
        } else {
          (0, _invariant2.default)(false);
        }
      }

      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;

      var markup = this.performInitialMount(renderedElement, nativeParent, nativeContainerInfo, transaction, context);

      if (inst.componentDidMount) {
        if (process.env.NODE_ENV !== 'production') {
          transaction.getReactMountReady().enqueue(invokeComponentDidMountWithTimer, this);
        } else {
          transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
        }
      }

      return markup;
    }
  }, {
    key: '_constructComponent',
    value: function _constructComponent(publicProps, publicContext) {
      if (process.env.NODE_ENV !== 'production') {
        _ReactCurrentOwner2.default.current = this;
        try {
          return this._constructComponentWithoutOwner(publicProps, publicContext);
        } finally {
          _ReactCurrentOwner2.default.current = null;
        }
      } else {
        return this._constructComponentWithoutOwner(publicProps, publicContext);
      }
    }
  }, {
    key: '_constructComponentWithoutOwner',
    value: function _constructComponentWithoutOwner(publicProps, publicContext) {
      var Component = this._currentElement.type;
      var instanceOrElement = void 0;
      if (shouldConstruct(Component)) {
        if (process.env.NODE_ENV !== 'production') {
          if (this._debugID !== 0) {
            _ReactInstrumentation2.default.debugTool.onBeginLifeCycleTimer(this._debugID, 'ctor');
          }
        }
        instanceOrElement = new Component(publicProps, publicContext, _ReactUpdateQueue2.default);
        if (process.env.NODE_ENV !== 'production') {
          if (this._debugID !== 0) {
            _ReactInstrumentation2.default.debugTool.onEndLifeCycleTimer(this._debugID, 'ctor');
          }
        }
      } else {
        // This can still be an instance in case of factory components
        // but we'll count this as time spent rendering as the more common case.
        if (process.env.NODE_ENV !== 'production') {
          if (this._debugID !== 0) {
            _ReactInstrumentation2.default.debugTool.onBeginLifeCycleTimer(this._debugID, 'render');
          }
        }

        /* eslint-disable new-cap */
        instanceOrElement = Component(publicProps, publicContext, _ReactUpdateQueue2.default);
        /* eslint-enable */

        if (process.env.NODE_ENV !== 'production') {
          if (this._debugID !== 0) {
            _ReactInstrumentation2.default.debugTool.onEndLifeCycleTimer(this._debugID, 'render');
          }
        }
      }
      return instanceOrElement;
    }

    /**
     * Needs to be overwritten because emptyObject points to another...
     *
     * Lazily allocates the refs object and stores `component` as `ref`.
     *
     * @param {string} ref Reference name.
     * @param {*} component Component to store as `ref`.
     * @final
     * @private
     */

  }, {
    key: 'attachRef',
    value: function attachRef(ref, component) {
      var inst = this.getPublicInstance();
      var refs = inst.refs === _emptyObject2.default ? inst.refs = {} : inst.refs;
      refs[ref] = component.getPublicInstance();
    }
  }]);

  return React3CompositeComponentWrapper;
}(ReactCompositeComponentMixinImpl);

module.exports = React3CompositeComponentWrapper;