import noteHandler from "../handlers/noteHandler.js";

const getNotes = async (req, res) => {
    const notes = await noteHandler.getAllNotes();
    res.json({title: "All Notes", notes});
}

export default {
    getNotes
}