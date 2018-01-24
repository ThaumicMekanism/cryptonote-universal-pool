var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

var donationAddresses = {
    devDonation: {
        XDN: 'dddrXCN5A7V8qRomwuZkZDjXsBw4BhpNfh3Zppbgy9oYE4RbcMh9Faw7BDZQ22n3boZzmpMP5fA1pUiv3tAdVYb11Hk32LHee',
        BCN: '271Hnm1H9qFHd4cyuvPSD1VEMM2XfqUNa4PiimGP7j9QX6NFppmPxyKfNCezqRpKfLJf5dmANoy6uA2bGtZ3uT5fJGc3cku',
        BBR: '1KgraThGyG1RzHqBkgJSfSd5hxfpf5Smc7A1WYjxNG3vSLapRBxwDRdBSndjiBtx2eWFvLvAwm8QFe3SpbBZwwveRyjJHGB',
        XMR: '47pfFbfcRWhjbKzLEU5iLGhVY7U6iMNdodH8r7S9MQxwYBTqaYjLZVr7pVEjunW17KXpgW5T83gjyRF2FXNyXxC73523jZJ',
        ETN: 'etnk5wXV6msNS4iHuCxYWH8f1TX11Rcn4K7RvMAhWTkGjHJsP49pytzaZMkXrecX6U76FDWNcpnE4PgRmWbFJ9Np95f7EvJMFK',
        QCN: '1TdPQWUuCvK7yo32AiXM1N6rWP6BZxQrKYS4yqTfnj9n7qeEpCSn5drZ5D9BsDWBNh8zHVqh3N4HfUEipidv4PuGTTkR6FS',
        FCN: '6oaz7bq7pAhCuPiSKw5hKYey1QFv8VYhrUhkt5yZRQRTjiD5aGTTnSTF1VnWZdEX5UcamVn41rdaLYwbRdEndAGGMeqLsPy',
        AEON: 'WmtmYA9Q8hT6PnknGNTBe1PUoGKbatK7mSg1wC51d4BRQu1xYdY4bA2PPivxnR621YMXjDF399399jboWm1eFbfC27tvLep1c',
        DSH: 'D3vSBdsnaUBgBXzoqmwd6qjWQMQbDpbZ21hgkwS83vjp7hBuABeHwYz2yn52Rw112SEfXLyS7jkBtHFzSPpJHimSSyy5ByT'
    },
    coreDevDonation: {
        XDN: 'dddrXCN5A7V8qRomwuZkZDjXsBw4BhpNfh3Zppbgy9oYE4RbcMh9Faw7BDZQ22n3boZzmpMP5fA1pUiv3tAdVYb11Hk32LHee',
        BCN: '271Hnm1H9qFHd4cyuvPSD1VEMM2XfqUNa4PiimGP7j9QX6NFppmPxyKfNCezqRpKfLJf5dmANoy6uA2bGtZ3uT5fJGc3cku',
        BBR: '1KgraThGyG1RzHqBkgJSfSd5hxfpf5Smc7A1WYjxNG3vSLapRBxwDRdBSndjiBtx2eWFvLvAwm8QFe3SpbBZwwveRyjJHGB',
        XMR: '47pfFbfcRWhjbKzLEU5iLGhVY7U6iMNdodH8r7S9MQxwYBTqaYjLZVr7pVEjunW17KXpgW5T83gjyRF2FXNyXxC73523jZJ',
        ETN: 'etnk5wXV6msNS4iHuCxYWH8f1TX11Rcn4K7RvMAhWTkGjHJsP49pytzaZMkXrecX6U76FDWNcpnE4PgRmWbFJ9Np95f7EvJMFK',
        QCN: '1TdPQWUuCvK7yo32AiXM1N6rWP6BZxQrKYS4yqTfnj9n7qeEpCSn5drZ5D9BsDWBNh8zHVqh3N4HfUEipidv4PuGTTkR6FS',
        FCN: '6oaz7bq7pAhCuPiSKw5hKYey1QFv8VYhrUhkt5yZRQRTjiD5aGTTnSTF1VnWZdEX5UcamVn41rdaLYwbRdEndAGGMeqLsPy',
        AEON: 'WmtmYA9Q8hT6PnknGNTBe1PUoGKbatK7mSg1wC51d4BRQu1xYdY4bA2PPivxnR621YMXjDF399399jboWm1eFbfC27tvLep1c',
        DSH: 'D3vSBdsnaUBgBXzoqmwd6qjWQMQbDpbZ21hgkwS83vjp7hBuABeHwYz2yn52Rw112SEfXLyS7jkBtHFzSPpJHimSSyy5ByT'
    },
    extraFeaturesDevDonation: {
        XDN: 'dddrXCN5A7V8qRomwuZkZDjXsBw4BhpNfh3Zppbgy9oYE4RbcMh9Faw7BDZQ22n3boZzmpMP5fA1pUiv3tAdVYb11Hk32LHee',
        BCN: '271Hnm1H9qFHd4cyuvPSD1VEMM2XfqUNa4PiimGP7j9QX6NFppmPxyKfNCezqRpKfLJf5dmANoy6uA2bGtZ3uT5fJGc3cku',
        BBR: '1KgraThGyG1RzHqBkgJSfSd5hxfpf5Smc7A1WYjxNG3vSLapRBxwDRdBSndjiBtx2eWFvLvAwm8QFe3SpbBZwwveRyjJHGB',
        XMR: '47pfFbfcRWhjbKzLEU5iLGhVY7U6iMNdodH8r7S9MQxwYBTqaYjLZVr7pVEjunW17KXpgW5T83gjyRF2FXNyXxC73523jZJ',
        ETN: 'etnk5wXV6msNS4iHuCxYWH8f1TX11Rcn4K7RvMAhWTkGjHJsP49pytzaZMkXrecX6U76FDWNcpnE4PgRmWbFJ9Np95f7EvJMFK',
        QCN: '1TdPQWUuCvK7yo32AiXM1N6rWP6BZxQrKYS4yqTfnj9n7qeEpCSn5drZ5D9BsDWBNh8zHVqh3N4HfUEipidv4PuGTTkR6FS',
        FCN: '6oaz7bq7pAhCuPiSKw5hKYey1QFv8VYhrUhkt5yZRQRTjiD5aGTTnSTF1VnWZdEX5UcamVn41rdaLYwbRdEndAGGMeqLsPy',
        AEON: 'WmtmYA9Q8hT6PnknGNTBe1PUoGKbatK7mSg1wC51d4BRQu1xYdY4bA2PPivxnR621YMXjDF399399jboWm1eFbfC27tvLep1c',
        DSH: 'D3vSBdsnaUBgBXzoqmwd6qjWQMQbDpbZ21hgkwS83vjp7hBuABeHwYz2yn52Rw112SEfXLyS7jkBtHFzSPpJHimSSyy5ByT'
    }
};

global.donations = {};

for(var configOption in donationAddresses) {
    var percent = config.blockUnlocker[configOption];
    var wallet = donationAddresses[configOption][config.symbol];
    if(percent && wallet) {
        global.donations[wallet] = percent;
    }
}

global.version = "v1.1.5.1_uni";
