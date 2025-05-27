import Note from "../models/noteModel.js";

const getAllNotes = async () => {
    return await Note.find().lean();
}

export default {
    getAllNotes
}