import { createStore  } from "vuex";

const store = createStore ({
    state: {
        count : 2,
        items: [
            {
                src : '	https://loving-leavitt-9cb65b.netlify.app/static/img/deal1.34dd409.jpg',
                title:'Bags & Purses',
                discount: 'Upto 60% + Extra 10%',
                disc:'Baggit, Zara, Fossil',
            },
            {
                src :'	https://loving-leavitt-9cb65b.netlify.app/static/img/deal2.01628a5.jpg',
                title: 'T-Shirt',
                discount:'Upto 50%',
                disc:'Zara, Selected, Celio'
            },
            {
                src: '	https://loving-leavitt-9cb65b.netlify.app/static/img/deal3.e9d6c61.jpg',
                title: 'Jeans',
                discount:'Upto 60% + Extra 10%',
                disc:'Jack & Jones, Levis'
            },
            {
                src: '		https://loving-leavitt-9cb65b.netlify.app/static/img/deal4.4bb1400.jpg',
                title: 'Shoes',
                discount:'Upto 60% + Extra 10%',
                disc:'Nike, Adidas, Puma'
            },
            {
                src: '	https://loving-leavitt-9cb65b.netlify.app/static/img/5.983bddd.jpg',
                title: 'Shirt',
                discount:'Upto 60% + Extra 10%',
                disc:'Nike, Adidas, Puma'
            },
            {
                src: '	https://loving-leavitt-9cb65b.netlify.app/static/img/3.6bb2983.jpg',
                title: 'Jacket',
                discount:'Upto 60% + Extra 10%',
                disc:'Nike, Adidas, Puma'
            }
        ],
        list: [
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/1.60540e6.jpg',
                type : 'BLACK TEE',
                price: '$18.00',
                title: 'Jacket'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/2.3823ba8.jpg',
                type : 'WHITE TEE',
                price: '$40.00',
                title: 'Polo'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/3.6bb2983.jpg',
                type : 'Zara limited...',
                price: '$25.00',
                title: 'Denim',
                
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/4.cbd30a4.jpg',
                type : 'SKULL TEE',
                price: '$30.00',
                title: 'Jacket'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/5.983bddd.jpg',
                type : 'MANGO WINTER',
                price: '$50.00',
                title: 'Sweaters'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/6.2cdcdf0.jpg',
                type : 'SHIRT',
                price: '$34.00',
                title: 'Denim'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/7.3fc6a45.jpg',
                type : 'TRUCKER JACKET',
                price: '$38.00',
                title: 'Jacket'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/8.1f2f79b.jpg',
                type : 'COATS',
                price: '$25.00',
                title: 'Jacket'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/9.3e4d079.jpg',
                type : 'MANGO WINTER',
                price: '$50.00',
                title: 'Sweaters'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/10.6d7a4de.jpg',
                type : 'SHIRT',
                price: '$34.00',
                title: 'denim'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/11.eaa7154.jpg',
                type : 'TRUCKER JACKET',
                price: '$38.00',
                title: 'Jacket'
            },
            {
                img : 'https://loving-leavitt-9cb65b.netlify.app/static/img/12.0e64dbd.jpg',
                type : 'COATS',
                price: '$25.00',
                title: 'Jacket'
            }
        ]
    },
    getters:{
        carditems: state => {
            return state.items
        },
        cardlist: state => {
            return state.list
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});


export default store;