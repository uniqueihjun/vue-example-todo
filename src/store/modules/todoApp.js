const storage = {
    fetch() {
        var arr = [];

        if (localStorage.length > 0) {
            for (let index = 0; index < localStorage.length; index++) {
                if (localStorage.key(index) !== 'loglevel:webpack-dev-server') {
                    //this.todoItems.push(localStorage.key(index));

                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
                }
            }
        }

        return arr;
    }
};

const state = {
    headerText: 'Todo it!',
    todoItems: storage.fetch()
}

const getters = {
    storedTodoItems (state) {
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state, todoItem) {
        if (todoItem !== '') {
            const obj = {
                completed: false,
                item: todoItem
            };

            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        }
    },
    removeOneItem(state, payload) {
        state.todoItems.splice(payload.index, 1); //배열을 삭제후 새로운 배열을 반환
        localStorage.removeItem(payload.todoItem.item);
    },
    toggleOneItem(state, payload) {
        //todoItem.completed = !todoItem.completed ;
        // console.log(state.todoItems[payload.index]);
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

        //localStorage remove, new add -> removeItem, setItem
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default { state, getters, mutations }