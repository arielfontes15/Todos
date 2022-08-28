const todoList = {
    data(){
        return {
            todosList: [],
            newTodo: {
                finalizar: false
            }
        }
    },
    methods: {
        addTodo(){
            //Cria uma nova Tarefa
            if(this.newTodo.titulo){
                this.todosList.push(this.newTodo);
                this.newTodo = {
                    finalizar: false
                };
            }else {
                //Verificação feita para não permitir o input nullo
                alert('Preencha o campo');
            }
            //Seta meus dados em local Storage
            //Para que sempre que sair da pagina ou recarregar a pagina fique salvo meus dados
            localStorage.setItem('Todos', JSON.stringify(this.todosList))
        },
        // removeTodo() {
        //     //Enquanto houver tarefa ele ira apagar o ultimo da lista dando o efeito de CLEAR ALL
        //     while(this.todosList.length) {
        //         this.todosList.pop();
        //     }
        // },
        // finalizarTodo(e){
        //     //Finaliza minha tarefa e utiliza o toggle para ativar ou remover a classe CSS DONE
        //     //Dando o efeito de tarefa finalizada
        //     if(e.target){
        //         e.currentTarget.classList.toggle('done');
        //         let marcaFinalizado = document.querySelector('.done');
        //         console.log(marcaFinalizado)
        //         if(marcaFinalizado){
        //             this.newTodo = {
        //                 finalizar: true
        //             } 
        //         }
        //     }
        // }
    },
    created() {
        //Recupera meu dados salvos da minha toodo list em local storage
        this.todosList = localStorage.getItem('Todos')
        ? JSON.parse(localStorage.getItem('Todos'))
        : this.todosList;
    },
    updated() {
        //Ao mudar qualquer propriedade reativa ele ira setar no localStorage as mudanças
        localStorage.setItem('Todos', JSON.stringify(this.todosList))
    }
}


Vue.createApp(todoList).mount('#app')
