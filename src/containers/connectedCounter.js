import Counter from '../components/Counter';
import { connect } from 'react-redux';

import { ADD_COUNT, SUB_COUNT } from '../constants';

const mapStateToProps = ( state ) => ({
    counter: state.counter.counter
})

const mapDispatchToProps = ( dispatch ) => ({
    add: () => { 
        dispatch({ type: ADD_COUNT });
    },
    sub: () => {
        dispatch({ type: SUB_COUNT });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
