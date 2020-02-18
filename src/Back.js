let React= require("react");


class Back extends React.Component{
    
    render(){
        
        let cardBodyStyles={
            //position: "absolute",
            backgroundColor: "#ffffe6",
            border: "5px solid black",
            zIndex: "-1"
        }

        return <div className="Back dimensions" style={Object.assign({},this.props.styles,cardBodyStyles)}>
                <div className="content" style={this.props.contentStyles}>
                 alejf furgp aubg usflb rfksv dfavkf jvs kdjf hvks djfv shkJ
                        kejhfvK JWEV FKjsvd kfjvsk djfva ksd vafkjs
                        KJHEF jhbfkH JSD FKJA HKD Ksjdf kdhf akjsdv fkashd vfkjvd fkjd
                        kdjfk jdvfkjf dvfjk avds kfvskd hfvK DHFK SDHF KJDVF KJHD VFK
                        KJH FKjh fvkJ VFKJHV FKJAV DSKJFVAK SDJFV KJHVF KJHVF JADV KADVA
                         DFKD FKJVD FKJAVK DJFVA SKDJFV KDHV FKAJDVF KAJSVD FKJHDV KJH KFV
                          BKD SJHv kds jfvK DGVF JDGVFK gsvkfg cksd jgfa vkjdsvkj vdfk jasvdkjf
                           KJDFKj dvK JDFV Kjdvhf kJDVF Kjdf kJHDV KFjhdvf kjhdv fkjHD FKJh
                    <span className="greeting">A friend, Brandon</span>
                </div>
            </div>
    }
}


module.exports=Back