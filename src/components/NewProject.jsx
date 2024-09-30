import Input from './Input.jsx';
import {useRef} from 'react';
import Modal from './Modal.jsx';
export default function NewProject({onCancelClick,onSaveClick}) {
    const modal = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave(){
        const titleData = titleRef.current.value;
        const descriptionData = descriptionRef.current.value;
        const dueDateData = dueDateRef.current.value;

        if(titleData.trim() === '' || descriptionData.trim() === '' || dueDateData.trim() === ''){
            modal.current.open();
            return;
        }
        onSaveClick({title:titleData,description:descriptionData,dueDate:dueDateData});
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        dueDateRef.current.value = '';
    }
    
    return <>
    <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Zort.. Something went wrong. Please check all inputs are not empty......</p>
        <p className="text-stone-600 mb-4">Please enter all values</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={onCancelClick} className="text-stone-800 hover:text-stone-950" >Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
        <Input ref={titleRef} label={"Title"} />
        <Input ref={descriptionRef} label={"Description"} textarea/>
        <Input type="date" ref={dueDateRef} label={"Due Date"}/>
        </div>
    </div>
    </>
    
}