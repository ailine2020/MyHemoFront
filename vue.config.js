// module.exports = {
//   devServer: {
//     proxy: process.env.VUE_APP_BACKEND_URL,
//     host: process.env.VUE_APP_HOST,
//     publicPath: process.env.VUE_APP_FRONTEND_URL === 'production' // utile pour supprimer l'erreur sockjs-node (Not Found) dans la console du navigateur
//   },
// };

module.exports = {
  devServer: {
    proxy: "http://localhost:8888",
    host: "localhost",
    publicPath: "http://localhost:8080" // utile pour supprimer l'erreur sockjs-node (Not Found) dans la console du navigateur
  },
};