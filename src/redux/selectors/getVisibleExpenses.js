const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const sDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const eDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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