import { __rest, __decorate } from 'tslib';
import React, { Component } from 'react';
import watch from '@watch-state/react';
import { globalEvent } from 'watch-state';
import Router, { history, setSearch } from '@watch-state/react-router';
import Modal from '@watch-state/react-modal';
export { Modals } from '@watch-state/react-modal';

function closeRouterModal() {
    history.push(setSearch(history.url, 'modal'), -1);
}
function openRouterModal(id) {
    history.push(setSearch(history.url, 'modal', id), -1);
}
const OpenModal = props => (React.createElement("a", Object.assign({}, props, { onClick: e => {
        e.preventDefault();
        openRouterModal(props.id);
    } })));
let RouterModal = class RouterModal extends Component {
    closeOverride(button, close) {
        const start = (id) => {
            globalEvent.start();
            if (button !== 'router') {
                if (id) {
                    openRouterModal(id);
                }
                else {
                    closeRouterModal();
                }
            }
            close();
            globalEvent.end();
        };
        if (this.props.onWillClose) {
            this.props.onWillClose(button, start);
        }
        else {
            start();
        }
    }
    render() {
        const _a = this.props, { id, delay } = _a, props = __rest(_a, ["id", "delay"]);
        return (React.createElement(Router, { search: `modal=${id}`, hideDelay: delay, onHide: () => this.close && this.close('router'), ish: true },
            React.createElement(Modal, Object.assign({}, props, { delay: delay, close: close => {
                    this.close = close;
                    if (this.props.close) {
                        this.props.close(close);
                    }
                }, onWillClose: (button, close) => this.closeOverride(button, close) }))));
    }
};
RouterModal = __decorate([
    watch
], RouterModal);
var RouterModal$1 = RouterModal;

export default RouterModal$1;
export { OpenModal, closeRouterModal, openRouterModal };
