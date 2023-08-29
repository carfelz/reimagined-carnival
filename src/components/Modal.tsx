type ModalProps = {
    onCancel: Function,
    onSubmit: Function,
    title: string,
    show: boolean,
    onClose: Function,
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({onClose, children, show, onSubmit, onCancel}) => {
    if(!show) {
        return null
    }

    return (
        <div className="fixed left-0 top-0 bottom-0 flex justify-center text-gray-950 bg-[rgba(0,0,0,0.5)] align-middle right-0 items-center">
            <div className="w-[500px] bg-white">
                <div className="p-4 flex justify-between">
                    <h4 className="m-0">Testing modal</h4>
                    <div onClick={() => onClose()} className="border rounded-total py-0 cursor-pointer w-[25px] pl-[7.5px]">x</div>
                </div>
                <div className="p-4 border-[#eee] border-t border-b ">
                   {children}
                </div>
                <div className="flex justify-end p-4">
                    <button onClick={() => onCancel()} className="mr-4 bg-red-600 px-4 py-2 text-white rounded-lg">Cancel</button>
                    <button onClick={() => onSubmit()} className="px-4 py-2 text-white rounded-lg bg-green-700">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
