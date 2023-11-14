import '../../App.css'
import { TextElement } from '../../Components/TextElement/TextElement.jsx'
import { ImageTD } from '../../Components/TextElement/TextDetails/ImageTD/ImageTD.jsx'
import { ImageBOElement } from '../../Components/ImageBOElement/ImageBOElement.jsx'
import { ImageElement } from '../../Components/ImageElement/ImageElement.jsx'
import { SectionLCRB } from '../../Components/SectionLCRB/SectionLCRB.jsx'
import { SectionSingle } from '../../Components/SectionSingle/SectionSingle.jsx'
import Navbar from '../../Components/NavBar/NavBar'
import { ImageCenterElement } from '../../Components/ImageCenterElement/ImageCenterElement.jsx'

// images
import arrival_mobile_logo from '../../Project/Images/arrival_mobile_logo.svg'
import competitive_research from '../../Project/Images/Mobile project/competitive_research.png'
import information_architecture from '../../Project/Images/Mobile project/information_architecture.png'
import prototype from '../../Project/Images/Mobile project/prototype.png'
import results from '../../Project/Images/Mobile project/results.png'
import user_stories from '../../Project/Images/Mobile project/user_stories.png'
import ut_mobile from '../../Project/Images/Mobile project/ut_mobile.png'
import wireframes from '../../Project/Images/Mobile project/wireframes.png'
import bg_hero_arival_mob from '../../Project/Images/Mobile project/bg_hero_arival_mob.png'
import devices_plane_arival_mob from '../../Project/Images/Mobile project/devices_plane_arival_mob 7.png'
import processBg from '../../Project/Images/processBg.png'
import Steps from '../../Project/Images/Steps.svg'
import PlaneSEPA2 from '../../Project/Images/Plane_SEPA.png'
import metrics_mob from '../../Project/Images/metrics_mob.svg'
import metrics_web from '../../Project/Images/metrics_web.svg'
import bg_process_mobile from '../../Project/Images/Mobile project/bg_process_mobile.png'
import steps_mobile from '../../Project/Images/Mobile project/steps_mobile.svg'
import bg_results from '../../Project/Images/Mobile project/bg_results.png'

import Step_1 from '../../Project/Images/Steps/step_1.svg'
import Step_2 from '../../Project/Images/Steps/step_2.svg'
import Step_3 from '../../Project/Images/Steps/step_3.svg'
import Step_4 from '../../Project/Images/Steps/step_4.svg'
import Step_5 from '../../Project/Images/Steps/step_5.svg'
import Step_6 from '../../Project/Images/Steps/step_6.svg'
import Step_7 from '../../Project/Images/Steps/step_7.svg'

import Rectangle from '../../Project/Images/Mobile project/Rectangle 3228.png'

