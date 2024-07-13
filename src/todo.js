import library from './library.js';

import Card from './card.js'

import { v4 as getUUID } from 'uuid';

import * as chrono from 'chrono-node'


export default class Todo {
    constructor(id = getUUID(), title = null, description = null, dueDate = null, createdDate = new Date(), completed = false, priority = 'low', checklist = [], projects = [], closed = true, _dueDate){
        this.id = id;
        this.title = title;
        if (_dueDate){
            dueDate = _dueDate;
        }
        this.description = description;
        this.dueDate = dueDate;
        this.createdDate = createdDate;
        this.completed = completed;
        this.priority = priority;
        this.checklist = checklist;
        this.projects = projects;
        this.closed = closed;
        //this.buildCard()
    }

    set dueDate(input){
        if (input === null || typeof(input) === Date){
            this._dueDate = input;
            return    
        }

        let attempt = Todo._parseDueDate(input);
        if (attempt){
            this._dueDate = attempt;
            library.updateListInStorage();
            return
        }
        attempt = Todo._parseDueDate(`in ${input}`);
        if (attempt){
            this._dueDate = attempt;
            library.updateListInStorage();
            return
        }        
    }

    get dueDate(){
        return this._dueDate;
    }

    set title(input){
        if (typeof(input) === 'string'){
            input = input.trim();
        }
        this._title = input;
    }

    get title(){
        return this._title;
    }

    incrementPriority(){
        if (this.priority === 'low'){
            this.priority = 'medium';
        }else if (this.priority === 'medium'){
            this.priority = 'high';
        }else if (this.priority === 'high'){
            this.priority = 'low';
        }
        library.updateListInStorage();
    }

    static _parseDueDate(input){
        const today = new Date()
        let parseAttempt = chrono.parseDate(input, today,{forwardDate: true});
        //console.log(parseAttempt)
        if (parseAttempt){
            //console.log(`date ${input} was valid`)
            return parseAttempt
        }
        return false
    }

    buildCard(){
         this.card = new Card(this)
    }

    getCheckItemByID(id){
        for (let item of this.checklist){
            if (item.id === id){
                return item
            }
        }
    }

    removeCheckItemByID(id){
        for (let i = 0; i < this.checklist.length; i++){
            if (this.checklist[i].id === id){
                this.checklist.splice(i, 1);
            }
        }
    }
}