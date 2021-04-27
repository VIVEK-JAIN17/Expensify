import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const sDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const eDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return sDateMatch && eDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    });

    /*  Anatoke of Arrays.sort()'s compare function. 
        if it returns < 0   'a' and 'b' are unchanged.
        if it returns 0     'a' and 'b' are unchanged.
        if it returns > 0   'b' is put before 'a'.
    */
};

export default getVisibleExpenses;