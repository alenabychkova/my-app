// import { Routes, Route, Link } from 'react-router-dom'
import '../../App.css'

import { TextElement } from '../../Components/TextElement/TextElement.jsx'
import { ImageBOElement } from '../../Components/ImageBOElement/ImageBOElement.jsx'
import { ImageElement } from '../../Components/ImageElement/ImageElement.jsx'
import { SectionLCRB } from '../../Components/SectionLCRB/SectionLCRB.jsx'
import Navbar from '../../Components/NavBar/NavBar'
import { SectionSingle } from '../../Components/SectionSingle/SectionSingle.jsx'
import { ImageTD } from '../../Components/TextElement/TextDetails/ImageTD/ImageTD.jsx'
import { ImageCenterElement } from '../../Components/ImageCenterElement/ImageCenterElement.jsx'
import { BeforeAfter } from '../../Components/BeforeAfter/BeforeAfter.jsx'
//images

import what_can_address from '../../Project/Images//Web project/what_can_address.png'
import bg_hero_arival_web from '../../Project/Images//Web project/bg_hero_arival_web.png'
import st_phase_redesign_plan from '../../Project/Images//Web project/1st_phase_redesign_plan.png'
import arrival_web_logo from '../../Project/Images/Home/arrival_web_logo.svg'
import device_arival_web from '../../Project/Images//Web project/device_arival_web.png'
import competitive_research from '../../Project/Images//Web project/competitive_research.png'
import information_architecture from '../../Project/Images//Web project/information_architecture.png'
import mid_designs from '../../Project/Images//Web project/mid_designs.png'
import mind_map from '../../Project/Images//Web project/mind_map.png'
import old_app_ut from '../../Project/Images//Web project/old_app_ut.png'
import old_new_ut from '../../Project/Images//Web project/old_new_ut.png'
import process_blurred_bg from '../../Project/Images//Web project/process_blurred_bg.png'
import process_steps from '../../Project/Images//Web project/process_steps.svg'
import puzzle from '../../Project/Images//Web project/puzzle.png'
import ui_kit from '../../Project/Images//Web project/ui_kit.png'
import wireframes from '../../Project/Images//Web project/wireframes.png'
import metrics_web from '../../Project/Images/Web project/metrics_web.svg'

import home_old from '../../Project/Images//Web project/home_old.png'
import home_new from '../../Project/Images//Web project/home_new.png'
import bg_black from '../../Project/Images/Web project/bg_black.svg'
import bg_results_web from '../../Project/Images//Web project/bg_results_web.png'

import teammates_old from '../../Project/Images//Web project/teammates_old.png'
import teammates_new from '../../Project/Images//Web project/teammates_new.png'
import transactions_old from '../../Project/Images//Web project/transactions_old.png'
import transactions_new from '../../Project/Images//Web project/transactions_new.png'
import analytics_old from '../../Project/Images//Web project/analytics_old.png'
import analytics_new from '../../Project/Images//Web project/analytics_new.png'

import devices_results from '../../Project/Images//Web project/devices_results 2.png'

import needs_pains_tags from '../../Project/Images/Web project/needs_pains_tags.svg'

import Step_1 from '../../Project/Images/Steps/step_1.svg'
import Step_2 from '../../Project/Images/Steps/step_2.svg'
import Step_3 from '../../Project/Images/Steps/step_3.svg'
import Step_4 from '../../Project/Images/Steps/step_4.svg'
import Step_5 from '../../Project/Images/Steps/step_5.svg'
import Step_6 from '../../Project/Images/Steps/step_6.svg'
import Step_7 from '../../Project/Images/Steps/step_7.svg'

import exclamation from '../../Project/Images/Web project/exclamation.svg'
import star from '../../Project/Images/Web project/star.svg'
import circle from '../../Project/Images/Web project/circle.svg'

