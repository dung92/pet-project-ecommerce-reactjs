import { connect } from 'react-redux';
import { increment } from '../../containers/Counter/actions';

const Counter = ({
    increment,
}: any) => {

    return (
        <>
            <div>
                <button onClick={increment}>
                    +
                </button>
            </div>
        </>
    );
};

function mapDispatchToProps(dispatch: any) {
    return {
        increment: () => dispatch(increment()),
    };
}
export const Counters = connect(null, mapDispatchToProps)(Counter);