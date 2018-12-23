import React, { Component } from 'react'
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux'
import {compose} from 'redux'

import {Redirect} from 'react-router-dom'
//allows you to connect to you firebase database
import {firestoreConnect} from 'react-redux-firebase'


class Dashboard extends Component {
    render() {
        const { projects, auth, notifications } = this.props
        const getingproject = projects ? <ProjectList projects={projects}/> : <p>Loading</p>
        //This will redirect the user if they are not logined 
        if (!auth.uid) return <Redirect to='/signin' />
        

    return (
        <div className="dashboard container">
        <div className="row">

        {/* Project List */}
            <div className="col s12 m6">
            {getingproject}
            </div>

        {/* Notification */}
            <div className="col s12 m5 offset-m1">
            <Notification notifications={notifications}/>
            </div>
        </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        projects : state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications : state.firestore.ordered.notifications
    }
}
// you need compose because you want to connect to your store and firebase
export default compose(
    connect(mapStateToProps),
    //this is how you tell firebase which collection to connect to.
    firestoreConnect([
        {collection: 'projects', orderBy: ['createdAt', 'desc']},
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)