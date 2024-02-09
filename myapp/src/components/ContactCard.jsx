import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclosure from '../hooks/useDisclosure'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {
   
  const { isOpen, onClose, onOpen} = useDisclosure();
    const deleteContact = async(id)=>{
        try{
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Successfully");
        }
        catch(error){
          console.log(error);
        }
  };



  return (
    <>
        <div 
    
    className="h-16 flex bg-yellow justify-between items-center rounded-xl"
    key={contact.id}>

      <div className='flex items-center gap-2'>

      <div>
      <HiOutlineUserCircle className='text-4xl text-orange'/>
      </div>

      <div>
      <h2 className="text-medium">{contact.name}</h2>
      <p className="text-sm">{contact.email}</p>
      </div>

      </div>

      <div className="flex text-3xl ">

      <RiEditCircleLine onClick={onOpen} 
       className='cursor-pointer' />

      <IoMdTrash onClick={()=>deleteContact(contact.id)} 
       className='text-orange cursor-pointer'/>
      </div>
  
    </div>
    <AddAndUpdateContact 
    contact={contact}
    isUpdate 
    isOpen={isOpen} 
    onClose={onClose}/>
    </>

  )
}

export default ContactCard
