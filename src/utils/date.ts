import moment, { Moment } from "moment";

const DATE_FORMAT = "YY.M.D";

export function getDay(createdAt: string) {
    const today = moment();
    return today.diff((moment(createdAt)), 'days') + 1;
};

export function getDDay(createdAt: string) {
    const today = moment();
    return add30Days(moment(createdAt)).diff(today, 'days');
};

export function tranformDateToFormat(date: Moment) {
    return date.format(DATE_FORMAT);
}

export function transformStringToFormat(date: string) {
    return moment(date).format(DATE_FORMAT);
}

export function add30Days(date: Moment) {
    return date.add(30, "day");
}

export function today() {
    return moment().format("MM월 D일 dddd")
}
