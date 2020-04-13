import { connect } from 'react-redux';
import Months from '../components/Calendar/Months';

import { selectMonth } from '../actions/calendar';

const mapStateToProps = ({calendar}) => ({
    allmonths: calendar.allmonths,
});

const mapDispatchToProps = (dispatch) => ({
    handleSelectMonth: (month) => {
        dispatch(selectMonth(month))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Months);