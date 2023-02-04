export default defineNuxtConfig({
    ssr: false,
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css"
    ],
    runtimeConfig: {
        public: {
            RELEASE_DATE: process.env.RELEASE_DATE
        }
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },

})
