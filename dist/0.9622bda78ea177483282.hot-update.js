webpackHotUpdate(0,{480:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _typography = __webpack_require__(169);\n\nvar _typography2 = _interopRequireDefault(_typography);\n\nvar _card = __webpack_require__(272);\n\nvar _card2 = _interopRequireDefault(_card);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MainPage = function MainPage() {\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\n            'div',\n            { className: 'row' },\n            _react2.default.createElement(\n                'div',\n                { className: 'col-sm-12' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'header-box' },\n                    _react2.default.createElement(_typography2.default, { textType: 'primary', text: 'Your Space Passport' }),\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement('br', null)\n                )\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'row' },\n            _react2.default.createElement(_card2.default, { link: '/someLink', cardType: 'Quiz', cardTitle: 'Quiz Title', cardSummary: 'Long Long Summary' }),\n            _react2.default.createElement(_card2.default, { link: '/someLink', cardType: 'Quiz', cardTitle: 'Quiz Title', cardSummary: 'Long Long Summary' })\n        )\n    );\n};\n\nexports.default = MainPage;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/src/containers/galaxy-dark-x/mainpage.js\n// module id = 480\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/src/containers/galaxy-dark-x/mainpage.js?")}});