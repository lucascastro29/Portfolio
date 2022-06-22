import AOS from "aos";
import "aos/dist/aos.css";
import { Component } from "react";


export default class CollapserEs extends Component {
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
            style={{
              padding: "0px",
              color: "white",
              fontSize: "400%",
              textShadow: "5px 2px 5px black",
              overflow: "hidden",
            }}
            data-aos="fade-down"
          >
            Lucas Castro
            <div
              style={{
                padding: "0px",
                border: "4px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                width: "500px",
                margin: "0px",
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
          Soy un desarrollador web de 19 años, con conocimientos en html, Css,
          js, node y React. Con conocimientos en flujos de trabajo como scrum,
          kanban y metodologias agiles, con la capacidad de trabajar por mi
          cuenta o ser parte de un equipo, pudiendome relacionarme perfectamente
          con mis compañeros
        </p>
      </div>
      <div
        className="col-12"
        style={{ display: "flex", marginTop: "100px", padding: "0px" }}
      ></div>
      <div className="col-sm-5 col-12" style={{ padding: "0px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "0px ",
          }}
        >
          <h1
            style={{
              padding: "0px",
              color: "white",
              fontSize: "350%",
              textShadow: "5px 2px 5px black",
              overflow: "hidden",
            }}
            data-aos="fade-down"
          >
            Experiencia Laboral
            <div
              style={{
                padding: "0px",
                border: "4px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                width: "700px",
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
            padding: "0px",
          }}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Trabaje en "Cyber Green" desde 2020 hasta 2022 trabajando como tecnico
          informatico y servicio a equipos informaticos.
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
              Bachiller cientifico matematico en Liceo 15 desde marzo 2018 hasta
              Diciembre 2020
            </li>
            <li style={{ margin: "20px" }}>
              Primer año de ingeniería en computación en la "Facultad de
              Ingeniería de la Republica"
            </li>
            <li style={{ margin: "20px" }}>
              "Jóvenes a Programar" desde Marzo 2021 hasta Diciembre 2022
            </li>
            <li style={{ margin: "20px" }}>
              Estudiando para el first Cambridge exam a principio de 2023
            </li>
          </ul>
        </p>
      </div>
    </>
  );
;}
}

