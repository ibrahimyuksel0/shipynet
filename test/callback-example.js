const Shipy = require('../src/index');
const shipy = new Shipy('API_KEY');

app.post('/callback', (req, res) => {
    req.body.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let callback = shipy.callback(req.body);

    if(callback.status == 'success') {
        //Ödeme başarılı
    } else {
        //Ödeme başarısız
    };

    //callback.message -> Hata mesajı
});