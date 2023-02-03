<template>
<v-app-bar color="indigo-darken-4">

    <v-app-bar-title class="text-white">
        <v-icon>mdi-truck</v-icon>
        ShipIT
    </v-app-bar-title>

    <v-spacer></v-spacer>
    <v-text-field color="white" density="compact" variant="solo" label="Search " append-inner-icon="mdi-magnify" single-line hide-details flat></v-text-field>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-menu v-if="login">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
                <v-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg" alt="John"></v-img>
                </v-avatar>
            </v-btn>
        </template>
        <v-list>
            <v-list-item>
                <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title @click="logout">Logout</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
    <v-menu v-else>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon class="text-white">
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <router-link to="/ragister" class="text-decoration-none text-black">Ragister</router-link>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <router-link to="/login" class="text-decoration-none text-black">Login</router-link>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

    <v-btn icon class="text-white" stacked @click="increment">
        <v-badge :content="count" color="error">
            <v-icon>mdi-bell</v-icon>
        </v-badge>

    </v-btn>

    <v-btn icon class="text-white">
        <v-icon>mdi-cart</v-icon>
    </v-btn>
</v-app-bar>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
export default {
    name: 'HelloWorld',
    components:{
        Menu, MenuButton, MenuItems, MenuItem
    },
    data: () => ({
        login: '',
    }),
    mounted() {
        let user = localStorage.getItem('ragister');
        this.login = user;
        if (user) {
            this.$router.push('/')
        }
    },
    computed: {
        count(){
            return this.$store.state.count
        }
    },
    methods: {
        increment(){
            this.$store.commit('increment')
        },
        logout() {
            localStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>
