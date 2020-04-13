import { connect } from 'react-redux';
import Years from '../components/Calendar/Years';

import { selectYear } from '../actions/calendar';

const mapStateToProps = ({calendar}) => ({
    allmonths: calendar.allmonths,
});

const mapDispatchToProps = (dispatch) => ({
    handleSelectYear: (year) => {
        dispatch(selectYear(year))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Years);