import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import { cx } from '../../lib/cx';

export const Link: FC<
    DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >
> = ({ children, className, href, ...properties }) => {
    return (
        <a
            className={cx(className, 'text-blue-500 hover:underline')}
            href={href}
            {...properties}
        >
            {children}
        </a>
    );
};
