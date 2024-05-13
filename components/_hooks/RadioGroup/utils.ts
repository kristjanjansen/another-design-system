// This is a copy from react-aria, so we can manipulate radio group keyboard navigation as we need

import { FocusManagerOptions } from 'react-aria';
import { getOwnerDocument } from '@react-aria/utils';
import { RadioGroupState } from '@react-stately/radio';

interface RadioGroupData {
    name: string;
    descriptionId: string | undefined;
    errorMessageId: string | undefined;
    validationBehavior: 'aria' | 'native';
}

export const radioGroupData = new WeakMap<RadioGroupState, RadioGroupData>();

export function getFocusableTreeWalker(
    root: Element,
    opts?: FocusManagerOptions
) {
    const selector =
        'input[type=radio]:not([disabled]):not([type=hidden]):not([hidden])';
    const walker = getOwnerDocument(root).createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        {
            acceptNode(node) {
                // Skip nodes inside the starting node.
                if (opts?.from?.contains(node)) {
                    return NodeFilter.FILTER_REJECT;
                }
                if (
                    (node as Element).matches(selector) &&
                    // isElementVisible(node as Element) &&
                    // (!scope || isElementInScope(node as Element, scope)) &&
                    (!opts?.accept || opts.accept(node as Element))
                ) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
            },
        }
    );

    if (opts?.from) {
        walker.currentNode = opts.from;
    }

    return walker;
}
