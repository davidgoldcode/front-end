import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

const Profile = (props) => {
    const {username, email} = props;
    const [isClicked, setIsClick] = useState(false);

    const clickHandler = (evt) => {
        evt.preventDefault();
    }

    const deleteHandler = (evt) => {
        evt.preventDefault();
        setIsClick(true);
    }
    
    return (
        <>
        <div id={isClicked ? 'gray-out-background' : null}>
        <Card 
        className={isClicked ? 'profile-card gray' : 'profile-card'} 
        id={isClicked ? 'gray-out-background' : null}
        variant='outlined'>
            <CardMedia
            component='img'
            id={isClicked ? 'img-gray-out-background' : 'profile-img'}
            src={require('/Users/davidgold/Documents/lambdaSchool/projects/unit 3/build-week/front-end/med-cabinet/src/assets/Empty User.png')}
            />
            <div className='profile-credentials-div'>
                <h3>USERNAME: {username}</h3>
                <h3>EMAIL: {email}</h3>
                <div>
                    <span onClick={null} className='profile-adjustment-links'><EditIcon/><p>Edit Information</p></span>
                    <span onClick={deleteHandler} className='profile-adjustment-links'><DeleteIcon color='secondary'/><p className='delete-profile-text'>Delete Account</p></span>
                </div>
            </div>
        </Card>
        {isClicked && <Card className='delete-are-you-sure'>
            Are you sure? 
            <span>Yes</span>
            <span>No</span>
        </Card>}
        </div>
        </>

    )
}

const mapStateToProps = state => {
    return {
        username: state.username, 
        email: state.email,
    }
}

export default connect(mapStateToProps, {})(Profile);