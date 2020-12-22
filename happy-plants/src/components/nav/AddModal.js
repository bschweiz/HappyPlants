// ------ "useModal.js" #####
import React from 'react';
import { Modal } from './Modal'
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
// ------ "AddModal.js" #####

export const AddModal = (props) => {
    // debugger
    const { isShowing, toggle } = useModal()
    
    if (props.location.pathname === "/addplant") {
        <Modal
        hide={toggle}/>
    }
    
        return (
            <div className="App">
                <button className="button-default" onClick={toggle}>Add (+)</button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    props={props}
                />
            </div>
        )
}

