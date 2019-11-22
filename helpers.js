exports.isBetween = (date, start, end) => (start <= date) && (date <= end)

exports.toDate = stringDate => new Date(stringDate)