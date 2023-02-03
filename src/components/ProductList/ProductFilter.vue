<template>
<v-card>
    <v-card-title class="py-5">
        Filters
    </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle>
        <v-expansion-panels>
            <v-expansion-panel class="w-75%">
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="text-body-1">
                    Shoes
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-list :items="items"></v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="w-75%">
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
                    Clothing
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-list :items="Clothing"></v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-title class="py-5">
        Price
    </v-card-title>
    <v-range-slider v-model="value" class="px-3" :min="1" density="compact" :max="10000" :stap="1" hide-details></v-range-slider>
    <div class="d-flex justify-space-between align-center">
        <v-text-field label="Min" hide-details variant="outlined" type="number" :model-value="value[0]" class="width pa-3"></v-text-field> TO
        <v-text-field label="Max" hide-details variant="outlined" type="number" :model-value="value[1]" class="width pa-3"></v-text-field>
    </div>
    <v-divider></v-divider>
    <v-card-title>
        Customer Rating
    </v-card-title>
    <div class="customer">
        <div>
            <v-checkbox label="4 & Above"  append-icon="mdi-star" class="pe-3" @click="star"></v-checkbox>
            <v-checkbox label="3 & Above" append-icon="mdi-star" class="pe-3"></v-checkbox>
            <v-checkbox label="2 & Above" append-icon="mdi-star" class="pe-3"></v-checkbox>
            <v-checkbox label="1 & Above" append-icon="mdi-star" class="pe-3"></v-checkbox>
        </div>
    </div>
    <v-divider></v-divider>
    <v-card-title>
        Size
    </v-card-title>
    <div class="size">
        <v-checkbox label="XS"></v-checkbox>
        <v-checkbox label="S"></v-checkbox>
        <v-checkbox label="M"></v-checkbox>
        <v-checkbox label="L"></v-checkbox>
        <v-checkbox label="XL"></v-checkbox>
        <v-checkbox label="XXL"></v-checkbox>
        <v-checkbox label="XXXL"></v-checkbox>
    </div>
</v-card>
</template>

<script>
export default {
    name: 'ProductFilter',
    data: () => ({
        items: [{
                title: 'Casuals',
                value: 1,
            },
            {
                title: 'Formals',
                value: 2,
            },
            {
                title: 'Sneakers',
                value: 3,
            },
        ],
        value: [0, 10000],
        Clothing: [{
                title: 'Shirts',
                value: 1,
            },
            {
                title: 'Tops',
                value: 2,
            },
            {
                title: 'Tunics',
                value: 3,
            },
            {
                title: 'BodySuit',
                value: 4,
            },
        ],

    }),
    methods: {
        star(){
            document.getElementsByClassName('mdi-star').style.color = "blue";
        }
    },
}
</script>

<style scoped>
.v-text-field .v-field {
    cursor: text;
    height: 40px;
}

.width {
    width: 33% !important;
}

.v-input__control {
    display: flex;
    grid-area: control;
    height: 40px;
}

.size .v-input__details {
    display: none !important;
}
</style>
