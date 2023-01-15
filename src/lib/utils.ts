export const notWith = <T, R>(argument: T, function_: (_s: T) => R): R => {
    return function_(argument);
};

export const tap = <T>(argument: T, function_: (_s: T) => unknown): T => {
    function_(argument);

    return argument;
};
