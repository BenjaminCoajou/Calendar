export const DISPLAY_MONTH = 'DISPLAY_MONTH';
export const DISPLAY_YEAR = 'DISPLAY_YEAR';
export const SELECT_MONTH = 'SELECT_MONTH';

export const displayMonth = () => ({
    type: DISPLAY_MONTH,
});
export const displayYear = () => ({
    type: DISPLAY_YEAR,
});
export const selectMonth = (payload) => ({
    type: SELECT_MONTH,
    payload,
});