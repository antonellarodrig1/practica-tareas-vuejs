const app = new Vue({

    el:'#app',
    data: {
        titulo: 'Tareas',
        tareas: [],
        nuevaTarea:''
    }, 
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea='';
            localStorage.setItem('t-vue',JSON.stringify(this.tareas));
        },
        editarEstado: function(index){
            this.tareas[index].estado= true;
            localStorage.setItem('t-vue',JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index,1);
            localStorage.setItem('t-vue',JSON.stringify(this.tareas));
        }
    }, 
    created: function(){
        let datosDB= JSON.parse(localStorage.getItem('t-vue'));
        if(datosDB === null){
            this.tareas = [];
        }
        else{
            this.tareas = datosDB;
        }
    }
    
});