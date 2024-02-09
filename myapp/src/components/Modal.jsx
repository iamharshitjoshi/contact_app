import React from 'react'
import { createPortal } from 'react-dom';
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center backdrop-blur">
            <div className="absolute w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={onClose}
                  className="text-1xl cursor-pointer"
                />
              </div>
              {children}
            </div>
            <div
           
              className="absolute inset-0 z-40 bg-black opacity-50"
            />
          </div>
        )}
      </>
    );
  };
  

export default Modal
