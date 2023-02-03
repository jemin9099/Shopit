<template>
<div class="d-flex justify-center h-100 align-center w-100">
    <v-defaults-provider :defaults="defaults">
        <v-card width="800px">
            <v-card-title class="bg-indigo-darken-4 text-center pa-3">
                <v-icon>mdi-account-circle</v-icon>
                <p>Login</p>
            </v-card-title>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="password" :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append-inner="show1 = !show1" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-card-actions class="justify-space-between align-center">
                    <v-btn color="indigo-darken-4" variant="outlined" @click="add">
                        Login
                    </v-btn>
                        <router-link to="/ragister" class="text-decoration-none text-black">Ragister Now</router-link>
                    
                   
                </v-card-actions>
            </v-container>
        </v-card>
    </v-defaults-provider>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data: () => ({
        show1: false,
        email: '',
        password: '',
        rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length <= 20 || 'Max 20 characters',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || 'Invalid e-mail.';
            },
        }
    }),
    methods:{
        async add() {            
            await axios.get(`http://localhost:3000/ragister?email=${this.email}&password=${this.password}`)
            .then((res) => {
                if(res.status == 200 && res.data.length  > 0){
                    localStorage.setItem('ragister' , JSON.stringify(res.data));
                    this.$router.push('/');
                }
            });
        }
    },
    mounted() {
        let user = localStorage.getItem('ragister');
        if(user){
            this.$router.push('/');
        }
    },
}
</script>
