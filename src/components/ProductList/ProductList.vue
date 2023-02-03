<template>
<v-container>
    <v-row>
        <v-col cols="12" md="3" sm="4">
            <ProductFilter />
        </v-col>
        <v-col cols="12" md="9" sm="8">
            <listing />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import ProductFilter from './ProductFilter.vue';
    import listing from './Listing.vue';
    export default {
        name:'ProductList',
        components: {
            ProductFilter,
            listing
        }
    }
</script>