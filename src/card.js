import library from './library';
import user from './user.js';
import DOM from './DOM.js';

import { v4 as getUUID } from 'uuid';
import { format as formatDate, isToday, isTomorrow, isThisWeek, isThisYear, isWithinInterval, differenceInDays } from 'date-fns';

import trashCanIcon from './svg/trash-can-outline.svg'

export default class Card{
    constructor(todo){
        this.id = todo.id;
        this.element = this.buildElement(todo);
        //console.log('constructed')
    }

    assignElement(element){
        //console.log('assining element')
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
            checkList: element.querySelector('.todo-checklist'),
            checkListAdd: element.querySelector('.todo-checklist-add'),
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
        if (todo.completed){
            element.setAttribute('completed', '')
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
        for (const item of todo.checklist){
            this.drawCheckItem(item, false, checkList);
        }
        const checkListAddButton = document.createElement('button');
        checkListAddButton.classList.add('todo-checklist-add');
        if (todo.checklist.length < 1){
            checkListAddButton.textContent = '+ add checklist';
        }else{
            checkListAddButton.textContent = '+ new item'
        }
        checkListAddButton.addEventListener('click', (e) => {
            this.createNewCheckItem();
        })
        body.appendChild(description);
        body.appendChild(descriptionInput);
        body.appendChild(checkList);
        body.appendChild(checkListAddButton);
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
        //deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => this.deleteSelf());
        deleteButton.innerHTML = trashCanIcon
        // const trashIcon = document.createElement('img');
        // trashIcon.classList.add('todo-trash-icon');
        // trashIcon.setAttribute('src', trashCanIcon);
        // trashIcon.setAttribute('height', '14');
        // trashIcon.setAttribute('fill', 'green')
        // deleteButton.append(trashIcon)
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
                let pastDate;
                this.element.dueDate.textContent = this.getHumanDate(todo.dueDate);
                if (pastDate){
                    this.element.dueDate.classList.add('past-date')
                }

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
        //console.log(date)
        const timeDifference = differenceInDays(date, new Date())
        //console.log(timeDifference)
        if (isToday(date)){
            return 'Today'
        }else if (date < new Date ()){
            // return second arg if past date
            return(formatDate(date, 'LLLL do y'))
        }else if (isTomorrow(date)){
            return 'Tomorrow'
         }else if (timeDifference < 7 ){
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

    createNewCheckItem(){
        const checkItem = {
            title: null,
            completed: false,
            id: getUUID()
        };
        this.element.checkListAdd.textContent = '+ new item'
        library.getTodoByID(this.id).checklist.push(checkItem);
        this.drawCheckItem(checkItem, true, this.element.checkList);
        library.updateListInStorage();
    }

    drawCheckItem(item, brandNew = false, element = false){
        console.log('drawing check item');
        console.log({item})
        const checkItem = document.createElement('div');
        checkItem.dataset.id = item.id;
        checkItem.classList.add('todo-check-item');
        if (item.completed){
            checkItem.setAttribute('completed', '');
        }
        const checkItemTitle = document.createElement('button');
        checkItemTitle.classList.add('todo-check-item-title');
        const checkItemTitleInput = document.createElement('input');
        checkItemTitleInput.classList.add('todo-check-item-title-input');
        checkItemTitleInput.setAttribute('placeholder', 'Enter checklist item');
        if (item.title){
            checkItemTitle.textContent = item.title;
            checkItemTitleInput.classList.add('hidden');
            checkItemTitleInput.value = item.title;
        }else{
            checkItemTitle.classList.add('hidden');
        }
        checkItemTitle.addEventListener('click', (e) => {
            checkItemTitle.classList.add('hidden');
            checkItemTitleInput.classList.remove('hidden');
            checkItemTitleInput.focus();
        })
        checkItemTitleInput.addEventListener('focusout', (e) => this.processNewCheckItemTitle(item.id));
        checkItemTitleInput.addEventListener('keypress', (e) => {
             let a = e.which || e.keyCode || e.charCode;
        
             if (a == 13) {
                 e.preventDefault();
                 this.processNewCheckItemTitle(item.id);
             }  
        });
        const checkItemButton = document.createElement('button');
        checkItemButton.classList.add('todo-check-item-button');
        checkItemButton.addEventListener('click', (e) => this.toggleCheckItemComplete(item.id, checkItem))
        checkItem.appendChild(checkItemButton);
        checkItem.appendChild(checkItemTitle);
        checkItem.appendChild(checkItemTitleInput);
        element.appendChild(checkItem);
        if (brandNew){
            checkItemTitleInput.focus();
        }
    }
            

    processNewCheckItemTitle(itemID){
        console.log(this);
        const todo = library.getTodoByID(this.id);
        const itemObject = todo.getCheckItemByID(itemID);
        const itemElement = this.element.checkList.querySelector(`[data-id="${itemID}"]`);
        const titleInput = itemElement.querySelector('.todo-check-item-title-input');
        const value = titleInput.value.trim();
        if (value === ''){
            todo.removeCheckItemByID(itemID);
            try{
                itemElement.remove();
            }
            catch (DOMException){

            }
            if (todo.checklist.length < 1){
                this.element.checkListAdd.textContent = '+ add checklist';
            }
            library.updateListInStorage();
            return
        }
        const titleDisplay = itemElement.querySelector('.todo-check-item-title')
        titleDisplay.textContent = value;
        titleInput.classList.add('hidden');
        titleInput.value = value;
        titleDisplay.classList.remove('hidden');
        itemObject.title = value;
        library.updateListInStorage();
    }

    toggleCheckItemComplete(itemID, element){
        const todo = library.getTodoByID(this.id);
        const item = todo.getCheckItemByID(itemID);
        if (!item.completed){
            item.completed = true;
            element.setAttribute('completed', '')
        }else{
            item.completed = false;
            element.removeAttribute('completed')
        }
        library.updateListInStorage();
    }
}

