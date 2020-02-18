let React= require("react");


class InfinitySign extends React.Component{

    render(){
        let styles={
            infinitySign:{
                position: "relative"
            },
            innerContent:{
                position: "absolute",
                fontSize: "40vw",
                color: "#81d8d0",
                lineHeight: "80%",
                height: "100%",
                width: "100%",
                textAlign: "center"
            }
        };
        
        return <div className="InfinitySign dimensions" >
                    <div style={styles.innerContent}>{"\u221E"}</div>
                </div>
    }
    
}

module.exports= InfinitySign;