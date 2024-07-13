import library from "./library.js";
import user from './user.js';

import { isToday, isThisWeek, isThisMonth, isThisYea, differenceInDays } from 'date-fns'


class DOM{

    constructor(){
        this.content = document.querySelector('#content');
        this.button = {
            filterTimeAll: document.querySelector('#filter-time-all'),
            filterTimeDay: document.querySelector('#filter-time-today'),
            filterTimeWeek: document.querySelector('#filter-time-week'),
            filterTimeMonth: document.querySelector('#filter-time-month')
        }
        this.applyTimeListeners();
        this.applyPriorityListeners();
        document.querySelector('#show-all-projects').addEventListener('click', () => {
            this.removeProjectFilter();
            user.updateProjectFilter(null);
        });
        document.querySelector('#remove-all-filters').addEventListener('click', () => {
            user.updateTimeFilter('all');
            user.updateProjectFilter(null);
            user.updatePriorityFilter(null);
            this.applyTimeFilter('all');
            this.applyProjectFilter(null);
            this.applyPriorityFilter(null);
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            document.querySelector('#priority-button-all').classList.add('active');
        })
        switch (user.state.priorityFilter){
            case (null):
                document.querySelector('#priority-button-all').classList.add('active');
                break;
            case ('low'):
                document.querySelector('#priority-button-low').classList.add('active');
                break;
            case ('medium'):
                document.querySelector('#priority-button-medium').classList.add('active');
                break;
            case ('high'):
                document.querySelector('#priority-button-high').classList.add('active');
                break;
        }
        //console.log(user.state)
        const sortOrderToggle = document.querySelector('#sort-order-toggle');
        sortOrderToggle.dataset.currently = user.state.sortOrder;
        sortOrderToggle.addEventListener('click', (e) => this.toggleSortOrder(e));
        this.applySortListeners();
        switch (user.state.sortAttribute){
            case 'date':
                document.querySelector('#sort-by-date').classList.add('active');
                break
            case 'priority':
                document.querySelector('#sort-by-priority').classList.add('active');
                break
            case 'title':
                document.querySelector('#sort-by-title').classList.add('active');
        }
        
    }

    drawAllTodos(){
        //console.log('drawing todos')
        //console.log(library.list);
        for (const todo of library.list){
            //console.log(todo.card.element.reference)
            this.content.appendChild(todo.card.element.reference);
            const element = document.querySelector(`[data-id="${todo.id}"]`);
            todo.card.assignElement(element);
        }
    }

    applyTimeListeners(){
        this.button.filterTimeAll.addEventListener('click', () => this.applyTimeFilter('all'));
        this.button.filterTimeDay.addEventListener('click', () => this.applyTimeFilter('today'));
        this.button.filterTimeWeek.addEventListener('click', () => this.applyTimeFilter('week'));
        this.button.filterTimeMonth.addEventListener('click', () => this.applyTimeFilter('month'));
    }

