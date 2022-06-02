import AOS from "aos";
import "aos/dist/aos.css";
import { Component } from "react";


export default class CollapserEs extends Component {
  constructor(props){

    super(props);
    this.state={
      contador1:"d-flex estriggersbox1",
      contador2:"d-flex estriggersbox2",
      contador3:"d-flex estriggersbox3",
      esAboutMe:"font24",
      esStudies:"font24",
      esWorkExperience:"font24",

      esFIRSTsentence1:"font24",
      esFIRSTsentence2:"font24",
      esFIRSTsentence3:"font24",
      esFIRSTsentence4:"font24 ",
      esFIRSTsentence5:"font24 ",
      esFIRSTsentence6:"font24 ",

      esSECONDsentence1:"font24",
      esSECONDsentence2:"font24",
      esSECONDsentence3:"font24",
      esSECONDsentence4:"font24 ",
      esSECONDsentence5:"font24 ",
      esSECONDsentence6:"font24 ",

      esTHERDsentence1:"font24",
      esTHERDsentence2:"font24",
      esTHERDsentence3:"font24",
      esTHERDsentence4:"font24 ",
      esTHERDsentence5:"font24 "

    }
    
    this.killme1=this.killme1.bind(this)
    this.killme2=this.killme2.bind(this)
    this.killme3=this.killme3.bind(this)
    


AOS.init();




}

killme1(e){
  this.setState({
    contador1:'d-flex estriggersbox1 triggersboxactive1',
    contador2:'d-flex estriggersbox2',
    contador3:'d-flex estriggersbox3',
    esAboutMe:"font24 font25 esAboutMe",
    esStudies:"font24",
    esWorkExperience:"font24",
    esFIRSTsentence1:"font24 font25 esFIRSTsentence1",
    esFIRSTsentence2:"font24 font25 esFIRSTsentence2",
    esFIRSTsentence3:"font24 font25 esFIRSTsentence3",
    esFIRSTsentence4:"font24 font25 esFIRSTsentence4",
    esFIRSTsentence5:"font24 font25 esFIRSTsentence5 ",
    esFIRSTsentence6:"font24 font25 esFIRSTsentence5 ",

    esSECONDsentence1:"font24",
    esSECONDsentence2:"font24",
      esSECONDsentence3:"font24",
      esSECONDsentence4:"font24 ",
      esSECONDsentence5:"font24 ",
      esSECONDsentence6:"font24 ",


      esTHERDsentence1:"font24",
      esTHERDsentence2:"font24",
      esTHERDsentence3:"font24",
      esTHERDsentence4:"font24 ",
      esTHERDsentence5:"font24 "



  
  })
  }
  
  killme2(e){
  
    this.setState({
      contador1:'d-flex estriggersbox1 ',
      contador2:'d-flex estriggersbox2 triggersboxactive2',
      contador3:'d-flex estriggersbox3',    
      esAboutMe:"font24",
      esStudies:"font24 font25 esAboutMe2",
      esWorkExperience:"font24",
      esFIRSTsentence1:"font24 ",
      esFIRSTsentence2:"font24",
      esFIRSTsentence3:"font24",
      esFIRSTsentence4:"font24 ",
      esFIRSTsentence5:"font24 ",
      esFIRSTsentence6:"font24 ",

      esSECONDsentence1:"font24 font25 esSECONDsentence1",
      esSECONDsentence2:"font24 font25 esSECONDsentence2",
      esSECONDsentence3:"font24 font25 esSECONDsentence3",
      esSECONDsentence4:"font24 font25 esSECONDsentence4",
      esSECONDsentence5:"font24 font25 esSECONDsentence5",
      esSECONDsentence6:"font24 font25 esSECONDsentence6",

      esTHERDsentence1:"font24",
      esTHERDsentence2:"font24",
      esTHERDsentence3:"font24",
      esTHERDsentence4:"font24 ",
      esTHERDsentence5:"font24 "


    
    })
  }
  
