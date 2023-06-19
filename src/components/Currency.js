import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }


  return (
    <div className='alert alert-secondary'> Currency {
      <select name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
        <option value="£">Pound £</option>
        <option value="₹">Rupee₹</option>
        <option value="€">Euro €</option>
        <option value="$">Doller $</option>
      </select>
    }
    </div>
  );
};

export default Currency;