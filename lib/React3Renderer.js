'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _ReactElement = require('react/lib/ReactElement');

var _ReactElement2 = _interopRequireDefault(_ReactElement);

var _ReactInstanceMap = require('react/lib/ReactInstanceMap');

var _ReactInstanceMap2 = _interopRequireDefault(_ReactInstanceMap);

var _ReactInstanceHandles = require('react/lib/ReactInstanceHandles');

var _ReactInstanceHandles2 = _interopRequireDefault(_ReactInstanceHandles);

var _ReactReconciler = require('react/lib/ReactReconciler');

var _ReactReconciler2 = _interopRequireDefault(_ReactReconciler);

var _ReactUpdates = require('react/lib/ReactUpdates');

var _ReactUpdates2 = _interopRequireDefault(_ReactUpdates);

var _ReactCurrentOwner = require('react/lib/ReactCurrentOwner');

var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);

var _ReactUpdateQueue = require('react/lib/ReactUpdateQueue');

var _ReactUpdateQueue2 = _interopRequireDefault(_ReactUpdateQueue);

var _ReactComponent2 = require('react/lib/ReactComponent');

var _ReactComponent3 = _interopRequireDefault(_ReactComponent2);

var _ReactInjection = require('react/lib/ReactInjection');

var _ReactInjection2 = _interopRequireDefault(_ReactInjection);

var _ReactReconcileTransaction = require('react/lib/ReactReconcileTransaction');

var _ReactReconcileTransaction2 = _interopRequireDefault(_ReactReconcileTransaction);

var _ReactDefaultBatchingStrategy = require('react/lib/ReactDefaultBatchingStrategy');

var _ReactDefaultBatchingStrategy2 = _interopRequireDefault(_ReactDefaultBatchingStrategy);

var _KeyEscapeUtils = require('react/lib/KeyEscapeUtils');

var _KeyEscapeUtils2 = _interopRequireDefault(_KeyEscapeUtils);

var _traverseAllChildren = require('react/lib/traverseAllChildren');

var _traverseAllChildren2 = _interopRequireDefault(_traverseAllChildren);

var _getNativeComponentFromComposite = require('react/lib/getNativeComponentFromComposite');

var _getNativeComponentFromComposite2 = _interopRequireDefault(_getNativeComponentFromComposite);

var _shouldUpdateReactComponent = require('react/lib/shouldUpdateReactComponent');

var _shouldUpdateReactComponent2 = _interopRequireDefault(_shouldUpdateReactComponent);

var _ReactInstrumentation = require('react/lib/ReactInstrumentation');

var _ReactInstrumentation2 = _interopRequireDefault(_ReactInstrumentation);

var _emptyObject = require('fbjs/lib/emptyObject');

var _emptyObject2 = _interopRequireDefault(_emptyObject);

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = require('fbjs/lib/warning');

var _warning2 = _interopRequireDefault(_warning);

var _React3ContainerInfo = require('./React3ContainerInfo');

var _React3ContainerInfo2 = _interopRequireDefault(_React3ContainerInfo);

var _EventDispatcher = require('./utils/EventDispatcher');

var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);

var _InternalComponent = require('./InternalComponent');

var _InternalComponent2 = _interopRequireDefault(_InternalComponent);

var _React3ComponentTree = require('./React3ComponentTree');

var _React3ComponentTree2 = _interopRequireDefault(_React3ComponentTree);

var _ElementDescriptorContainer = require('./ElementDescriptorContainer');

var _ElementDescriptorContainer2 = _interopRequireDefault(_ElementDescriptorContainer);

var _React3CompositeComponentWrapper = require('./React3CompositeComponentWrapper');

var _React3CompositeComponentWrapper2 = _interopRequireDefault(_React3CompositeComponentWrapper);

var _idPropertyName = require('./utils/idPropertyName');

