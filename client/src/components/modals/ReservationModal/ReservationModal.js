import React, {useState} from 'react'
import { Modal } from 'semantic-ui-react'

import Reservation from '../../Reservation'

import './ReservationModal.scss'

const ReservationModal = ({trigger}) => {

    const [open, setOpen] = useState(false);

    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}
            >
        
            <Modal.Content >
                <Reservation closeModal={setOpen}/>
            </Modal.Content>

        </Modal>
    )
}

export default ReservationModal
