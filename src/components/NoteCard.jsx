
import React from 'react';
import { Trash2 } from 'lucide-react';

// const NoteCard = ({note,onDelete}}) => {This also work
const NoteCard = (props) => {
    return (
        <div className='noteContainer'>
            <div className="note-card">
                {/* {console.log(note)} */}
                {console.log(props)}
                <div className="top">
                    <h3>{props.note.title}</h3>
                    <p>{props.note.content}</p>

                </div>
                <div className='bottom'>
                    {/* <button onClick={props.note.onDelete}>Remove</button> */}
                    {/* <Trash2 width={10}/> */}
                    <button onClick={()=>props.onDelete(props.note.id)}>
                        <Trash2 size={19} strokeWidth={1.25} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoteCard