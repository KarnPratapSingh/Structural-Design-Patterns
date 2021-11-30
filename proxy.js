//Proxy Design Pattern

//External API service

function CryptoCurrencyAPI(){
    this.getValue=function(coin){
        console.log('calling ext api to get value of coin');
        switch(coin){
            case "bitcoin":return "8500$"
            case "litecoin":return "500$"
            case "ethereum": return "200$"
        }
    }
}

////////////////////

// const api=new CryptoCurrencyAPI();
// console.log(api.getValue('bitcoin')); //netwrok calls so they will take some time to retrieve data
// console.log(api.getValue('litecoin')); //netwrok calls so they will take some time to retrieve data
// console.log(api.getValue('ethereum')); //netwrok calls so they will take some time to retrieve data

///////////////////

/*SO we can create a proxy obj that will store the values of these coins. So if the proxy obj already 
knows the value of that coin, we don't  need to make a netwrok call.*/

function cryptoCurrencyProxy(){
    this.api= new CryptoCurrencyAPI();
    this.cache={};

    this.getValue=function(coin){
        if(this.cache[coin]){
            console.log('no time');
            console.log(coin);
            return this.cache[coin];
        }
        else{
            this.cache[coin]=this.api.getValue(coin);
            console.log('takes time');
            console.log(coin);
            return this.cache[coin];
            
        }
    }
}

const api2= new cryptoCurrencyProxy();
console.log(api2.getValue('bitcoin'));
console.log(api2.getValue('bitcoin'));
console.log(api2.getValue('litecoin'));

