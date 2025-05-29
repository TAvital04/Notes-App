// Imports
    import Note from "../models/noteModel.js";

// CRUD: Create
    const createNote = async (noteData) => {
        console.log("Note data in handler: ", noteData);
        return Note.create(noteData);
    }

// CRUD: Read
    const getAllNotes = async () => {
        return await Note.find().lean();
    }

// Exports
    export default {
        createNote,
        getAllNotes
    }