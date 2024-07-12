import library from './library';
import user from './user.js';
import DOM from './DOM.js'

import { format as formatDate, isToday, isTomorrow, isThisWeek, isThisYear, isWithinInterval } from 'date-fns'

export default class Card{
    constructor(todo){
        this.id = todo.id;
        this.element = this.buildElement(todo);
        //console.log('constructed')
    }

    assignElement(element){
        console.log('assining element')
        this.element = {
            reference: element,
            header: element.querySelector('.todo-header'),
            title: element.querySelector('.todo-title'),
            titleInput: element.querySelector('.todo-title-input'),
            dueDate: element.querySelector('.todo-due-date'),
            dueDateInput: element.querySelector('.todo-due-date-input'),
            checkBox: element.querySelector('.todo-checkbox'),
            body: element.querySelector('.todo-body'),
            description: element.querySelector('.todo-description'),
            descriptionInput: element.querySelector('.todo-description-input'),
            footer: element.querySelector('.todo-footer'),
            priority: element.querySelector('.todo-priority'),
            projects: element.querySelector('.todo-projects'),
            projectsInput: element.querySelector('.todo-projects-input'),
            deleteButton: element.querySelector('.todo-delete-button')
        }
        // console.log(this.element.description)
        // console.log(this.element.descriptionInput)
    }

