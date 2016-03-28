import requestData from '~/../server';

export function selectView(view) {
    return {
        type: 'VIEW_SELECT',
        view
    };
}

export function updateData(data) {
    return {
        type: 'DATA_LOADED',
        data
    };
}

export function getCatalogData() {
    return function(dispatch) {
        return requestData(1500)
            .then(data => {
                dispatch(updateData(data));
            });
    };
}
