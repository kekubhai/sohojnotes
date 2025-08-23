import prisma from '../prisma/client';
import { Request, Response } from 'express';

export const listNotes = async (req: Request, res: Response) => {
  const notes = await prisma.note.findMany({ include: { author: true, noteTags: { include: { tag: true } }, comments: true } });
  res.json({ notes });
};

export const createNote = async (req: Request, res: Response) => {
  const { title, content, authorId, tags = [], published = false, excerpt } = req.body;
  try {
    const note = await prisma.note.create({ data: { title, content, excerpt, published, author: { connect: { id: authorId } } } });

    for (const t of tags) {
      let tag = await prisma.tag.findUnique({ where: { name: t } });
      if (!tag) tag = await prisma.tag.create({ data: { name: t } });
      await prisma.noteTag.create({ data: { noteId: note.id, tagId: tag.id } });
    }

    const created = await prisma.note.findUnique({ where: { id: note.id }, include: { noteTags: { include: { tag: true } } } });
    res.status(201).json({ note: created });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const note = await prisma.note.findUnique({ where: { id }, include: { author: true, noteTags: { include: { tag: true } }, comments: true } });
  if (!note) return res.status(404).json({ message: 'Note not found' });
  res.json({ note });  return;
};

export const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updates = req.body;
    const updated = await prisma.note.update({ where: { id }, data: updates });
    res.json({ note: updated });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.note.delete({ where: { id } });
    res.json({ message: 'Deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
