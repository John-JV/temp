import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import { useState } from "react";
import styles from "./pages/lo.module.css"
import AOS from 'aos'
import "aos/dist/aos.css"
import {IoLocationSharp} from "react-icons/io5"
import {TiTick} from "react-icons/ti"
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"

export default function App() {
  const [mens,setMens]=useState("MEN'S");
  const [womens,setWomens] = useState("WOMEN'S")
  const [kids,setKids]=useState("KIDS'")
  const [everyweek,setEveryweek]=useState("New Clothes Every Week")
  const [dfcl,setDfcl]=useState("Different Clothings")
  const [shirts,setShirts]=useState("SHIRTS")
  const [jackets,setJackets]=useState("JACKETS")
  const [hoodies,setHoodies]=useState("HOODIES")
  const [dresses,setDresses]=useState("DRESSES")
  const [trousers,setTrousers]=useState("TROUSERS")
  const [others,setOthers]=useState("AND MORE")
  const [thanks,setThanks]=useState("Thank You For Shopping With Us!")
  const [disc,setDisc]=useState("Timeless quality European standard Bonda clothing from Kozi Bonda.")
  const [add,setAdd]=useState("Our Address")
  const [loc,setLoc]=useState("We are located at 2nd Floor, No. 210, Kera Famiris Shopping Center.")
  const [hrs,setHrs]=useState("Working hours are from 5:00 am to 1:00 pm LT. It is open from Sunday to Sunday.")
  const [cus,setCus]=useState("Contact US")
  const [teleg,setTeleg]=useState("For our latest information and orders follow us on telegram.")
  const [auo,setAuo]=useState("Kozi Bonda is a clothing store located in Kera, Addis Ababa. The store sells a variety of modern clothes for men, women, and children. Kozi Bonda is known for its trendy clothes and affordable prices. Kozi Bonda has quickly become one of the most popular clothing stores in Addis Ababa.The store is divided into two sections: men's and women's clothing. The men's section features a wide variety of shirts, pants, and accessories. The women's section features a variety of dresses, skirts, blouses, and accessories. Kozi Bonda also has a children's section that features a variety of clothes for toddlers, kids, and teens. The children's section is especially popular for its colorful and stylish clothes.")
  const [aut,setAut]=useState("In addition to its trendy clothes, Kozi Bonda is also known for its affordable prices. The store offers a wide variety of discounts and promotions throughout the year. Kozi Bonda is a great place to find stylish clothes at an affordable price. If you are looking for trendy clothes in Addis Ababa, be sure to visit Kozi Bonda. The store is located at Kera, Addis Ababa. The store is open from 5am to 1pm LT, seven days a week.")

  useEffect(() => {
    AOS.init();
  }, [])

  const amh=()=>{
    setMens("የወንዶች")
    setWomens("የሴቶች")
    setKids("የልጆች")
    setEveryweek("በየሳምንቱ አዳዲስ ልብሶች")
    setDfcl("የተለያዩ አልባሳት")
    setShirts("ሸሚዞች")
    setJackets("ጃኬቶች")
    setHoodies("ሁዲዎች")
    setDresses("ቀሚሶች")
    setTrousers("ሱሪዎች")
    setOthers("ሌሎችም")
    setThanks("ከእኛ ጋር ስለተገበያዩ እናመሰግናለን!")
    setAdd("አድራሻችን")
    setDisc("ዘመን እሚሻገር ጥራት ያላቸው አውሮፓ ስታንዳርድ የቦንዳ ልብስ ከ ኮዚ ቦንዳ።")
    setLoc("ቄራ ፋምሪስ የገበያ ማእከል 2ኛ ፎቅ ቁጥር 210 ላይ እንገኛለን፡፡")
    setHrs("የስራ ሰዓት ከጠዋቱ 5:00 እስከማታ 1:00፤ የሰራ ቀን ከእሁድ እስከ እሁድ ክፍት ነው")
    setCus("ያግኙን")
    setTeleg("ለአዳዲስ መረጃዎች እና ለማዘዝ በ ቴሌግራም ይከታተሉን")
    setAuo("ኮዚ ቦንዳ አዲስ አበባ ቄራ ውስጥ የሚገኝ የልብስ መሸጫ ነው። መደብሩ ለወንዶች፣ ለሴቶች እና ለህፃናት የተለያዩ ዘመናዊ ልብሶችን ይሸጣል። ኮዚ ቦንዳ በዘመናዊ ልብሶች እና በተመጣጣኝ ዋጋ ይታወቃል። ኮዚ ቦንዳ በፍጥነት በአዲስ አበባ ውስጥ በጣም ተወዳጅ ከሆኑ የልብስ መሸጫ መደብሮች አንዱ ሆኗል። መደብሩ በሁለት ክፍሎች የተከፈለ ነው-የወንዶች እና የሴቶች ልብሶች፤ የወንዶች ክፍል ብዙ አይነት ሸሚዞች፣ ሱሪዎች እና መለዋወጫዎች አሉት። የሴቶች ክፍል የተለያዩ ቀሚሶችን፣ ቀሚሶችን፣ ሸሚዝ እና መለዋወጫዎችን ይዟል። ኮዚ ቦንዳ ለልጆች፣ ለህጻናት እና ለወጣቶች የተለያዩ ልብሶችን የያዘ የልጆች ክፍል አለው። የልጆቹ ክፍል በተለይ በቀለማት ያሸበረቁ እና በሚያማምሩ ልብሶች ተወዳጅ ነው።")
    setAut("ኮዚ ቦንዳ ከወቅታዊ ልብሶች በተጨማሪ በተመጣጣኝ ዋጋም ይታወቃል። መደብሩ በዓመቱ ውስጥ የተለያዩ ቅናሾችን እና ማስተዋወቂያዎችን ያቀርባል። ኮዚ ቦንዳ ቄንጠኛ ልብሶችን በተመጣጣኝ ዋጋ ለማግኘት ጥሩ ቦታ ነው። አዲስ አበባ ውስጥ ወቅታዊ ልብሶችን እየፈለጉ ከሆነ ኮዚ ቦንዳ መጎብኘትዎን ያረጋግጡ። መደብሩ ቄራ አዲስ አበባ ላይ ይገኛል። መደብሩ በሳምንት ሰባት ቀናት ከጠዋቱ 5:00 እስከ ምሽቱ 1:00 ክፍት ነው።")
  }
  const eng=()=>{
    setMens("MEN'S")
    setWomens("WOMEN'S")
    setKids("KIDS'")
    setEveryweek("New Clothes Every Week")
    setDfcl("Different Clothings")
    setShirts("SHIRTS")
    setJackets("JACKETS")
    setHoodies("HOODIES")
    setDresses("DRESSES")
    setTrousers("TROUSERS")
    setOthers("AND MORE")
    setThanks("Thank You For Shopping With Us!")
    setAdd("Our Address")
    setDisc("Timeless quality European standard Bonda clothing from Kozi Bonda.")
    setLoc("We are located at 2nd Floor, No. 210, Kera Famiris Shopping Center.")
    setHrs("Working hours are from 5:00 am to 1:00 pm LT. It is open from Sunday to Sunday.")
    setCus("Contact US")
    setTeleg("For our latest information and orders follow us on telegram.")
    setAuo("Kozi Bonda is a clothing store located in Kera, Addis Ababa. The store sells a variety of modern clothes for men, women, and children. Kozi Bonda is known for its trendy clothes and affordable prices. Kozi Bonda has quickly become one of the most popular clothing stores in Addis Ababa.The store is divided into two sections: men's and women's clothing. The men's section features a wide variety of shirts, pants, and accessories. The women's section features a variety of dresses, skirts, blouses, and accessories. Kozi Bonda also has a children's section that features a variety of clothes for toddlers, kids, and teens. The children's section is especially popular for its colorful and stylish clothes.")
    setAut("In addition to its trendy clothes, Kozi Bonda is also known for its affordable prices. The store offers a wide variety of discounts and promotions throughout the year. Kozi Bonda is a great place to find stylish clothes at an affordable price. If you are looking for trendy clothes in Addis Ababa, be sure to visit Kozi Bonda. The store is located at Kera, Addis Ababa. The store is open from 5am to 1pm LT, seven days a week.")

  }
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout amh={amh} eng={eng}/>}>
            <Route index element={<Home mens={mens} womens={womens} kids={kids} everyweek={everyweek} dfcl={dfcl} shirts={shirts} jackets={jackets} hoodies={hoodies} dresses={dresses} trousers={trousers} others={others} thanks={thanks}/>} />
            <Route path="blogs" element={<AboutUs auo={auo} aut={aut}/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <footer style={{backgroundColor:"aliceblue"}} data-aos="fade-bottom">
      <center>
        <table>
        <tr>
          <td>
              <h3 className={styles.h3}>{add}</h3> 
              <div className={styles.googleMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.7238986025061!2d38.75103982237788!3d8.984414811919786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d8df9c04b1%3A0xdad394fd0efb8e76!2sFamris%20Building!5e0!3m2!1sen!2set!4v1690652544712!5m2!1sen!2set"  style={{border:"0",width:"600px",height:"600px"}} loading="lazy" allowFullScreen="" referrerpolicy="no-referrer-when-downgrade" ></iframe>
              </div>
            
          </td>
          <td style={{paddingLeft:"5px"}}>
            <p>{disc}</p>
            <p> <b><IoLocationSharp style={{color:"red"}}/> {loc}</b></p>
            <p><b>< TiTick  style={{color:"green",fontSize:"20px"}}/></b>{hrs}</p>
            <h3>{cus}</h3>
            <p><BsFillTelephoneFill /> +251 979796887</p>
            <p><BsFillTelephoneFill /> +251 919154628</p>
            <p><BsArrowRight/>{teleg} </p>
            <p style={{fontSize:"20px"}}><a href="https://t.me/KoziBonda" target="_blank" rel="noopener noreferrer" >< BsTelegram className={styles.a} style={{cursor:"pointer",transition:"transform 0.2s"}}/></a> @KoziBondaa</p>
          </td>
        </tr>
      </table>
      </center>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);