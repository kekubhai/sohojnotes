"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_controller_1 = require("../controllers/notes.controller");
const router = (0, express_1.Router)();
router.get('/', notes_controller_1.listNotes);
router.post('/', notes_controller_1.createNote);
router.get('/:id', notes_controller_1.getNote);
router.put('/:id', notes_controller_1.updateNote);
router.delete('/:id', notes_controller_1.deleteNote);
exports.default = router;
//# sourceMappingURL=notes.router.js.map