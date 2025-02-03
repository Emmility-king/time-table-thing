import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Table } from 'react-bootstrap';

    function TablizeModal(props) {
        const datam = [];

        // Populate datam with your data here
        // For example:
        // datam.push(<div>Your data here</div>)

        return (
            <div>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {props.heading}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {datam}
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    export default TablizeModal;


