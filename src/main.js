import Stylesheet from './styles.css'
import TodoCSS from './todo.css'

//// CLEARS LOCAL STORAGE
//localStorage.removeItem('todos');
//localStorage.removeItem('user');
/////

import Demo from './demo.js'
import DOM from './DOM.js'
import library from './library.js'
import user from './user.js'

library.initialise();

DOM.drawAllTodos();

DOM.applyTimeFilter(user.state.timeFilter);
DOM.applyProjectFilter();
DOM.applyPriorityFilter()

library.sortList(undefined, undefined);

DOM.applySort();
