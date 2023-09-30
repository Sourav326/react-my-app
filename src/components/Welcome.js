const Welcome = (props) => {
    return(
        <div>
            <h1>Hi {props.name}, I am a welcome component</h1>
            <h2>Welcome to {props.batch} course at {props.organization}</h2>
        </div>
    ) 
}

export default Welcome;