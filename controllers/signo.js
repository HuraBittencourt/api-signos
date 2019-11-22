const isBetween = (date, start, end) => (start <= date) && (date <= end)

const toDate = stringDate => new Date(stringDate)

exports.getSigno = date => ({
    [isBetween(toDate(date), toDate('01-20'), toDate('02-18'))]: 'Aquário',
    [isBetween(toDate(date), toDate('02-19'), toDate('03-20'))]: 'Peixes',
    [isBetween(toDate(date), toDate('03-21'), toDate('04-19'))]: 'Áries',
    [isBetween(toDate(date), toDate('04-20'), toDate('05-20'))]: 'Touro',
    [isBetween(toDate(date), toDate('05-21'), toDate('06-20'))]: 'Gêmeos',
    [isBetween(toDate(date), toDate('06-21'), toDate('07-22'))]: 'Câncer',
    [isBetween(toDate(date), toDate('07-23'), toDate('08-22'))]: 'Leão',
    [isBetween(toDate(date), toDate('08-23'), toDate('09-22'))]: 'Virgem',
    [isBetween(toDate(date), toDate('09-23'), toDate('10-22'))]: 'Libra',
    [isBetween(toDate(date), toDate('10-23'), toDate('11-21'))]: 'Escorpião',
    [isBetween(toDate(date), toDate('11-22'), toDate('12-21'))]: 'Sagitário',
    [isBetween(toDate(date), toDate('12-22'), toDate('12-31'))]: 'Capricórnio',
    [isBetween(toDate(date), toDate('01-01'), toDate('01-19'))]: 'Capricórnio',
});