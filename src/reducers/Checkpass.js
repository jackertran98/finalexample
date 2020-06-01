export default function checkPass(state = [], action) {
    switch (action.type) {
        case 'CHECK_PASS':
            return action.payload
        default:
            return state;
    }
}