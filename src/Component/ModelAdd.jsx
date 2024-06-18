
import { TbArrowsCross } from "react-icons/tb";


export const ModelAdd = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="absolute flex items-center justify-center top-0 z-40 backdrop-blur h-screen w-screen" >
                    <div
                        className=" relative z-50 min-h-[200px] max-w-[300px] bg-white m-auto rounded-md p-3">
                        <div className=" flex justify-end">
                            <TbArrowsCross
                                onClick={onClose}
                                className=" text-[20px] cursor-pointer" />
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
