import { SectionDouble } from '../../Components/SectionDouble/SectionDouble'
import Navbar from '../../Components/NavBar/NavBar'
import { TextElement } from '../../Components/TextElement/TextElement.jsx'
import { ImageTD } from '../../Components/TextElement/TextDetails/ImageTD/ImageTD.jsx'
import { ImageBOElement } from '../../Components/ImageBOElement/ImageBOElement.jsx'
import { ImageElement } from '../../Components/ImageElement/ImageElement.jsx'
import { SectionLCRB } from '../../Components/SectionLCRB/SectionLCRB.jsx'
import { SectionSingle } from '../../Components/SectionSingle/SectionSingle.jsx'
import { RightBlock } from '../../Components/SectionDouble/RightBlock.jsx'

//images

import arrival_mobile_logo from '../../Project/Images/Home/arrival_mobile_logo.svg'
import arrival_web_logo from '../../Project/Images/Home/arrival_web_logo.svg'
import bg_arrival_mob_main from '../../Project/Images/Home/bg_arrival_mob_main.png'
import bg_arrival_web_main from '../../Project/Images/Home/bg_arrival_web_main.png'
import bg_vtb_mob_main from '../../Project/Images/Home/bg_vtb_mob_main.png'
import device_arrival_mob_main from '../../Project/Images/Home/device_arrival_mob_main.png'
import device_arrival_web_main from '../../Project/Images/Home/device_arrival_web_main.png'
import device_mob_vtb from '../../Project/Images/Home/device_mob_vtb.png'
import read_button from '../../Project/Images/Home/read_button.svg'
import vtb_logo from '../../Project/Images/Home/vtb_logo.svg'

import bg_hero_arival_mob from '../../Project/Images/Mobile project/bg_hero_arival_mob.png'
import devices_plane_arival_mob from '../../Project/Images/Mobile project/devices_plane_arival_mob 5.png'

const HomePage = () => {
  return (
    <>
      <SectionDouble
        rightBlock={[
          <RightBlock
            minHeight="100vh"
            imageHeader={arrival_web_logo}
            backgroundImage={bg_arrival_web_main}
            image={device_arrival_web_main}
            button={read_button}
            to="/arival-web"
            text="Revamped a digital bank's web app. 48% improved usability, 52% higher CSAT, and a 271% increase in clients."
          />,
          <RightBlock
            minHeight="100vh"
            imageHeader={arrival_mobile_logo}
            backgroundImage={bg_arrival_mob_main}
            image={device_arrival_mob_main}
            button={read_button}
            to="/arival-mobile"
            text="Designed a digital bank's mobile app. Overall bank conversion increased by 10% and clients increased by 54%."
          />,
          <RightBlock
            minHeight="100vh"
            imageHeader={vtb_logo}
            backgroundImage={bg_vtb_mob_main}
            image={device_mob_vtb}
            button={read_button}
            to="/vtb-bank"
            text="Played a key role in the development of the business mobile banking application, with an audience of > 3 million people."
          />,
        ]}
      />
    </>
  )
}

export { HomePage }
