"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = express_1.default();
api.get('/test', (req, res) => {
    res.json({ success: true });
});
api.listen(5000, () => {
    console.log('Express listenning');
});
//# sourceMappingURL=index.js.map