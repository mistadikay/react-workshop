export default params => input => {
    return function stylelint(log) {
        const linter = require('stylelint');

        return new Promise(function(resolve, reject) {
            linter.lint({
                files: input,
                ...params
            }).then(function({ errored, output }) {
                if (errored) {
                    console.log(output);
                    reject();
                }

                console.log('styles are OK');
                resolve(input);
            });
        });
    };
};
