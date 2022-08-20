const Shipy = require('../src/index');
const shipy = new Shipy('API_KEY');

async function main() {
    let paymentID = 'mobile-'+Math.random().toString(36).substring(7);

    shipy.mobile({
        usrIp: '192.168.1.1', //Kullanıcının ip adresi
        usrName: 'John Doe', //Kullanıcının adı/soyadı/kullanıcıadı
        usrAddress: 'Turkey/Ankara', //Kullanıcının adresi
        usrPhone: '+905xxxxxxxxx', //Kullanıcının telefon numarası
        usrEmail: 'user@mail.com', //Kullanıcının e-posta adresi
        amount: 5, //Ödenecek tutar
        returnID: paymentID, //Ödeme sonrası callback tarafında geri dönülecek ödeme ID'si
    });

    //İpucu -> PaymetID'yi veritabanınıza kaydederek ödeme sonrası callback tarafında kullanabilirsiniz.

    let response = await shipy.run();
    console.log(response);
    //response.link -> Ödeme sayfasına yönlendirme linki
};

main();