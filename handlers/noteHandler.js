// Imports
    import Note from "../models/noteModel.js";

// CRUD: Create
    const createNote = async (noteData) => {
        return Note.create(noteData);
    }

// CRUD: Read
    const getAllNotes = async () => {
        return await Note.find().lean();
    }

    const getOneNote = async ({id}) => {
        return await Note.findOne({_id: id}).lean();
    }

    const getOneNoteBySlug = async ({slug}) => {
        return await Note.findOne({slug}).lean();
    }

// CRUD: Edit
    const updateNote = async (id, noteData) => {
        return await Note.findOneAndUpdate({_id: id}, noteData).lean();
    }

// CRUD: Delete
    const deleteNote = async (id) => {
        return await Note.findByIdAndDelete(id).lean();
    }

// Exports
    export default {
        createNote,
        getAllNotes,
        getOneNote,
        updateNote,
        deleteNote,
        getOneNoteBySlug
    }