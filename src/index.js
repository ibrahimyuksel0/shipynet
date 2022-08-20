process.env.api_url = 'https://api.shipy.dev/';
process.env.api_method = 'POST';

const axios = require('axios');

const cartPay = require('./lib/cart-pay');
const eftPay = require('./lib/eft-pay');
const mobilePay = require('./lib/mobile-pay');
const callback = require('./lib/callback');

class Shipy {
    constructor(api_key) {
        this.settings = {
            api_key: api_key
        };
        this.config = {};
    }

    cart(data) {
        this.config = cartPay(data, this.settings);
    }

    eft(data) {
        this.config = eftPay(data, this.settings);
    }

    mobile(data) {
        this.config = mobilePay(data, this.settings);
    }

    callback(data) {
        return callback(data, this.settings);
    }

    async run(config) {
        try {
            let response = await axios(this.config);
            console.log(response.data);
            return response.data
        } catch (error) {
            console.log(error);
            return error
        };
    }

};

module.exports = Shipy;