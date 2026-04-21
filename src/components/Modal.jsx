import { useState } from 'react'

const Modal = ({ onSave ,onClose}) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSave = () => {
        if (!title && !body) return;
        onSave({ title: title || 'Untitled', content: body })
    }

    return (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal">
                <h2>New note</h2>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea rows="4" placeholder="What's on your mind?" value={body} onChange={(e) => setBody(e.target.value)} />
                <div className="modal-actions">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSave}>Save note</button>
                </div>
            </div>
        </div>
    )
}

export default Modal