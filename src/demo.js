import { add, differenceInDays } from 'date-fns'

import demoData from './demo-data.json'
import library from './library.js';
import user from './user.js';

class Demo{
    constructor(){
        this.dismissed = localStorage.getItem('demo_dismissed');
        this.accepted = localStorage.getItem('demo_accepted');
        //console.log(this.dismissed);
        // turning off whie i work
        //this.dismissed = 'false';
        const loadDemoButton = document.querySelector('#load-demo-button');
        loadDemoButton.addEventListener('click', (e) => this.loadDemo());
        const dismissDemoButton = document.querySelector('#dismiss-demo-button');
        dismissDemoButton.addEventListener('click', (e) => {
            document.querySelector('#demo-prompt').remove();
            localStorage.setItem('demo_dismissed', 'true');
        })
        if (this.dismissed === 'true'){
            //console.log('demo previously dismissed');
            document.querySelector('#demo-prompt').remove();
            //console.log('deleted demo pompt element')
            return
        }else if (this.accepted === 'true'){
            document.querySelector('#demo-prompt').remove();
            return
        }
        
    }

    loadDemo(){
        library.list = demoData;
        //
        const today = new Date();
        const firstTodoDate = new Date(library.list[1]._dueDate);
        //console.log(firstTodoDate)
        let daysDifference = differenceInDays(today, firstTodoDate);
        //daysDifference++;
        //console.log(`days difference ${daysDifference}`)
        if (daysDifference > 0){
            // account for time travellers
            for (let todo of library.list){
                todo._dueDate = add(todo._dueDate, {days: daysDifference});
                //console.log(`adding ${daysDifference} to todo`)
                //console.log(todo._dueDate)
            }
        }
        localStorage.setItem('demo_accepted', 'true')
        library.updateListInStorage();
        //console.log(library.list)
        user.updatePriorityFilter(null);
        user.updateProjectFilter(null);
        user.updateTimeFilter('week');
        user.updateSortAttribute('time');
        user.updateSortOrder('ascending');
        //return
        location.reload();

    }
}

export default new Demo()