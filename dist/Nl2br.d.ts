import type { CreateElement, RenderContext, VNode } from 'vue';
type Props = {
    tag: string;
    text: string | null;
    className?: string;
};
declare const _default: {
    functional: boolean;
    props: {
        tag: {
            type: StringConstructor;
            required: boolean;
        };
        text: {
            type: StringConstructor;
            default: null;
        };
        className: {
            type: StringConstructor;
            required: boolean;
        };
    };
    render(createElement: CreateElement, context: RenderContext<Props>): VNode;
};
export default _default;
