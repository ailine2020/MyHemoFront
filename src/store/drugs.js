import {
    apiHandler
} from "./../api/handler";

const handler = apiHandler();
console.log(handler);

export default {
    namespaced: true, //permet à plusieurs modules de réagir à la même mutation ou action
    state: {
        drugs: [],
        currentDrug: null,
    },
    getters: {
        all(state) {
            return state.drugs;
        },
        current(state) {
            return state.currentDrug;
        },
    },
    mutations: {
        setDrugs(state, drugs) {
            state.drugs = [...drugs];
        },
        setQuantite(state) {
            state.quantite -= 1;
        }
    },
    actions: {
        async getDrugs(ctx) {
            const userId = ctx.rootState.user.currentUser._id;
            try {
                const apiRes = await handler.get(`/drugs/user/${userId}`);
                ctx.commit("setDrugs", apiRes.data);
            } catch (err) {
                console.error(err)
            }
        },
        add(ctx, drug) {
            return new Promise((resolve, reject) => {
                const userId = ctx.rootState.user.currentUser._id;
                handler.post(
                        process.env.VUE_APP_BACKEND_URL +
                        `/drugs/user/${userId}`,
                        drug,
                    ).then(resolve)
                    .catch(err => reject(err.message));
            })
        },
        deleteDrugs(ctx, drugId) {
            return new Promise((resolve, reject) => {
                handler.delete(
                        process.env.VUE_APP_BACKEND_URL +
                        `/drugs/${drugId}`,
                        drugId
                    ).then(resolve)
                    .catch(err => reject(err.message));
            })
        },
        async decrementStock(ctx, drugId) {
            try {
                const apiRes = await handler.patch(
                    process.env.VUE_APP_BACKEND_URL + `/drugs/${drugId}/decrement-stock`);
                ctx.commit("setQuantite", apiRes.data);
            } catch (err) {
                console.error(err);
            }
        }
    },
}