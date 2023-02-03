<template>
<v-carousel show-arrows="hover">
    <v-carousel-item src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider1.8a3a968.jpg" class="d-flex align-end justify-center" cover>
        <div class="text-h4 ">Shop Now</div>
    </v-carousel-item>

    <v-carousel-item src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider4.0e80ba7.jpg" cover>

    </v-carousel-item>

    <v-carousel-item src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider2.b3a6509.jpg" cover>

    </v-carousel-item>
</v-carousel>
<v-container fluid>
    <v-row>
        <v-col col="12" md="6">
            <v-card max-height="400px">
                <v-img class="align-center text-white shop" src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider2.b3a6509.jpg" gradient="to bottom left, rgba(0,0,0,.2), rgba(0,0,0,.6)" cover>
                    <v-card-title align="center">
                        <div class="text-h3 pa-3">Top Picks</div>
                        <v-btn elevation="2" color="transparent" style="border: 1px solid white;">
                            <RouterLink to="/product-list" class="text-decoration-none text-white">Shop Now </RouterLink>
                        </v-btn>
                    </v-card-title>
                </v-img>
            </v-card>
        </v-col>
        <v-col col="12" md="6">
            <v-card max-height="400px">
                <v-img class="align-center text-white shop" src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider3.6f27a30.jpg" gradient="to bottom left, rgba(0,0,0,.2), rgba(0,0,0,.6)" cover>
                    <v-card-title align="center">
                        <div class="text-h3 pa-3">New Arrivals</div>
                        <v-btn elevation="2" color="transparent" style="border: 1px solid white;">
                            <RouterLink to="/product-list" class="text-decoration-none text-white">Shop Now</RouterLink>
                        </v-btn>
                    </v-card-title>
                </v-img>
            </v-card>
        </v-col>
    </v-row>
</v-container>
<v-container fluid>
    <v-row>
        <v-col col="12" md="4">
            <v-card max-height="300px">
                <v-img class="align-center text-white background" src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal2.01628a5.jpg" gradient="to bottom left, rgba(0,0,0,.2), rgba(0,0,0,.6)" cover>
                    <v-card-title align="center">
                        <div class="text-h3 pa-3">lorem & epsam</div>
                        <v-btn text color="transparent" elevation="2">
                            <RouterLink to="/product-list" class="text-decoration-none text-white">Shop Now <v-icon>mdi-arrow-right</v-icon>
                            </RouterLink>
                        </v-btn>
                    </v-card-title>
                </v-img>
            </v-card>
        </v-col>
        <v-col col="12" md="4">
            <v-card max-height="300px">
                <v-img class="align-center text-white background" src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg" gradient="to bottom left, rgba(0,0,0,.2), rgba(0,0,0,.6)" cover>
                    <v-card-title align="center">
                        <div class="text-h3 pa-3">lorem & epsam</div>
                        <v-btn text color="transparent" elevation="2">
                            <RouterLink to="/product-list" class="text-decoration-none text-white">Shop Now <v-icon>mdi-arrow-right</v-icon>
                            </RouterLink>
                        </v-btn>
                    </v-card-title>
                </v-img>
            </v-card>
        </v-col>
        <v-col col="12" md="4">
            <v-card max-height="300px">
                <v-img class="align-center text-white background" src="https://loving-leavitt-9cb65b.netlify.app/static/img/deal4.4bb1400.jpg" gradient="to bottom left, rgba(0,0,0,.2), rgba(0,0,0,.6)" cover>
                    <v-card-title align="center">
                        <div class="text-h3 pa-3">lorem & epsam</div>
                        <v-btn text color="transparent" elevation="2">
                            <RouterLink to="/product-list" class="text-decoration-none text-white">Shop Now <v-icon>mdi-arrow-right</v-icon>
                            </RouterLink>
                        </v-btn>
                    </v-card-title>
                </v-img>
            </v-card>
        </v-col>
    </v-row>
