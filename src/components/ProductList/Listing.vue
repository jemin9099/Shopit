<template>
<v-breadcrumbs :items="['Home', 'Clothing', 'T-shirt']"></v-breadcrumbs>
<v-row>
    <v-col cols="12" md="8" sm="6" class="d-flex align-center">
        <p>Showing 1-12 of 200 Products</p>
    </v-col>
    <v-col cols="12" md="4" sm="6">
        <v-select label="Popularity" :items="['Default', 'Popularity', 'Relevance', 'Price:Low to High', 'Price:High to Low']" variant="outlined" class="select"></v-select>
    </v-col>
</v-row>
<v-divider></v-divider>
<v-row class="mt-5">
    <v-col cols="12" md="3" sm="6" v-for="item in items" :key="item">
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" color="grey-lighten-4" v-bind="props">
                <v-img :aspect-ratio="16/9" height="200px" cover :src="item.img">
                    <v-expand-transition>
                        <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-white v-card--reveal" style="height: 100%;">
                            <!-- <google-pay-button environment="TEST" :button-color="buttonColor" :button-type="buttonType" :button-size-mode="isCustomSize ? 'fill' : 'static'" :paymentRequest.prop="paymentRequest" @loadpaymentdata="onLoadPaymentData" @error="onError" :style="{ width: `${buttonWidth}px`, height: `${buttonHeight}px` }">Shop Now</google-pay-button> -->
                            <v-btn variant="outlined" :rounded="0"  id="pay" >Shop Now</v-btn>
                        </div>
                        
                    </v-expand-transition>
                    <v-card-title class="text-white bottom">
                        {{ item.title }}
                    </v-card-title>
                </v-img>

                <v-card-text class="pt-6">
                    <div class="font-weight-light text-center">
                        {{ item.type }}
                    </div>
                    <div class="font-weight-light text-center">
                        {{ item.price }}
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
    </v-col>
</v-row>
<div class="text-center pa-10">
    <v-pagination v-model="page" :length="6" color="indigo-darken-4" theme="dark"></v-pagination>
</div>
</template>

<script>
import "@google-pay/button-element";
export default {
    name: 'Listing',
    data: () => ({
        page: 1,
        buttonColor: "default",
        buttonType: "buy",
        isCustomSize: false,
        buttonWidth: 80,
        buttonHeight: 40,
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

        }
    }),
    computed: {
        items() {
            return this.$store.getters.cardlist;
        }
    },
    methods: {
        onLoadPaymentData: event => {
            console.log("load payment data", event.detail);
        },
        onError: event => {
            console.error("error", event.error);
        }
    }
}
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
}

.bottom {
    position: relative;
    bottom: -158px;
}

.select .v-input {
    padding: 20px 0;
}
</style>
