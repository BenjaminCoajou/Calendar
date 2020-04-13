import { connect } from 'react-redux';
import Days from '../components/Calendar/Days';

const mapStateToProps = ({calendar}) => ({
    dateObject: calendar.dateObject,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Days);