</v-container>
<v-container>
    <div class="text-h6 font-weight-medium">Deals of the Day</div>
    <v-divider></v-divider>
    <v-row class="my-5">
        <v-hover>
            <v-col cols="12" md="3" sm="6">
                <v-card max-height="350px" :elevation="hover ? 24 : 6" class="mx-auto transition-swing">
                    <v-img class="align-end text-white " height="175" src="	https://loving-leavitt-9cb65b.netlify.app/static/img/deal1.34dd409.jpg" gradient="to bottom left, rgba(0,0,0,.2), rgba(0,0,0,.6)" cover>
                        <v-card-title>
                            Bags & Purses
                        </v-card-title>
                    </v-img>
                    <v-card-text class="text-center">
                        <div class="">Upto 60% + Extra 10%</div>
                        <div class="">Baggit, Zara, Fossil</div>
                    </v-card-text>
                    <div class="text-center pa-3">
                        <v-btn variant="outlined">
                            <RouterLink to="/product-list" class="text-decoration-none text-black">Explore </RouterLink>
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-hover>
        <v-hover>
            <v-col cols="12" md="3" sm="6">
                <v-card max-height="350px" :elevation="hover ? 24 : 6" class="mx-auto transition-swing">
                    <v-img class="align-end text-white " height="175" src="	https://loving-leavitt-9cb65b.netlify.app/static/img/deal2.01628a5.jpg" cover>
                        <v-card-title>
                            T-Shirt
                        </v-card-title>
                    </v-img>
                    <v-card-text class="text-center">
                        <div class="">Upto 50%</div>
                        <div class="">Zara, Selected, Celio</div>
                    </v-card-text>
                    <div class="text-center pa-3">
                        <v-btn variant="outlined">
                            <RouterLink to="/product-list" class="text-decoration-none text-black" @click="overlay = !overlay">Explore </RouterLink>
                        </v-btn>
                    </div>
                    <v-overlay :model-value="overlay" class="align-center justify-center">
                        <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
                    </v-overlay>
                </v-card>
            </v-col>
        </v-hover>
        <v-hover>
            <v-col cols="12" md="3" sm="6">
                <v-card max-height="350px" :elevation="hover ? 24 : 6" class="mx-auto transition-swing">
                    <v-img class="align-end text-white " height="175" src="	https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg" cover>
                        <v-card-title>
                            Jeans
                        </v-card-title>
                    </v-img>
                    <v-card-text class="text-center">
                        <div class="">Upto 60% + Extra 10%</div>
                        <div class="">Jack & Jones, Levis </div>
                    </v-card-text>
                    <div class="text-center pa-3">
                        <v-btn variant="outlined">
                            <RouterLink to="/product-list" class="text-decoration-none text-black">Explore </RouterLink>
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-hover>
        <v-hover>
            <v-col cols="12" md="3" sm="6">
                <v-card max-height="350px" :elevation="hover ? 24 : 6" class="mx-auto  transition-swing">
                    <v-img class="align-end text-white " height="175" src="	https://loving-leavitt-9cb65b.netlify.app/static/img/deal4.4bb1400.jpg" cover>
                        <v-card-title>
                            Shoes
                        </v-card-title>
                    </v-img>
                    <v-card-text class="text-center">
                        <div class="">Upto 60% + Extra 10%</div>
                        <div class="">Nike, Adidas, Puma</div>
                    </v-card-text>
                    <div class="text-center pa-3">
                        <v-btn variant="outlined">
                            <RouterLink to="/product-list" class="text-decoration-none text-black">Explore </RouterLink>
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-hover>
    </v-row>
</v-container>
<v-container fluid class="pa-0 ">
    <v-card color="#00BFA5">
        <v-container>
            <v-row class="pb-10 pt-5">
                <v-col cols="12" md="4">
                    <v-row>
                        <v-col cols="3" align="right">
                            <v-icon style="font-size: 48px;">
                                mdi-truck
                            </v-icon>
                        </v-col>
                        <v-col cols="9">
                            <div class="text-h6">FREE SHIPPING & RETURN</div>
                            <P>Free Shipping over $300</P>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4">
                    <v-row>
                        <v-col cols="3" align="right">
                            <v-icon style="font-size: 48px;">
                                mdi-cash-usd
                            </v-icon>
                        </v-col>
                        <v-col cols="9">
                            <div class="text-h6">MONEY BACK GUARANTEE</div>
                            <P>30 Days Money Back Guarantee</P>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4">
                    <v-row>
                        <v-col cols="3" align="right">
                            <v-icon style="font-size: 48px;">
                                mdi-headset
                            </v-icon>
                        </v-col>
                        <v-col cols="9">
                            <div class="text-h6">020-800-456-747</div>
                            <P>24/7 Available Support</P>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</v-container>
<Chat :onSend="handleSendEvent" :chat="data" :bgColorHeader="darkTheme && '#1e1e1e'" :bgColorChat="darkTheme && '#2C2D2E'" :bgColorInput="darkTheme && '#1e1e1e'" :bgColorIcon="darkTheme && '#9B51E0'" :bgColorMessageChatbot="darkTheme && '#1e1e1e'" :bgColorMessagePerson="darkTheme && '#9B51E0'" :bgColorMessageTimestamp="darkTheme && '#1e1e1e'" :textColorInput="darkTheme && '#fff'" :textColorHeader="darkTheme && '#fff'" :textColorMessageChatbot="darkTheme && '#fff'" :textColorMessageTimestamp="darkTheme && '#fff'" />
</template>

<script>
import {
    Chat
} from "@chat-ui/vue3";
import {
    ref
} from 'vue'
export default {
    name: 'Home',
    data: () => ({
        overlay: false,
        darkTheme: ref(false),
        data: [{
                message: 'Hi! How are you?',
                type: 'chatbot',
                timestamp: '3:45 PM'
            },
            {
                message: 'Hello, i\'m fine, thanks.',
                type: 'person',
                timestamp: '3:46 PM'
            },
            {
                message: 'How can i help you?',
                type: 'chatbot',
                timestamp: '3:47 PM'
            },
        ]
    }),
    methods: {
        handleSendEvent(input) {
            if (input == '') return;
            const messagePerson = {
                type: 'person',
                timestamp: formatAMPM(new Date()),
                message: input
            }
            this.data.value.push(messagePerson)
            setTimeout(async () => {
                const response = await fetch('https://www.boredapi.com/api/activity')
                const res = await response.json()
                const messageChatbot = {
                    type: 'chatbot',
                    timestamp: formatAMPM(new Date()),
                    message: res.activity
                }
                this.data.value.push(messageChatbot)
            }, getRandomNumber())
        }
    },
    getRandomNumber() {
        return Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
    },
    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    },
    watch: {
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false
            }, 3000)
        }
    }
}
</script>

<style>
.v-bottom-navigation {
    position: inherit !important;
    transform: none !important;
    top: 0;
}

.shop .v-responsive__content {
    position: relative;
    bottom: 61px;
}

.background {
    height: 300px;
}

.background .v-responsive__content {
    position: relative;
    bottom: 0px;
}

.transition-swing:hover {
    box-shadow: 0 11px 22px 7px rgba(0, 0, 0, .2), 0 11px 4px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
}
</style>
