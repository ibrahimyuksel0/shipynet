const crypto = require('crypto');

const callback = (data, settings) => {
    if (data.ip !== "144.91.111.2") {
        return { status: "error", message: "error" };
    };

    if (!data.returnID || !data.paymentType || !data.paymentAmount || !data.paymentHash || !data.paymentID || !data.paymentCurrency) {
        return { status: "error", message: "missing value sent!" };
    };

    let apiKey = settings.api_key;
    let returnID = data.returnID;
    let paymentID = data.paymentID;
    let paymentType = data.paymentType;
    let paymentAmount = data.paymentAmount;
    let paymentCurrency = data.paymentCurrency;
    let paymentHash = data.paymentHash;


    let hashtr = paymentID + returnID + paymentType + paymentAmount + paymentCurrency + apiKey;
    let hash1 = crypto.createHash('sha1').update(hashtr).digest();
    let hash = Buffer.from(hash1).toString('base64');

    if (hash !== paymentHash) {
        return { status: "error", message: "paymentHash is not vaild." };
    } else {
        return { status: "success", message: "paymentHash is valid." }
    };
};

module.exports = callback;