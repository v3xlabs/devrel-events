export const cx = (...classes: string[]) =>
    classes
        .filter((a) => a)
        .map((a) => a.trim())
        .filter((a) => a)
        .join(' ');
