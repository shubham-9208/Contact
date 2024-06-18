
import { deleteDoc, doc } from 'firebase/firestore'
import { CgProfile } from 'react-icons/cg'
import { FaEdit } from 'react-icons/fa'
import { IoTrashBin } from 'react-icons/io5'
import { db } from '../Config/Firebase'
import AddandUpdateinmodel from './AddandUpdateinmodel'
import useDiscluse from '../Hooks/useDiscluse'
import { toast } from 'react-toastify'



function ContectBox({ data }) {

        const {onClose,onOpen,isOpen} = useDiscluse()
    
    
    

    const deleteCon=async(id)=>{
        try {
            // const collect= collection(db,'user')
            // await deleteDoc(doc(collect,id))
            await deleteDoc(doc(db,'user',id))
            toast.success("contact Deleted")
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
        <div
            className=" flex bg-yellow m-3 rounded-lg items-center justify-between px-2 max-h-[60px]"
            key={data.id}>
            <div className=" flex items-center gap-3">
                <CgProfile className=" text-rose-500 text-[35px]" />
                <div className=" ">
                    <h1 className=" font-bold text-[16px]">{data.name}</h1>
                    <p className=" text-[16px]">{data.email}</p>
                </div>
            </div>
            <div className=" flex gap-3">
                <FaEdit
                onClick={onOpen}
                className=" text-2xl text-green-400 cursor-pointer" />
                <IoTrashBin 
                onClick={()=>deleteCon(data.id)}
                className=" text-2xl text-purple-600 cursor-pointer hover:text-red-500" />
            </div>
        </div>
        <AddandUpdateinmodel data={data} isUpdate isOpen={isOpen} onClose={onClose}/>
        </>
    )
}

export default ContectBox