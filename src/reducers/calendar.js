import moment from 'moment';

moment.locale('fr');

const initialState = {
    dateObject: moment(),
    allmonths: moment.months(),
    
};

export default (state = initialState, action = {}) => {
    switch(action.type) {

        default:
            return state;
    }
};



