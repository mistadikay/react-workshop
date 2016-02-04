// list of available options:
// https://github.com/stylelint/stylelint/blob/master/docs/user-guide/node-api.md#options
export default options => input => {
    return function stylelint(log) {
        const linter = require('stylelint');

        return new Promise(function(resolve, reject) {
            linter.lint({ files: input, ...options })
                .then(function({ errored, output }) {
                    if (errored) {
                        console.log(output);
                        reject();
                    }

                    console.log('styles are OK');
                    resolve(input);
                })
                .catch(function(error) {
                    console.log(error);
                    reject();
                });
        });
    };
};
