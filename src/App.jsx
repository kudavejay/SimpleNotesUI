import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { getNotes, createNote, deleteNote } from "./services/noteService"; //This is named export function which we import here
import NoteCard from "./components/NoteCard";
import AddNoteCard from "./components/AddNoteCard";
import { Plus } from "lucide-react";
import Modal from "./components/Modal";

function App() {
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);//here we set empty array
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const loadNotes = async () => {
        var res = await getNotes(search);
        setNotes(res.data);
    };


    // async function load(){
    //     await getNotes();
    // }

    useEffect(() => {
        loadNotes();
    }, [search])

    const handleAdd = async ({title, content}) => {

        if (!title) return; //!titile means if title is empty then return and do not execute below code

        console.log(title, content);
        const newNote = {
            title: title,
            content: content
        };

        // await createNote(title, content);//This line give me 415 status code bec post expect object as their body
        await createNote(newNote);

        //After Adding we will reset the input fields
        // setTitle("");
        // setContent("");
        loadNotes();
    };

    //for delete
    const handleDelete = async (id) => {
        await deleteNote(id);
        loadNotes();
    };
    //END

    const openModal = () => {
        setShowModal(true);
    }
    return (
        <div className="container">
            <h2>Notes</h2>
            <div className="search-bar">
                <div className="searchWrap">
                    <input id="searchInput" placeholder="Type to search" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div>
                    <button onClick={openModal}>
                        <Plus size={25} strokeWidth={1.60}></Plus>
                        <span>new note</span>
                    </button>
                </div>
            </div>
            <div className="notes-grid">
                {
                    notes.map((note) => {

                        return (<NoteCard key={note.id} note={note} onDelete={handleDelete}></NoteCard>)
                    })
                }
                {/* {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onDelete={handleDelete}
                    />
                ))} */}
                <AddNoteCard showModal={openModal}/>
            </div>

            {
                showModal && (
                    <Modal onSave={handleAdd} onClose={() => setShowModal(false)}></Modal>)
                //Left side = the condition (true/false)
                // Right side = what to show if condition is true
            }
        </div>
    );
}

export default App;

// notes.filter((note) =>
//note.title.toLowerCase().includes(search.toLowerCase())
//       )
//This is call expression body  no curly bracket  after arrow and also no need return keyword because it is implicit return and it will return the result of the expression after the arrow function.

//  notes.filter((note) => {

//    return note.title.toLowerCase().includes(search.toLowerCase())
//  } )
//This is block body  after arrow function we have curly bracket and we need to use return keyword to return the result of the expression.

{/* <div style={{ padding: "20px" }}>
            <h1>Simple Notes App</h1>

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <textarea
                placeholder="Enter content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <br /><br />

            <button onClick={handleAdd}>Add Note</button>

            <hr />

            <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {
                notes.filter((note) =>
                    note.title.toLowerCase().includes(search.toLowerCase())
                ).
                    map((note) => (
                        <div key={note.id}>
                            <h4>{note.title}</h4>
                            <p>{note.content}</p>
                            <button onClick={() => handleDelete(note.id)}>Delete</button>
                        </div>
                    ))}
        </div> */}