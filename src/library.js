import Todo from './todo.js'
import Card from './card.js'
import DOM from './DOM.js';
import user from './user.js';

class Library { 
    constructor(){
        this.list = [];
        this.projectReference = [];
        //console.log(this.list)
        document.querySelector('#new-todo-button').addEventListener('click', () => this.buildTodo(undefined, true))
        
    }

    initialise(){
        console.log('initialising library')
        this.list = this.retrieveTodosFromStorage();
        console.log(this.list)
        this.buildAllTodos();
        //this.buildProjectReference();
    }

    retrieveTodosFromStorage(){
        const storage = localStorage.getItem('todos');
        if (storage === null){
            console.log('no todos found in storage')
            return [];
        }else{
            console.log('found todos in storage')
            return JSON.parse(storage);
        }
        
        //console.log('parsing storage')
        //console.log(todoStorage);
    }

    updateListInStorage(){
        console.log('Updating storage')
        console.log(this.list);
        const stringed = JSON.stringify(this.list);
        localStorage.setItem('todos', stringed)
    }

    buildTodo(object = {}, brandNew = false){
        const todo = new Todo(object.id, object._title, object.description, object.dueDate, object.createdDate, object.completed, object.priority, object.checklist, object.projects, object.closed, object._dueDate);
        this.list.push(todo);
        if (brandNew && user.state.projectFilter !== null){
            todo.projects = [user.state.projectFilter];
        }
        todo.card = new Card(todo);
        if (brandNew){
            todo.card.assignElement(todo.card.element);
            content.prepend(todo.card.element.reference);
            todo.card.element.titleInput.focus();
            this.updateListInStorage();
        }
    }

    buildAllTodos(storage){
        console.log(`building ${this.list.length} todo(s)`)
        for (const todo of this.list){
            this.buildTodo(todo)
        }
    }

    updateTodo(id, key, value){
        const todo = this.getTodoByID(id);
        if (key === 'projects'){
            this.buildProjectReference();
        }
        todo[key] = value;
        this.updateListInStorage();
    }

    drawAllTodos(){
        //console.log('drawing todos');
        //console.log(this.list)
        
    }

    getTodoByID(id){
        //console.log(`Finding todo with id ${id}`)
        for (const todo of this.list){
            if (id === todo.id){
                return todo
            }
        }
        throw new Error(`Couldn't find todo with id ${id}`)
    }

    getCardByID(id){
        //console.log(`getting card by id ${id}`);
        const card = document.querySelector(`[data-id="${id}"]`);
        return card;
    }

    getIndexByID(id){
        return this.list.findIndex(todo => {
            return todo.id === id
        })
    }

    deleteTodo(id){
        const index = this.getIndexByID(id);
        this.list.splice(index, 1);
        this.getCardByID(id).remove();
        this.updateListInStorage();
        this.buildProjectReference();
        DOM.applyProjectFilter();
    }

    buildProjectReference(){
        this.projectReference = [];
        for (const todo of this.list){
            let todoProjects = todo.projects;
            for (const project of todoProjects){
                let existingProject = this.projectExists(project);
                if (!existingProject){
                    this.projectReference.push({
                        "name": project,
                        idList: [
                            todo.id
                        ]
                    })
                }else{
                    existingProject.idList.push(todo.id)
                }
            }
        }

        DOM.drawProjectFilterButtons();


    }

    projectExists(searchTerm){
        for (const project of this.projectReference){
            if (project.name === searchTerm){
                return project
            }
        }
        return false
    }

    sortList(attribute, order){

        console.log(this.list)

        const sortByDueDate = () => {
            this.list.sort((a, b) => {
                const dateA = a.dueDate;
                const dateB = b.dueDate;

                if (dateA < dateB){
                    return -1;
                }else if( dateA > dateB){
                    return 1;
                }else{
                    return 0
                }
            })
        }

        const sortByPriority = () => {
            this.list.sort((a, b) => {
                let priorityA = a.priority;
                let priorityB = b.priority;

                function convertToNumber(priority){
                    switch (priority){
                        case 'low':
                            return 1;
                        case 'medium':
                            return 2;
                        case 'high':
                            return 3;
                    }
                }
                priorityA = convertToNumber(priorityA);
                priorityB = convertToNumber(priorityB);

                if (priorityA < priorityB){
                    return 1;
                }else if (priorityA > priorityB){
                    return -1
                }else{
                    return 0
                }
            })
        }

        if (attribute === 'dueDate' && order === 'ascending'){
            sortByPriority();
            sortByDueDate();
        }else if (attribute === 'dueDate' && order === 'descending'){
            sortByPriority();
            sortByDueDate();
            this.list.reverse();
        }else if (attribute === 'priority' && order === 'ascending'){
            sortByDueDate();
            sortByPriority();
            this.list.reverse();
        }else if (attribute === 'priority' && order === 'descending'){
            sortByDueDate();
            sortByPriority();
        }

        this.updateListInStorage();

        console.log(this.list)
    }
}

export default new Library()