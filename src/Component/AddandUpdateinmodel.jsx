
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { ModelAdd } from './ModelAdd'
import { ErrorMessage, Field, Form, Formik } from "formik"
import { db } from '../Config/Firebase';
import { toast } from 'react-toastify';
import * as Yup from 'yup'

function AddandUpdateinmodel({ isOpen, onClose, isUpdate, data }) {

  const validation = Yup.object().shape({
    name: Yup.string().required("Name should be required"),
    email: Yup.string().email("Invalid Email").required("Email should be required"),
  })


  const conatactdatafromhere = async (contact) => {
    try {
      const contactvalue = collection(db, 'user')
      await addDoc(contactvalue, contact)
      toast.success("contact Add") // toast msg
      onClose()
      // await addDoc(doc(db,'user',contact))   yha per ye kaam nhi aata hai delete mai kaam aata hai
    } catch (error) {
      console.log(error);
    }
  }

  const editContect = async (cont, id) => {
    try {
      const contactvalue = doc(db, 'user', id)
      await updateDoc(contactvalue, cont)
      toast.success("contact Edited")
      onClose()
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <ModelAdd isOpen={isOpen} onClose={onClose} >
      <Formik
        validationSchema={validation}
        initialValues={isUpdate ? {
          name: data.name,
          email: data.email,
        } :
          {
            name: '',
            email: '',
          }
        }
        onSubmit={(values) => {
          isUpdate ? editContect(values, data.id) :
            conatactdatafromhere(values)
        }
        }
      >
        <Form className=' flex flex-col'>
          <div>
            <label htmlFor='name'>Name</label> <br />
            <Field name="name" className=" border outline-purple-500 h-8 rounded-md w-[250px] p-2" />
            <div className=' text-red-700'>
              <ErrorMessage name='name' />
            </div>
          </div>
          <div>
            <label htmlFor='email'>Email</label> <br />
            <Field type="email" name="email" className=" border  outline-purple-500 h-8 rounded-md w-[250px] p-2"
            />
            <div className=' text-red-700'>
              <ErrorMessage name='email' />
            </div>
          </div>
          <button className=' border outline-none bg-yellow font-bold px-3 py-[2px] rounded-md mt-2 self-end hover:bg-dark-yellow'>
            {isUpdate ? "Update" : "Add"} Contect
          </button>
        </Form>
      </Formik>

    </ModelAdd>
  )
}

export default AddandUpdateinmodel