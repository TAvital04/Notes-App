// Imports
    import noteHandler from "../handlers/noteHandler.js";

// CRUD: Create
    const addNote = async (req, res) => {
        res.render("addNote", {
            title: "Add"
        });
    }
    const createNote = async (req, res) => {
        const noteData = req.body;
        const note = await noteHandler.createNote(noteData);

        req.flash("success", `/${note.slug} added successfull!`);
        res.redirect("/notes");
    }

// CRUD: Read
    const getNotes = async (req, res) => {
        const notes = await noteHandler.getAllNotes();
        res.render("allNotes", {
            title: "Notes",
            notes
        })
    }

    // not tested
    const getNoteBySlug = async (req, res, next) => {
        const note = await noteHandler.getOneNoteBySlug({slug: req.params.slug});

        if(!note) return next();

        res.render("editNote", {
            title: "Edit",
            note
        });
    }

// CRUD: Update
    const editNote = async(req, res) => {
        const note = await noteHandler.getOneNote({id: req.params.id});
        
        res.render("editNote", {
            title: "Edit",
            note
        });
    }
    const updateNote = async(req, res) => {
        const id = req.params.id;
        const noteData = req.body;

        const note = await noteHandler.updateNote(id, noteData);

        res.redirect("/notes");
    }

// CRUD: Delete
    const deleteNote = async(req, res) => {
        const id = req.params.id;
        const note = await noteHandler.deleteNote(id);

        res.redirect("/notes");
    }

// Exports
    export default {
        addNote,
        createNote,
        getNotes,
        editNote,
        updateNote,
        deleteNote,
        getNoteBySlug
    }