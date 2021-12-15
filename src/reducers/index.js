import { combineReducers } from 'redux';

const NameR = (NameR="",action) => {
    console.log(action?.type);
    switch(action.type){
        case 'UPDATE':
            console.log('Here');
            NameR=action.payload;
            return action.payload;
        default:
            console.log("There");
            return NameR;
    }
}

export default combineReducers({
    NameR
});