import requestData from '~/../server';

export function selectView(view) {
    return {
        type: 'VIEW_SELECT',
        view
    };
}

export function getCatalogData() {
    return function(dispatch) {
        return requestData(1500)
            .then(data => {
                console.log(data);
            });
    };
}
