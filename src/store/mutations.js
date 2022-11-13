export default {
    setState(state, payload) {
        state[payload.stateName] = payload.value;
    }
}