const ArivalWeb = () => {
  return (
    <main>
      <Navbar />
      <SectionSingle
        minHeight="100vh"
        backgroundImage={bg_hero_arival_web}
        children={[
          <SectionLCRB
            centerBlock={[
              <ImageCenterElement height="38px" image={arrival_web_logo} />,
              <TextElement
                textAlign="center"
                textElementType="p"
                text="Revamped a digital bank's web app. 48% improved usability, 52% higher CSAT, and a 271% increase in clients."
              />,
            ]}
            bottomBlock={[
              <ImageElement maxWidth="lcr" image={device_arival_web} />,
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
                <strong>Context:</strong> Arrival Bank is a digital bank for
                global businesses and startups across the world. When I joined
                the company, the prior web app version had recently been
                launched. The CEOs were dissatisfied with the app’s quality, and
                the CX team received a lot of negative feedback from the users.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Primary challenge:</strong> clarifying and communicating
                the need for a complete redesign.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                The key issue was{' '}
                <strong>the absence of a UX strategy and vision</strong>.
                The design process was flawed, often skipping the research
                phase. As a result, the design team lacked a solid understanding
                of users and their needs, and the usability of solutions was
                never assessed, leading to a poor user experience.
              </>
            }
          />,

          <TextElement
            textElementType="p"
            text={
              <>
                In this context, I took the initiative,{' '}
                <strong>
                  proactively leading a comprehensive revamp project
                </strong>{' '}
                with a proper design thinking process and{' '}
                <strong>establishing a UX strategy for the product</strong>.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>My role:</strong> 80% of the time I was the solo
                designer. In the final month, a second designer
                joined to accelerate the development preparations under my
                supervision.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text="I collaborated with UX researcher, CEO, CTO, engineering lead, engineers, copywriter, back office designer, back office PM and other stakeholders."
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Deliverables:</strong> A full-scale application revamp,
                New visual style, New UI kit.
              </>
            }
          />,
        ]}
        bottomBlock={[]}
      />
      <SectionLCRB
        centerBlock={[<TextElement textElementType="h2" text="Process" />]}
        bottomBlock={[
          <ImageBOElement
            width="d"
            borderRadius="r1"
            backgroundImage={process_blurred_bg}
            image={process_steps}
            overflowImage={puzzle}
          />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_1} />]}
            textElementType="h3"
            text="Stakeholders interviews
          "
          />,
          <TextElement
            textElementType="p"
            text="I started with questions for the design team, C-level executives, and the customer support lead to understand:
          "
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Business goals (History, background, vision for the product, context)"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Current beliefs about users (Customer segments, feedback, research data)"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Gather their concerns about the current application"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Understand competitors and potential market challenges"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Constraints (Technical, financial, organizational)
          "
          />,
        ]}
        bottomBlock={[]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_2} />]}
            textElementType="h3"
            text="Old app mind map
        "
          />,
          <TextElement
            textElementType="p"
            text="I built an existing app mind map, showing the mix of the app architecture and user flows, in order to understand the structure of the product, current workflow and target opportunities for improvement."
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="d" borderRadius="r1" image={mind_map} />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_3} />]}
            textElementType="h3"
            text="Heuristic evaluation"
          />,
          <TextElement
            textElementType="p"
            text="I analyzed the existing solution to delve deeper into the product’s functionality. As a full web app rework is time-consuming, I identified quick improvements and tweaks. The aim was to temporarily enhance the current app’s appeal to customers and investors while also engaging the design team with tasks.
            "
          />,
          <TextElement
            textElementType="p"
            textDetail={[
              <ImageTD size="20px" margin="3.5px" image={exclamation} />,
            ]}
            text={
              <>
                <strong>Illogical information architecture:</strong> The app
                structure was inconvenient at all levels. Dashboard, feature
                sections, entry points, as well as the organization of blocks,
                cards, and their content, did not consider the real value of the
                provided information for the user. Some important features and
                screens were difficult to find, and the information presented
                was not always clear.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            textDetail={[
              <ImageTD size="20px" margin="3.5px" image={exclamation} />,
            ]}
            text={
              <>
                <strong>Unscalable structure:</strong> Adding new features
                caused challenges for the design and development teams,
                resulting in inefficient use of resources. As a result, the
                final location of features was often illogical or hard to find.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            textDetail={[
              <ImageTD size="20px" margin="3.5px" image={exclamation} />,
            ]}
            text={
              <>
                <strong>High cognitive load:</strong> Regarding UX many flows
                and scenarios were overloaded and unclear.
              </>
            }
          />,

          <TextElement
            textElementType="p"
            textDetail={[
              <ImageTD size="20px" margin="3.5px" image={exclamation} />,
            ]}
            text={
              <>
                <strong>Unsophisticated user interface:</strong> There were
                numerous inconsistencies, insufficient color contrast, and
                small, hard-to-read fonts. Overall, the design gave the
                impression of a draft rather than a finished product.
              </>
            }
          />,
        ]}
        bottomBlock={[]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_4} />]}
            textElementType="h3"
            text="User research"
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                I initiated my research by conducting a{' '}
                <strong>competitive analysis</strong> to understand the
                approaches of the similar fintech applications. I also wanted to
                identify functional and usability gaps by exploring alternative
                solutions.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                Then I partnered with a UX researcher to conduct extensive
                primary research. <strong>Discovery interviews</strong> provided
                valuable insights into our target users' pain points,
                preferences, and desired features. Lastly,{' '}
                <strong>usability testing</strong> helped identify specific
                issues within the current solution.
              </>
            }
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="d" image={old_app_ut} />]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textElementType="h4"
            text="Key findings
        "
          />,
          <TextElement
            textElementType="p"
            text="I identified three main user types based on their primary need."
          />,
          <TextElement
            textDetail={[<ImageTD size="20px" margin="1px" image={star} />]}
            textElementType="h5"
            text="User type #1 — needs global bank account"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Wants a single bank that could follow them across different countries, rather than using multiple solutions in each country."
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Thinks that sending international wires is tricky and expensive."
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Needs to be able to open multiple accounts with various currencies and needs an exchange mechanism."
          />,
          <TextElement
            textDetail={[<ImageTD size="18px" margin="7px" image={star} />]}
            textElementType="h5"
            text="User type #2 — needs crypto friendly bank"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Rejected by banks due to restrictions"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="The ability to store crypto and make crypto to fiat transactions is crucial"
          />,
          <TextElement
            textDetail={[<ImageTD size="18px" margin="7px" image={star} />]}
            textElementType="h5"
            text="User type #3 — needs more convenient bank"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Wants digital online bank"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Needs fallback solution to reduce risks"
          />,
          <TextElement
            textDetail={[<ImageTD size="13px" margin="7px" image={circle} />]}
            textElementType="p"
            text="Experienced frustrating log outs, disconnections from integrations, customer support issues"
          />,
          <TextElement
            textElementType="h5"
            text={
              <>
                Other mutual <span style={{ color: '#ed8fc4' }}>pains</span>{' '}
                <span style={{ color: '#f7faff60' }}>&</span>{' '}
                <span style={{ color: '#8fb1ed' }}>needs</span>
              </>
            }
          />,
          <ImageCenterElement image={needs_pains_tags} />,
        ]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>What can we address now?</strong> Many pains, gains and
                user needs uncovered in the research couldn't be resolved
                through design alone due to various business and technical
                restrictions.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text="As a result, I needed to filter out those user insights that I could address from a design and interface perspective."
          />,
          <TextElement
            textElementType="p"
            text="For the remaining issues, scalability had to be considered, in case they could be tackled at a later stage."
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="d" image={what_can_address} />]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_5} />]}
            textElementType="h3"
            text="Ideation & Prototype
      "
          />,

          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Defining the importance of flows and screens:</strong>{' '}
                For the sake of speed and efficiency, the redesign was planned
                to be carried out in 3 stages:
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text="1. Full redesign of the most important task flows and screens."
          />,
          <TextElement
            textElementType="p"
            text="2. The remaining, less critical part of the app was initially planned to be redesigned from a UI perspective first, followed by UX and structural redesign after some time."
          />,
          <TextElement
            textElementType="p"
            text="3. Non-existent features that planned to be created in the near future after the redesign."
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Early design explorations:</strong> Prioritizing
                information hierarchy and app structure over UI details at this
                point is crucial for a well-structured interface. Wireframes
                allow rapid iteration due to their low-fidelity representation.
                They facilitate experimenting with layouts and concepts,
                gathering early feedback.
              </>
            }
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="d" image={wireframes} />]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Visual design establishment and UT prototype:</strong>{' '}
                After exploring various iterations of ideas, it was time
                to design final-looking visual layouts and prepare them for the
                usability test.
              </>
            }
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="d" image={mid_designs} />]}
      />
      ,
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_6} />]}
            textElementType="h3"
            text="New solution validation
