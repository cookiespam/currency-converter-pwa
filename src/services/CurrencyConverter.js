import localForage from 'localforage';
import {Cashify} from 'cashify';
import '../env';

const defaultCurrencies = [
        {id: "EUR", name: "Euro", rates: "1.00"},
        {id: "GBP", name: "British Pound Sterling", rates: "0.1"},
        {id: "USD", name: "United States Dollar", rates: "1.17"}
    ];

let cashify;
let data;

class CurrencyConverter {

    async update() {
        if (data) { return data;}
        data = await this.updateRates();
    }

    async updateRates() {
        let rates = null;
        let currencyList = null;

        try {
            // get data and store into local storage
            rates = await this.getAllRates();
            currencyList = await this.getCurrencyList();
            currencyList = currencyList.symbols;
        } catch (e) {
            // else fetch from local storage
            console.log(e);
            return await this.getOfflineData();
        }
        const data = await this.populate(currencyList, rates);
        return data;
    }

    async getCurrencyList() {
        const endpoint = `${process.env.REACT_APP_CURRENCY_API}/currencylist/`;
        const response = await fetch(endpoint);
        
        return response.json();
    }

    async getAllRates() {
        const endpoint = `${process.env.REACT_APP_CURRENCY_API}/rates/`;
        const response = await fetch(endpoint);

        return response.json();
    }

    async getOfflineData() {
        return await localForage.getItem('data');
    }

    async getSelectedCurrencies() {
        let selectedCurrencies = [];

        let storedCurrencies = await localForage.getItem('selectedCurrencies');
        
        if (!storedCurrencies) {
            storedCurrencies = await localForage.setItem('selectedCurrencies', defaultCurrencies);
        }

        if (!data) { return []; }

        Object.entries(data).forEach((currency) => {
            for (let c of storedCurrencies) {
                if (currency[1].id === c.id) {
                    selectedCurrencies.push(currency[1]);
                }
            }
        });
        
        return selectedCurrencies;
    }

    async setSelectedCurrencies(selected) {
        await localForage.setItem('selectedCurrencies', selected);
    }

    async populate(currencyList, rates) {
        const data = [];

        cashify = new Cashify({base: 'EUR', rates: rates.rates});
        // this.date = this.getDate(rates.timestamp);

        for(let key in currencyList) {
            let obj = {};
            obj.id = key;
            obj.name = currencyList[key];
            obj.rates = rates.rates[key].toFixed(2) || 0.0;
            data.push(obj);
        }

        await localForage.setItem('data', data);
        
        return data;
    }

    getDate(timestamp) {
        const date = new Date(timestamp*1000);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${('0'+date.getMinutes()).slice(-2)}`;
    }

    change(data, currencyId, amount) {
        Object.entries(data).map((currency) => {
            try {
                currency[1].rates = cashify.convert(Number(amount), { from: currencyId, to: currency[1].id });

                if (currency[1].id === currencyId) {
                    currency[1].rates = amount;
                } else {
                    currency[1].rates = currency[1].rates.toFixed(2);
                }
            } catch (e) {
                console.log(e);
            }
            return currency;
        });
    }
}

const instance = new CurrencyConverter();
Object.freeze(instance);

export default instance;
