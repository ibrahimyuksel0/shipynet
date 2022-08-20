const eft = (data, settings) => {
    if(!data) throw new Error('data is required');
    if(!settings) throw new Error('settings is required');

    data = new URLSearchParams({
        apiKey : settings.api_key,
        usrIp: data.usrIp,
        usrName: data.usrName,
        usrAddress: data.usrAddress,
        usrPhone: data.usrPhone,
        usrEmail: data.usrEmail,
        amount: data.amount,
        returnID: data.returnID,
        currency: data.currency,
        pageLang: data.pageLang,
        mailLang: data.mailLang,
        installment: data.installment,
    });

    let config = {
        method: process.env.api_method,
        url: process.env.api_url + 'pay/eft',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    return config;
};

module.exports = eft;