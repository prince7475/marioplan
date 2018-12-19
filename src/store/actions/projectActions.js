import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./actionTypes";

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "Prince",
            authorLastName: 'Donkor',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: CREATE_PROJECT, project })
        }).catch((err) => {
            console.log(err)
            dispatch({ type: CREATE_PROJECT_ERROR, err })
        })
    }
}