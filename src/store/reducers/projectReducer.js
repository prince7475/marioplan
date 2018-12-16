const initState = {
    projects: [
        {id: '1', title: 'this is a text for the title 1', content: 'blah blah blah'},
        {id: '2', title: 'this is a text for the title 2', content: 'blah blah blah'},
        {id: '2', title: 'this is a text for the title 3', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer