// const app = new Vue({
//     el: '#app',
//     data: {
//         titulo: 'Hola mundo',
//         frutas: [
//             {nombre:'Pera', cantidad:10},
//             {nombre: 'Manzana', cantidad:4},
//             {nombre: 'mandarina', cantidad:46}
//         ],
//         nuevaFruta: ''
//     },
//     methods: {
//         agregarFruta () {
//             this.frutas.push({
//                 nombre: this.nuevaFruta, cantidad: 0
//             });
//             this.nuevaFruta = '';
//         }
//     }
// })

const calc = new Vue({
    el:'#suma',
    data: {
        numeros: [
            {num : 0},{num : 1},{num : 2},{num : 3},{num : 4},{num : 5},
            {num : 6},{num : 7},{num : 8},{num : 9}
        ],
        suma : '',
        resta : '',
        multi : '',
        divi : ''
    },
    methods : {
        agregarNumero () {
            
        }
    }
})