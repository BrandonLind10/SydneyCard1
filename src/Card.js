let React= require("react");
let Front= require("./Front.js");
let Back= require("./Back.js");

class Card extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            isOpen: false
        }
    }
    
    render(){
        //let height="60vh";
        
        let commonStyles={
            color: "black",
            textAlign: "left",
            margin: "auto",
            boxSizing: "border-box"
        }
        let contentStyles={
            margin: "5%",
            fontFamily: "cursive"
        }
        let cardStyles={
            position: "relative",
            paddingTop: "7%"
        }
        
        let clickAnimation=()=>{
            let cardFront=document.getElementsByClassName("Front")[0];
            let Card= document.getElementsByClassName("Card")[0];
            if(this.state.isOpen === false){
                cardFront.classList.remove("closeAnimation");
                cardFront.classList.add("openAnimation");
                
                Card.classList.add("openTurnAnimation");
                Card.classList.remove("closeTurnAnimation");
                this.setState({
                    isOpen: true
                })
            }
            else {
                cardFront.classList.remove("openAnimation");
                cardFront.classList.add("closeAnimation");
                
                Card.classList.remove("openTurnAnimation");
                Card.classList.add("closeTurnAnimation");
                
                
                this.setState({
                    isOpen: false
                });
            }
        }
        return <div className="Card dimensions" onClick={clickAnimation} style={Object.assign({},commonStyles,cardStyles)} >
                <Front styles={commonStyles} contentStyles={contentStyles}/>
                <Back styles={commonStyles} contentStyles={contentStyles}/>
            </div>
    }
}

module.exports= Card