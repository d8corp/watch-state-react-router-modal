import { Component, FunctionComponent, LinkHTMLAttributes } from 'react';
import { ModalProps, Modals } from '@watch-state/react-modal';
declare type RouterModalProps = ModalProps & {
    id: string;
};
declare function closeRouterModal(): void;
declare function openRouterModal(id: string): void;
declare const OpenModal: FunctionComponent<{
    id: string;
} & LinkHTMLAttributes<any>>;
export default class RouterModal extends Component<RouterModalProps> {
    close: (button: string) => void;
    closeOverride(button: string, close: () => void): void;
    render(): JSX.Element;
}
export { Modals, RouterModalProps, OpenModal, openRouterModal, closeRouterModal };