var _idPropertyName2 = _interopRequireDefault(_idPropertyName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDeclarationErrorAddendum = void 0;
var getDisplayName = void 0;

if (process.env.NODE_ENV !== 'production') {
  // prop type helpers
  // the warnings for propTypes will not say <anonymous>.
  // Some performance is sacrificed for this.

  // TODO: could have an env variable to disable this?
  if (!_three2.default._renamed) {
    _three2.default._renamed = true;

    _three2.default.Vector2.displayName = 'THREE.Vector2';
    _three2.default.Vector3.displayName = 'THREE.Vector3';
    _three2.default.Quaternion.displayName = 'THREE.Quaternion';
    _three2.default.Color.displayName = 'THREE.Color';
    _three2.default.Shape.displayName = 'THREE.Shape';
    _three2.default.Euler.displayName = 'THREE.Euler';
    _three2.default.Fog.displayName = 'THREE.Fog';
  }

  getDeclarationErrorAddendum = function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  getDisplayName = function getDisplayName(instance) {
    var element = instance._currentElement;
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (instance.getName) {
      return instance.getName() || 'Unknown';
    }

    return element.type.displayName || element.type.name || 'Unknown';
  };
}

/**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {*} container DOM element to unmount from.
 * @param {bool} safely
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */
function unmountComponentFromNode(instance, container, safely) {
  _ReactReconciler2.default.unmountComponent(instance, safely);
}

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

var TopLevelWrapper = (_temp = _class = function (_ReactComponent) {
  _inherits(TopLevelWrapper, _ReactComponent);

  function TopLevelWrapper() {
    _classCallCheck(this, TopLevelWrapper);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TopLevelWrapper).apply(this, arguments));
  }

  _createClass(TopLevelWrapper, [{
    key: 'render',
    value: function render() {
      // this.props is actually a ReactElement
      return this.props;
    }
  }]);

  return TopLevelWrapper;
}(_ReactComponent3.default), _class.isReactComponent = {}, _temp);


if (process.env.NODE_ENV !== 'production') {
  TopLevelWrapper.displayName = 'TopLevelWrapper';
}

function internalGetID(markup) {
  return markup && markup[_idPropertyName2.default] || '';
}

// see ReactMount.js:getReactRootElementInContainer
/**
 * @param {THREE.Object3D|HTMLCanvasElement} container That may contain
 * a React component
 * @return {?*} The markup that may have the reactRoot ID, or null.
 */
function getReactRootMarkupInContainer(container) {
  if (!container) {
    return null;
  }

  // in ReactMount this is container.firstChild.

  return container.userData && container.userData.markup && container.userData.markup.childrenMarkup[0] || null;
}

/**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */
function isInternalComponentType(type) {
  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
}

