import React, { useState } from 'react';
// Components
import { Modal } from 'semantic-ui-react';
import Auth from '../../Auth';

const AuthModal = ({trigger}) => {

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
                <Auth closeModal={setOpen}/>
            </Modal.Content>

        </Modal>
    )
}

export default AuthModal;
