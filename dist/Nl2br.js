"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    functional: true,
    props: {
        tag: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            default: null,
        },
        className: {
            type: String,
            required: false,
        },
    },
    render: function (createElement, context) {
        var _a = context.props, tag = _a.tag, className = _a.className;
        var text = context.props.text || '';
        return createElement(tag, {
            class: className,
        }, text
            .split('\n')
            .reduce(function (accumulator, string) {
            if (accumulator.length === 0) {
                return new Array(string);
            }
            return accumulator.concat([createElement('br'), string]);
        }, []));
    },
};
//# sourceMappingURL=Nl2br.js.map