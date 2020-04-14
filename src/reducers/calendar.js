import moment from 'moment';
import { DISPLAY_MONTH, DISPLAY_YEAR, SELECT_MONTH, SELECT_YEAR, SELECT_DAY, DISPLAY_EVENT } from '../actions/calendar';


moment.locale('fr');

const initialState = {
    dateObject: moment(),
    allmonths: moment.months(),
    monthIsDisplayed: false,
    yearIsDisplayed: false,
    eventIsDisplayed: false,
    eventInfos: '',
    event: [
        {
            date: '106',
            name: 'compétion',
        },
        {
            date: '110',
            name: 'BBQ',
        },
        {
            date: '140',
            name: 'pizza',
        }
    ],
    
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
                datePick: action.payload,
            };
        case DISPLAY_EVENT:
                return {
                    ...state,
                    eventIsDisplayed: !state.eventIsDisplayed,
                    eventInfos: action.payload === undefined ? "" :action.payload.name,
                }
        default:
            return state;
    }
};



