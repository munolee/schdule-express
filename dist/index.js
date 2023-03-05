"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const mock_1 = require("./mock");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.get('/', (_req, res) => {
    return res.sendFile('index.html', { root: path_1.default.join(__dirname, 'public') });
});
app.get('/api/schedule', (req, res) => {
    return res.json(mock_1.schedule);
});
app.listen(port, () => {
    return console.log(`App is listening on port ${port} !`);
});
//# sourceMappingURL=index.js.map