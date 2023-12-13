const DateModels = {
    getDay: function () {
        switch (new Date().getDay()) {
            case 0:
                return "Sunday";
                break;
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
                break;
        }
    },
    getMonth: function () {
        switch (new Date().getMonth()) {
            case 0:
                return "Jan";
                break;
            case 1:
                return "Feb";
                break;
            case 2:
                return "Mar";
                break;
            case 3:
                return "Apr";
                break;
            case 4:
                return "May";
                break;
            case 5:
                return "Jun";
                break;
            case 6:
                return "Jul";
                break;
            case 7:
                return "Aug";
                break;
            case 8:
                return "Sep";
                break;
            case 9:
                return "Oct";
                break;
            case 10:
                return "Nov";
                break;
            case 11:
                return "Dec";
                break;
        }
    },
    getYear: function () {
        return new Date().getFullYear();
    },
    getDate: function () {
        return new Date().getDate();
    },
}

export default DateModels;