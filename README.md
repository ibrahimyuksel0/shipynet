<div align="center">
        <h1><b>SHİPYNET</b></h1>
	<p>
		<a href="https://www.npmjs.com/package/shipynet"><img src="https://img.shields.io/npm/v/shipynet.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/shipynet"><img src="https://img.shields.io/npm/dt/shipynet.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

## 1. Hakkında

2018 yılından bu yana ödeme hizmetleri konusunda bir çok alanda hizmet veren Shipy, gelişmiş ödeme çözümleri ve geniş ödeme yelpazesi ile müşterilerinin çoğu alanda ihtiyaçlarını tam anlamıyla karşılıyor. Shipy için geliştirilen bu kütüphane ile Shipy sanal pos API'lerini çok kolay bir şekilde kullanabilirsiniz.

- Kredi (Taksit seçenekleri) veya banka kartı ile ödeme.
- Havale veya eft ile ödeme.
- Mobil ödemeler.

## 2. Kurulum

**Node.js 8.0.0 veya daha üstü gerekir.**

```sh-session
npm install shipynet
yarn add shipynet
pnpm add shipynet
```

### *2.1. Zorunlu Paketler (Otomatik Kurulum)*

- [axios](https://www.npmjs.com/package/axios) api post get işlemleri için kullanılır (`npm install axios`)
- [crypto](https://www.npmjs.com/package/crypto) callback işleminde bir hash oluşturmak için kullanıyoruz (`npm install crypto`)

## 3. Örnekler

Önceklikle **shipynet** kurun:

```sh-session
npm install shipynet
yarn add shipynet
pnpm add shipynet
```

### *3.1. shipynet İçeri Aktarma ve Ayarları Yapmak*

```js
const Shipynet = require('shipynet');
const shipynet = new Shipynet('API_KEY');
```

### *3.2. Kredi veya Banka Kartı ile Ödeme Yapmak*

```js
async function main() {
    let paymentID = 'cart-'+Math.random().toString(36).substring(7);

    shipy.cart({
        usrIp: '192.168.1.1', //Kullanıcının ip adresi
        usrName: 'John Doe', //Kullanıcının adı/soyadı/kullanıcıadı
        usrAddress: 'Turkey/Ankara', //Kullanıcının adresi
        usrPhone: '+905xxxxxxxxx', //Kullanıcının telefon numarası
        usrEmail: 'user@mail.com', //Kullanıcının e-posta adresi
        amount: 5, //Ödenecek tutar
        returnID: paymentID, //Ödeme sonrası callback tarafında geri dönülecek ödeme ID'si
        currency: 'TRY', //Ödeme para birimi
        pageLang: 'TR', //Ödeme sayfası dili
        mailLang: 'TR', //Ödeme sonrası e-posta dili
        installment: 0, //Taksit sayısı
    });

    //İpucu -> PaymetID'yi veritabanınıza kaydederek ödeme sonrası callback tarafında kullanabilirsiniz.

    let response = await shipy.run();
    console.log(response);
    //response.link -> Ödeme sayfasına yönlendirme linki
};

main();
```

### *3.3. Havale veya EFT ile Ödeme Yapmak*

```js
async function main() {
    let paymentID = 'eft-'+Math.random().toString(36).substring(7);

    shipy.eft({
        usrIp: '192.168.1.1', //Kullanıcının ip adresi
        usrName: 'John Doe', //Kullanıcının adı/soyadı/kullanıcıadı
        usrAddress: 'Turkey/Ankara', //Kullanıcının adresi
        usrPhone: '+905xxxxxxxxx', //Kullanıcının telefon numarası
        usrEmail: 'user@mail.com', //Kullanıcının e-posta adresi
        amount: 5, //Ödenecek tutar
        returnID: paymentID, //Ödeme sonrası callback tarafında geri dönülecek ödeme ID'si
        currency: 'TRY', //Ödeme para birimi
        pageLang: 'TR', //Ödeme sayfası dili
        mailLang: 'TR', //Ödeme sonrası e-posta dili
        installment: 0, //Taksit sayısı
    });

    //İpucu -> PaymetID'yi veritabanınıza kaydederek ödeme sonrası callback tarafında kullanabilirsiniz.

    let response = await shipy.run();
    console.log(response);
    //response.link -> Ödeme sayfasına yönlendirme linki
};

main();
```

### *3.4. Mobil Ödemeler*

```js
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
```

## 4. Callback

```js
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
```

## 5. Linkler

- [Shipy](https://shipy.net/)
- [GitHub](https://github.com/ibrahimyuksel0/shipynet)
- [npm](https://www.npmjs.com/package/shipynet)

## 6. Yardım ve Öneriler

Herhangi bir yerde problem yaşamanız halinde bize ulaşınız. Bize ulaşmak için [issues](https://github.com/ibrahimyuksel0/shipynet/issues) sayfasını kullanabilirsiniz.
