webpackHotUpdate(0,{269:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(168);\n\nvar _button = __webpack_require__(109);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _typography = __webpack_require__(169);\n\nvar _typography2 = _interopRequireDefault(_typography);\n\nvar _inputBox = __webpack_require__(270);\n\nvar _inputBox2 = _interopRequireDefault(_inputBox);\n\nvar _image = __webpack_require__(271);\n\nvar _image2 = _interopRequireDefault(_image);\n\nvar _card = __webpack_require__(272);\n\nvar _card2 = _interopRequireDefault(_card);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ComponentList = function ComponentList() {\n    return _react2.default.createElement(\n        'div',\n        { style: { paddingTop: '40px' } },\n        _react2.default.createElement(_typography2.default, { textType: 'primary', text: 'Components List' }),\n        _react2.default.createElement(\n            'div',\n            { className: 'componentBox galaxy-text-secondary' },\n            _react2.default.createElement(\n                'h3',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Component Name :'\n                ),\n                ' Button'\n            ),\n            _react2.default.createElement(\n                'h5',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Props :'\n                ),\n                ' link and btnText'\n            ),\n            _react2.default.createElement(_button2.default, { link: '', btnText: 'Sample Text' })\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'componentBox galaxy-text-secondary' },\n            _react2.default.createElement(\n                'h3',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Component Name :'\n                ),\n                ' Typography'\n            ),\n            _react2.default.createElement(\n                'h5',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Props :'\n                ),\n                ' textType and text'\n            ),\n            'textType(primary) : ',\n            _react2.default.createElement(_typography2.default, { textType: 'primary', text: 'Sample Text' }),\n            _react2.default.createElement('br', null),\n            'textType(secondary) : ',\n            _react2.default.createElement(_typography2.default, { textType: 'secondary', text: 'Sample Text' }),\n            _react2.default.createElement('br', null),\n            'textType(tertiary) : ',\n            _react2.default.createElement(_typography2.default, { textType: 'tertiary', text: 'Sample Text' })\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'componentBox galaxy-text-secondary' },\n            _react2.default.createElement(\n                'h3',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Component Name :'\n                ),\n                ' Input'\n            ),\n            _react2.default.createElement(\n                'h5',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Props :'\n                ),\n                ' style, inputType and placeholderText '\n            ),\n            'style(full) : ',\n            _react2.default.createElement(_inputBox2.default, { style: 'full', inputType: 'text', placeholderText: 'Sample Placeholder' }),\n            _react2.default.createElement('br', null),\n            'style(single) : ',\n            _react2.default.createElement(_inputBox2.default, { style: 'single', inputType: 'text', placeholderText: 'Sample Placeholder' }),\n            _react2.default.createElement('br', null),\n            'style(corner) : ',\n            _react2.default.createElement(_inputBox2.default, { style: 'corner', inputType: 'text', placeholderText: 'Sample Placeholder' })\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'componentBox galaxy-text-secondary' },\n            _react2.default.createElement(\n                'h3',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Component Name :'\n                ),\n                ' Image'\n            ),\n            _react2.default.createElement(\n                'h5',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Props :'\n                ),\n                ' imageSource and altText'\n            ),\n            _react2.default.createElement(_image2.default, { imageSource: 'https://pbs.twimg.com/media/DFhGtfUUwAARJxs.jpg', altText: 'Sample Alt Text' })\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'componentBox galaxy-text-secondary' },\n            _react2.default.createElement(\n                'h3',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Component Name :'\n                ),\n                ' Card'\n            ),\n            _react2.default.createElement(\n                'h5',\n                null,\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    'Props :'\n                ),\n                ' cardType, cardTitle and cardSummary '\n            ),\n            _react2.default.createElement(_card2.default, { cardType: 'Quiz / Poll', cardTitle: 'Card Heading', cardSummary: 'Lorem Ipsum Stuff typed out because typing is more fun than googling Lorem Ipsum text and then pasting here.' })\n        )\n    );\n};\n\nexports.default = ComponentList;\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/src/containers/galaxy-dark-x/components-list.js\n// module id = 269\n// module chunks = 0\n\n//# sourceURL=webpack:///./client/src/containers/galaxy-dark-x/components-list.js?")}});