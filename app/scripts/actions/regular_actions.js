var AppDispatcher   = require('../dispatcher/dispatcher');

var RegularActions = {
    removePerson(id) {
        AppDispatcher.handleAction({
            actionType: 'REMOVE_PERSON',
            data: id
        });
    }
}

module.exports = RegularActions;
