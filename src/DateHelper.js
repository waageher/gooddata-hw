class DateHelper  {

    static formatDate(d) {
        return (
            d.getFullYear() 
            + '-' + ('0'+(d.getMonth()+1)).slice(-2) 
            + '-' + ('0' + d.getDate()).slice(-2)
        );
    }

    static formatDateTime(d) {
        return (
            d.getFullYear() 
            + '-' + ('0'+(d.getMonth()+1)).slice(-2) 
            + '-' + ('0' + d.getDate()).slice(-2) 
            + ' ' + ('0' + d.getHours()).slice(-2) 
            + ':' + ('0' + d.getMinutes()).slice(-2)
            + ':' + ('0' + d.getSeconds()).slice(-2)
        );
    }

    static getMonthNames() {
        return [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
    }
}

export default DateHelper;
