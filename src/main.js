import Stylesheet from './styles.css'

//// CLEARS LOCAL STORAGE
//localStorage.removeItem('todos');
//localStorage.removeItem('user');
/////

import DOM from './DOM.js'
import library from './library.js'
import user from './user.js'


library.initialise();

DOM.drawAllTodos();

//DOM.applyProjectFilter('hello');
DOM.applyTimeFilter(user.state.timeFilter);
DOM.applyProjectFilter();
DOM.applyPriorityFilter()
//DOM.applyProjectFilter('work');

//console.log(library.list)

//library.sortList('dueDate', 'ascending');