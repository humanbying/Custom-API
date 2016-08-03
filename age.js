const moment = require('moment');

function age(dateStr) {
    let birthMoment = moment(dateStr, "MM-DD-YYYY");

    let age_ms = birthMoment.diff(moment());

    let durationStr = moment.duration(age_ms).humanize(true);

    return `${birthMoment.format('LL')} was ${durationStr}\n`;
}

module.exports = age;
