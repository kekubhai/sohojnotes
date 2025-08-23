"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.getNote = exports.createNote = exports.listNotes = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const listNotes = async (req, res) => {
    const notes = await client_1.default.note.findMany({ include: { author: true, noteTags: { include: { tag: true } }, comments: true } });
    res.json({ notes });
};
exports.listNotes = listNotes;
const createNote = async (req, res) => {
    const { title, content, authorId, tags = [], published = false, excerpt } = req.body;
    try {
        const note = await client_1.default.note.create({ data: { title, content, excerpt, published, author: { connect: { id: authorId } } } });
        for (const t of tags) {
            let tag = await client_1.default.tag.findUnique({ where: { name: t } });
            if (!tag)
                tag = await client_1.default.tag.create({ data: { name: t } });
            await client_1.default.noteTag.create({ data: { noteId: note.id, tagId: tag.id } });
        }
        const created = await client_1.default.note.findUnique({ where: { id: note.id }, include: { noteTags: { include: { tag: true } } } });
        res.status(201).json({ note: created });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
exports.createNote = createNote;
const getNote = async (req, res) => {
    const { id } = req.params;
    const note = await client_1.default.note.findUnique({ where: { id }, include: { author: true, noteTags: { include: { tag: true } }, comments: true } });
    if (!note)
        return res.status(404).json({ message: 'Note not found' });
    res.json({ note });
};
exports.getNote = getNote;
const updateNote = async (req, res) => {
    const { id } = req.params;
    try {
        const updates = req.body;
        const updated = await client_1.default.note.update({ where: { id }, data: updates });
        res.json({ note: updated });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateNote = updateNote;
const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        await client_1.default.note.delete({ where: { id } });
        res.json({ message: 'Deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.deleteNote = deleteNote;
//# sourceMappingURL=notes.controller.js.map