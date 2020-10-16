import axios from "axios";
import auth from "@/auth";
import {
    apiHandler
} from "./../api/handler";
const handler = apiHandler();

export default {
    namespaced: true, //permet à plusieurs modules de réagir à la même mutation ou action
    state: {
        users: [],
        currentUser: null
    },
    getters: {
        all(state) {
            return state.users;
        },
        current(state) {
            return state.currentUser;
        }
    },
    mutations: {
        setCurrent(state, infos) {
            state.currentUser = {
                ...infos
            }; // new object avec infos user qui vient de se connecter
        },
        setUsers(state, users) {
            state.users = users;
        },
        unsetCurrent(state) {
            state.currentUser = null;
        }
    },
    actions: {
        signin(context, userInfos) {
            return new Promise((resolve, reject) => {
                handler
                    .post("/api/auth/signin", userInfos)
                    .then(res => {
                        auth.setLocalAuthToken(res.data.token);
                        context.commit("setCurrent", res.data.user);
                        resolve(res);
                    })
                    .catch(err => {
                        auth.deleteLocalAuthToken();
                        context.commit("setCurrent", null);
                        reject(err);
                    });
            });
        },
        async signup(context, userInfos) {
            try {
                await handler.post("api/auth/signup", userInfos);
            } catch (err) {
                //NE COMPREND PAS CETTE PARTIE!!!!
                const method = err.response.status.toString.startsWith("4") ?
                    "warn" :
                    "error"; // en fonction du code de réponse http...
                console[method](err.response.data);
            }
        },
        signout(context) {
            // todo : kill token server side
            auth.deleteLocalAuthToken();
            context.commit("unsetCurrent");
            console.log("router ???", this.$router);
            /*this.$router.push({ path: signinPath }).catch((error) => { // si un erreur survient ...
              console.info(error.message); // todo : afficher le message dans une alert box
            });*/
        },
        getUserByToken(context, callback) {
            axios
                .get(process.env.VUE_APP_BACKEND_URL + "/api/auth/get-user-by-token", {

                    // ci dessus: TRES IMPORTANT : sans l'option withCredentials, le token (JWT)
                    // n'est pas envoyé avec la requête et le serveur ne saura pas que l'user est déjà connecté
                })
                .then(res => {
                    context.commit("setCurrent", res.data)
                    callback(); // initDrugs + initRappels sur app.vue
                })
                .catch(err => console.error(err.message));
        },
        getAll(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/users/")
                    .then(res => {
                        context.commit("setUsers", res.data);
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    })
            });
        },
        async update(context, userInfos) {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`/users/${userInfos._id}`, userInfos)
                    .then(res => {
                        context.commit("setCurrent", res.data);
                        resolve(res);
                    })
                    .catch(err => {
                        auth.deleteLocalAuthToken();
                        context.commit("setCurrent", null);
                        reject(err);
                    });
            });
        },
        // deleteUser(ctx, userInfos) {
        //     return new Promise((resolve, reject) => {
        //         handler.delete(process.env.VUE_APP_BACKEND_URL +
        //                 `/users/${userInfos}`,
        //                 userInfos)
        //             .then(resolve)
        //             .catch(err => reject(err.message));
        //     })
        // }
    }
};