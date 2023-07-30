import weeknd from './weeknd.jpg'
import styles from './lo.module.css'
import lanadel from './lanadel.png'
import kid from './kid.jpg'
import ten from "./ten.jpg"
import one from "./one.jpg"
import two from "./two.jpg"
import three from "./three.jpg"
import four from "./four.jpg"
import six from "./six.jpg"
import jacket from "./jacket.jpg"
import dress from "./dress.jpg"
import others from "./others.jpg"
import kb from "./kb.jpg"
import Fade from "react-reveal/Fade"
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Home = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
      <Fade top distance="20%" duration={1500}>
      <>
      <center><img className={styles.img} src={kb}/></center>
      <center>
          <table>
             <tr>
               <td>
                  <div className={styles.container}>
                    <img src={weeknd} className={styles.img}/>
                    <div className={styles.centered}><b>{props.mens}</b></div>
                  </div>
                </td>
                <td>
                  <div className={styles.container}>
                    <img src={lanadel} className={styles.img}/>
                    <div className={styles.centered}><b style={{color:"red"}}>{props.womens}</b></div>
                  </div>
                </td>
                <td>
                  <div className={styles.container}>
                    <img src={kid} className={styles.img}/>
                    <div className={styles.kid}><b>{props.kids}</b></div>
                  </div>
                </td>
              </tr>
          </table>
      </center>
      <div style={{marginTop:"20px"}} className={styles.scrollContainer}>
            <div className={styles.scrollText}>
              <h1>{props.everyweek} // {props.everyweek} // {props.everyweek} </h1>
            </div>
      </div>
        <div data-aos="fade-bottom">
          <center>
            <table style={{width:"80%"}}>
              <tr>
                <th colSpan={2}><center><img src={ten} style={{width:"100%",height:"600px",borderRadius:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}/></center></th>
              </tr>
              <tr>
                <td data-aos="fade-right"><center><img src={one} style={{width:"100%",height:"600px",borderRadius:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}/></center></td>
                <td data-aos="fade-left"><center><img src={three} style={{width:"100%",height:"600px",borderRadius:"10px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}/></center></td>
              </tr>
            </table>
          </center>
      </div>

      <center>
        <div style={{backgroundColor:"aliceblue"}}>
          <h1>{props.dfcl} </h1>
        </div>
      </center>

      <center>
        <div data-aos="fade-bottom">
        
            <table style={{width:"80%"}}>
              <tr>
                <td data-aos="fade-right">
                  <center>
                    <div className={styles.container+" "+styles.fadein}>
                      <img src={two} style={{borderRadius:"10px"}}/>
                      <div className={styles.centered} style={{fontSize:"larger"}}><b>{props.shirts}</b></div>
                    </div>
                  </center>
                </td>
                <td data-aos="fade-left">
                  <center>
                    <div className={styles.container+" "+styles.fadein}>
                      <img src={jacket} style={{borderRadius:"10px"}}/>
                      <div className={styles.centered} style={{fontSize:"larger"}}><b>{props.jackets}</b></div>
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td data-aos="fade-right">
                  <center>
                    <div className={styles.container+" "+styles.fadein}>
                      <img src={four} style={{borderRadius:"10px"}}/>
                      <div className={styles.centered} style={{color:"black",fontSize:"larger"}}><b>{props.hoodies}</b></div>
                    </div>
                  </center>
                </td>
                <td data-aos="fade-left">
                 <center>
                    <div className={styles.container+" "+styles.fadein}>
                      <img src={dress} style={{borderRadius:"10px"}}/>
                      <div className={styles.centered} style={{color:"black",fontSize:"larger"}}><b>{props.dresses}</b></div>
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td data-aos="fade-left" style={{width:"50%"}}>
                 <center>
                    <div className={styles.container+" "+styles.fadein} >
                      <img src={six} style={{borderRadius:"10px"}}/>
                      <div className={styles.centered} style={{fontSize:"larger"}}><b>{props.trousers}</b></div>
                    </div>
                  </center>
                </td>
                <td data-aos="fade-left" style={{width:"50%"}}>
                 <center>
                    <div className={styles.container+" "+styles.fadein}>
                      <img src={others} style={{borderRadius:"10px"}}/>
                      <div className={styles.centered} style={{fontSize:"larger"}}><b>{props.others}</b></div>
                    </div>
                  </center>
                </td>
              </tr>
            </table>
          </div>
        </center>
        <div style={{marginTop:"20px", backgroundColor:"aqua"}} className={styles.scrollContainer}>
            <div className={styles.scrollText} >
              <h1>{props.thanks}</h1>
            </div>
      </div>
      

      </>
      </Fade>
    )
  };
  
  export default Home;
  