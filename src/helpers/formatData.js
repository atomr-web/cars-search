import { nanoid } from "@reduxjs/toolkit";

export const formatData = (data) => {
    const items = [];
    const context = {
        country: "",
        brand: "",
        model: "",
        year: null,
        vin: "",
    };

    const traverse = (node) => {
        const { type, value, children } = node;
        const prevValue = context[type];
        context[type] = value;

        if (Array.isArray(children)) {
            const hasType = children.find((i) => i.type);
            const hasValue = children.find((i) => i.value);

            // if children havent keys 'type' or 'value' - skip children
            if (hasType !== undefined && hasValue !== undefined) {
                children.forEach(traverse);
            }
        }

        // if children is an object
        else if (children) {
            traverse(children);
        } else {
            const id = nanoid();
            items.push(Object.assign({ id: id }, context));
        }

        context[type] = prevValue;
    };

    data.forEach(traverse);
    return items;
};
