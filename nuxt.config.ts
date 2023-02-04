export default defineNuxtConfig({
    ssr: false,
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css"
    ],
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
})
