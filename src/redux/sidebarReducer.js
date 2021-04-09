let initialState = {
    sidebar: [
        {id: 1, name: 'Неясыть', ava: 'img/ava_1.png'},
        {id: 2, name: 'Филин', ava: 'img/ava_2.png'},
        {id: 3, name: 'Полярная сова', ava: 'img/ava_3.png'}
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;