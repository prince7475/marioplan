const initState = {
    projects: [
        {id: '1', title: 'this is a text for the title 1', content: 'blah blah blah'},
        {id: '2', title: 'this is a text for the title 2', content: 'blah blah blah'},
        {id: '3', title: 'this is a text for the title 3', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
        default:
        return state
    }
}

export default projectReducer