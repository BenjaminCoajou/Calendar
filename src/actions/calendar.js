export const DISPLAY_MONTH = 'DISPLAY_MONTH';
export const DISPLAY_YEAR = 'DISPLAY_YEAR';
export const SELECT_MONTH = 'SELECT_MONTH';
export const SELECT_YEAR = 'SELECT_YEAR';

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
export const selectYear = (payload) => ({
    type: SELECT_YEAR,
    payload,
});