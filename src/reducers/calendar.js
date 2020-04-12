import moment from 'moment';
import { DISPLAY_MONTH, DISPLAY_YEAR, SELECT_MONTH, SELECT_YEAR } from '../actions/calendar';


moment.locale('fr');

const initialState = {
    dateObject: moment(),
    allmonths: moment.months(),
    monthIsDisplayed: false,
    yearIsDisplayed: false,
    
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case DISPLAY_MONTH:
            return {
                ...state,
                monthIsDisplayed: !state.monthIsDisplayed
            };
        case DISPLAY_YEAR:
                return {
                    ...state,
                    yearIsDisplayed: !state.yearIsDisplayed
                };
        case SELECT_MONTH:
            return {
                ...state,
                dateObject: moment().month(action.payload),                
            }
        case SELECT_YEAR:
            return {
                ...state,
                dateObject: moment().year(action.payload),
            }
                default:
            return state;
    }
};



