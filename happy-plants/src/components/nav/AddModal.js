// ------ "useModal.js" #####
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './AddModal.css';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    function toggle() {
        setIsShowing(!isShowing);
    }
    return {
        isShowing,
        toggle,
    }
};

// ------ "Modal.js" #####

const Modal = ( { props, isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <p>
                        Select an option:
        </p>
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <button className="btn--add--Plant"
                        onClick={() => {
                            props.history.push(`/addplant`)
                        }}
                    >Create New Plant
            </button>
                    <button className="btn--add--Event"
                        onClick={
                            () => {
                                props.history.push("/addevent")}
                        }
                        
                        >Create New Event</button>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

// ------ "AddModal.js" #####

export const AddModal = (props) => {
    const { isShowing, toggle } = useModal();
    return (
        <div className="App">
            <button className="button-default" onClick={toggle}>Add (+)</button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                props={props}
            />
        </div>
    );
};

