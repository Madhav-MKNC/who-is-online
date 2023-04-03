let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getTime() {
    let d = new Date();

    let time = {
        date: d.getDate(),
        month: month[d.getMonth() - 1],
        year: d.getFullYear(),
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
        meridiem: (d.getHours() < 13) ? 'AM' : 'PM'
    }

    return time;
}
