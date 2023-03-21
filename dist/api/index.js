"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appRouter = express_1.default.Router();
appRouter.use('/auth', require('./auth'));
appRouter.use('/holiday', require('./holiday'));
appRouter.use('/schedule', require('./schedule'));
exports.default = module.exports = appRouter;
//# sourceMappingURL=index.js.map