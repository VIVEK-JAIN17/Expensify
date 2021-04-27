import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../redux/actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calenderFocused: null
    }

    handleDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        console.log(e);
                        if (e.target.value === 'amount')
                            this.props.dispatch(sortByAmount());
                        else
                            this.props.dispatch(sortByDate());
                    }}>
                    <option value='date'> Date </option>
                    <option value='amount'> Amount </option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.handleDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.handleFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);