"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_js_1 = __importDefault(require("./App.js"));
App_js_1.default.listen(3000, () => {
    console.log("servidor rodando no http://localhost:3000");
});
//# sourceMappingURL=server.js.map