    applyPriorityListeners(){
        const priorityAll = document.querySelector('#priority-button-all');
        priorityAll.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            user.updatePriorityFilter(null);
            this.applyPriorityFilter();
            priorityAll.classList.add('active')
        });
        const priorityLow = document.querySelector('#priority-button-low');
        priorityLow.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            user.updatePriorityFilter('low');
            this.applyPriorityFilter();
            priorityLow.classList.add('active')
        });
        const priorityMedium = document.querySelector('#priority-button-medium');
        priorityMedium.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            user.updatePriorityFilter('medium');
            this.applyPriorityFilter();
            priorityMedium.classList.add('active')
        });
        const priorityHigh = document.querySelector('#priority-button-high');
        priorityHigh.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            user.updatePriorityFilter('high');
            this.applyPriorityFilter();
            priorityHigh.classList.add('active')
        });
        
    }

    applySortListeners(){
        const sortDate = document.querySelector('#sort-by-date');
        const sortPriority = document.querySelector('#sort-by-priority');
        const sortTitle = document.querySelector('#sort-by-title');

        sortDate.addEventListener('click', (e) => {
            sortDate.classList.add('active');
            sortPriority.classList.remove('active');
            sortTitle.classList.remove('active'); 
            if (user.state.sortAttribute !== 'date'){
                user.updateSortOrder('ascending');
                document.querySelector('#sort-order-toggle').dataset.currently = 'ascending';
            }
            user.updateSortAttribute('date');
            library.sortList(undefined, undefined);
            this.applySort();
        })

        sortPriority.addEventListener('click', (e) => {
            sortPriority.classList.add('active');
            sortDate.classList.remove('active');
            sortTitle.classList.remove('active');  
            if (user.state.sortAttribute !== 'priority'){
                user.updateSortOrder('descending');
                document.querySelector('#sort-order-toggle').dataset.currently = 'descending';
            }
            user.updateSortAttribute('priority');
            library.sortList(undefined, undefined);
            this.applySort();
        })

        sortTitle.addEventListener('click', (e) => {
            sortTitle.classList.add('active');
            sortDate.classList.remove('active');
            sortPriority.classList.remove('active');
            user.updateSortAttribute('title');
            library.sortList(undefined, undefined);
            this.applySort();
        })
    }

    applyProjectFilter(filteredProject){
        if (filteredProject === undefined){
            filteredProject = user.state.projectFilter;
        }
        if (filteredProject === null){
            this.removeProjectFilter();
            return;
        }
        user.state.activeProject = filteredProject;
        const elements = Array.from(this.content.querySelectorAll('.todo'));
        for (const element of elements){
            let elementID = element.dataset.id;
            let todo = library.getTodoByID(elementID);
            if (!todo.projects.includes(filteredProject)){
                element.setAttribute('project-filtered', '')
            }else{
                element.removeAttribute('project-filtered');
            }
        }

        const projectButtons = document.querySelectorAll('.project-filter-button');
        projectButtons.forEach((button) => {
            if (button.dataset.project === filteredProject){
                button.classList.add('active');
            }else{
                button.classList.remove('active');
            }
        });

        const anyFiltered = document.querySelector('.todo:not([project-filtered])');
        if (anyFiltered === null){
            this.removeProjectFilter();
            user.updateProjectFilter(null);
        }

    }

    removeProjectFilter(){
        document.querySelectorAll('.todo').forEach((element) => element.removeAttribute('project-filtered'));
        document.querySelectorAll('.project-filter-button').forEach((button) => button.classList.remove('active'));
    }

    applyTimeFilter(period){
        //console.log('applying time filter')

        if (period == undefined){
            period = user.state.applyTimeFilter;
        }

        if (period === null){
            period = 'all';
        }

        const elements = Array.from(this.content.querySelectorAll('.todo'));

        const buttons = [this.button.filterTimeAll, this.button.filterTimeDay, this.button.filterTimeWeek, this.button.filterTimeMonth];

        buttons.forEach((button) => {
            button.classList.remove('active');
        })

        //console.log('entering time filter switch')
        switch (period){
            case 'all':
                //console.log('Applying active class to: All');
                this.button.filterTimeAll.classList.add('active');
                break;
            case 'today':
                this.button.filterTimeDay.classList.add('active');
                break;
            case 'week':
                this.button.filterTimeWeek.classList.add('active');
                break;
            case 'month':
                this.button.filterTimeMonth.classList.add('active');
                break;
        }
        

        for (const element of elements){
            let elementID = element.dataset.id;
            let todo = library.getTodoByID(elementID);
            let timeDifference = differenceInDays(todo.dueDate, new Date())
            //console.log(timeDifference)
            switch (period){
                case 'today':
                    if (!isToday(todo.dueDate)){
                        element.setAttribute('time-filtered', '');
                    }else{
                        element.removeAttribute('time-filtered');
                    }
                    break;
                case 'week':
                    if ((isThisWeek(todo.dueDate) && timeDifference >= 0) || (timeDifference < 7 && timeDifference >= 0)){
                        element.removeAttribute('time-filtered');
                    }else{
                        element.setAttribute('time-filtered', '');
                    }
                    break;
                case 'month':
                    if ((isThisMonth(todo.dueDate) && timeDifference >= 0)  || (timeDifference < 28 && timeDifference >= 0)){
                        element.removeAttribute('time-filtered');
                    }else{
                        element.setAttribute('time-filtered', '');
                    }
                    break;
                case 'all':
                    element.removeAttribute('time-filtered');
                    break;
            }
        }

        user.updateTimeFilter(period);
    }

    applyPriorityFilter(priority){
        if (priority === undefined){
            priority = user.state.priorityFilter;
        }
        if (priority === null){
            document.querySelectorAll('.todo').forEach((element) => element.removeAttribute('priority-filtered'));
            return;
        }
        //console.log(`applying priority filter ${priority}`)
        const elements = Array.from(this.content.querySelectorAll('.todo'));
        for (const element of elements){
            let elementID = element.dataset.id;
            let todo = library.getTodoByID(elementID);
            //console.log(todo)
            //console.log(`todo priority ${todo.priority} | filter priority ${priority}`)
            if (todo.priority !== priority){
                element.setAttribute('priority-filtered', '')
                //console.log('filtering')
            }else{
                element.removeAttribute('priority-filtered');
                //console.log('unfiltering')
            }
        }
    }

    drawProjectFilterButtons(){
        //return
        let projectList = [];
        for (let i = 0; i < library.projectReference.length; i++){
            projectList.push(library.projectReference[i].name)
        }
        projectList.sort();
        
        let projectFiltersUL = document.querySelector('#project-filters');
        projectFiltersUL.textContent = '';

        const buildButton = (projectName) => {
            const element = document.createElement('li');
            const button = document.createElement('button');
            button.classList.add('project-filter-button');
            button.dataset.project = projectName;
            button.textContent = '#' + projectName;
            button.addEventListener('click', (e) => {
                this.applyProjectFilter(e.target.dataset.project);
                user.updateProjectFilter(e.target.dataset.project);
            });
            element.appendChild(button);
            return element
        }

        projectList.forEach((project) => {
            projectFiltersUL.appendChild(buildButton(project))
        })
    }

    applySort(){
        let list = library.list;
        for (let i = list.length - 1; i >= 0; i--){
            this.content.prepend(list[i].card.element.reference)
        }
        
    }

    toggleSortOrder(e){
        e.preventDefault();
        let newOrder = '';
        if (user.state.sortOrder === 'ascending'){
            newOrder = 'descending';
        }else{
            newOrder = 'ascending';
        }
        document.querySelector('#sort-order-toggle').dataset.currently = newOrder;
        user.updateSortOrder(newOrder);
        library.sortList(undefined, undefined);
        this.applySort();
    };
}

export default new DOM()