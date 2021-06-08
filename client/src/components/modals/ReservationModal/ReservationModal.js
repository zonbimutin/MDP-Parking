import React, {useState} from 'react'
import { Modal } from 'semantic-ui-react'

import Reservation from '../../Reservation'

import './ReservationModal.scss'

const ReservationModal = ({trigger, parki}) => {

    const [open, setOpen] = useState(false);
    console.log(parki)

    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}
            >
        
            <Modal.Content >
                <Reservation parki={parki} closeModal={setOpen}/>
            </Modal.Content>

        </Modal>
    )
}

export default ReservationModal
