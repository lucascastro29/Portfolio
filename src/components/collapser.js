import AOS from "aos";
import "aos/dist/aos.css";
import { Component } from "react";


export default class Collapser extends Component {
  constructor(props){
    super(props);  
    


AOS.init();

}


render(){
return (
  <>
    <div className="col-sm-1"></div>
    <div
      className="col-sm-3 col-12 boxMe2 imgfather"
      style={{ padding: "0px", margin: "0px" }}
      data-aos="fade-right"
    >
      <div
        className="col-12 imgfather"
        style={{ width: "100%", height: "100%", padding: "0px" }}
      >
        <img
          src={this.props.miface}
          className="image"
          alt="Foto de perfil"
        ></img>
      </div>
    </div>
    <div className="col-sm-1"></div>

    <div
      className="col-sm-5 col-12"
      style={{
        padding: "0px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "0px",
        }}
      >
        <h1
          style={{padding:"0px",
            color: "white",
            fontSize: "400%",
            textShadow: "5px 2px 5px black",
            overflow: "hidden",
          }}
          data-aos="fade-down"
        >
          Lucas Castro
          <div
            style={{padding:"0px",
              border: "4px solid black",
              borderTop: "0px",
              borderLeft: "0px",
              borderRight: "0px",
              width: "500px",
              margin:"0px"
            }}
          ></div>
        </h1>
      </div>

      <p
        style={{
          color: "white",
          fontSize: "35px",
          textShadow: "5px 2px 5px black",
          overflow: "hidden",
          padding: "0px",
        }}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        i'm a young web Developer, with knowledge in Html, Css, js, node and
        React. With knowledge in workflows like scrum, kanban and agiles
        methodologies, with the hability of work by my self or be part of a
        team.
      </p>
    </div>
    <div
      className="col-12"
      style={{ display: "flex", marginTop: "100px", padding: "0px" }}
    ></div>
    <div className="col-sm-5 col-12" style={{padding:"0px"}} >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "0px ",
        }}
      >
        <h1
          style={{padding:"0px",
            color: "white",
            fontSize: "350%",
            textShadow: "5px 2px 5px black",
            overflow: "hidden",
          }}
          data-aos="fade-down"
        >
          Work Experience
          <div
            style={{padding:"0px",
              border: "4px solid black",
              borderTop: "0px",
              borderLeft: "0px",
              borderRight: "0px",
              width: "600px",
            }}
          ></div>
        </h1>
      </div>

      <p
        style={{
          color: "white",
          fontSize: "40px",
          textShadow: "5px 2px 5px black",
          overflow: "hidden",
          padding:"0px"
        }}
        data-aos="fade-right"
        data-aos-delay="300"
      >
        I worked in "Cyber Green" Since 2020 until 2022 working us a computer
        technical service and client service.
      </p>
    </div>
    <div className="col-sm-5 col-12">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "350%",

            textShadow: "5px 2px 5px black",
            overflow: "hidden",
          }}
          data-aos="fade-down"
        >
          Studies
          <div
            style={{
              border: "4px solid black",
              borderTop: "0px",
              borderLeft: "0px",
              borderRight: "0px",
              width: "300px",
            }}
          ></div>
        </h1>
      </div>
      <p
        style={{
          color: "white",
          fontSize: "30px",
          marginLeft: "10px",
          textShadow: "5px 2px 5px black",
        }}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <ul>
          <li style={{ margin: "20px" }}>
            Bachiller cientific in Liceo 15 since March 2018 until December 2020
          </li>
          <li style={{ margin: "20px" }}>
            First year of Computer engenier in the "Facultad de Ingeniería de la
            Republica"
          </li>
          <li style={{ margin: "20px" }}>
            "Jóvenes a Programar" since March 2021 until December 2022
          </li>
          <li style={{ margin: "20px" }}>
            Studing for the first Cambridge exam for the begining of 2023
          </li>
        </ul>
      </p>
    </div>
  </>
);}
}

