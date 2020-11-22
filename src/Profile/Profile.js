import React from 'react';
import PropTypes from 'prop-types';


function Profile (props) {
  
  return (
    <div style={{margin:'auto', textAlign:'center'}}>
      <h1 style={{fontStyle:'italic'}}> Hello my name is {props.name} </h1>
      <h2>This is my story: {props.bio} </h2>
      <h2>I am a {props.profession} </h2>
      <React.Fragment>
        <img style={{borderRadius: '8px'}} src={props.src} alt=''/>
        {props.children}
      </React.Fragment>
      <br />
      <button onClick={()=> alert(props.name) }>What's my name?</button>    
    </div>
  );
}
export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string
};

Profile.defaultProps = {
  name: "Stranger",
  bio: "nothing to say !",
  profession: "jobless"
};