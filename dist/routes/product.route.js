"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_ts_1 = require("../controller/product.controller.ts");
const productRouter = (0, express_1.Router)();
// specifies the endpoint and the method to call
productRouter.get('/', product_controller_ts_1.default.getAll);
// export the router
exports.default = productRouter;
