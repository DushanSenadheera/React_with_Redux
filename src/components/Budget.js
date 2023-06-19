import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, currency } = useContext(AppContext);

    const changeBudget = (val) => {
        dispatch({
          type: 'SET_BUDGET',
          payload: val,
        })
      }

    return (
        <div className='alert alert-secondary'>
            Budget: {currency} <input type='number' value={budget} max={20000} onChange={event => changeBudget(event.target.value)}/>
        </div>
    );
};

export default Budget;
