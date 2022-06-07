import AOS from "aos";
import "aos/dist/aos.css";
import { Component } from "react";


export default class Collapser extends Component {
  constructor(props){

    super(props);
    this.state={
      contador1:"d-flex triggersbox1",
      contador2:"d-flex triggersbox2",
      contador3:"d-flex triggersbox3",
      AboutMe:"font24",
      Studies:"font24",
      WorkExperience:"font24",

      FIRSTsentence1:"font24",
      FIRSTsentence2:"font24",
      FIRSTsentence3:"font24",
      FIRSTsentence4:"font24 ",
      FIRSTsentence5:"font24 ",
      SECONDsentence1:"font24",
      SECONDsentence2:"font24",
      SECONDsentence3:"font24",
      SECONDsentence4:"font24 ",
      SECONDsentence5:"font24 ",
      THERDsentence1:"font24",
      THERDsentence2:"font24",
      THERDsentence3:"font24",
      THERDsentence4:"font24 ",
      THERDsentence5:"font24 "

    }
    
    this.killme1=this.killme1.bind(this)
    this.killme2=this.killme2.bind(this)
    this.killme3=this.killme3.bind(this)
    


AOS.init();




}

killme1(e){
  this.setState({
    contador1:'d-flex triggersbox1 triggersboxactive1',
    contador2:'d-flex triggersbox2',
    contador3:'d-flex triggersbox3',
    AboutMe:"font24 font25 AboutMe",
    Studies:"font24",
    WorkExperience:"font24",
    FIRSTsentence1:"font24 font25 FIRSTsentence1",
    FIRSTsentence2:"font24 font25 FIRSTsentence2",
    FIRSTsentence3:"font24 font25 FIRSTsentence3",
    FIRSTsentence4:"font24 font25 FIRSTsentence4",
    FIRSTsentence5:"font24 font25 FIRSTsentence5 ",

    SECONDsentence1:"font24",
      SECONDsentence2:"font24",
      SECONDsentence3:"font24",
      SECONDsentence4:"font24 ",
      SECONDsentence5:"font24 ",

      THERDsentence1:"font24",
      THERDsentence2:"font24",
      THERDsentence3:"font24",
      THERDsentence4:"font24 ",
      THERDsentence5:"font24 "



  
  })
  }
  
  killme2(e){
  
    this.setState({
      contador1:'d-flex triggersbox1 ',
      contador2:'d-flex triggersbox2 triggersboxactive2',
      contador3:'d-flex triggersbox3',    
      AboutMe:"font24",
      Studies:"font24 font25 AboutMe2",
      WorkExperience:"font24",
    FIRSTsentence1:"font24 ",
    FIRSTsentence2:"font24",
    FIRSTsentence3:"font24",
    FIRSTsentence4:"font24 ",
    FIRSTsentence5:"font24 ",
      SECONDsentence1:"font24 font25 SECONDsentence1",
      SECONDsentence2:"font24 font25 SECONDsentence2",
      SECONDsentence3:"font24 font25 SECONDsentence3",
      SECONDsentence4:"font24 font25 SECONDsentence4",
      SECONDsentence5:"font24 font25 SECONDsentence5",
      
      THERDsentence1:"font24",
      THERDsentence2:"font24",
      THERDsentence3:"font24",
      THERDsentence4:"font24 ",
      THERDsentence5:"font24 "


    
    })
  }
  
