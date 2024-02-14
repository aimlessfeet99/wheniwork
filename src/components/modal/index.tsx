import React, { ReactNode } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

interface Actions {
    label: string
    callbackParam?: string
    callback: (text?: string) => void
}

export interface ModalType {
    show?: boolean
    title?: string
    children?: ReactNode
    actions?: Actions[]
    toggle?: () => void
}

const BarChart: React.FC<ModalType> = ({ show, title, children, actions, toggle }) => {
    return (
        <Modal centered isOpen={show} toggle={toggle}>
            <ModalHeader>
                {title}
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                {actions?.map((action, index) => <Button key={index} onClick={() => {
                    toggle && toggle()
                    action.callback(action.callbackParam)
                }}>{action.label}</Button>)}
            </ModalFooter>
        </Modal>
    );
  };

  export default BarChart