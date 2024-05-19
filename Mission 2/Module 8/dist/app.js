"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/Modules/student/student.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
//! application routes
app.use('/api/v1/students', student_route_1.studentRoute);
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send({ message: 'server is running 2 !! ' });
    }
    catch (error) {
        next(error);
    }
}));
app.all('*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(400).send({ message: 'Cannot get this route !! ' });
}));
// global error handler
app.use((error, req, res) => {
    res.send({ message: 'in global error handler !!! ' });
});
// console.log(process.cwd());
exports.default = app;
