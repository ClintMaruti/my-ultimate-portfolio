"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email , message  } = req.body;\n        try {\n            const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n                service: \"gmail\",\n                auth: {\n                    user: process.env.EMAIL_USER,\n                    pass: process.env.EMAIL_PASS\n                }\n            });\n            await transporter.sendMail({\n                from: email,\n                to: \"clintmaruti@gmail.com\",\n                subject: `New Message from ${name}`,\n                html: `<p><strong>Name:</strong> ${name}</p>\r\n               <p><strong>Email:</strong> ${email}</p>\r\n               <p><strong>Message:</strong><br/>${message}</p>`\n            });\n            return res.status(200).json({\n                success: true\n            });\n        } catch (error) {\n            console.error(\"Error sending email:\", error);\n            return res.status(500).json({\n                error: \"Error sending message.\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFekMsSUFBSTtZQUNGLE1BQU1DLGNBQWNULGlFQUEwQixDQUFDO2dCQUM3Q1csU0FBUztnQkFDVEMsTUFBTTtvQkFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO29CQUM1QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO2dCQUM5QjtZQUNGO1lBRUEsTUFBTVQsWUFBWVUsUUFBUSxDQUFDO2dCQUN6QkMsTUFBTWQ7Z0JBQ05lLElBQUk7Z0JBQ0pDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRWpCLEtBQUssQ0FBQztnQkFDbkNrQixNQUFNLENBQUMsMEJBQTBCLEVBQUVsQixLQUFLOzBDQUNOLEVBQUVDLE1BQU07Z0RBQ0YsRUFBRUMsUUFBUSxJQUFJLENBQUM7WUFDekQ7WUFFQSxPQUFPSixJQUFJcUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxJQUFJO1lBQUM7UUFDOUMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDLE9BQU94QixJQUFJcUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsT0FBTztZQUF5QjtRQUNoRTtJQUNGLE9BQU87UUFDTCxPQUFPeEIsSUFBSXFCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUFxQjtJQUM1RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215b3VyLXJlYWN0Ly4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgc2VydmljZTogXCJnbWFpbFwiLFxyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsICAvLyBZb3VyIEdtYWlsIGFkZHJlc3NcclxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1MsICAvLyBZb3VyIEdtYWlsIEFwcCBQYXNzd29yZFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xyXG4gICAgICAgIGZyb206IGVtYWlsLFxyXG4gICAgICAgIHRvOiBcImNsaW50bWFydXRpQGdtYWlsLmNvbVwiLCAgICAgLy8gWW91ciBlbWFpbFxyXG4gICAgICAgIHN1YmplY3Q6IGBOZXcgTWVzc2FnZSBmcm9tICR7bmFtZX1gLFxyXG4gICAgICAgIGh0bWw6IGA8cD48c3Ryb25nPk5hbWU6PC9zdHJvbmc+ICR7bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICR7ZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICA8cD48c3Ryb25nPk1lc3NhZ2U6PC9zdHJvbmc+PGJyLz4ke21lc3NhZ2V9PC9wPmAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIGVtYWlsOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIHNlbmRpbmcgbWVzc2FnZS5cIiB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJib2R5IiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInBhc3MiLCJFTUFJTF9QQVNTIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();