<template>
    <div :class="isDarkMode ? 'bg-gray-900 text-white min-h-screen flex items-center justify-center' : 'bg-cyan-400 min-h-screen flex items-center justify-center'">
        <!-- <button @click="toggleDarkMode" class="absolute top-4 right-4 px-4 py-2 bg-green-500 rounded-full">Toggle Dark Mode</button> -->
        <div :class="isDarkMode ? 'bg-gray-800 w-72 h-96 rounded-lg shadow-lg' : 'bg-white w-72 h-96 rounded-lg shadow-lg'">
            <img
                :src="photoURL"
                alt="Profile Picture"
                class="w-full h-1/2 object-cover rounded-t-lg"
            />
            <div class="p-6">
                <h1 class="text-xl font-bold">{{ personName }}</h1>
                <p class="mt-2 text-xs">{{ personDescription }}</p>
                <div class="flex space-x-4 mt-4">
                    <!-- The code for your social icons remains unchanged -->
                    <!-- Twitter -->
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="twitterURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-twitter" class="text-sm" />
                        </a>
                    </div>
                    <!-- Instagram -->
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="instagramURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-instagram"  class="text-sm" />
                        </a>
                    </div>
                    <!-- Facebook -->
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="facebookURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-facebook"  class="text-sm" />
                        </a>
                    </div>
                    <!-- LinkedIn -->
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="linkedinURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-linkedin"  class="text-sm" />
                        </a>
                    </div>
                </div>
            </div>
            <button @click="toggleDarkMode" class="mt-4 px-4 py-2 bg-green-500 rounded-full">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDarkMode: false,
            photoURL:
                "https://plus.unsplash.com/premium_photo-1691960547805-7143654bd06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
            personName: "Maggie May",
            personDescription:
                "I'm a designer from Amsterdam, the Netherlands. Early 2017 I joined Framer to help build the next generation interactive design tool. At framer I help shape the brand and build Framer.com",
            twitterURL: "https://twitter.com",
            instagramURL: "https://instagram.com",
            facebookURL: "https://facebook.com",
            linkedinURL: "https://linkedin.com",
        };
    },
    computed: {
        buttonText() {
            return this.isDarkMode ? 'Light Mode' : 'Dark Mode';
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        }
    }
};
</script>

<style scoped>
/* Additional styles (if any) can be added here */
</style>
