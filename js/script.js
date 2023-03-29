const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Vue Hello",
            image: "img/Logo-Vuejs.png"
        }
    }
}).mount("#app");