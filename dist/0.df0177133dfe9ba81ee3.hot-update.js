webpackHotUpdate(0,{272:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _typography = __webpack_require__(169);\n\nvar _typography2 = _interopRequireDefault(_typography);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Card = function Card(props) {\n    return _react2.default.createElement(\n        'div',\n        { className: 'galaxy-card', onClick: function onClick() {\n                location.href = props.link;\n            } },\n        _react2.default.createElement(RandomStar, { size: 20, position: [10, 20] }),\n        _react2.default.createElement(RandomStar, { size: 10, position: [30, 33] }),\n        _react2.default.createElement(RandomStar, { size: 30, position: [20, 45] }),\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(_typography2.default, { textType: 'tertiary', text: props.cardType })\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(_typography2.default, { textType: 'secondary', text: props.cardTitle })\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(_typography2.default, { textType: 'tertiary', text: props.cardSummary })\n        )\n    );\n};\n\nvar RandomStar = function RandomStar(props) {\n    var starstyle = {\n        width: props.size,\n        height: props.size,\n        borderRadius: props.size / 2,\n        top: props.position[0],\n        right: props.position[1]\n    };\n    return _react2.default.createElement('div', { className: 'star', style: starstyle });\n};\n\nexports.default = Card;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/src/containers/galaxy-dark-x/card.js\n// module id = 272\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/src/containers/galaxy-dark-x/card.js?")}});