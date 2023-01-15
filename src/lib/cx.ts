export const cx = (...classes: (string | undefined)[]) =>
    classes
        .filter((a) => a)
        .map((a) => a.trim())
        .filter((a) => a)
        .join(' ');
