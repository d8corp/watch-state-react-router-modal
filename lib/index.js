'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var watch = require('@watch-state/react');
var Router = require('@watch-state/react-router');
var Modal = require('@watch-state/react-modal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var watch__default = /*#__PURE__*/_interopDefaultLegacy(watch);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);

function closeRouterModal() {
    Router.history.push(Router.setSearch(Router.history.url, 'modal'), -1);
}
function openRouterModal(id) {
    Router.history.push(Router.setSearch(Router.history.url, 'modal', id), -1);
}
var OpenModal = function (props) { return (React__default['default'].createElement("a", tslib.__assign({}, props, { onClick: function (e) {
        e.preventDefault();
        openRouterModal(props.id);
    } }))); };
var RouterModal = /** @class */ (function (_super) {
    tslib.__extends(RouterModal, _super);
    function RouterModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouterModal.prototype.closeOverride = function (button, close) {
        var start = watch.createEvent(function (id) {
            if (button !== 'router') {
                if (id) {
                    openRouterModal(id);
                }
                else {
                    closeRouterModal();
                }
            }
            close();
        });
        if (this.props.onWillClose) {
            this.props.onWillClose(button, start);
        }
        else {
            start();
        }
    };
    RouterModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, delay = _a.delay, props = tslib.__rest(_a, ["id", "delay"]);
        return (React__default['default'].createElement(Router__default['default'], { search: "modal=" + id, hideDelay: delay, onHide: function () { return _this.close && _this.close('router'); }, ish: true },
            React__default['default'].createElement(Modal__default['default'], tslib.__assign({}, props, { delay: delay, close: function (close) {
                    _this.close = close;
                    if (_this.props.close) {
                        _this.props.close(close);
                    }
                }, onWillClose: function (button, close) { return _this.closeOverride(button, close); } }))));
    };
    RouterModal = tslib.__decorate([
        watch__default['default']
    ], RouterModal);
    return RouterModal;
}(React.Component));

Object.defineProperty(exports, 'Modals', {
  enumerable: true,
  get: function () {
    return Modal.Modals;
  }
});
exports.OpenModal = OpenModal;
exports.closeRouterModal = closeRouterModal;
exports.default = RouterModal;
exports.openRouterModal = openRouterModal;
