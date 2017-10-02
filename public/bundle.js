/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_task__ = __webpack_require__(/*! ./modules/task */ 1);\n\n\n// unique object\nconst object1 = { lastModified: new Date('2017-09-01 00:00:00') };\n\n// task says objects have to be compared by reference, \n// so two objects can have the same date but are still different objects\nconst object2 = { lastModified: new Date('2017-08-06 00:00:00') };\nconst object3 = { lastModified: new Date('2017-08-06 00:00:00') };\n\nconst sampleData1 = [object1, object2, object3, { lastModified: new Date('2015-01-20 00:00:00') }];\nconst sampleData2 = [{ lastModified: new Date('2015-01-21 00:00:00') }, object2, object1];\nconst sampleData3 = [object3, { lastModified: new Date('1985-06-04 00:00:00') }];\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\t// call our function\n\tconst response = Object(__WEBPACK_IMPORTED_MODULE_0__modules_task__[\"a\" /* task */])(sampleData1, sampleData2, sampleData3);\n\n\t// print results to screen\n\tdocument.getElementById('function-input--formatted').innerHTML = (`\n// unique object\nconst object1 = { lastModified: new Date('2017-09-01 00:00:00') };\n\n// task says objects have to be compared by reference, \n// so two objects can have the same date but are still different objects\nconst object2 = { lastModified: new Date('2017-08-06 00:00:00') };\nconst object3 = { lastModified: new Date('2017-08-06 00:00:00') };\n\nconst sampleData1 = [object1, object2, object3, { lastModified: new Date('2015-01-20 00:00:00') }];\nconst sampleData2 = [{ lastModified: new Date('2015-01-21 00:00:00') }, object2, object1];\nconst sampleData3 = [object3, { lastModified: new Date('1985-06-04 00:00:00') }];\n\t`);\n\tdocument.getElementById('function-response--formatted').innerHTML = JSON.stringify(response, null, '\\t');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2sgfSBmcm9tICcuL21vZHVsZXMvdGFzayc7XG5cbi8vIHVuaXF1ZSBvYmplY3RcbmNvbnN0IG9iamVjdDEgPSB7IGxhc3RNb2RpZmllZDogbmV3IERhdGUoJzIwMTctMDktMDEgMDA6MDA6MDAnKSB9O1xuXG4vLyB0YXNrIHNheXMgb2JqZWN0cyBoYXZlIHRvIGJlIGNvbXBhcmVkIGJ5IHJlZmVyZW5jZSwgXG4vLyBzbyB0d28gb2JqZWN0cyBjYW4gaGF2ZSB0aGUgc2FtZSBkYXRlIGJ1dCBhcmUgc3RpbGwgZGlmZmVyZW50IG9iamVjdHNcbmNvbnN0IG9iamVjdDIgPSB7IGxhc3RNb2RpZmllZDogbmV3IERhdGUoJzIwMTctMDgtMDYgMDA6MDA6MDAnKSB9O1xuY29uc3Qgb2JqZWN0MyA9IHsgbGFzdE1vZGlmaWVkOiBuZXcgRGF0ZSgnMjAxNy0wOC0wNiAwMDowMDowMCcpIH07XG5cbmNvbnN0IHNhbXBsZURhdGExID0gW29iamVjdDEsIG9iamVjdDIsIG9iamVjdDMsIHsgbGFzdE1vZGlmaWVkOiBuZXcgRGF0ZSgnMjAxNS0wMS0yMCAwMDowMDowMCcpIH1dO1xuY29uc3Qgc2FtcGxlRGF0YTIgPSBbeyBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCcyMDE1LTAxLTIxIDAwOjAwOjAwJykgfSwgb2JqZWN0Miwgb2JqZWN0MV07XG5jb25zdCBzYW1wbGVEYXRhMyA9IFtvYmplY3QzLCB7IGxhc3RNb2RpZmllZDogbmV3IERhdGUoJzE5ODUtMDYtMDQgMDA6MDA6MDAnKSB9XTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHQvLyBjYWxsIG91ciBmdW5jdGlvblxuXHRjb25zdCByZXNwb25zZSA9IHRhc2soc2FtcGxlRGF0YTEsIHNhbXBsZURhdGEyLCBzYW1wbGVEYXRhMyk7XG5cblx0Ly8gcHJpbnQgcmVzdWx0cyB0byBzY3JlZW5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bmN0aW9uLWlucHV0LS1mb3JtYXR0ZWQnKS5pbm5lckhUTUwgPSAoYFxuLy8gdW5pcXVlIG9iamVjdFxuY29uc3Qgb2JqZWN0MSA9IHsgbGFzdE1vZGlmaWVkOiBuZXcgRGF0ZSgnMjAxNy0wOS0wMSAwMDowMDowMCcpIH07XG5cbi8vIHRhc2sgc2F5cyBvYmplY3RzIGhhdmUgdG8gYmUgY29tcGFyZWQgYnkgcmVmZXJlbmNlLCBcbi8vIHNvIHR3byBvYmplY3RzIGNhbiBoYXZlIHRoZSBzYW1lIGRhdGUgYnV0IGFyZSBzdGlsbCBkaWZmZXJlbnQgb2JqZWN0c1xuY29uc3Qgb2JqZWN0MiA9IHsgbGFzdE1vZGlmaWVkOiBuZXcgRGF0ZSgnMjAxNy0wOC0wNiAwMDowMDowMCcpIH07XG5jb25zdCBvYmplY3QzID0geyBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCcyMDE3LTA4LTA2IDAwOjAwOjAwJykgfTtcblxuY29uc3Qgc2FtcGxlRGF0YTEgPSBbb2JqZWN0MSwgb2JqZWN0Miwgb2JqZWN0MywgeyBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCcyMDE1LTAxLTIwIDAwOjAwOjAwJykgfV07XG5jb25zdCBzYW1wbGVEYXRhMiA9IFt7IGxhc3RNb2RpZmllZDogbmV3IERhdGUoJzIwMTUtMDEtMjEgMDA6MDA6MDAnKSB9LCBvYmplY3QyLCBvYmplY3QxXTtcbmNvbnN0IHNhbXBsZURhdGEzID0gW29iamVjdDMsIHsgbGFzdE1vZGlmaWVkOiBuZXcgRGF0ZSgnMTk4NS0wNi0wNCAwMDowMDowMCcpIH1dO1xuXHRgKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bmN0aW9uLXJlc3BvbnNlLS1mb3JtYXR0ZWQnKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgJ1xcdCcpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/*! exports provided: task */
/*! exports used: task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return task; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findNextPositionSorted__ = __webpack_require__(/*! ./findNextPositionSorted */ 2);\n\n\nconst task = (...arrays) => {\n\tconst response = [];\n\t// iterate with the arrays given in parameters\n\tarrays.forEach((oneArray) => {\n\t\t// iterate with the objects of these arrays\n\t\toneArray.forEach((oneObject) => {\n\t\t\t// find index at which to insert\n\t\t\tconst indexToInsert = Object(__WEBPACK_IMPORTED_MODULE_0__findNextPositionSorted__[\"a\" /* findNextPositionSorted */])(response, oneObject, 'lastModified');\n\n\t\t\t// if the last item is equal to the current one, we must delete it (splice with param: 1).\n\t\t\tconst numberToDelete = (response[indexToInsert] === oneObject) ? 1 : 0;\n\n\t\t\t// insert the item, deleting the last one if necessary\n\t\t\tresponse.splice(indexToInsert, numberToDelete, oneObject);\n\t\t});\n\t});\n\treturn response;\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Rhc2suanM/ODA1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kTmV4dFBvc2l0aW9uU29ydGVkIH0gZnJvbSAnLi9maW5kTmV4dFBvc2l0aW9uU29ydGVkJztcblxuY29uc3QgdGFzayA9ICguLi5hcnJheXMpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBbXTtcblx0Ly8gaXRlcmF0ZSB3aXRoIHRoZSBhcnJheXMgZ2l2ZW4gaW4gcGFyYW1ldGVyc1xuXHRhcnJheXMuZm9yRWFjaCgob25lQXJyYXkpID0+IHtcblx0XHQvLyBpdGVyYXRlIHdpdGggdGhlIG9iamVjdHMgb2YgdGhlc2UgYXJyYXlzXG5cdFx0b25lQXJyYXkuZm9yRWFjaCgob25lT2JqZWN0KSA9PiB7XG5cdFx0XHQvLyBmaW5kIGluZGV4IGF0IHdoaWNoIHRvIGluc2VydFxuXHRcdFx0Y29uc3QgaW5kZXhUb0luc2VydCA9IGZpbmROZXh0UG9zaXRpb25Tb3J0ZWQocmVzcG9uc2UsIG9uZU9iamVjdCwgJ2xhc3RNb2RpZmllZCcpO1xuXG5cdFx0XHQvLyBpZiB0aGUgbGFzdCBpdGVtIGlzIGVxdWFsIHRvIHRoZSBjdXJyZW50IG9uZSwgd2UgbXVzdCBkZWxldGUgaXQgKHNwbGljZSB3aXRoIHBhcmFtOiAxKS5cblx0XHRcdGNvbnN0IG51bWJlclRvRGVsZXRlID0gKHJlc3BvbnNlW2luZGV4VG9JbnNlcnRdID09PSBvbmVPYmplY3QpID8gMSA6IDA7XG5cblx0XHRcdC8vIGluc2VydCB0aGUgaXRlbSwgZGVsZXRpbmcgdGhlIGxhc3Qgb25lIGlmIG5lY2Vzc2FyeVxuXHRcdFx0cmVzcG9uc2Uuc3BsaWNlKGluZGV4VG9JbnNlcnQsIG51bWJlclRvRGVsZXRlLCBvbmVPYmplY3QpO1xuXHRcdH0pO1xuXHR9KTtcblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgdGFzayB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************!*\
  !*** ./src/modules/findNextPositionSorted.js ***!
  \***********************************************/
/*! exports provided: findNextPositionSorted */
/*! exports used: findNextPositionSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return findNextPositionSorted; });\n// returns index at which to insert the next element\nconst findNextPositionSorted = (arr, oneObject, field) => {\n\tlet returnIndex = 0;\n\tarr.every((currentValue, index) => {\n\t\treturnIndex = index;\n\t\treturn (!(oneObject === currentValue || oneObject[field] < currentValue[field]));\n\t});\n\treturn returnIndex;\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZpbmROZXh0UG9zaXRpb25Tb3J0ZWQuanM/NTA3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXR1cm5zIGluZGV4IGF0IHdoaWNoIHRvIGluc2VydCB0aGUgbmV4dCBlbGVtZW50XG5jb25zdCBmaW5kTmV4dFBvc2l0aW9uU29ydGVkID0gKGFyciwgb25lT2JqZWN0LCBmaWVsZCkgPT4ge1xuXHRsZXQgcmV0dXJuSW5kZXggPSAwO1xuXHRhcnIuZXZlcnkoKGN1cnJlbnRWYWx1ZSwgaW5kZXgpID0+IHtcblx0XHRyZXR1cm5JbmRleCA9IGluZGV4O1xuXHRcdHJldHVybiAoIShvbmVPYmplY3QgPT09IGN1cnJlbnRWYWx1ZSB8fCBvbmVPYmplY3RbZmllbGRdIDwgY3VycmVudFZhbHVlW2ZpZWxkXSkpO1xuXHR9KTtcblx0cmV0dXJuIHJldHVybkluZGV4O1xufTtcblxuZXhwb3J0IHsgZmluZE5leHRQb3NpdGlvblNvcnRlZCB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9maW5kTmV4dFBvc2l0aW9uU29ydGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);