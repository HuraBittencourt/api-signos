const Sign = require('../../models/sign');
const { getSigno } = require('../../constant');
const { getSignOfMonth } = require('../../helpers');

exports.newRegisterController = (req, response) => {
    const { birthdate } = req.params;
    const [ month, day ] = birthdate.split('-');
    const { [month]: arrayDays } = getSigno;

    const sign = {
        ...req.params,
        starSign: arrayDays[getSignOfMonth(day , Object.keys(arrayDays))]
    };
    const newSign = new Sign(sign);

    newSign.save()
    response.status(200).json({ "starSign": sign.starSign })
}