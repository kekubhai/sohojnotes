"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = __importDefault(require("./prisma/client"));
const notes_router_1 = __importDefault(require("./routes/notes.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({
        message: 'সহজNotes API Server',
        version: '1.0.0',
        status: 'running',
        timestamp: new Date().toISOString()
    });
});
app.use('/api/notes', notes_router_1.default);
app.put('/api/notes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updates = req.body;
        const updated = await client_1.default.note.update({ where: { id }, data: updates });
        res.json({ note: updated });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete('/api/notes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await client_1.default.note.delete({ where: { id } });
        res.json({ message: 'Deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'production' ? {} : err.message
    });
});
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Route not found',
        path: req.originalUrl
    });
});
app.listen(PORT, () => {
    console.log(`🚀 সহজNotes Backend Server is running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 API URL: http://localhost:${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map