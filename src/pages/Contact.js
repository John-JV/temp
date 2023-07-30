import styles from "./lo.module.css"
import Fade from "react-reveal/Flash";

const A = () => {
  
    return (
      <Fade top distance="20%" duration={1500}> 
    <>
      <h1>Contact Me</h1>
      <div style={{backgroundColor:"aliceblue"}}>
      <center>
        <table>
        <tr>
          <td>
              <h3 className={styles.h3}>Our Address</h3> 
              <div className={styles.googleMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7515752383765!2d38.749206475764296!3d8.994991989518821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8433e284fd11%3A0x4bb3159dc533266b!2zSW50ZXJuYXRpb25hbCBDbGluaWNhbCBMYWJvcmF0b3JpZXMgKElDTCkgLSBIZWFkIE9mZmljZSBCcmFuY2ggfEFBMXwg4Yqi4YqV4Ymw4Yit4YqT4Yi94YqT4YiNIOGKreGIiuGKkuGKq-GIjSDhiIvhiabhiKvhibbhiKrhiLUgfCDhi4vhipMg4YiY4Yil4Yiq4YurIOGJpOGJtSDhiYXhiK3hipXhjKvhjY0!5e0!3m2!1sen!2sus!4v1690623516820!5m2!1sen!2sus" style={{border:"0",width:"600px",height:"600px"}} loading="lazy" allowFullScreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            
          </td>
          <td>
            <p>Our Address is blabla bla bla bla bla bla vla bla bla bla</p>

          </td>
        </tr>
      </table>
      </center>
      </div>
    </>
    </Fade>
 
    )
  }
  
  export default Contact;
  