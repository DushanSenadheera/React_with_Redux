import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {

    const { expenses, budget, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    if(budget < totalExpenses) {
        alert("You can't reduce the budget value lower than the spending");
        return ;
    }

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
