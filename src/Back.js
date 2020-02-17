let React= require("react");


class Back extends React.Component{
    
    render(){
        
        let cardBodyStyles={
            //position: "absolute",
            backgroundColor: "#ffffe6",
            border: "5px solid red",
            zIndex: "-1"
        }
        

        return <div className="Back dimensions" style={Object.assign({},this.props.styles,cardBodyStyles)}>
                <div className="content" style={this.props.contentStyles}>
                    I appreciate who you are as an entity a unique conscious autonomous object. Interaction isnt a variable in my appreciation for you and I feel that creates a certain unique depth that I experience personally with you, something not defined my time or interaction. It makes me feel an unspoken timeless connection with you. I appreciate you and that you exist and you and that fact you exist is a beautiful thing. 

                    I feel I will always consider you a close friend and I feel 50 years from now I will be willing listen, to you give you space, to listen to you, be supportive in what way I can and I will still appreciate you. 

                    <span className="greeting">A friend, Brandon</span>
                </div>
            </div>
    }
}


module.exports=Back