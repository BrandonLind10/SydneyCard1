let React= require("react");
let ReactDOM= require("react-dom");
let Card= require("./Card.js");

class SecurityOverLay extends React.Component{
    
    constructor(props){
        super(props);
        this.submit= this.submit.bind(this);
        this.nameHandler= this.nameHandler.bind(this);
        this.state={
            message: "Happy valentines, enter your first name to receive card",
            givenName: ""
        }
    }
    
    nameHandler(){
        
        let name= document.getElementsByClassName("userName")[0].value;
        
        this.setState({
            givenName: name
        });
        
        console.log(this.state);
    }
    
    isNameCorrect(){
        let correctName= "sydney";
        let givenName= this.state.givenName.toLowerCase();
        givenName= givenName.trim();
        
        return (givenName === correctName)? true : false;
    }
    
    remove(){
            let el= document.getElementsByClassName("root")[0];
            ReactDOM.unmountComponentAtNode(el);
    }
    
    showCard(){
        let root= document.getElementsByClassName("root")[0];
        ReactDOM.render(<Card/>, root);
    }
    
    submit(e){
        e.preventDefault();
        if(this.isNameCorrect()){
             this.remove();
             this.showCard();
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
                backgroundColor: "#2b2e33",
                color: "white"
            },
            userInput:{
                width: "500px",
                margin: "auto",
                paddingTop: "35vh",
                textAlign: "center",
                fontFamily: "arial"
            },
            userControls: {
                //fontSize: "4.6vh",
                //height: "5vh"
            },
            userName:{
               // height: "5vh",
               // width: "30vw"
            },
            errorMessage: {
                visibility: "hidden",
                color: "red"
            },
            message:{
                paddingBottom: "10vh",
                fontSize: "4vh",
                fontFamily: "arial"
            },
            button:{
                marginLeft: "2%",
                borderRadius: "8%"
            },
            label:{
                marginRight: "2%"
            }
        };
        return <div className="SecurityOverLay" style={styles.overLay}>
                        <div className="userInput" style={styles.userInput}>
                            <div className="message" style={styles.message}>{this.state.message} </div>
                            <form>
                                <label style={Object.assign({},styles.label,styles.userControls)} htmlFor="name">Name: </label> 
                                <input style={Object.assign({},styles.userName,styles.userControls)}className="userName" type="text" name="name" onChange={this.nameHandler}/>
                                <input type="submit" style={Object.assign({},styles.button,styles.userControls)} onClick={this.submit} value="Enter"/>
                            </form>
                        </div>
                    </div>
                
               
    }
}




module.exports=SecurityOverLay;