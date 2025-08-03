import moment from 'moment';
const now = moment();

const timestamp1 = now.format('DD-MM-YYYY');
const timestamp2 = now.format('MMM-Do-YY');
const timestamp3 = now.format('dddd');
console.log(timestamp1)
console.log(timestamp2)
console.log(timestamp3)