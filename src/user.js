class User{
    constructor(){
        this.state = {
            projectFilter: null,
            timeFilter: 'all',
            priorityFilter: null, 
        }
        let storage = this.retrieveUserFromStorage();
        if (storage){
            this.state = storage;
        }
    }

    retrieveUserFromStorage(){
        const storage = localStorage.getItem('user');
        if (storage === null){
            console.log(`no user in storage`)
            return false;
        }
        return JSON.parse(storage);
    }

    updateUserInStorage(){
        console.log('Updating user storage')
        const stringed = JSON.stringify(this.state);
        localStorage.setItem('user', stringed)
    }

    updateTimeFilter(period){
        this.state.timeFilter = period;
        this.updateUserInStorage();
    }

    updateProjectFilter(project){
        this.state.projectFilter = project;
        this.updateUserInStorage();
    }

    updatePriorityFilter(priority){
        this.state.priorityFilter = priority;
        this.updateUserInStorage();
    }
}

export default new User()