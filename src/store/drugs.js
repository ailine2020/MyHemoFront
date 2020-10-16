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
        quantite: 0,
    },
    getters: {
        all(state) {
            return state.drugs;
        },
        current(state) {
            return state.currentDrug;
        },
        quantite(state) {
            return state.quantite;
        }
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
        async decrementStock(ctx) {
            const userId = ctx.rootState.user.currentUser._id;
            try {
                const apiRes = await handler.patch(`/drugs/${userId}/decrement-stock`);
                ctx.commit("setQuantite", apiRes.data);
            } catch (err) {
                console.error(err);
                console.log("aaaaaa", err);
            }
        }
    },
}