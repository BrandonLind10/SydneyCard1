let React= require("react");
let ReactDOM= require("react-dom");
let Card= require("./Card.js");

class SecurityOverLay extends React.Component{
    
    constructor(props){
        super(props);
        this.submit= this.submit.bind(this);
        this.state={
            message: "Happy valentines, enter your first name to receive card",
            givenName: null
        }
    }
    
    isNameCorrect(){
        let correctName= "sydney";
        if(this.state.givenName.toLowerCase() === correctName){
            return true
        }
        else {
            return false;
        }
    }
    
    remove(){
            let el= document.getElementsByClassName("overLay")[0];
            ReactDOM.unmountComponentAtNode(el);
    }
    
    showCard(){
        let root= document.getElementsByClassName("root")[0];
        ReactDOM.render(<Card/>, root);
    }
    
    submit(){
        this.setState({
            givenName: document.getElementsByClassName("userName")[0].value
        });
        if(this.isNameCorrect()){
            this.showCard();
            this.remove();
        }
        
        else{
            this.giveErrorMessage();
        }

    }
    
    giveErrorMessage(){
        this.setState({
           message: "Sorry, name is incorrect"
       })
    }
    
    render(){
        let styles={
                overLay:{
                boxSizing: "border-box",
                width: "100vw",
                height: "100vh",
                backgroundColor: "red",
                color: "white"
            },
            userInput:{
                width: "500px",
                margin: "auto",
                paddingTop: "35vh",
                textAlign: "center",
                fontFamily: "arial"
            },
            errorMessage: {
                visibility: "hidden",
                color: "red"
            },
            message:{
                paddingBottom: "10vh",
                fontSize: "4vh",
                fontFamily: "arial"
            }
        };
        return <div className="SecurityOverLay" style={styles.overLay}>
                        <div className="userInput" style={styles.userInput}>
                            <div className="message" style={styles.message}/> {this.state.message} </div>
                            <label htmlFor="name">Name: </label> 
                            <input className="userName" type="text" name="name"/>
                            <button onClick={this.submit}>Enter</button>
                        </div>
                    </div>
                
               
    }
}




module.exports=SecurityOverLay