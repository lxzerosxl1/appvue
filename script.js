const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo',
        frutas: [
            {nombre:'Pera', cantidad:10},
            {nombre: 'Manzana', cantidad:4},
            {nombre: 'mandarina', cantidad:46}
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    }
})