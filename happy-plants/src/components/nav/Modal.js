import React from 'react'
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom';

// ------ "Modal.js" #####


export const Modal = ({ props, isShowing }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <p>
                        Select an option:
        </p>
                    <button className="btn--add--Plant"
                        onClick={
                            () => props.history.push("/addevent")
                            }
                    >Create New Plant</button>
                    <button className="btn--add--Event"
                        onClick={
                            () => props.history.push("/addevent")
                            }
                        >Create New Event</button>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;


