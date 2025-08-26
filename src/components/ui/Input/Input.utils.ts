// Input specific utility functions can be added here
export const getInputClassNames = (
    size: string,
    variant: string,
    className: string,
) => {
    return [size, variant, className].join(' ');
};
