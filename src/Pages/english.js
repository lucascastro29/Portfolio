import Collapser from '../components/collapser';

import Pajinas from '../components/Pajinas';
import FORMS from '../components/formss';
import {Link} from 'react-scroll';

export default function en(){

  

    const img0=require('../img/foto.jpg')
    const arrow=require('../img/arrow.png')
    const spanish=require('../img/españa.png')

  
    const progimg=require('../img/progamerimg.png')
    const school=require('../img/school.png')
    const working=require('../img/workimg.png')
  
  
  
    const img1=require('../img/ecommerce.png')
    const img2=require('../img/DMG.png')
    const img3=require('../img/huerta-page.png')

    const img4=require('../img/caza.png')


    return(<div className="App col-12" style={{padding:"0px"}}>
   

    <div class="col-12 divcontainer" >

              <div class="d-flex row filterc" style={{justifyContent:"center"}} >
              
              
                                        
                <div class=" container-flex  container1  ">
                <p className=" row languajes" ><a href='/es' style={{textDecoration:"none",color:"white"}}><img src={spanish} alt="spanish"/></a></p>
                      <p class="user-select-none h1 " >Hi I'm Lucas, I design and build web pages</p>
                </div>
                    


                    
                    <div className='col-12' >
                    <div style={{height:"15px"}}><Link to="Collapse" spy={true} smooth={true}  offset={50} duration={500} href="#Collapse" style={{  scrollBehavior: "smooth"}}><img src={arrow}  alt="imgarrow" className='imgarrow'></img> </Link></div>
                    <div><Link to="Collapse" id="Collapse" spy={true} smooth={true}  offset={50} duration={500} href="#Collapse" style={{  scrollBehavior: "smooth"}}><img src={arrow} alt="imgarrow" className='imgarrow'></img></Link> </div>
                    

                    </div>
                    <div className='col-12 row'style={{height:"80px", justifyContent:"end"}} >
                      <div>
                      <a href="https://www.linkedin.com/in/lucas-castro-7b4003219/">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="logos1" fill="currentColor"  viewBox="0 0 16 16">
                                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg> 
                                    </a>
                      </div>
                          <div>
                                  
                          <a href="https://github.com/lucascastro29"><svg  xmlns="http://www.w3.org/2000/svg" className="logos2"  fill="currentColor"  viewBox="0 0 16 16">
                                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>    
                                    </a>
                            </div>       
                    </div>

                  
                
                                          
              </div>
    </div>

      
    <div className='row'  style={{justifyContent:"end",margin:"0px",marginTop:"80px",marginBottom:"80px",}}>
  
  <Collapser  img1={progimg} img2={school} img3={working} miface={img0} data-aos="fade-up" />


   
</div>
   

                            <div  className='col-12 col-sm-12 projects' >
                              <div class='d-flex row filterxd' >
                                <div  className="Projectsbox  row" style={{width:"100%"}}  >
                             <div className='col-12 Tittle' style={{marginTop:"30px"}}><h2 className="tittlestyle"style={{marginBottom:"10px"}}><strong>PROJECTS</strong></h2></div>   

                                      <Pajinas className="col-12 col-sm-2" img={img1} src="https://lucascastroecommerce.herokuapp.com/" dive="inprocess" text="Visit Website" title="Ecommerce"/>
                                      <Pajinas className="col-12 col-sm-2" img={img2} src="https://lucascastroecommerce.herokuapp.com/" dive="inprocesss" delay="200" text="Visit Website"  title="Direct Marketing Agency"/>

                                      <Pajinas  className="col-12 col-sm-2" img={img4} src="https://cazasubmarina.com.uy/"  delay="500" dive="inprocesss" text="Visit Website"  title="Cazasubmarina"/>

                                      <div className="col-12 d-flex" style={{justifyContent:"center",margin:"0px",padding:"0px"}}>
                                  <div className='borderbottomx' style={{marginBottom:"60px",marginTop:"20px"}}></div>
                                </div>  


                                
                                  
                                </div>    
                                </div>
                               

                            </div>
       <h2 className="Tittle"><strong>My Self</strong></h2>


                            
                            <FORMS title1="Contact Me" form1="Name"form2="Message" button="submit" title2="or" title3="Let's get social" text2="Follow me online on"/>
                            
                             
                            
                            

                         

                        
                           


  </div>
)
}