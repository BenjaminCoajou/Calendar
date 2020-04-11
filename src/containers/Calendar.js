import { connect } from 'react-redux';
import Calendar from '../components/Calendar';



const mapStateToProps = ({calendar}) => ({    
    dateObject: calendar.dateObject,
    allmonths: calendar.allmonths,      
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);