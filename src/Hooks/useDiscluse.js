import { useState } from "react"


function useDiscluse() {

    const [isOpen, setisOpen] = useState(false)

    const onOpen = () => {
        setisOpen(true)
    }

    const onClose = () => {
        setisOpen((p) => !p)
    }
    return {isOpen,onClose,onOpen}
}

export default useDiscluse;