import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    createElement,
    DetailedHTMLProps,
    FC,
} from 'react';

import { cx } from '../../lib/cx';

export const Button: FC<
    | ({ as: 'a' } & DetailedHTMLProps<
          AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
      >)
    | ({ as: 'button' } & DetailedHTMLProps<
          ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
      >)
> = ({ as = 'button', className, ...properties }) => {
    return createElement(as, {
        className: cx(
            className,
            'bg-blue-300 dark:bg-blue-900 hover:brightness-90 active:brightness-75 px-4 text-white py-2 shadow-sm rounded-md'
        ),
        ...properties,
    });
};
