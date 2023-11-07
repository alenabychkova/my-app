// import { Routes, Route, Link } from 'react-router-dom'
import '../../App.css'
import { Section } from '../../Components/SectionSimple/SectionSimple.jsx'
import { TextBlock } from '../../Components/Section/TextBlock.jsx'
import { PictureElement } from '../../Components/PictureElement/PictureElement.jsx'
import { ImageElement } from '../../Components/ImageElement/ImageElement.jsx'
import { CenterBlock } from '../../Components/CentralBlockSimple/CentralBlockSimple.jsx'
import Navbar from '../../Components/NavBar'
import { IphoneGraphicBlock } from '../../Archive/IphoneGraphicBlock/IphoneGraphicBlock.jsx'
import processBg from '../../Project/Images/processBg.png'
import Steps from '../../Project/Images/Steps.svg'
import PlaneSEPA2 from '../../Project/Images/Plane_SEPA.png'
import Main1 from '../../Project/Images/Main1.png'
import { SectionLCR } from '../../Components/Section LCR/Section LCR.jsx'
import { IphoneBlock } from '../../Components/iPhoneBlock/iPhoneBlock.jsx'

// images
import competitive_research from '../../Project/Images/Mobile project/competitive_research.png'
import information_architecture from '../../Project/Images/Mobile project/information_architecture.png'
import prototype from '../../Project/Images/Mobile project/prototype.png'
import results from '../../Project/Images/Mobile project/results.png'
import user_stories from '../../Project/Images/Mobile project/user_stories.png'
import ut_mobile from '../../Project/Images/Mobile project/ut_mobile.png'
import wireframes from '../../Project/Images/Mobile project/wireframes.png'

