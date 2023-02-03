<template>
<v-app v-if="login">
    <HelloWorld />
    <v-main class="pb-0">
        <v-bottom-navigation>
            <v-btn value="recent">
                <RouterLink to="/" class="text-decoration-none text-black">
                    <v-icon>mdi-home</v-icon>
                </RouterLink>
                Home
            </v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <RouterLink to="/product-list" class="text-decoration-none text-black">
                            <v-icon>mdi-cart</v-icon>
                        </RouterLink>
                        Shop
                    </v-btn>
                </template>

                <v-list width="100">
                    <v-list-item>
                        <v-list-item-title>
                            <RouterLink to="/product-list" class="text-decoration-none text-black">T-shirt</RouterLink>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <RouterLink to="/product-list" class="text-decoration-none text-black">Shirt</RouterLink>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <RouterLink to="/product-list" class="text-decoration-none text-black">Jacket</RouterLink>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <RouterLink to="/product-list" class="text-decoration-none text-black">Jeans</RouterLink>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <RouterLink to="/product-list" class="text-decoration-none text-black">Shoes</RouterLink>
                        </v-list-item-title>
                    </v-list-item>

                </v-list>
            </v-menu>

            <v-btn value="product">
                <RouterLink to="/product" class="text-decoration-none text-black"><v-icon>mdi-view-module</v-icon></RouterLink>
                

                Product
            </v-btn>
            <v-btn value="Blog">
                <v-icon>mdi-cloud-upload</v-icon>

                Blog
            </v-btn>
        </v-bottom-navigation>
        <router-view></router-view>
    </v-main>
    <Footer />
</v-app>
<v-app v-else>
    <v-main>
        <RouterView></RouterView>
    </v-main>
</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue';

export default {
    name: 'App',

    components: {
        HelloWorld,
        Footer
    },

    data: () => ({
        //
    }),
    computed: {
        login() {
            console.log(this.$route);
            return this.$route.name !== 'Ragister' && this.$route.name !== 'Login';
        }

    },
    mounted() {
        let user = localStorage.getItem('ragister');
        if(!user){
            this.$router.push('/login')
        }
    },
}
</script>
