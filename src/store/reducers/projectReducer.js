import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../actions/actionTypes";


const initState = {
    projects: [
        { id: '1', title: 'this is a text for the title 1', content: 'blah blah blah' },
        { id: '2', title: 'this is a text for the title 2', content: 'blah blah blah' },
        { id: '3', title: 'this is a text for the title 3', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            console.log('created project', action.project)
            return state
            break;
        case CREATE_PROJECT_ERROR:
            console.log('create project error', action.err)
            break;
        default:
            return state
    }
}

export default projectReducer