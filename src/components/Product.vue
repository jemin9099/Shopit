<template>
<v-container>
    <v-row>
        <v-col cols="12" md="6">
            <v-carousel show-arrows="hover">
                <v-carousel-item src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider1.8a3a968.jpg" cover>

                </v-carousel-item>

                <v-carousel-item src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider4.0e80ba7.jpg" cover>

                </v-carousel-item>

                <v-carousel-item src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider2.b3a6509.jpg" cover>

                </v-carousel-item>

                <v-carousel-item src="https://loving-leavitt-9cb65b.netlify.app/static/img/slider3.6f27a30.jpg" cover>

                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
            <v-breadcrumbs :items="['Home', 'Clothing', 'T-shirt']"></v-breadcrumbs>
            <div class="text-h4">Modern Black T-Shirt</div>
            <div class="d-flex justify-space-between">
                <div>
                    <p class="text-h6 font-weight-light d-inline">$65.00 </p><span class="text-decoration-line-through font-weight-light">$80.00</span>
                </div>
                <div class="d-flex align-center">
                    <v-rating v-model="rating" class="ma-2" color="orange" density="compact"></v-rating> <span class="font-weight-light">25 REVIEWS</span>
                </div>
            </div>
            <p class="font-weight-light pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illo tempora dolores temporibus velit voluptatibus ratione eaque iusto tenetur officia aliquid recusandae laborum quod ea ipsum, natus atque. Vel asperiores doloremque totam porro aut nam fugit inventore quidem iure, repellat expedita voluptatum dolor incidunt? Ut quidem ullam enim nemo necessitatibus.</p>
            <div class="text-h5">Size</div>
            <v-radio-group inline color="indigo-darken-4">
                <v-radio label="XS" value="xs"></v-radio>
                <v-radio label="S" value="s"></v-radio>
                <v-radio label="M" value="m"></v-radio>
                <v-radio label="L" value="l"></v-radio>
                <v-radio label="XL" value="xl"></v-radio>
            </v-radio-group>
            <div class="text-h5 pb-5">ITEMS</div>
            <div class="w-25 hight">
                <v-text-field variant="outlined" value="1" class="w-75" color="indigo-darken-4"></v-text-field>
            </div>
            <div>
                <v-btn prepend-icon="mdi-cart" color="indigo-darken-4" :rounded="0">
                    Add to Cart
                </v-btn>
                <v-btn variant="outlined" :rounded="0" class="ms-5">
                    Add Wishlist
                </v-btn>
            </div>
        </v-col>
        <google-pay-button environment="TEST" :button-color="buttonColor" :button-type="buttonType" :button-size-mode="isCustomSize ? 'fill' : 'static'" :paymentRequest.prop="paymentRequest" @loadpaymentdata="onLoadPaymentData" @error="onError" :style="{ width: `${buttonWidth}px`, height: `${buttonHeight}px` }"></google-pay-button>
        <!-- <div>
            <StripeElements
                v-if="stripeLoaded"
                v-slot="{ elements,}"
                ref="elms"
                :stripe-key="stripeKey"
                :instance-options="instanceOptions"
                :elements-options="elementsOptions"
            >
            <StripeElement
                ref="card"
                :elements="elements"
                :options="cardOptions"
            />
            </StripeElements>
             <v-btn variant="outlined" :rounded="0" class="ms-5" @click="pay">Pay</v-btn>
        </div> -->
        <v-btn variant="outlined" :rounded="0" class="ms-5" id="pay" @click="pay">Shop Now</v-btn>
        <div id="paypal-button-container"></div>
        <v-col cols="12">

            <v-tabs v-model="tab" color="orange">
                <v-tab value="one">Discription</v-tab>
                <v-tab value="two">Materials</v-tab>
                <v-tab value="three">REVIEWS</v-tab>
            </v-tabs>
            <v-card-text class="pb-10">
                <v-window v-model="tab">
                    <v-window-item value="one">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
                    </v-window-item>

                    <v-window-item value="two">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
                    </v-window-item>

                    <v-window-item value="three">
                        <v-list>
                            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Lorem ipsum dolor?">
                                <v-rating v-model="rating" class="ma-2" color="orange" density="compact"></v-rating>
                                <P> Ali Connors — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.</p>
                            </v-list-item>
                            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/88.jpg" title="Lorem ipsum dolor?">
                                <v-rating v-model="rating" class="ma-2" color="orange" density="compact"></v-rating>
                                <P>to Alex, Scott, Jennifer — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </v-list-item>
                            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/45.jpg" title="Lorem ipsum dolor?">
                                <v-rating v-model="rating" class="ma-2" color="orange" density="compact"></v-rating>
                                <P>John Adams — Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </v-list-item>
                            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/41.jpg" title="Lorem ipsum dolor?">
                                <v-rating v-model="rating" class="ma-2" color="orange" density="compact"></v-rating>

                            </v-list-item>
                            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/58.jpg" title="Lorem ipsum dolor?">
                                <v-rating v-model="rating" class="ma-2" color="orange" density="compact"></v-rating>
                                <P> Britta Holt — Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </v-list-item>
                        </v-list>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-col>
    </v-row>
    <div class="text-h6 font-weight-light text-center">YOU MIGHT ALSO LIKE</div>
    <v-divider></v-divider>
    <v-row class="my-5">
        <v-hover>
            <v-col cols="12" md="2" sm="4" v-for="carditem in carditems" :key="carditem">
                <v-card max-height="350px" :elevation="hover ? 24 : 6" class="mx-auto transition-swing">
                    <v-img class="align-end text-white " height="175" :src="carditem.src" gradient="to bottom left, rgba(0,0,0,.2), rgba(0,0,0,.6)" cover>
                        <v-card-title>
                            {{ carditem.title }}
                        </v-card-title>
                    </v-img>
                    <v-card-text class="text-center">
                        <div class="">{{ carditem.discount }}</div>
                        <div class="">{{ carditem.disc }}</div>
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
</template>

