import { Component, FunctionComponent, LinkHTMLAttributes } from 'react';
import { ModalProps, Modals } from '@watch-state/react-modal';
export declare type RouterModalProps = ModalProps & {
    id: string;
};
export declare function closeRouterModal(): void;
export declare function openRouterModal(id: string): void;
export declare const OpenModal: FunctionComponent<{
    id: string;
} & LinkHTMLAttributes<any>>;
export default class RouterModal extends Component<RouterModalProps> {
    close: (button: string) => void;
    closeOverride(button: string, close: () => void): void;
    render(): JSX.Element;
}
export { Modals };
