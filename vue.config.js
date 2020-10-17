module.exports = {
  devServer: {
    proxy: process.env.VUE_APP_BACKEND_URL,
    host: process.env.VUE_APP_HOST,
    publicPath: process.env.VUE_APP_FRONTEND_URL === 'production' // utile pour supprimer l'erreur sockjs-node (Not Found) dans la console du navigateur
  },
};