import React, {Component, FunctionComponent, LinkHTMLAttributes} from 'react'
import watch from '@watch-state/react'
import {globalEvent} from 'watch-state'
import Router, {history, setSearch} from '@watch-state/react-router'
import Modal, {ModalProps, Modals} from '@watch-state/react-modal'

type RouterModalProps = ModalProps & {
  id: string
}

function closeRouterModal () {
  history.push(setSearch(history.url, 'modal'), -1)
}
function openRouterModal (id: string) {
  history.push(setSearch(history.url, 'modal', id), -1)
}

const OpenModal: FunctionComponent<{id: string} & LinkHTMLAttributes<any>> = props => (
  <a {...props} onClick={e => {
    e.preventDefault()
    openRouterModal(props.id)
  }} />
)

@watch
export default class RouterModal extends Component<RouterModalProps> {
  close: (button: string) => void
  closeOverride (button: string, close: () => void) {
    const start = (id?: string) => {
      globalEvent.start()
      if (button !== 'router') {
        if (id) {
          openRouterModal(id)
        } else {
          closeRouterModal()
        }
      }
      close()
      globalEvent.end()
    }
    if (this.props.onWillClose) {
      this.props.onWillClose(button, start)
    } else {
      start()
    }
  }
  render () {
    const {id, delay, ...props} = this.props
    return (
      <Router
        search={`modal=${id}`}
        hideDelay={delay}
        onHide={() => this.close && this.close('router')}
        ish>
        <Modal
          {...props}
          delay={delay}
          close={close => {
            this.close = close
            if (this.props.close) {
              this.props.close(close)
            }
          }}
          onWillClose={(button, close) => this.closeOverride(button, close)}
        />
      </Router>
    )
  }
}

export {
  Modals,
  RouterModalProps,
  OpenModal,
  openRouterModal,
  closeRouterModal
}