    buildElement(todo){
        const element = document.createElement('div');
        element.dataset.id = todo.id;
        element.classList.add('todo');
        if (todo.closed){
            element.setAttribute('closed', "")
        }
        // Header
        const header = document.createElement('header');
        header.classList.add('todo-header');
        header.setAttribute('tabindex', 0)
        const title = document.createElement('button');
        title.classList.add('todo-title');
        title.textContent = todo.title;
        title.addEventListener('click', (e) => this.editTitle(e));
        const titleInput = document.createElement('input');
        titleInput.value = todo.title;
        titleInput.classList.add('todo-title-input');
        titleInput.setAttribute('placeholder', 'Enter title');
        titleInput.addEventListener('focusout', (e) => this.processNewTitle(e));
        titleInput.addEventListener('keypress', (e) => {
             let a = e.which || e.keyCode || e.charCode;
        
             if (a == 13) {
                 e.preventDefault();
                 this.processNewTitle(e);
             }  
        });
        if (!todo.title){
            title.classList.add('hidden');
        }else{
            titleInput.classList.add('hidden');
        }
        titleInput.addEventListener('click', (e) => e.stopPropagation());
        const dueDate = document.createElement('button');
        dueDate.classList.add('todo-due-date');
        let dueDateText = null;
        if (todo.dueDate){
            dueDateText = this.getHumanDate(todo.dueDate);
        }
        dueDate.textContent = dueDateText;
        dueDate.addEventListener('click', (e) => this.editDueDate(e))
        const dueDateInput = document.createElement('input');
        dueDateInput.classList.add('todo-due-date-input');
        dueDateInput.setAttribute('placeholder', 'due date');
        if (!todo.dueDate){
            dueDate.classList.add('hidden');
        }else{
            dueDateInput.classList.add('hidden');
        }
        dueDateInput.addEventListener('focusout', (e) => this.processNewDueDate(e));
        dueDateInput.addEventListener('keypress', (e) => {
             let a = e.which || e.keyCode || e.charCode;
            
             if (a == 13) {
                 e.preventDefault();
                 this.processNewDueDate(e);
             }  
        });
        dueDateInput.addEventListener('click', (e) => e.stopPropagation());
        const checkBox = document.createElement('button');
        checkBox.classList.add('todo-checkbox');
        checkBox.addEventListener('click', (e) => this.toggleCompleted(e));
        header.appendChild(checkBox);
        header.appendChild(title);
        header.appendChild(titleInput);
        header.appendChild(dueDate);
        header.appendChild(dueDateInput);  
        header.addEventListener('click', (e) => this.toggleCardClosed(e));
        header.addEventListener('keypress', (e) => {
            let a = e.which || e.keyCode || e.charCode;
            const activeElement = document.activeElement;
            if (!activeElement.classList.contains('todo-header')){
                return
            }
            if (a == 13 || a == 32) {
                e.preventDefault();
                this.toggleCardClosed(e);
            }  
       });
        //Body
        const body = document.createElement('div');
        body.classList.add('todo-body');
        const description = document.createElement('p');
        description.classList.add('todo-description');
        description.textContent = todo.description;
        const descriptionInput = document.createElement('textarea');
        descriptionInput.classList.add('todo-description-input');
        descriptionInput.setAttribute('placeholder', 'Enter description')
        if (todo.description){
            descriptionInput.classList.add('hidden');
            descriptionInput.value = todo.description;
        }else{
            description.classList.add('hidden');
        }
        description.addEventListener('click', (e) => this.editDescription(e));
        descriptionInput.addEventListener('focusout', (e) => this.processNewDescription(e));
        descriptionInput.addEventListener('keypress', (e) => {
            let a = e.which || e.keyCode || e.charCode;
       
            if (a == 13) {
                e.preventDefault();
                this.processNewDescription(e);
            }  
       });
        // Checklist
        const checkList = document.createElement('div');
        checkList.classList.add('todo-checklist');
        for (const item in todo.checkList){
            const checkItem = document.createElement('div');
            checkItem.dataset.id = item.id;
            checkItem.classList.add('todo-check-item');
            if (item.completed){
                checkItem.setAttribute('completed', '');
            }
            const checkItemTitle = document.createElement('button');
            checkItemTitle.classList.add('todo-check-item-title');
            checkItemTitle.textContent = item.title;
            const checkItemTitleInput = document.createElement('input');
            checkItemTitleInput.classList.add('todo-check-item-title-input');
            if (!item.title){
                checkItemTitleInput.setAttribute('placeholder', 'Enter checklist item');
            }else{
                checkItemTitleInput.setAttribute('placeholder', item.title);
            }
            const checkItemButton = document.createElement('button');
            checkItemButton.classList.add('todo-check-item-button');
            checkItem.appendChild(checkItemTitle);
            checkItem.appendChild(checkItemTitleInput);
            checkItem.appendChild(checkItemButton);
            checkList.appendChild(checkItem);
        }
        body.appendChild(description);
        body.appendChild(descriptionInput);
        body.appendChild(checkList);
        // Footer
        const footer = document.createElement('div');
        footer.classList.add('todo-footer');
        const priority = document.createElement('button');
        priority.classList.add('todo-priority');
        priority.addEventListener('click', (e) => this.incrementPriority(e));
        element.dataset.priority = todo.priority;
        const projects = document.createElement('button');
        projects.classList.add('todo-projects');
        projects.textContent = this.getProjectHashtags();
        projects.addEventListener('click', (e) => this.editProjects(e));
        const projectsInput = document.createElement('input');
        projectsInput.classList.add('todo-projects-input');
        if (todo.projects.length > 0){
            projectsInput.classList.add('hidden');
        }else{
            projectsInput.setAttribute('placeholder', 'Enter projects');
            projects.classList.add('hidden');
        }
        projectsInput.addEventListener('focusout', (e) => {
            this.processNewProjects(e);
        });
        projectsInput.addEventListener('keypress', (e) => {
            let a = e.which || e.keyCode || e.charCode;
       
            if (a == 13) {
                e.preventDefault();
                this.processNewProjects(e);
            }  
       });
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('todo-delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => this.deleteSelf());
        footer.appendChild(priority);
        footer.appendChild(projects);
        footer.appendChild(projectsInput);
        footer.appendChild(deleteButton);
        // Put it all together
        element.appendChild(header);
        element.appendChild(body);
        element.appendChild(footer);

        return element
    }

    updateElement(key){
        const todo = library.getTodoByID(this.id);
        switch (key){
            case 'completed':
                if (todo.completed){
                    this.element.reference.setAttribute('completed', '')
                }else{
                    this.element.reference.removeAttribute('completed')
                }
            case 'title':
                this.element.title.textContent = todo.title;
                break
            case 'due-date':
                this.element.dueDate.textContent = this.getHumanDate(todo.dueDate);
                break
            case 'description':
                this.element.description.textContent = todo.description;
            case 'projects':
                const hashtags = this.getProjectHashtags();
                this.element.projects.textContent = hashtags;
                this.element.projectsInput.value = hashtags;
        }
        //console.log(JSON.parse(localStorage.getItem('todos')))


    }

    getHumanDate(date){
        // function isWithin7Days(){
        //     console.log(`checking within 7 days`)
        //     const today = new Date();
        //     const oneWeek = new Date();
        //     oneWeek.setDate(new Date().getDate() + 6)
        //     console.log(`today: ${today}`)
        //     console.log(`one week: ${oneWeek}`)
        //     console.log(isWithinInterval(date, {today, oneWeek}))
        //     return isWithinInterval(date, {today, oneWeek})
        // }

        if (isToday(date)){
            return 'Today'
        }else if (isTomorrow(date)){
            return 'Tomorrow'
         }else if (isThisWeek(date)){
             return formatDate(date, 'EEEE')
        // }else if (isWithin7Days()){
        //     return formatDate(date, 'EEEE')
        }else if (isThisYear(date)){
            return formatDate(date, 'LLLL do')
        }else{
            return formatDate(date, 'LLLL do y')
        }
    }

    getProjectHashtags(){
        const projectList = library.getTodoByID(this.id).projects;
        let string = '';
        for (let i = 0; i < projectList.length; i++){
            string += `#${projectList[i]} `;
        }
        string.trim()
        return string;
    }

    toggleCardClosed(e){
        e.stopPropagation();
        if (this.element.reference.hasAttribute('closed')){
            this.element.reference.removeAttribute('closed');
            library.updateTodo(this.id, 'closed', false);
        }else{
            this.element.reference.setAttribute('closed', '')
            library.updateTodo(this.id, 'closed', true);
        }    
    }

    toggleCompleted(e){
        e.stopPropagation();
        const todo = library.getTodoByID(this.id);
        library.updateTodo(this.id, 'completed', !todo.completed);
        this.updateElement('completed')
    }

    editTitle(e){
        e.stopPropagation();
        e.preventDefault();
        this.element.title.classList.add('hidden');
        this.element.titleInput.classList.remove('hidden');
        this.element.titleInput.focus();
        const valueLength = this.element.titleInput.value.length;
        this.element.titleInput.setSelectionRange(valueLength, valueLength);

    }

    processNewTitle(e){
        e.stopPropagation();
        const value = this.element.titleInput.value;
        if (value === ''){
            return
        }
        const todo = library.getTodoByID(this.id);
        library.updateTodo(this.id, 'title', value);
        if (todo.title){
            this.element.title.classList.remove('hidden');
            this.element.titleInput.classList.add('hidden');
        }
        this.updateElement('title');
    }

    editDueDate(e){
        e.stopPropagation();
        e.preventDefault();
        this.element.dueDate.classList.add('hidden');
        this.element.dueDateInput.classList.remove('hidden');
        this.element.dueDateInput.focus();
    }


    processNewDueDate(e){
        e.stopPropagation();
        const value = this.element.dueDateInput.value;
        const todo = library.getTodoByID(this.id);
        library.updateTodo(this.id, 'dueDate', value);
        if (todo.dueDate){
            this.element.dueDate.classList.remove('hidden');
            this.element.dueDateInput.classList.add('hidden');
            this.updateElement('due-date');
        }else{
            this.element.dueDateInput.value = null;
        }
    }

    editDescription(e){
        e.stopPropagation();
        const value = library.getTodoByID(this.id).description;
        //this.element.descriptionInput.value = value;
        this.element.description.classList.add('hidden');
        this.element.descriptionInput.classList.remove('hidden');
        const valueLength = this.element.descriptionInput.value.length;
        this.element.descriptionInput.focus();
        this.element.descriptionInput.setSelectionRange(valueLength, valueLength)
    }

    processNewDescription(e){
        e.stopPropagation();
        const value = this.element.descriptionInput.value;
        if (value === null || value === ''){
            return
        }
        library.updateTodo(this.id, 'description', value);
        this.updateElement('description');
        this.element.descriptionInput.classList.add('hidden');
        this.element.description.classList.remove('hidden');
    }

    incrementPriority(e){
        const todo = library.getTodoByID(this.id);
        todo.incrementPriority();
        this.element.reference.dataset.priority = todo.priority;
    }

    editProjects(e){
        this.element.projectsInput.value = this.getProjectHashtags()
        this.element.projects.classList.add('hidden');
        this.element.projectsInput.classList.remove('hidden');
        this.element.projectsInput.focus();
        const valueLength = this.element.projectsInput.value.length;
        this.element.projectsInput.setSelectionRange(valueLength, valueLength);
    }

    processNewProjects(e){
        const newList = this.parseProjectsInput(this.element.projectsInput.value);
        library.updateTodo(this.id, 'projects', newList);
        this.updateElement('projects');
        if (user.state.projectFilter !== null){
            DOM.applyProjectFilter(user.state.projectFilter);
        }
        if (newList.length === 0){
            return
        }
        this.element.projects.classList.remove('hidden');
        this.element.projectsInput.classList.add('hidden');

        

    }

    deleteSelf(){
        library.deleteTodo(this.id);
    }

    parseProjectsInput(input){
        function isAlNum(char) {
            return /^[a-zA-Z0-9-]+$/.test(char);
        };
        const projectList = [];
        let word = '';
        for (let i = 0; i < input.length; i++){
            if (isAlNum(input[i])){
                word += input[i];
            }else{
                if (word !== ''){
                    if (!projectList.includes(word)){
                        projectList.push(word);
                    }
                    word = '';
                }
            }
        }
        if (word !== ''){
            if (!projectList.includes(word)){
                projectList.push(word);
            }
        }
        return projectList;
    }
}

