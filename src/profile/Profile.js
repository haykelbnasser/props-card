import Bio from './Bio'
import HandleName from './FullName'
import Profession from './Profession'
import MyImg from './Image'
import source from './Myimg.jpg'


export default function() {
    return (
        <div style={{ height:500 , width : 800 , border: 5 , borderStyle:'solid',borderColor:'crimson' , margin : 50 , borderRadius:50  }}>
            <MyImg> <img src={source} style={{width:250 , height: 250 , margin:20 , borderRadius:60}} alt="Haykel Ben Nasser"/>   </MyImg>
        <div style={{color:'red' , textTransform:'uppercase ' , margin:20}}>
            <Profession props="Student"/>
        </div>
           
        <div style={{ height:80 , width:700 ,margin : 25 ,border:5 , borderStyle:'dotted',borderColor:'blue' , borderRadius:45 , paddingLeft:10}}>
            <Bio/>
        </div>
         <HandleName props ="Haykel Ben Nasser"/>
        </div>
    )

}