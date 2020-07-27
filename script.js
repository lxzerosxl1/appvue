const app = new Vue({
    el: '#app',
    data: {
        titulo : 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea() {
            // console.log('Diste Click', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas)
            this.nuevaTarea = '';
        }
    },
});