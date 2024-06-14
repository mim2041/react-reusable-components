import React, { ChangeEvent, MouseEvent, createContext, useRef } from 'react';
import cn from '../../utils/cn';
import { createPortal } from 'react-dom';

const modalContext = createContext(null);

const Modal = ({ isOpen, onClose, children }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleOusideClose = (e : MouseEvent) => {
        console.log(e.target);
        console.log(containerRef.current);

        if(!containerRef.current?.contains(e.target as Node)){
            onClose();
        }
    }

    return createPortal(
        <modalContext.Provider value={onClose}>

            <div className={cn('fixed inset-0 bg-gray-500/70 invisible z-[999] flex justify-center items-center', {
                visible: isOpen,
            })}
            onClick={handleOusideClose}
            >
                
                <div ref={containerRef} className='bg-white w-full max-w-sm rounded-md'>
                    {children}
                </div>
            </div>
        </modalContext.Provider>,
        document.getElementById('portal') as Element
    );
};

const CloseButton = () => {
    
}

export default Modal;