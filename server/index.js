import data from './data.json';

export default function(timeout = 1000) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data);
        }, timeout);
    });
}
