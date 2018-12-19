import React, { Component } from 'react'
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux'
import {compose} from 'redux'
//allows you to connect to you firebase database
import {firestoreConnect} from 'react-redux-firebase'
class Dashboard extends Component {
    render() {
        const { projects } = this.props
    return (
        <div className="dashboard container">
        <div className="row">

        {/* Project List */}
            <div className="col s12 m6">
            <ProjectList projects={projects}/>
            </div>

        {/* Notification */}
            <div className="col s12 m5 offset-m1">
            <Notification />
            </div>
        </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        projects : state.firestore.ordered.projects
    }
}
// you need compose because you want to connect to your store and firebase
export default compose(
    connect(mapStateToProps),
    //this is how you tell firebase which collection to connect to.
    firestoreConnect([
        {
            collection: 'projects'
        }
    ])
)(Dashboard)