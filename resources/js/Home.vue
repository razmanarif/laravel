<template>
    <div class="bg-cyan-400 min-h-screen flex items-center justify-center">
        <div class="bg-white w-72 h-96 rounded-lg shadow-lg">
            <!-- Added shadow for better distinction -->
            <img
                :src="photoURL"
                alt="Profile Picture"
                class="w-full h-1/2 object-cover rounded-t-lg"
            />
            <div class="p-6">
                <h1 class="text-xl font-bold">{{ personName }}</h1>
                <p class="mt-2 text-xs">{{ personDescription }}</p>
                <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
                <div class="flex space-x-4 mt-4">
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="twitterURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-twitter" class="text-sm" />
                        </a>
                    </div>
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="instagramURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-instagram"  class="text-sm" />
                        </a>
                    </div>
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="facebookURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-facebook"  class="text-sm" />
                        </a>
                    </div>
                    <div class="bg-gray-200 rounded-full p-2 w-6 h-6 flex items-center justify-center">
                        <a :href="linkedinURL" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-linkedin"  class="text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
};
</script>
