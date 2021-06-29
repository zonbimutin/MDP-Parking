import React,{useState} from 'react'
// Components
import { Modal } from 'semantic-ui-react';

import ParkiRegister from '../../Parki/ParkiRegister/ParkiRegister';

import './ParkiRegisterModal.scss'

const ParkiRegisterModal = ({trigger}) => {

    const [open, setOpen] = useState(false);

    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}
            size="small"
            className="ParkiRegisterModal parki "
            >
        
            <Modal.Content >
                <ParkiRegister/>
            </Modal.Content>

        </Modal>
    )
}

export default ParkiRegisterModal
