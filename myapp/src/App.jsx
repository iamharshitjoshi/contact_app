import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclosure from './hooks/useDisclosure';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact';

const App = () => {

  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen} = useDisclosure();
  
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts =(e)=>{
    const value = e.target.value;
    
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      
      const filteredContacts = contactLists.filter((contact)=>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )

      setContacts(filteredContacts);
      return filteredContacts;
    });

  }

  return (
    <>

      <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      
      <div className='flex gap-2'>

      <div className='relative flex flex-grow items-center'>
      <FiSearch className='ml-1 absolute text-white text-3xl'/>
        <input 
        onChange={filterContacts}
        type="text"
        className="flex-grow h-10 rounded-md border-white bg-stone-300 pl-9 text-black"
         />
        
      </div>

      <AiFillPlusCircle onClick={onOpen}  className='text-5xl text-white cursor cursor-pointer hover:text-cyan-200' />
      </div>

      <div className='mt-4 flex flex-col gap-4  '  >
        {
          contacts.length<=0 ? <NotFoundContact/>:
          contacts.map((contact)=>{
           return <ContactCard key={contact.id} contact={contact}/>
          })
        }
      </div>

      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
      <ToastContainer position='bottom-center'/>
    </div>


    </>
  );
};

export default App