   killme3()  {
    this.setState({
      contador1:'d-flex triggersbox1 ',
      contador2:'d-flex triggersbox2 ',
      contador3:'d-flex triggersbox3 triggersboxactive3' ,  
      WorkExperience:"font24 font25 AboutMe3",   
      AboutMe:"font24",
      Studies:"font24",
      FIRSTsentence1:"font24 ",
      FIRSTsentence2:"font24",
      FIRSTsentence3:"font24",
      FIRSTsentence4:"font24 ",
      FIRSTsentence5:"font24 ",
      SECONDsentence1:"font24 ",
      SECONDsentence2:"font24 ",
      SECONDsentence3:"font24 ",
      SECONDsentence4:"font24 ",
      SECONDsentence5:"font24 ",
      
      THERDsentence1:"font24 font25 THERDsentence1",
      THERDsentence2:"font24 font25 THERDsentence2",
      THERDsentence3:"font24 font25 THERDsentence3",
      THERDsentence4:"font24 font25 THERDsentence4",
      THERDsentence5:"font24 font25 THERDsentence5"
    })

    function rerender(){
      if(window.width<576){

      }
    }
  }
render(){
return (
    
    
<>
<div className='col-sm-2 col-12 boxMe2 imgfather ' style={{padding:"0px",margin:"0px"}} data-aos="fade-right">
                    <div className="col-12 imgfather"  style={{width:"100%",height:"100%",padding:"0px"}}  >
                          <img src={this.props.miface} className="image" alt="Foto de perfil" ></img>
                          
                    
                    </div> 
                   
                          

                  
                          
              </div>  

                 <div className='col-sm-6 col boxMe border rounded ' data-aos="fade-right" style={{padding:"0px",margin:"0px"}}  >

                      <div className="col-12 d-flex ahh" >
                        <p  className={this.state.Studies} style={{margin:"5px"}}>Studies </p>
                        <p  className={this.state.WorkExperience} style={{margin:"5px"}}>Work Experience </p>
                        <p className={this.state.AboutMe}  style={{margin:"5px"}}>About Me </p>


                      </div>
                      <div className="col-12 " >
                        <p className={this.state.FIRSTsentence1}  > i'm a young web Developer, with knowledge in Html,</p><p className={this.state.SECONDsentence1} style={{fontSize:"20px"}}>- Bachiller cientific in Liceo 15 since March 2018 until December 2020</p><p className={this.state.THERDsentence1}>I worked in "Cyber Green" Since 2020 until 2022</p><br/>
                          <p className={this.state.FIRSTsentence2}>Css, js, node and React. With knowledge in work</p><p className={this.state.SECONDsentence2} style={{fontSize:"20px"}}>- First year of Computer engenier in the "Facultad de Ingeniería de la</p> <p className={this.state.THERDsentence2}> working us a computer technical service and </p><br/>
                          <p className={this.state.FIRSTsentence3}>flows like scrum, kanban and agiles methodologies,</p><p className={this.state.SECONDsentence3} style={{fontSize:"20px"}}> Republica"</p> <p className={this.state.THERDsentence3}>client service.</p><br/>
                          <p className={this.state.FIRSTsentence4}> with the hability of work by my self or bee part</p><p className={this.state.SECONDsentence4} style={{fontSize:"20px"}}>- "Jóvenes a Programar" since March 2021 until December 2022</p> <p className={this.state.THERDsentence4}></p><br/>
                          <p className={this.state.FIRSTsentence5}> of a team.</p><p className={this.state.SECONDsentence5} style={{fontSize:"20px"}}>-Studing for the first Cambridge exam for the begining of 2023</p><p className={this.state.THERDsentence5} style={{fontSize:"20px"}}></p>

                          
                     
                      </div>
                          <div id="targetbutton2" className="words">
                       </div>
                        
                          <div id="targetbutton3" className="words">
                          </div>
                  

                  </div>

                
              <div className='col-2 boxMe3 ' style={{margin:"0px",}} data-aos="fade-right">
                          <div className="col-12 row"   >                          
                                <div className={this.state.contador1} onClick={this.killme1}  >
                                    <p style={{margin:"15px"}}><strong>About Me</strong></p>
                                    <div className="imagefather"  style={{height:"64px",width:"64px",marginRight:"7px"}}>
                                      <img src={this.props.img1} className="image"   alt="img1"/>
                                    </div>
                                </div>
                          </div> 
                          <div className="col-12 row" >                          
                              <div className={this.state.contador2}  onClick={this.killme2}  >              
                                    <p style={{margin:"15px"}}><strong>Studies</strong></p>

                                    <div  className="imagefather"  style={{height:"64px",width:"64px",marginRight:"7px"}}>

                                      <img src={this.props.img2} className="image"   alt="img1"/>

                                    </div>
                              </div>
                          </div> 
                        
                          <div className="col-12 row"  >  
                          
                          <div className={this.state.contador3}  onClick={this.killme3}  >
                                  <p style={{marginLeft:"5px"}} ><strong>Work Experience</strong></p>

                                              <div className="imagefather"  style={{height:"64px",width:"64px",marginRight:"7px"}}>

                                                <img src={this.props.img3} className="image"   alt="img1"/>

                                              </div>
   
                                             
                            </div>
                            
                          </div> 
                        
                        
                                

                  
                          
              </div>
  
           
                                   
   
     
    </>
  )}
}

