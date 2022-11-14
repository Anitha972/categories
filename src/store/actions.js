export default {
    setState({ commit }, payload) {
        commit('setState', payload);
    },
    async getCategories({ state, dispatch }) {
        const response = await fetch('https://api.publicapis.org/entries');
        const categories = await response.json();
        await dispatch('setState', {
            stateName: 'tableHeadings',
            value: Object.keys(categories.entries[0]),
        })
        await dispatch('setState', {
            stateName: 'tableData',
            value: categories.entries,
        })
    }
}    