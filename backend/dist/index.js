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
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString()
    });
});
app.get('/api/notes', (req, res) => {
    res.json({
        message: 'Get all notes',
        notes: []
    });
});
app.post('/api/notes', (req, res) => {
    res.json({
        message: 'Create new note',
        note: req.body
    });
});
app.get('/api/notes/:id', (req, res) => {
    res.json({
        message: `Get note ${req.params.id}`,
        noteId: req.params.id
    });
});
app.put('/api/notes/:id', (req, res) => {
    res.json({
        message: `Update note ${req.params.id}`,
        noteId: req.params.id,
        updates: req.body
    });
});
app.delete('/api/notes/:id', (req, res) => {
    res.json({
        message: `Delete note ${req.params.id}`,
        noteId: req.params.id
    });
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