<script>
import "@google-pay/button-element";
import axios from "axios";
export default {
    name: 'Product',

    head() {
        return {
            script: true ? [{
                src: 'https://checkout.razorpay.com/v1/checkout.js'
            }] : [{
                src: "https://checkout.razorpay.com/v1/razorpay.js"
            }],
            
        }
    },
    data: () => ({
        amount: 2000,
        rating: 4,
        tab: null,
        buttonColor: "default",
        buttonType: "buy",
        isCustomSize: false,
        buttonWidth: 240,
        buttonHeight: 52,
        paymentRequest: {

            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [{
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId'
                    }
                }
            }],
            merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant"
            },
            transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '100.00',
                currencyCode: 'USD',
                countryCode: 'US'
            }

        },
        loading: false,
        lineItems: [{
            price: 'price_1MU4ZRSJePArrhO7TN5Mqymd',
            quantity: 1,
        }],
        successURL: 'http://localhost:8080/',
        cancelURL: 'http://localhost:8080/product',
    }),
    
    computed: {
        carditems() {
            return this.$store.getters.carditems;
        }
    },
    created() {
        
    },
    mounted() {
        if (document.getElementById('pay')) return; // was already loaded
        var scriptTag = document.createElement("script");
        scriptTag.src = "https://checkout.razorpay.com/v1/checkout.js";
        scriptTag.id = "pay";
        document.getElementsByTagName('head')[0].appendChild(scriptTag);
        

    },

    methods: {
        onLoadPaymentData: event => {
            console.log("load payment data", event.detail);
        },
        onError: event => {
            console.error("error", event.error);
        },
        
        pay() {

            const options = {
                "key": "rzp_test_zsAQJSeO5JwxmI", // Enter the Key ID generated from the Dashboard
                "amount": "65", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://as2.ftcdn.net/v2/jpg/02/17/19/89/1000_F_217198989_9eAumm9vnar0gxcGBxpYsAoZ86Zrr92q.jpg",
                "order_id": "order_LAPK0JbdwFGuxc", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "handler": function (response) {
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
                "prefill": {
                    "name": "jemin viradiya",
                    "email": "jemin99@gmail.com",
                    "contact": "6352211995"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#1a237e"
                }
            };
            const rzp1 = new Razorpay(options);
            rzp1.open();
            // I will give you in 2 days because I am in the village right now and I will come in 2 days
        },

    }
}
</script>   

<style>
.transition-swing:hover {
    box-shadow: 0 11px 22px 7px rgba(0, 0, 0, .2), 0 11px 4px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
}
</style>
