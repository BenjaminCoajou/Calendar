import moment from 'moment';
import { DISPLAY_MONTH, DISPLAY_YEAR, SELECT_MONTH, SELECT_YEAR, SELECT_DAY} from '../actions/calendar';


moment.locale('fr');

const initialState = {
    dateObject: moment(),
    allmonths: moment.months(),
    monthIsDisplayed: false,
    yearIsDisplayed: false,
    event: '',
    
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case DISPLAY_MONTH:
            return {
                ...state,
                monthIsDisplayed: !state.monthIsDisplayed,
            };
        case DISPLAY_YEAR:
                return {
                    ...state,
                    yearIsDisplayed: !state.yearIsDisplayed,
                };
        case SELECT_MONTH:
            return {
                ...state,
                dateObject: state.dateObject.month(action.payload),
                monthIsDisplayed: !state.monthIsDisplayed,                
            };
        case SELECT_YEAR:
            return {
                ...state,
                dateObject: state.dateObject.year(action.payload),
                yearIsDisplayed: !state.yearIsDisplayed,
            };
        case SELECT_DAY:
            return {
                ...state,
                event: action.payload,
            }
        default:
            return state;
    }
};



