import ten from "./ten.jpg"
import one from "./one.jpg"
import three from "./three.jpg"
import Fade from "react-reveal/Fade"
import AOS from 'aos'
import "aos/dist/aos.css"

const AboutUs = (props) => {
    return(
      <Fade top distance="20%" duration={1500}>
      <>
        <h1>About us</h1>
        <center>
          <div style={{width:"70%"}}>
              <img src={ten} style={{height:"700px",borderRadius:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} />
            <div style={{textAlign:"left"}}>
                <p data-aos="fade-bottom">{props.auo}<br /></p>
                <p data-aos="fade-bottom">{props.aut}</p>
              <table style={{width:"100%"}}>
                <tr>
                  <td data-aos="fade-left"><center><img src={one} style={{width:"100%",height:"600px",borderRadius:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}/></center></td>
                  <td data-aos="fade-right"><center><img src={three} style={{width:"100%",height:"600px",borderRadius:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}/></center></td>
                </tr>
              </table>
            </div>
          </div>
        </center>
      </>
      </Fade>
    )
  };
  
  export default AboutUs;
  