   killme3()  {
    this.setState({
      contador1:'d-flex estriggersbox1 ',
      contador2:'d-flex estriggersbox2 ',
      contador3:'d-flex estriggersbox3 triggersboxactive3' ,  
      esWorkExperience:"font24 font25 esAboutMe3",   
      esAboutMe:"font24",
      esStudies:"font24",
      esFIRSTsentence1:"font24 ",
      esFIRSTsentence2:"font24",
      esFIRSTsentence3:"font24",
      esFIRSTsentence4:"font24 ",
      esFIRSTsentence5:"font24 ",
      esFIRSTsentence6:"font24 ",

      esSECONDsentence1:"font24 ",
      esSECONDsentence2:"font24 ",
      esSECONDsentence3:"font24 ",
      esSECONDsentence4:"font24 ",
      esSECONDsentence5:"font24 ",
      esSECONDsentence6:"font24 ",

      
      esTHERDsentence1:"font24 font25 esTHERDsentence1",
      esTHERDsentence2:"font24 font25 esTHERDsentence2",
      esTHERDsentence3:"font24 font25 esTHERDsentence3",
      esTHERDsentence4:"font24 font25 esTHERDsentence4",
      esTHERDsentence5:"font24 font25 esTHERDsentence5"

    })
  }
render(){
return (
    
    
<>
<div className='col-2 boxMe2 imgfather ' style={{padding:"0px"}} data-aos="fade-right">
                    <div className="col-12 imgfather"  style={{width:"100%",height:"100%",padding:"0px"}}  >
                          <img src={this.props.miface} className="image" alt="Foto de perfil" ></img>
                          
                    
                    </div> 
                   
                          

                  
                          
              </div>  
                 <div className='col-6 boxMe border rounded ' data-aos="fade-right" style={{padding:"0px"}}  >

                      <div className="col-12 d-flex ahh" >
                        <p  className={this.state.esStudies} style={{margin:"5px"}}>Estudios</p>
                        <p  className={this.state.esWorkExperience} style={{margin:"5px"}}>Experiencia laboral</p>
                        <p className={this.state.esAboutMe}  style={{margin:"5px"}}>Acerca de mi </p>


                      </div>
                      <div className="col-12 ">
                      <p className={this.state.esFIRSTsentence1} style={{fontSize:"20px"}}>Soy un desarrollador web de 19 años, con conocimientos en html,</p><p className={this.state.esSECONDsentence1} style={{fontSize:"20px"}}>- Bachiller cientifico matematico en Liceo 15 desde marzo 2018 hasta </p><p className={this.state.esTHERDsentence1}>Trabaje en  "Cyber Green" desde 2020 hasta 2022 </p><br/>
                          <p className={this.state.esFIRSTsentence2} style={{fontSize:"20px"}}>Css, js, node y React. Con conocimientos en flujos de trabajo</p><p className={this.state.esSECONDsentence2} style={{fontSize:"20px"}}>Diciembre 2020</p> <p className={this.state.esTHERDsentence2}>trabajando como tecnico informatico y servicio a </p><br/>
                          <p className={this.state.esFIRSTsentence3} style={{fontSize:"20px"}}>como scrum, kanban y metodologias agiles, con la capacidad</p><p className={this.state.esSECONDsentence3} style={{fontSize:"20px"}}>- Primer año de ingeniería en computación en la "Facultad de Ingeniería de </p> <p className={this.state.esTHERDsentence3}>equipos informaticos.</p><br/>
                          <p className={this.state.esFIRSTsentence4} style={{fontSize:"20px"}}> de trabajar por mi cuenta o ser parte de un equipo,</p><p className={this.state.esSECONDsentence4} style={{fontSize:"20px"}}>la  Republica"</p> <p className={this.state.esTHERDsentence4}></p><br/>
                          <p className={this.state.esFIRSTsentence5} style={{fontSize:"20px"}}> pudiendome relacionarme perfectamente con mis compañeros</p><p className={this.state.esSECONDsentence5} style={{fontSize:"20px"}}>- "Jóvenes a Programar" desde Marzo 2021 hasta Diciembre 2022</p><p className={this.state.esTHERDsentence5} style={{fontSize:"20px"}}></p><br/>
                          <p className={this.state.esSECONDsentence6} style={{fontSize:"20px"}}>-Estudiando para el  first Cambridge exam a principio de  2023</p><p className={this.state.esTHERDsentence6} style={{fontSize:"20px"}}></p><br/>



                      </div>
                          <div id="targetbutton2" className="words">
                       </div>
                        
                          <div id="targetbutton3" className="words">
                          </div>
                  

                  </div>

                
              <div className='col-2 boxMe3 ' style={{padding:"0px"}} data-aos="fade-right">
                          <div className="col-12 row"  >                          
                                <div className={this.state.contador1} onClick={this.killme1}  >
                                    <p style={{margin:"15px"}}><strong>Acerca de mi</strong></p>
                                    <div className="imagefather"  style={{height:"64px",width:"64px",marginRight:"7px"}}>
                                      <img src={this.props.img1} className="image"   alt="img1"/>
                                    </div>
                                </div>
                          </div> 
                          <div className="col-12 row" >                          
                              <div className={this.state.contador2}  onClick={this.killme2}  >              
                                    <p style={{margin:"15px"}}><strong>Estudios</strong></p>

                                    <div  className="imagefather"  style={{height:"64px",width:"64px",marginRight:"7px"}}>

                                      <img src={this.props.img2} className="image"   alt="img1"/>

                                    </div>
                              </div>
                          </div> 
                        
                          <div className="col-12 row"  >  
                          
                          <div className={this.state.contador3}  onClick={this.killme3}  >
                                  <p style={{marginLeft:"5px"}} ><strong>Experiencia laboral</strong></p>

                                              <div className="imagefather"  style={{height:"64px",width:"64px",marginRight:"7px"}}>

                                                <img src={this.props.img3} className="image"   alt="img1"/>

                                              </div>
   
                                             
                            </div>
                            
                          </div> 
                        
                        
                                

                  
                          
              </div>
  
           
                                   
   
     
    </>
  )}
}

