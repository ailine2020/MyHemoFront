import {
    apiHandler
} from "./../api/handler";

const handler = apiHandler();
console.log(handler);

export default {
    namespaced: true, //permet à plusieurs modules de réagir à la même mutation ou action
    state: {
        rappels: [],
        currentRappel: null
    },
    getters: {
        all(state) {
            return state.rappels;
        },
        current(state) {
            return state.currentRappel;
        }
    },
    mutations: {
        setRappels(state, rappels) {
            state.rappels = [...rappels];
        },
        pushRappel(state, rappel) {
            state.rappels.push(rappel);
        },
    },
    actions: {
        async getRappels(ctx) {
            const userId = ctx.rootState.user.currentUser._id;
            try {
                const apiRes = await handler.get(`rappels/user/${userId}`);
                ctx.commit("setRappels", apiRes.data);
            } catch (err) {
                console.error(err)
            }
        },
        add(ctx, rappel) {
            return new Promise((resolve, reject) => {
                const userId = ctx.rootState.user.currentUser._id;
                handler.post(
                        process.env.VUE_APP_BACKEND_URL +
                        `rappels/user/${userId}`,
                        rappel,
                    ).then(resolve)
                    .catch(err => reject(err.message));
            })
        },
        deleteRappels(ctx, rappelId) {
            return new Promise((resolve, reject) => {
                handler.delete(
                        process.env.VUE_APP_BACKEND_URL +
                        `rappels/${rappelId}`,
                        rappelId
                    ).then(resolve)
                    .catch(err => reject(err.message));
            })
        }
    }
};