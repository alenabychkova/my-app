import '../../App.css'
import { TextElement } from '../../Components/TextElement/TextElement.jsx'
import { ImageTD } from '../../Components/TextElement/TextDetails/ImageTD/ImageTD.jsx'
import { ImageBOElement } from '../../Components/ImageBOElement/ImageBOElement.jsx'
import { ImageElement } from '../../Components/ImageElement/ImageElement.jsx'
import { SectionLCRB } from '../../Components/SectionLCRB/SectionLCRB.jsx'
import { SectionSingle } from '../../Components/SectionSingle/SectionSingle.jsx'
import Navbar from '../../Components/NavBar/NavBar'
import { ImageCenterElement } from '../../Components/ImageCenterElement/ImageCenterElement.jsx'

//images
import vtb_results_bg from '../../Project/Images/VTB/vtb_results_bg.png'
import app_architecture_vtb from '../../Project/Images/VTB/app_architecture_vtb.png'
import bg_hero_vtb_mob from '../../Project/Images/VTB/bg_hero_vtb_mob.png'
import devices_vtb_mob from '../../Project/Images/VTB/devices_vtb_mob.png'
import ui_elements from '../../Project/Images/VTB/ui_elements.png'
import vtb_bottom_logo from '../../Project/Images/VTB/vtb_bottom_logo.png'
import vtb_results from '../../Project/Images/VTB/vtb_results.png'
import vtb_logo from '../../Project/Images/Home/vtb_logo.svg'

const VTB = () => {
  return (
    <main>
      <Navbar />
      <SectionSingle
        minHeight="100vh"
        backgroundImage={bg_hero_vtb_mob}
        children={[
          <SectionLCRB
            centerBlock={[
              <ImageCenterElement height="38px" image={vtb_logo} />,
              <TextElement
                textAlign="center"
                textElementType="p"
                text="Played a key role in the development of the business mobile banking application, with an audience of > 3 million people."
              />,
            ]}
            bottomBlock={[
              <ImageElement maxWidth="c" image={devices_vtb_mob} />,
            ]}
          />,
        ]}
      />

      <SectionSingle
        minHeight="100vh"
        backgroundImage={vtb_results_bg}
        children={[
          <SectionLCRB
            centerBlock={[
              <TextElement textElementType="h2" text="Overview" />,
              <TextElement
                textElementType="p"
                text={
                  <>
                    <strong>Context:</strong> VTB Business Lite is a mobile
                    application for entrepreneurs. It is part of a VTB Bank
                    ecosystem, Russian commercial bank.
                  </>
                }
              />,
              <TextElement
                textElementType="p"
                text={
                  <>
                    <strong>My role:</strong> Played a pivotal role in shaping
                    the product's visual direction and UX principles. Created,
                    enhanced, and tested various application flows.
                  </>
                }
              />,
              <TextElement
                textElementType="p"
                text={
                  <>
                    <strong>Project goals:</strong> Mobile application. Modern
                    visual style. UI kits for iOS and Android
                  </>
                }
              />,
            ]}
          />,
          <SectionLCRB
            centerBlock={[
              // <TextElement textElementType="e" text="Step 1" />,
              <TextElement
                textElementType="h2"
                text="Results
          "
              />,
              <TextElement
                textElementType="p"
                text="Throughout the nine months of the project, I designed and tested numerous essential user scenarios that enhanced user experience and increased engagement.
              "
              />,
              <TextElement
                textElementType="p"
                text="I conducted competitive analysis of direct and indirect competitors, created prototypes of various levels of detail, performed user interviews, usability testing, and provided design oversight during implementation. I contributed to the development of iOS and Android UI kits and created animations."
              />,
            ]}
          />,
          <SectionLCRB
            bottomBlock={[
              <ImageElement maxWidth="d" image={app_architecture_vtb} />,
            ]}
          />,
          <SectionLCRB
            bottomBlock={[<ImageElement maxWidth="full" image={ui_elements} />]}
          />,
          <SectionLCRB
            bottomBlock={[<ImageElement maxWidth="full" image={vtb_results} />]}
          />,
        ]}
      />
    </main>
  )
}

export default VTB
