// Imports
    import noteHandler from "../handlers/noteHandler.js";

// CRUD: Create
    const addNote = async (req, res) => {
        res.send("Add note");
    }
    const createNote = async (req, res) => {
        const noteData = req.body;
        const note = await noteHandler.createNote(noteData);
        //req.flash("success", `/${note.slug} added successfully :D`);
        res.redirect("/");
    }

// CRUD: Read
    const getNotes = async (req, res) => {
        const notes = await noteHandler.getAllNotes();
        res.json({title: "All Notes", notes});
    }

// CRUD: Update
    const editNote = async(req, res) => {
        const note = await noteHandler.getOneNote({id: req.params.id});
        res.send(note);
    }
    const updateNote = async(req, res) => {
        const id = req.params.id;
        const noteData = req.body;

        const note = await noteHandler.updateNote(id, noteData);

        res.redirect(`/notes/${note._id}/edit`);
    }

// CRUD: Delete
    const deleteNote = async(req, res) => {
        const id = req.params.id;
        const note = await noteHandler.deleteNote(id);

        res.redirect("/");
    }

// Exports
    export default {
        addNote,
        createNote,
        getNotes,
        editNote,
        updateNote,
        deleteNote
    }