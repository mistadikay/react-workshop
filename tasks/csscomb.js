export default options => input => {
    return function csscomb(log) {
        const Comb = require('csscomb');
        const comb = new Comb(options.config);

        return new Promise(function(resolve, reject) {
            Promise.all(input.map(path => comb.processPath(path)))
                .then(function() {
                    console.log('combed');
                    resolve();
                })
                .catch(function(err) {
                    console.log(err);
                    reject();
                });
        });
    };
};