const ArivalMobile = () => {
  return (
    <main>
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="h2" text="Overview" />,
          <TextBlock textBlockType="h4" text="Opportunity" />,
          <TextBlock
            textBlockType="p"
            text="One of the top needs for both existing and prospective Arival clients was to have a mobile application to be able to access their finances on the go."
          />,
          <TextBlock textBlockType="h4" text="My role" />,
          <TextBlock textBlockType="p" text="Product design, UX research." />,
          <TextBlock textBlockType="h4" text="Project goals" />,
          <TextBlock
            textBlockType="p"
            text="Create mobile application and design system for iOS and Android"
          />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[<TextBlock textBlockType="h2" text="Process" />]}
        bottomBlock={[
          <PictureElement
            backgroundImage={processBg}
            image={Steps}
            overflowImage={PlaneSEPA2}
          />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 1" />,
          <TextBlock
            textBlockType="h3"
            text="Research & Explorations
        "
          />,
          <TextBlock
            textBlockType="p"
            text="Since primary research was conducted during the web app project, there was no need to duplicate it, and I dove right into competitive and feature analysis."
          />,
          <TextBlock textBlockType="h4" text="Competitive UX research" />,
          <TextBlock
            textBlockType="p"
            text="I was already well aware of fintech and bank mobile applications' UX/UI from my previous project at VTB Bank, which was related to this type of mobile apps. Nonetheless, I needed to gather more references from US and European banks.
        "
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="v1" image={competitive_research} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 2" />,
          <TextBlock
            textBlockType="h3"
            text="Features prioritization
      "
          />,
          <TextBlock
            textBlockType="p"
            text="With the CEO and CTO, we conducted a couple of calls to establish the prioritization of features and flows creation. We discussed which functions from the web application we can omit in the mobile application for now and what we should definitely include.
          I documented all mandatory functions as user stories right during the call.
          "
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="v1" image={user_stories} />]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 3" />,
          <TextBlock
            textBlockType="h3"
            text="Information architecture
    "
          />,
          <TextBlock
            textBlockType="p"
            text="Afterward, I created an app information architecture with the features selected for the 1st iteration of the app."
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="v1" image={information_architecture} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 4" />,
          <TextBlock
            textBlockType="h3"
            text="Ideation & Prototype
  "
          />,
          <TextBlock textBlockType="h4" text="Sketches, wireframes" />,
          <TextBlock
            textBlockType="p"
            text="I always start the design stage with hand-drawn wireframes
        on paper. This is the quickest way to iterate through ideas without delving into too much detail and visual design. This project
        is no exception — while rapidly sketching, I tried various structure and hierarchy options and efficiently found the best one.
        "
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="v1" borderRadius="r1" image={wireframes} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="h4"
            text="High-fidelity design & UT prototype
        "
          />,
          <TextBlock
            textBlockType="p"
            text="To transform conceptual ideas into tangible and visually engaging representations, I began by exploring a range of visual concepts. After determining the desired direction, I proceeded to create UI-kit components and design layouts for usability testing. To validate the design and gather user feedback, I developed a high-fidelity prototype.
      "
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="v1" borderRadius="r1" image={prototype} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 5" />,
          <TextBlock
            textBlockType="h3"
            text="Usability testing

  "
          />,
          <TextBlock
            textBlockType="p"
            text="I partnered with the UX researcher to create a plan for testing the app with 10 participants. The plan included tasks for participants and performance metrics."
          />,
          <TextBlock
            textBlockType="p"
            text="During the testing weeks, the UX researcher and I took turns conducting the calls (one conducted by her, and the other by me).
        At the beginning of each call, we asked pre-task questions to break the ice and gather information about the respondent company’s basic details, geographic reach, and business banking experience. We then asked participants to complete a series of tasks using the app while observing their interactions and documenting any issues
        or confusions. After each testing session, we debriefed the participant and solicited feedback on their app experience. We also reviewed the recordings and session notes to spot common issues or behavioral patterns among participants."
          />,
          <TextBlock
            textBlockType="p"
            text="The testing showed that design was clear and user friendly in most of the aspects.
      "
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="v1" image={ut_mobile} />]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 6" />,
          <TextBlock
            textBlockType="h3"
            text="Polishing & Handoff
"
          />,
          <TextBlock
            textBlockType="h4"
            text="UI-kit and style guide for iOS and Android"
          />,
          <TextBlock
            textBlockType="p"
            text="As the app was going to be developed separately for iOS and Android platforms, not as a cross-platform app, I created UI kits for both platforms in adherence to their respective design guidelines, following the Human Interface Guidelines (HIG) for iOS and Material Design (MD) guidelines for Android."
          />,
          <TextBlock
            textBlockType="p"
            text="In terms of visual design, my aim was to evoke user feelings of trust, control, and clarity within our app. Simultaneously, I strived
          to develop an innovative and boundary-pushing interface that aligns seamlessly with Arival’s brand."
          />,
          <TextBlock
            textBlockType="h4"
            text="Dev preparation & handoff
        "
          />,
          <TextBlock
            textBlockType="p"
            text="I had weekly calls with the analytics and development teams to keep them up to date during the design process and receive their valuble feedback as soon as possible. After all final Hi-Fi layouts were finished and approved by the higher management, they were handed over to the dev team so that they could start their work. Once the development of a specific feature was completed, I conducted thorough testing to ensure that the implementation aligned with the intended design.
        "
          />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="h2"
            text="Results

"
          />,
          <TextBlock
            textBlockType="h4"
            text="Successful launch
          "
          />,
          <TextBlock
            textBlockType="p"
            text="In five months I successfully conceptualized, delivered and tested
          a comprehensive mobile app design along with design system for iOS and Android platforms."
          />,
          <TextBlock
            textBlockType="h4"
            text="Covered one of the main user need"
          />,
          <TextBlock
            textBlockType="p"
            text="Our users highly anticipated the mobile app, and each found its interface intuitive and effortless, streamlining their banking procedures. As a result, we achieved a notable 10% increase in the overall bank conversion rate.
          "
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="full" image={results} />]}
      />
    </main>
  )
}

export default ArivalMobile

// rightBlock={<IphoneGraphicBlock />}
