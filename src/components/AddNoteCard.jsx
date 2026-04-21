import { Plus } from 'lucide-react';
import Modal from './Modal';
import { useState } from 'react';


const AddNoteCard = ({showModal}) => {
    return (
        <div className="addNoteContainer" onClick={showModal}>
            <Plus size={25} strokeWidth={1.60} />
            <span>Add note</span>
        </div>
    )
}

export default AddNoteCard;