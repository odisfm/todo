import Todo from './todo.js'
import Card from './card.js'
import DOM from './DOM.js';
import user from './user.js';
import { isSameDay } from 'date-fns';

class Library { 
    constructor(){
        this.list = [];
        this.projectReference = [];
        //console.log(this.list)
        document.querySelector('#new-todo-button').addEventListener('click', () => this.buildTodo(undefined, true));
        
    }

    initialise(){
        console.log('initialising library')
        const storage = this.retrieveTodosFromStorage();
        console.log(storage)
        this.buildAllTodos(storage);
        this.buildProjectReference();
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
        console.log('building todo')
        const todo = new Todo(object.id, object._title, object.description, object.dueDate, object.createdDate, object.completed, object.priority, object.checklist, object.projects, object.closed, object._dueDate);
        if (brandNew && user.state.projectFilter !== null){
            todo.projects = [user.state.projectFilter];
        }
        this.list.push(todo);
        todo.buildCard()
        todo.card.assignElement(todo.card.element);
        if (brandNew){
            content.prepend(todo.card.element.reference);
            todo.card.element.titleInput.focus();
            this.updateListInStorage();
        }else{
            //content.appendChild(todo.card.element.reference)
        }
    }

    buildAllTodos(storage){
        console.log(`building ${storage.length} todo(s)`)
        for (const todo of storage){
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

        if (attribute === undefined){
            attribute = user.state.sortAttribute;
        }

        if (order === undefined){
            order = user.state.sortOrder;
        }

        console.log(`sorting by ${attribute} ${order}`)

        //console.log(this.list)

        const sortByDueDate = () => {
            this.list.sort((a, b) => {
                const dateA = a.dueDate;
                const dateB = b.dueDate;

                // if (isSameDay(dateA, dateB)){
                //     return 0
                // }

                if (dateA === null && dateB === null){
                    return 0
                }

                if (dateA < dateB){
                    return -1;
                }else if( dateA > dateB){
                    return 1;
                }else if(dateA instanceof Date && dateB === null){
                    return 1
                }else if(dateB instanceof Date && dateA === null){
                    return -1
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

        const sortByTitle = () => {
            this.list.sort((a, b) => {
                if (typeof(a.title) === 'string' && b.title === null){
                    return -1
                }else if (typeof(b.title) === 'string' && a.title === null){
                    return 1
                }else if (a.title === null && b.title === null){
                    return 0
                }
                return a.title.localeCompare(b.title);
            })
        }

        if (attribute === 'date' && order === 'ascending'){
            sortByPriority();
            sortByDueDate();
        }else if (attribute === 'date' && order === 'descending'){
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
        }else if (attribute === 'title' && order === 'ascending'){
            sortByPriority();
            sortByDueDate();
            sortByTitle();
        }else if (attribute === 'title' && order === 'descending'){
            sortByPriority();
            sortByDueDate();
            sortByTitle();
            this.list.reverse();
        }

        this.updateListInStorage();

        console.log(this.list)
    }
}

export default new Library()