const ArivalMobile = () => {
  return (
    <main>
      <Navbar />
      <SectionSingle
        minHeight="100vh"
        backgroundImage={bg_hero_arival_mob}
        children={[
          <SectionLCRB
            centerBlock={[
              <ImageCenterElement height="38px" image={arrival_mobile_logo} />,
              <TextElement
                textAlign="center"
                textElementType="p"
                text="Designed a digital bank's mobile app. Overall bank conversion increased by 10% and clients increased by 54%."
              />,
            ]}
            bottomBlock={[
              <ImageElement maxWidth="c" image={devices_plane_arival_mob} />,
            ]}
          />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement textElementType="h2" text="Overview" />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Opportunity:</strong> One of the top needs for Arrival
                clients was to have a mobile application to be able to access
                their finances on the go.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>My role:</strong> Lead and solo designer — discovery,
                user research, interactions, visual design, UI kit, testing.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Project deliverables :</strong> Create mobile
                application and design system for iOS and Android"
              </>
            }
          />,
        ]}
      />
      <SectionLCRB
        centerBlock={[<TextElement textElementType="h2" text="Process" />]}
        bottomBlock={[
          <ImageBOElement
            width="d"
            borderRadius="r1"
            backgroundImage={bg_process_mobile}
            image={steps_mobile}
            overflowImage={PlaneSEPA2}
          />,
        ]}
      />
      ,
      <SectionLCRB
        centerBlock={[
          // <TextElement textElementType="e" text="Step 1" />,
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_1} />]}
            textElementType="h3"
            text="Research & Explorations
        "
          />,
          <TextElement
            textElementType="p"
            text="Since primary research was conducted during the web app project, there was no need to duplicate it, and I dove right into competitive and feature analysis."
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Competitive UX research:</strong> I was already well
                aware of fintech and bank mobile applications' UX/UI from my
                previous project at VTB Bank, which was related to this type of
                mobile apps. Nonetheless, I needed to gather more references
                from US and European banks.
              </>
            }
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="d" image={competitive_research} />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_2} />]}
            textElementType="h3"
            text="Features prioritization
      "
          />,
          <TextElement
            textElementType="p"
            text="With the CEO and CTO, we conducted a couple of calls to establish the prioritization of features and flows creation. We discussed which functions from the web application we can omit in the mobile application for now and what we should definitely include.
          I documented all mandatory functions as user stories right during the call.
          "
          />,
        ]}
        bottomBlock={[
          <ImageElement borderRadius="r1" maxWidth="d" image={user_stories} />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_3} />]}
            textElementType="h3"
            text="App architecture
    "
          />,
          <TextElement
            textElementType="p"
            text="Afterward, I created an app information architecture with the features selected for the 1st iteration of the app."
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="d" image={information_architecture} />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_4} />]}
            textElementType="h3"
            text="Ideation & Prototype
  "
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Wireframes:</strong> I always start the design stage
                with hand-drawn wireframes on paper. This is the quickest way to
                iterate through ideas without delving into too much detail and
                visual design. This project is no exception — while rapidly
                sketching, I tried various structure and hierarchy options and
                efficiently found the best one.
              </>
            }
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="d" borderRadius="r1" image={wireframes} />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>High-fidelity design & UT prototype:</strong> To
                transform conceptual ideas into tangible and visually engaging
                representations, I began by exploring a range of visual
                concepts. After determining the desired direction, I proceeded
                to create UI kit components and design layouts for usability
                testing. To validate the design and gather user feedback,
                I developed a high-fidelity prototype.
              </>
            }
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="d" borderRadius="" image={prototype} />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_5} />]}
            textElementType="h3"
            text="Usability testing

  "
          />,
          <TextElement
            textElementType="p"
            text="I partnered with the UX researcher to create a plan for testing the app with 10 participants. The plan included tasks for participants and performance metrics."
          />,
          <TextElement
            textElementType="p"
            text="During the testing weeks, the UX researcher and I took turns conducting the calls (one conducted by her, and the other by me).
        At the beginning of each call, we asked pre-task questions to break the ice and gather information about the respondent company’s basic details, geographic reach, and business banking experience. We then asked participants to complete a series of tasks using the app while observing their interactions and documenting any issues
        or confusions. After each testing session, we debriefed the participant and solicited feedback on their app experience. We also reviewed the recordings and session notes to spot common issues or behavioral patterns among participants."
          />,
          <TextElement
            textElementType="p"
            text="The testing showed that design was clear and user friendly in most of the aspects.
      "
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="d" image={ut_mobile} />]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_6} />]}
            textElementType="h3"
            text="Polishing & Handoff
"
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>UI kit and style guide for iOS and Android.</strong> As
                the app was going to be developed separately for iOS and Android
                platforms, not as a cross-platform app, I created UI kits for
                both platforms in adherence to their respective design
                guidelines, following the Human Interface Guidelines (HIG) for
                iOS and Material Design (MD) guidelines for Android.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text="In terms of visual design, my aim was to evoke user feelings of trust, control, and clarity within our app. Simultaneously, I strived
          to develop an innovative and boundary-pushing interface that aligns seamlessly with Arrival’s brand."
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Dev preparation & handoff:</strong> I had weekly calls
                with the analytics and development teams to keep them up to date
                during the design process and receive their valuble feedback as
                soon as possible. After all final Hi-Fi layouts were finished
                and approved by the higher management, they were handed over to
                the dev team so that they could start their work. Once the
                development of a specific feature was completed, I conducted
                thorough testing to ensure that the implementation aligned with
                the intended design.    
              </>
            }
          />,
          <TextElement textElementType="p" text={<>   </>} />,
        ]}
      />
      <SectionSingle
        minHeight="100vh"
        backgroundImage={bg_results}
        children={[
          <SectionLCRB
            centerBlock={[
              <TextElement
                textAlign="center"
                textElementType="h2"
                text="Results"
              />,
              <ImageCenterElement image={metrics_mob} />,
              <TextElement
                textElementType="p"
                text={
                  <>
                    <span style={{ fontWeight: 600, color: '#fff' }}>
                      Successful launch:
                    </span>{' '}
                    In five months I successfully conceptualized, delivered and
                    tested a comprehensive mobile app design along with design
                    system for iOS and Android platforms.
                  </>
                }
              />,
              <TextElement
                textElementType="p"
                text={
                  <>
                    <span style={{ fontWeight: 600, color: '#fff' }}>
                      Addressed a key user need:
                    </span>{' '}
                    Customers highly anticipated the mobile app, and each found
                    its interface intuitive and effortless, streamlining their
                    banking procedures. As a result, we achieved a notable 10%
                    increase in the overall bank conversion rate.
                  </>
                }
              />,
            ]}
            bottomBlock={[<ImageBOElement width="full" image={results} />]}
          />,
        ]}
      />
    </main>
  )
}

export default ArivalMobile

// rightBlock={<IphoneGraphicBlock />}
