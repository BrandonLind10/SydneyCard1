let React= require("react");
let InfinitySign= require("./InfinitySign.js");

class Front extends React.Component{
    
    render(){
                
            //element specific styles
            let coverStyles={
                transformStyle: "preserve-3d",
                position: "absolute"
            }
            let frontStyles={
                position: "absolute",
                backgroundColor: "black"
            }
            let backStyles={
                position: "aboslute",
                transform: "rotatey(180deg)",
                backfaceVisibility: "hidden",
                backgroundColor: "#ffffe6",
                border: "5px solid black"
            }
            

            
        return <div className="Front dimensions" style={Object.assign({},this.props.styles,coverStyles)}>
                <div className="dimensions" style={Object.assign({backfaceVisibility: "hidden"},this.props.styles,frontStyles)}><InfinitySign/></div>
                <div className="dimensions" style={Object.assign({},this.props.styles,backStyles)}>
                        <div className="content" style={this.props.contentStyles}>
                            
                        <span className="greeting">Dear Sydney,</span>
                        alejf furgp aubg usflb rfksv dfavkf jvs kdjf hvks djf vshkJ
                        kejhfvK JWEV FKjsvd kfjvsk djfva ksd vafkjs
                        KJHEF jhbfkH JSD FKJ AHKD Ksjdf kdhf akjsdv fkashd vfkjvd fkjd
                        kdjfk jdvfkjf dvfjk avds kfvskd hfvK DHFK SDHF KJDVF KJHDVFK
                        KJHFKjh fvkJ VFKJHV FKJAV DSKJFVAK SDJFV KJHVF KJHVF JADV KADVA
                         DFKD FKJVD FKJAVK DJFVA SKDJFV KDHV FKAJDVF KAJSVD FKJHDV KJH KFV
                          BKDSJHv kds jfvK DGVF JDGVFK gsvkfg cksd jgfa vkjdsvkj vdfk jasvdkjf
                           KJDFKj dvK JDFV Kjdvhf kJDVF Kjdf kJHDV KFjhdvf kjhdv fkjHD FKJh
                        
                        </div>
                    </div>
            </div>
    }
}

module.exports=Front;
                        
                        
                        