var React3Renderer = (_temp2 = _class2 = function () {
  _createClass(React3Renderer, [{
    key: 'updateChildren',


    /**
     * @see ReactChildReconciler.updateChildren
     *
     * Updates the rendered children and returns a new set of children.
     *
     * @param {?object} prevChildren Previously initialized set of children.
     * @param {?object} nextChildren Flat child element maps.
     * @param {?object} removedMarkups The map for removed nodes.
     * @param {ReactReconcileTransaction} transaction
     * @param {object} context
     * @return {?object} A new set of child instances.
     * @internal
     */
    value: function updateChildren(prevChildren, nextChildren, removedMarkups, transaction, context) {
      // We currently don't have a way to track moves here but if we use iterators
      // instead of for..in we can zip the iterators and check if an item has
      // moved.
      // TODO: If nothing has changed, return the prevChildren object so that we
      // can quickly bailout.
      if (!nextChildren && !prevChildren) {
        return null;
      }

      if (!!nextChildren) {
        var nextChildrenKeys = Object.keys(nextChildren);

        for (var i = 0; i < nextChildrenKeys.length; ++i) {
          var childName = nextChildrenKeys[i];

          var prevChild = prevChildren && prevChildren[childName];
          var prevElement = prevChild && prevChild._currentElement;
          var nextElement = nextChildren[childName];
          if (prevChild !== null && prevChild !== undefined && (0, _shouldUpdateReactComponent2.default)(prevElement, nextElement)) {
            _ReactReconciler2.default.receiveComponent(prevChild, nextElement, transaction, context);

            if (prevChild._forceRemountOfComponent) {
              removedMarkups[childName] = prevChild.getNativeMarkup();

              _ReactReconciler2.default.unmountComponent(prevChild, false);
              nextChildren[childName] = this.instantiateReactComponent(nextElement);
            } else {
              nextChildren[childName] = prevChild;
            }
          } else {
            if (prevChild) {
              removedMarkups[childName] = prevChild.getNativeMarkup();

              _ReactReconciler2.default.unmountComponent(prevChild, false);
            }
            // The child must be instantiated before it's mounted.
            nextChildren[childName] = this.instantiateReactComponent(nextElement);
          }
        }
      }

      if (!!prevChildren) {
        // Unmount children that are no longer present.
        var prevChildrenKeys = Object.keys(prevChildren);
        for (var _i = 0; _i < prevChildrenKeys.length; ++_i) {
          var _childName = prevChildrenKeys[_i];

          if (!(nextChildren && nextChildren.hasOwnProperty(_childName))) {
            var _prevChild = prevChildren[_childName];

            removedMarkups[_childName] = _prevChild.getNativeMarkup();

            _ReactReconciler2.default.unmountComponent(_prevChild, false);
          }
        }
      }

      return nextChildren;
    }
  }, {
    key: 'getElementDescriptor',
    value: function getElementDescriptor(name) {
      return this.threeElementDescriptors[name];
    }
  }], [{
    key: 'findTHREEObject',


    /**
     * Returns the THREE.js object rendered by this element.
     *
     * @param {React.Component|THREE.Object3D|HTMLCanvasElement} componentOrElement
     * @return {?THREE.Object3D} The root node of this element.
     */
    value: function findTHREEObject(componentOrElement) {
      if (process.env.NODE_ENV !== 'production') {
        var owner = _ReactCurrentOwner2.default.current;
        if (owner !== null) {
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component');
          }
          owner._warnedAboutRefsInRender = true;
        }
      }

      if (componentOrElement === null) {
        return null;
      }

      if (componentOrElement instanceof _three2.default.Object3D || componentOrElement instanceof HTMLCanvasElement) {
        return componentOrElement;
      }

      if (_ReactInstanceMap2.default.has(componentOrElement)) {
        var instance = _ReactInstanceMap2.default.get(componentOrElement);

        instance = (0, _getNativeComponentFromComposite2.default)(instance);

        return instance ? _React3ComponentTree2.default.getMarkupFromInstance(instance).threeObject : null;
      }

      if (!(componentOrElement.render === null || typeof componentOrElement.render !== 'function')) {
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)(false, 'Component (with keys: %s) contains `render` method ' + 'but is not mounted', Object.keys(componentOrElement));
        } else {
          (0, _invariant2.default)(false);
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        (0, _invariant2.default)(false, 'Element appears to be neither ReactComponent, ' + 'a THREE.js object, nor a HTMLCanvasElement (keys: %s)', Object.keys(componentOrElement));
      } else {
        (0, _invariant2.default)(false);
      }

      return null;
    }
    // to be used by modules e.g. mouse input ( see examples )

  }]);

  function React3Renderer() {
    var _this2 = this;

    _classCallCheck(this, React3Renderer);

    this.instantiateChild = function (childInstances, child, name) {
      // We found a component instance.
      var keyUnique = childInstances[name] === undefined;
      if (process.env.NODE_ENV !== 'production') {
        (0, _warning2.default)(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', _KeyEscapeUtils2.default.unescape(name));
      }
      if (child !== null && keyUnique) {
        childInstances[name] = _this2.instantiateReactComponent(child, null);
      }
    };

    this.findNodeHandle = function (instance) {
      var inst = _React3ComponentTree2.default.getRenderedNativeOrTextFromComponent(instance);

      if (!inst || !inst._threeObject) {
        return null;
      }

      var markup = _React3ComponentTree2.default.getMarkupFromInstance(inst);

      _this2._highlightCache = markup;
      return _this2._highlightElement;
    };

    this.nativeTagToRootNodeID = function () {
      return null;
    };

    this.batchedMountComponentIntoNode = function (componentInstance, container, shouldReuseMarkup, context) {
      var transaction = _ReactUpdates2.default.ReactReconcileTransaction.getPooled(!shouldReuseMarkup);
      transaction.perform(_this2.mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
      _ReactUpdates2.default.ReactReconcileTransaction.release(transaction);
    };

    this.mountComponentIntoNode = function (wrapperInstance, container, transaction, shouldReuseMarkup, context) {
      var markup = _ReactReconciler2.default.mountComponent(wrapperInstance, transaction, null, (0, _React3ContainerInfo2.default)(wrapperInstance, container), context);

      wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
      _this2._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
    };

    this._instancesByReactRootID = {};
    if (process.env.NODE_ENV !== 'production') {
      this.rootMarkupsByReactRootID = {};
    }
    this.nextMountID = 1;
    this.globalIdCounter = 1;
    this.nextReactRootIndex = 0;

    this.threeElementDescriptors = new _ElementDescriptorContainer2.default(this).descriptors;

    this._highlightElement = document.createElement('div');
    this._highlightCache = null;

    this._nextDebugID = 1;

    if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
      this._agent = null;

      this._onHideHighlightFromInspector = function () {
        if (_this2._highlightCache && _this2._highlightCache.threeObject.userData.react3internalComponent) {
          var internalComponent = _this2._highlightCache.threeObject.userData.react3internalComponent;

          internalComponent.hideHighlight();

          _this2._highlightCache = null;
        }
      };

      this._onHighlightFromInspector = function (highlightInfo) {
        if (highlightInfo.node === _this2._highlightElement) {
          if (_this2._highlightCache && _this2._highlightCache.threeObject.userData.react3internalComponent) {
            var internalComponent = _this2._highlightCache.threeObject.userData.react3internalComponent;

            internalComponent.highlightComponent();
          }
        }
      };

      this._hookAgent = function (agent) {
        _this2._agent = agent;

        // agent.on('startInspecting', (...args) => {
        //   console.log('start inspecting?', args);
        // });
        // agent.on('setSelection', (...args) => {
        //   console.log('set selection?', args);
        // });
        // agent.on('selected', (...args) => {
        //   console.log('selected?', args);
        // });
        agent.on('highlight', _this2._onHighlightFromInspector);
        agent.on('hideHighlight', _this2._onHideHighlightFromInspector);
        // agent.on('highlightMany', (...args) => {
        //   console.log('highlightMany?', args);
        // });
      };

      // Inject the runtime into a devtools global hook regardless of browser.
      // Allows for debugging when the hook is injected on the page.
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
        this._devToolsRendererDefinition = {
          CurrentOwner: _ReactCurrentOwner2.default,
          InstanceHandles: _ReactInstanceHandles2.default,
          Mount: this,
          Reconciler: _ReactReconciler2.default,
          TextComponent: _InternalComponent2.default
        };

        var rendererListener = function rendererListener(info) {
          _this2._reactDevtoolsRendererId = info.id;
          _this2._rendererListenerCleanup();

          delete _this2._rendererListenerCleanup;
        };

        this._rendererListenerCleanup = __REACT_DEVTOOLS_GLOBAL_HOOK__.sub('renderer', rendererListener);
        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(this._devToolsRendererDefinition);

        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent !== 'undefined' && __REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent) {
          var agent = __REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent;
          this._hookAgent(agent);
        } else {
          this._devtoolsCallbackCleanup = __REACT_DEVTOOLS_GLOBAL_HOOK__.sub('react-devtools', function (agent) {
            _this2._devtoolsCallbackCleanup();

            _this2._hookAgent(agent);
          });
        }
      }
    }
  }

  _createClass(React3Renderer, [{
    key: 'instantiateChildren',
    value: function instantiateChildren(nestedChildNodes) {
      if (nestedChildNodes === null) {
        return null;
      }

      var childInstances = {};

      (0, _traverseAllChildren2.default)(nestedChildNodes, this.instantiateChild, childInstances);

      return childInstances;
    }
  }, {
    key: 'containsChild',
    value: function containsChild(container, markup) {
      var childrenMarkup = container.userData.markup.childrenMarkup;
      for (var i = 0; i < childrenMarkup.length; i++) {
        if (childrenMarkup[i] === markup) {
          return true;
        }
      }

      return false;
    }

    // DO NOT RENAME
    // used by react devtools!


    // used by react devtools

  }, {
    key: '_mountImageIntoNode',
    value: function _mountImageIntoNode(markup, container, instance, shouldReuseMarkup, transaction) {
      // eslint-disable-line no-unused-vars
      // TODO try to do server-side rendering for THREE

      if (!container.userData) {
        // it has to be a HTMLCanvasElement I guess?
        (0, _invariant2.default)(container instanceof HTMLCanvasElement, 'The root container can only be a THREE.js object ' + '(with an userData property) or HTMLCanvasElement.');
        container.userData = {
          _createdByReact3: true
        };
      }

      var rootImage = markup;

      var rootMarkup = {
        threeObject: container,
        parentMarkup: null,
        childrenMarkup: [rootImage],
        toJSON: function toJSON() {
          return '---MARKUP---';
        }
      };

      Object.assign(container.userData, {
        object3D: container,
        toJSON: function toJSON() {
          return '---USERDATA---';
        },
        markup: rootMarkup
      });

      rootImage.parentMarkup = rootMarkup;

      var descriptorForChild = this.threeElementDescriptors[rootImage.elementType];
      descriptorForChild.setParent(rootImage.threeObject, rootMarkup.threeObject);

      // all objects now added can be marked as added to scene now!

      rootImage.threeObject.mountedIntoRoot();

      var firstChild = container.userData.markup.childrenMarkup[0];
      _React3ComponentTree2.default.precacheMarkup(instance, firstChild);

      var nativeInstance = _React3ComponentTree2.default.getInstanceFromMarkup(firstChild);
      if (nativeInstance._debugID !== 0) {
        _ReactInstrumentation2.default.debugTool.onNativeOperation(nativeInstance._debugID, 'mount', markup.toString());
      }
    }

    /**
     *
     * @param nextElement A react element
     * @param container A canvas or a THREE.js object
     * @param callback The callback function
     * @returns {*}
     */

  }, {
    key: 'render',
    value: function render(nextElement, container, callback) {
      return this._renderSubtreeIntoContainer(null, nextElement, container, callback);
    }
  }, {
    key: 'getNativeRootInstanceInContainer',
    value: function getNativeRootInstanceInContainer(container) {
      var rootMarkup = getReactRootMarkupInContainer(container);
      var prevNativeInstance = rootMarkup && _React3ComponentTree2.default.getInstanceFromMarkup(rootMarkup);
      return prevNativeInstance && !prevNativeInstance._nativeParent ? prevNativeInstance : null;
    }
  }, {
    key: 'getTopLevelWrapperInContainer',
    value: function getTopLevelWrapperInContainer(container) {
      var root = this.getNativeRootInstanceInContainer(container);
      if (root) {
        (0, _invariant2.default)(!!root._nativeContainerInfo, 'Root should have native container info %s', ' but it does not');
      }
      return root ? root._nativeContainerInfo._topLevelWrapper : null;
    }
  }, {
    key: '_renderSubtreeIntoContainer',
    value: function _renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
      var _this3 = this;

      if (!_ReactElement2.default.isValidElement(nextElement)) {
        if (process.env.NODE_ENV !== 'production') {
          if (typeof nextElement === 'string') {
            (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.%s', ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.');
          } else {
            if (typeof nextElement === 'function') {
              (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.%s', ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.');
            } else {
              if (nextElement !== null && nextElement.props !== undefined) {
                (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.%s', ' This may be caused by unintentionally loading two independent ' + 'copies of React.');
              } else {
                (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.');
              }
            }
          }
        } else {
          (0, _invariant2.default)(false);
        }
      }

      var nextWrappedElement = (0, _ReactElement2.default)(TopLevelWrapper, null, null, null, null, null, nextElement);

      var prevComponent = this.getTopLevelWrapperInContainer(container);

      if (prevComponent) {
        var prevWrappedElement = prevComponent._currentElement;
        var prevElement = prevWrappedElement.props;
        if ((0, _shouldUpdateReactComponent2.default)(prevElement, nextElement)) {
          var _ret = function () {
            var publicInst = prevComponent._renderedComponent.getPublicInstance();
            var updatedCallback = callback && function () {
              callback.call(publicInst);
            };

            _this3._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);

            return {
              v: publicInst
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        this.unmountComponentAtNode(container);
      }

      // aka first child
      var reactRootMarkup = getReactRootMarkupInContainer(container);
      var containerHasReactMarkup = reactRootMarkup && !!internalGetID(reactRootMarkup);

      // containerHasNonRootReactChild not implemented

      var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;

      var component = void 0;
      if (parentComponent === null) {
        // no context
        component = this._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, _emptyObject2.default)._renderedComponent.getPublicInstance();
      } else {
        // yes context
        component = this._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context))._renderedComponent.getPublicInstance();
      }

      if (callback) {
        callback.call(component);
      }

      return component;
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var rootIds = Object.keys(this._instancesByReactRootID);

      for (var i = 0; i < rootIds.length; ++i) {
        this.unmountComponentAtNode(this._instancesByReactRootID[rootIds[i]].getNativeMarkup().parentMarkup.threeObject);
      }

      delete this._instancesByReactRootID;
      if (process.env.NODE_ENV !== 'production') {
        delete this.rootMarkupsByReactRootID;
      }
      delete this._highlightElement;
      this.nextMountID = 1;
      this.nextReactRootIndex = 0;

      if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
        if (this._devtoolsCallbackCleanup) {
          this._devtoolsCallbackCleanup();

          delete this._devtoolsCallbackCleanup;
        }

        if (this._rendererListenerCleanup) {
          this._rendererListenerCleanup();

          delete this._rendererListenerCleanup;
        }

        if (this._devToolsRendererDefinition) {
          if (this._agent) {
            this._agent.onUnmounted(this._devToolsRendererDefinition);
            this._agent.removeListener('highlight', this._onHighlightFromInspector);
            this._agent.removeListener('hideHighlight', this._onHideHighlightFromInspector);
          }

          if (this._reactDevtoolsRendererId) {
            delete __REACT_DEVTOOLS_GLOBAL_HOOK__._renderers[this._reactDevtoolsRendererId];
            delete this._reactDevtoolsRendererId;
          }

          delete this._devToolsRendererDefinition;
          delete this._agent;
        }

        delete this._onHighlightFromInspector;
        delete this._onHideHighlightFromInspector;
        delete this._hookAgent;
      }
    }
  }, {
    key: '_updateRootComponent',
    value: function _updateRootComponent(prevComponent, nextElement, container, callback) {
      _ReactUpdateQueue2.default.enqueueElementInternal(prevComponent, nextElement);
      if (callback) {
        _ReactUpdateQueue2.default.enqueueCallbackInternal(prevComponent, callback);
      }

      return prevComponent;
    }

    /**
     * True if the supplied DOM node has a direct React-rendered child that is
     * not a React root element. Useful for warning in `render`,
     * `unmountComponentAtNode`, etc.
     *
     * @param {?*} container The container.
     * @return {boolean} True if the DOM element contains a direct child that was
     * rendered by React but is not a root element.
     * @internal
     */

  }, {
    key: 'hasNonRootReactChild',
    value: function hasNonRootReactChild(container) {
      var rootMarkup = getReactRootMarkupInContainer(container);
      if (rootMarkup) {
        var inst = _React3ComponentTree2.default.getInstanceFromMarkup(rootMarkup);
        return !!(inst && inst._nativeParent);
      }

      return false;
    }
  }, {
    key: 'unmountComponentAtNode',
    value: function unmountComponentAtNode(container) {
      // Various parts of our code (such as ReactCompositeComponent's
      // _renderValidatedComponent) assume that calls to render aren't nested;
      // verify that that's the case. (Strictly speaking, unmounting won't cause a
      // render but we still don't expect to be in a render call here.)

      if (process.env.NODE_ENV !== 'production') {
        (0, _warning2.default)(_ReactCurrentOwner2.default.current === null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', _ReactCurrentOwner2.default.current && _ReactCurrentOwner2.default.current.getName() || 'ReactCompositeComponent');
      }

      var prevComponent = this.getTopLevelWrapperInContainer(container);
      if (!prevComponent) {
        // Check if the node being unmounted was rendered by React, but isn't a
        // root node.
        var containerHasNonRootReactChild = this.hasNonRootReactChild(container);

        // Check if the container itself is a React root node.
        var isContainerReactRoot = container && container.userData && container.userData.markup && container.userData.markup[_idPropertyName2.default];

        if (process.env.NODE_ENV !== 'production') {
          (0, _warning2.default)(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.');
        }

        return false;
      }

      delete this._instancesByReactRootID[prevComponent._instance.rootID];

      _ReactUpdates2.default.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);

      if (container && container.userData && container.userData._createdByReact3) {
        delete container.userData;
      }

      return true;
    }

    /**
     * @param {THREE.Object3D|HTMLCanvasElement} container THREE Object
     *   or HTML Canvas Element that may contain a React component.
     * @return {?string} A "reactRoot" ID, if a React component is rendered.
     */

  }, {
    key: 'getReactRootID',
    value: function getReactRootID(container) {
      var rootMarkup = getReactRootMarkupInContainer(container);
      return rootMarkup && this.getID(rootMarkup);
    }

    // see instantiateReactComponent.js
    /**
     *
     * @param element ( from createElement )
     * @returns {*}
     */

  }, {
    key: 'instantiateReactComponent',
    value: function instantiateReactComponent(element) {
      var instance = void 0;

      var elementToInstantiate = element;

      var isEmpty = elementToInstantiate === null || elementToInstantiate === false;
      if (isEmpty) {
        elementToInstantiate = _ReactElement2.default.createElement('object3D');
        // instance = new ReactDOMEmptyComponent(this.instantiateReactComponent);
      }

      if ((typeof elementToInstantiate === 'undefined' ? 'undefined' : _typeof(elementToInstantiate)) === 'object') {
        if (!(elementToInstantiate && (typeof elementToInstantiate.type === 'function' || typeof elementToInstantiate.type === 'string'))) {
          if (process.env.NODE_ENV !== 'production') {
            (0, _invariant2.default)(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', !elementToInstantiate.type ? elementToInstantiate.type : _typeof(elementToInstantiate.type), getDeclarationErrorAddendum(elementToInstantiate._owner));
          } else {
            (0, _invariant2.default)(false);
          }
        }

        // Special case string values
        if (typeof elementToInstantiate.type === 'string') {
          // original: instance = ReactNativeComponent.createInternalComponent(elementToInstantiate);
          instance = new _InternalComponent2.default(elementToInstantiate, this);
        } else if (isInternalComponentType(elementToInstantiate.type)) {
          // This is temporarily available for custom components that are not string
          // representations. I.e. ART. Once those are updated to use the string
          // representation, we can drop this code path.
          var Constructor = elementToInstantiate.type;

          instance = new Constructor(elementToInstantiate);
        } else {
          instance = new _React3CompositeComponentWrapper2.default(elementToInstantiate, this);
        }
      } else if (typeof elementToInstantiate === 'string' || typeof elementToInstantiate === 'number') {
        // TODO create instance for text
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)(false, 'Encountered invalid React node of type %s : %s', typeof elementToInstantiate === 'undefined' ? 'undefined' : _typeof(elementToInstantiate), elementToInstantiate);
        } else {
          (0, _invariant2.default)(false);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)(false, 'Encountered invalid React node of type %s', typeof elementToInstantiate === 'undefined' ? 'undefined' : _typeof(elementToInstantiate));
        } else {
          (0, _invariant2.default)(false);
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        (0, _warning2.default)(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getNativeMarkup === 'function' && typeof instance.unmountComponent === 'function', 'Only React 3 Components can be mounted.');
      }

      // These two fields are used by the DOM and ART diffing algorithms
      // respectively. Instead of using expandos on components, we should be
      // storing the state needed by the diffing algorithms elsewhere.
      instance._mountIndex = 0;
      instance._mountImage = null;

      if (process.env.NODE_ENV !== 'production') {
        instance._isOwnerNecessary = false;
        instance._warnedAboutRefsInRender = false;
      }

      if (process.env.NODE_ENV !== 'production') {
        var debugID = isEmpty ? 0 : 'r3r' + this._nextDebugID++;
        instance._debugID = debugID;

        if (debugID !== 0) {
          var displayName = getDisplayName(instance);
          _ReactInstrumentation2.default.debugTool.onSetDisplayName(debugID, displayName);
          var owner = elementToInstantiate && elementToInstantiate._owner;
          if (owner) {
            _ReactInstrumentation2.default.debugTool.onSetOwner(debugID, owner._debugID);
          }
        }
      }

      // Internal instances should fully constructed at this point, so they should
      // not get any new fields added to them at this point.
      if (process.env.NODE_ENV !== 'production') {
        if (Object.preventExtensions) {
          Object.preventExtensions(instance);
        }
      }

      return instance;
    }

    /**
     *
     * @param nextElement
     * @param {THREE.Object3D | HTMLCanvasElement} container
     * @param shouldReuseMarkup
     * @param context
     * @returns {*}
     * @private
     */

  }, {
    key: '_renderNewRootComponent',
    value: function _renderNewRootComponent(nextElement, container, shouldReuseMarkup, context) {
      if (process.env.NODE_ENV !== 'production') {
        _ReactInstrumentation2.default.debugTool.onBeginFlush();
      }

      // Various parts of our code (such as ReactCompositeComponent's
      // _renderValidatedComponent) assume that calls to render aren't nested;
      // verify that that's the case.
      if (process.env.NODE_ENV !== 'production') {
        (0, _warning2.default)(_ReactCurrentOwner2.default.current === null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', _ReactCurrentOwner2.default.current && _ReactCurrentOwner2.default.current.getName() || 'ReactCompositeComponent');
      }

      var componentInstance = this.instantiateReactComponent(nextElement);

      if (process.env.NODE_ENV !== 'production') {
        // Mute future events from the top level wrapper.
        // It is an implementation detail that devtools should not know about.
        componentInstance._debugID = 0;
      }

      // The initial render is synchronous but any updates that happen during
      // rendering, in componentWillMount or componentDidMount, will be batched
      // according to the current batching strategy.

      if (!_ReactUpdates2.default.ReactReconcileTransaction) {
        // If the ReactReconcileTransaction has not been injected
        // let's just use the defaults from ReactMount.
        _ReactInjection2.default.Updates.injectReconcileTransaction(_ReactReconcileTransaction2.default);
        _ReactInjection2.default.Updates.injectBatchingStrategy(_ReactDefaultBatchingStrategy2.default);
      }

      _ReactUpdates2.default.batchedUpdates(this.batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);

      var wrapperID = componentInstance._instance.rootID = this.createReactRootID();
      this._instancesByReactRootID[wrapperID] = componentInstance;

      if (process.env.NODE_ENV !== 'production') {
        var reactRootID = 0;
        // Record the root element in case it later gets transplanted.
        this.rootMarkupsByReactRootID[reactRootID] = getReactRootMarkupInContainer(container);

        // The instance here is TopLevelWrapper so we report mount for its child.
        _ReactInstrumentation2.default.debugTool.onMountRootComponent(componentInstance._renderedComponent._debugID);
        _ReactInstrumentation2.default.debugTool.onEndFlush();
      }

      return componentInstance;
    }

    /**
     * Batched mount.
     *
     * @param {ReactComponent} componentInstance The instance to mount.
     * @param {*} container Container.
     * @param {boolean} shouldReuseMarkup If true, do not insert markup
     * @param {*} context que?
     */


    /**
     * Mounts this component and inserts it into the DOM.
     *
     * @param {ReactComponent} wrapperInstance The instance to mount.
     * @param {*} container container to mount into.
     * @param {ReactReconcileTransaction} transaction
     * @param {boolean} shouldReuseMarkup If true, do not insert markup
     * @param {*} context
     */

  }, {
    key: 'createReactRootID',
    value: function createReactRootID() {
      return this.nextReactRootIndex++;
    }
  }, {
    key: 'getID',
    value: function getID(markup) {
      return internalGetID(markup);
    }
  }]);

  return React3Renderer;
}(), _class2.eventDispatcher = new _EventDispatcher2.default(), _temp2);


module.exports = React3Renderer;