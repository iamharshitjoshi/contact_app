import React, { useState } from 'react'

const useDisclosure = () => {
    const [isOpen, setisOpen] = useState(false);

    const onOpen=()=>{
      setisOpen(true);
    }
  
    const onClose=()=>{
      setisOpen(false);
    }

  return {onClose, onOpen, isOpen};
};

export default useDisclosure;