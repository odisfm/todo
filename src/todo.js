import Card from './card.js'

import { v4 as getUUID } from 'uuid';

import * as chrono from 'chrono-node'


export class Todo {
    constructor(id = getUUID(), title, description = null, dueDate = null, createdDate = new Date(), completed = false, priority = null, checklist = null){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.createdDate = createdDate;
        this.completed = completed;
        this.priority = priority;
        this.checklist = checklist;
        this.closed = false;
    }

    set dueDate(input){
        if (input === null || input instanceof Date){
            this._dueDate = input;
            return
            
        }
        let attempt = this.parseDueDate(input);
        if (attempt){
            this._dueDate = attempt
            return
        }
        attempt = this.parseDueDate(`in ${input}`);
        if (attempt){
            this._dueDate = attempt
            return
        }
        
        
    }

    get dueDate(){
        return this._dueDate;
    }

    parseDueDate(input){
        console.log(`parsing due date ${input}`);
        let parseAttempt = chrono.parseDate(input);
        //console.log(parseAttempt)
        if (parseAttempt){
            console.log(`date ${input} was valid`)
            return parseAttempt
        }
        return false
    }

    buildCard(){
        this.card = new Card(this)
        console.log(this)
        console.log(this.card)
    }
}