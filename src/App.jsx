import Navbar from "./Component/Navbar"
import { IoSearch } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "./Config/Firebase";
import ContectBox from "./Component/ContectBox";
import AddandUpdate from "./Component/AddandUpdateinmodel";
import useDiscluse from './Hooks/useDiscluse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotfoundContact from "./Component/NotfoundContact";

function App() {
  const [datas, setdatas] = useState([]);
  const { onClose, onOpen, isOpen } = useDiscluse()

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "user")
        // const contactsSnapShot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setdatas(contactList)
          return contactList;
        })


      } catch (error) {
        console.log(error);
      }

    };
    getContacts();
  }, [])

  const searchFilter = (e) => {
    const value = e.target.value

    const contactsRef = collection(db, "user")
    // const contactsSnapShot = await getDocs(contactsRef);

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      const filterData = contactList.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()))

      setdatas(filterData)
      return filterData;
    })
  }

  return (
    <>
      <div
        className=" max-w-[370px] m-auto">
        <Navbar />
        <div className=" flex m-3 g-1">
          <div className=" flex flex-grow relative items-center ">
            <IoSearch className=" absolute text-white text-4xl p-1" />
            <input type="search"
              onChange={searchFilter}
              placeholder="Search Contact"
              className=" border bg-transparent border-white h-10 rounded-md outline-none text-white pl-9 flex-grow" />
          </div>

          <IoIosAddCircle
            onClick={onOpen}
            className=" text-white text-[45px] cursor-pointer hover:text-slate-200 " />

        </div>

        <div >
          {datas.length <= 0 ? <NotfoundContact /> : datas.map((data) => (
            <ContectBox key={data.id} data={data} onOpen={onOpen} />

          ))}
        </div>
        <AddandUpdate isOpen={isOpen} onClose={onClose} />

      </div>
      <ToastContainer position="bottom-center" />



    </>
  )
}

export default App