"
          />,
          <TextElement
            textElementType="p"
            text="Before reworking the rest of the application, we needed to be 100% sure that the new application performed and fulfilled users' needs better than the old one. I created success metrics for testing the updated design, and in collaboration with the UX researcher, we developed a methodology."
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="d" image={old_new_ut} />]}
      />
      <SectionLCRB
        centerBlock={[
          <TextElement
            textDetail={[<ImageTD size="42px" margin="0px" image={Step_7} />]}
            textElementType="h3"
            text="Polishing & Handoff

"
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>UI kit and style guide finalization:</strong> I aimed
                for user feelings of trust, control, and clarity in our app,
                while also striving for an unconventional, boundary-pushing
                interface that aligns with Arrival’s brand. I chose moderately
                soft forms, blueish backgrounds, fonts, and primary colors for
                a sense of calm. Gradients and illustrations (by another
                designer) were added for the desired 'abnormal' touch.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                <strong>Dev handoff & Result testing: </strong> A series of
                meetings were conducted with the analytics and development teams
                to showcase the new solutions throughout the redesign process
                and upon completion.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                After finalizing the designs, they were handed over to the
                analytics team to provide detailed development specifications.
                Subsequently, we conducted weekly calls with the development and
                analytics teams to address any questions that arose during the
                development phase.
              </>
            }
          />,
          <TextElement
            textElementType="p"
            text={
              <>
                Once the development of a specific feature was completed,
                thorough testing was conducted to ensure that the implementation
                aligned with the intended design.
              </>
            }
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="lcr" image={ui_kit} />]}
      />
      <SectionSingle
        minHeight="100vh"
        backgroundImage={bg_results_web}
        children={[
          <SectionLCRB
            centerBlock={[
              <TextElement
                textAlign="center"
                textElementType="h2"
                text="Results"
              />,
              <ImageCenterElement image={metrics_web} />,

              <TextElement
                textElementType="p"
                text={
                  <>
                    <span style={{ fontWeight: 600, color: '#fff' }}>
                      Successful launch:
                    </span>{' '}
                    In eight months I successfully conceptualized, delivered and
                    tested a comprehensive web application design along with web
                    UI kit.
                  </>
                }
              />,
              <TextElement
                textElementType="p"
                text={
                  <>
                    <span style={{ fontWeight: 600, color: '#fff' }}>
                      Valuable insights:
                    </span>{' '}
                    Our extensive and meticulous research yielded crucial
                    information about our customers, which not only educated the
                    team about our users but also significantly influenced
                    future solutions.
                  </>
                }
              />,
              <TextElement
                textElementType="p"
                text={
                  <>
                    <span style={{ fontWeight: 600, color: '#fff' }}>
                      Improved information architecture and structure:
                    </span>{' '}
                    The app's structure and architecture were entirely
                    restructured and enhanced. The redesign resulted in a more
                    scalable and efficient design, benefitting all sides —
                    users, design and development teams.
                  </>
                }
              />,
            ]}
            bottomBlock={[
              <ImageElement maxWidth="lcr" image={devices_results} />,
            ]}
          />,
        ]}
      />
      <BeforeAfter Background={bg_black} Image={home_old} />
      <BeforeAfter Background={bg_results_web} Image={home_new} />
    </main>
  )
}

export default ArivalWeb
