import TaskForm from "./modals/TaskForm"
type ModalProps = {
    onClose: Function,
    onSubmit: Function,
    title: string,
    show: boolean
}

const Modal: React.FC<ModalProps> = (props) => {
    if(!props.show) {
        return null
    }
    return (
        <div className="fixed left-0 top-0 bottom-0 flex justify-center text-gray-950 bg-[rgba(0,0,0,0.5)] align-middle right-0 items-center">
            <div className="w-[500px] bg-white">
                <div className="p-4 flex justify-between">
                    <h4 className="m-0">Testing modal</h4>
                    <p className="border rounded-total py-0 px-1 cursor-pointer">x</p>
                </div>
                <div className="p-4 border-[#eee] border-t border-b ">
                   <TaskForm />
                </div>
                <div className="p-4">
                    <button className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
