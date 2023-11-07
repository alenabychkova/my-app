// import { Routes, Route, Link } from 'react-router-dom'
import '../../App.css'
import { Section } from '../../Components/SectionSimple/SectionSimple.jsx'
import { TextBlock } from '../../Components/Section/TextBlock.jsx'
import { PictureElement } from '../../Components/PictureElement/PictureElement.jsx'
import { ImageElement } from '../../Components/ImageElement/ImageElement.jsx'
import { CenterBlock } from '../../Components/CentralBlockSimple/CentralBlockSimple.jsx'
import Navbar from '../../Components/NavBar'
import { IphoneGraphicBlock } from '../../Archive/IphoneGraphicBlock/IphoneGraphicBlock.jsx'
import { SectionLCR } from '../../Components/Section LCR/Section LCR.jsx'
import { IphoneBlock } from '../../Components/iPhoneBlock/iPhoneBlock.jsx'
//images
import st_phase_redesign_plan from '../../Project/Images//Web project/1st_phase_redesign_plan.png'
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

const ArivalWeb = () => {
  return (
    <main>
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="h2" text="Overview" />,
          <TextBlock textBlockType="h4" text="Context" />,
          <TextBlock
            textBlockType="p"
            text="When I joined the company, the prior web application version had recently been launched for testing and was in preparation for a wider release in a few months. The CEOs were dissatisfied with the app’s quality, and the customer experience team received a lot of negative feedback from the test users.
            "
          />,
          <TextBlock textBlockType="h4" text="My role" />,
          <TextBlock
            textBlockType="p"
            text="80% of the time I worked as the solo designer on this project. In the final month, a second designer joined me to accelerate the development preparations, which included creating some of the
            UI kit components and additional scenarios. I supervised and managed both these tasks."
          />,
          <TextBlock textBlockType="h4" text="Project goals" />,
          <TextBlock
            textBlockType="p"
            text="- A full-scale application revamp"
          />,
          <TextBlock textBlockType="p" text="- New visual stylle" />,
          <TextBlock textBlockType="p" text="- NewUIkit" />,
        ]}
        bottomBlock={[]}
      />
      ,
      <SectionLCR
        centerBlock={[<TextBlock textBlockType="h2" text="Process" />]}
        bottomBlock={[
          <PictureElement
            backgroundImage={process_blurred_bg}
            image={process_steps}
            overflowImage={puzzle}
          />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 1" />,
          <TextBlock
            textBlockType="h2"
            text="Stakeholders interviews
          "
          />,
          <TextBlock
            textBlockType="p"
            text="I conducted a series of calls with the design team, C-level executives, and the customer support lead. What I aimed to understand:
          "
          />,
          <TextBlock
            textBlockType="p"
            text="- Business goals (History, background, vision for the product, context"
          />,
          <TextBlock
            textBlockType="p"
            text="- Current beliefs about users (Customer segments, feedback, research data)"
          />,
          <TextBlock
            textBlockType="p"
            text="- Gather their concerns about the current applicatio;"
          />,
          <TextBlock
            textBlockType="p"
            text="- Understand competitors and potential market challenge4"
          />,
          <TextBlock
            textBlockType="p"
            text="- Constraints (Technical, financial, organizational)
          "
          />,
        ]}
        bottomBlock={[]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 2" />,
          <TextBlock
            textBlockType="h2"
            text="App mind map
        "
          />,
          <TextBlock
            textBlockType="p"
            text="Before I started any research or improvements suggestion, I built an existing app mind map, showing the mix of the app architecture and user flows, in order to understand the structure of the product, current workflow and target opportunities for improvement."
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="v1" borderRadius="r1" image={mind_map} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 3" />,
          <TextBlock textBlockType="h3" text="Heuristic evaluation" />,
          <TextBlock
            textBlockType="p"
            text="I analyzed the existing solution to delve deeper into the product’s functionality. As a full web app rework is time-consuming,
            I identified quick improvements and tweaks. The aim was
            to temporarily enhance the current app’s appeal to customers and investors while also engaging the design team with tasks.
            "
          />,
          <TextBlock
            textBlockType="h4"
            text="️Illogical information architecture"
          />,
          <TextBlock
            textBlockType="p"
            text="The app structure was inconvenient at all levels. Dashboard, feature sections, entry points, as well as the organization of blocks, cards, and their content, did not consider the real value of the provided information for the user. Some important features and screens were difficult to find, and the information presented was not always clear."
          />,
          <TextBlock textBlockType="h4" text="️Unscalable structure" />,
          <TextBlock
            textBlockType="p"
            text="Adding new features caused challenges for the design and development teams, resulting in inefficient use of resources.
            As a result, the final location of features was often illogical or hard to find."
          />,
          <TextBlock textBlockType="h4" text="️High cognitive load" />,
          <TextBlock
            textBlockType="p"
            text="Regarding UX many flows and scenarios were overloaded and unclear.
            "
          />,
          <TextBlock
            textBlockType="h4"
            text="️Unsophisticated user interface"
          />,
          <TextBlock
            textBlockType="p"
            text="There were numerous inconsistencies, insufficient color contrast, and small, hard-to-read fonts. Overall, the design gave the impression
            of a draft rather than a finished product.
            "
          />,
        ]}
        bottomBlock={[]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="t" text="Step 4" />,
          <TextBlock textBlockType="h3" text="User research" />,
          <TextBlock
            textBlockType="p"
            text="I focus on keeping users at the center of UX/UI solutions. Analyzing extensive data on Arival’s current and potential customers was essential before the design phase. This research aimed to understand what users perceive as «simple», their expectations, abilities, limitations, and their perception of the existing product.
            "
          />,
          <TextBlock textBlockType="h4" text="️Discovery calls & interviews" />,
          <TextBlock
            textBlockType="p"
            text="In this stage, we interviewed prospective clients and external respondents to gather insights into their needs and expectations, providing valuable information about pain points, preferences, and desired features. I then synthesized data across customer segments, creating diagrams to identify common patterns and generate pain points, gains, and needs.
            "
          />,
          <TextBlock
            textBlockType="h4"
            text="️Usability testing
          "
          />,
          <TextBlock
            textBlockType="p"
            text="I assisted our UX researcher in formulating a testing plan outlining participant tasks and performance metrics. During the testing weeks, the UX researcher and I took turns conducting the calls.

            Typical testing session process:"
          />,
          <TextBlock
            textBlockType="p"
            text="1. Introduction: Introducing Arival, clarifying call objectives, and outlining the agenda)"
          />,
          <TextBlock
            textBlockType="p"
            text="2.Pre-task questions: Gathering details about the respondent's company, its geographic reach, and their banking experience."
          />,
          <TextBlock
            textBlockType="p"
            text="3.Task completion: Participants perform app-related tasks while we observe their interactions and document any errors or points of confusion."
          />,
          <TextBlock
            textBlockType="p"
            text="4.Feedback gathering: Collecting feedback on their overall experience."
          />,
        ]}
        bottomBlock={[]}
      />
      ,
      <SectionLCR
        bottomBlock={[<ImageElement maxWidth="v1" image={old_app_ut} />]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="h4"
            text="Competitive and feature analysis
          "
          />,
          <TextBlock
            textBlockType="p"
            text="I conducted a competitive analysis to identify the strengths and weaknesses of other financial and banking solutions. This step helped in designing a competitive solution while putting ourselves in the user’s shoes and avoiding unnecessary reinvention of the wheel.
          "
          />,
        ]}
      />
      ,
      <SectionLCR
        bottomBlock={[
          <ImageElement maxWidth="v1" image={competitive_research} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="h4"
            text="User research key findings
        "
          />,
          <TextBlock
            textBlockType="p"
            text="The UX researcher and I synthesized research data and presented it to the team. Subsequently, we conducted a workshop to determine which pain points and needs we could address in the current redesign project and which ones we would tackle in future projects.

        "
          />,
          <TextBlock
            textBlockType="h5"
            text="User types by main need

        "
          />,
          <TextBlock textBlockType="p" text="Operate globally" />,
          <TextBlock textBlockType="p" text="Crypto-friendly bank" />,
          <TextBlock textBlockType="p" text="More convenient / digital bank" />,
          <TextBlock textBlockType="h5" text="Needs & goals" />,
          <TextBlock
            textBlockType="p"
            text="Global bank for cross-border clients, inexpensive international wires with no issues, cards with spending limits, cryptocurrency support, different permissions for different people, multiple accounts, invoicing, integrations, payroll for employees."
          />,
          <TextBlock
            textBlockType="h5"
            text="Pain points
        "
          />,
          <TextBlock
            textBlockType="p"
            text="
            International wires issues, high fees, hidden fees, one account isn’t enough, rejected by banks, complicated interface, difficult to match a payment with a customer, inconvenient to keep track of expenses, lack of features.
        "
          />,
          <TextBlock
            textBlockType="h5"
            text="Banks & other financial tools
          "
          />,
          <TextBlock
            textBlockType="p"
            text="Revolut, Wise, Chase, JP Morgan, Brex, Capital One, Citizens, Celsius, Wells Fargo, PNC, Silvergate, Metropolitan Bank, Aspire, Wave, TD Bank, Robinhood, Coinbase, Mercury"
          />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="t"
            text="Step 5
      "
          />,
          <TextBlock
            textBlockType="h3"
            text="Ideation & Prototypes
      "
          />,
          <TextBlock
            textBlockType="h4"
            text="Defining the importance of flows and screens
      "
          />,
          <TextBlock
            textBlockType="p"
            text="For the sake of speed and efficiency, the redesign was planned to be carried out in 3 stages:
            "
          />,
          <TextBlock
            textBlockType="p"
            text="1. Full redesign of the most important task flows and screens"
          />,
          <TextBlock
            textBlockType="p"
            text="2.The remaining, less critical part of the app was initially planned
            to be redesigned from a UI perspective first, followed by UX and
            structural redesign after some time"
          />,
          <TextBlock
            textBlockType="p"
            text="3. Non-existent features that planned to be created in the near future after the redesign.
            
        "
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="v1" image={st_phase_redesign_plan} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="h4"
            text="App architecture
      "
          />,
          <TextBlock
            textBlockType="p"
            text="мы делали информационную эпп и юзер флоу . чем все это отличается..."
          />,
        ]}
        bottomBlock={[
          <ImageElement maxWidth="v1" image={information_architecture} />,
        ]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="h4"
            text="Sketches & Wireframes
    "
          />,
          <TextBlock
            textBlockType="p"
            text="Prioritizing information hierarchy and app structure over UI details at this point is crucial for a well-structured interface. Wireframes allow rapid iteration due to their low-fidelity representation. They facilitate experimenting with layouts and concepts, gathering early feedback.
          "
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="v1" image={wireframes} />]}
      />
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="h4"
            text="Visual design establishment and UT prototype
  "
          />,
          <TextBlock
            textBlockType="p"
            text="After exploring various iterations of ideas, it was time to design final- looking visual layouts and prepare them for the usability test.

        "
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="v1" image={mid_designs} />]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="t"
            text="Step 6
"
          />,
          <TextBlock
            textBlockType="h3"
            text="New solution validation
"
          />,
          <TextBlock
            textBlockType="p"
            text="Before reworking the rest of the application, we needed to be 100% sure that the new application performed and fulfilled users' needs better than the old one. I created success metrics for testing the updated design, and in collaboration with the UX researcher,
            we developed a methodology."
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="v1" image={old_new_ut} />]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock
            textBlockType="t"
            text="Step 7
"
          />,
          <TextBlock
            textBlockType="h3"
            text="Polishing & Handoff

"
          />,
          <TextBlock
            textBlockType="h4"
            text="UI-kit and style guide finalization
"
          />,
          <TextBlock
            textBlockType="p"
            text="I aimed for user feelings of trust, control, and clarity in our app, while also striving for an unconventional, boundary-pushing interface that aligns with Arival’s brand. I chose moderately soft forms, blueish backgrounds, fonts, and primary colors for a sense of calm. Gradients and illustrations (by another designer) were added for the desired 'abnormal' touch."
          />,
          <TextBlock
            textBlockType="h4"
            text="Dev handoff & Result testing
"
          />,
          <TextBlock
            textBlockType="p"
            text="A series of meetings were conducted with the analytics and development teams to showcase the new solutions throughout the redesign process and upon completion.

            After finalizing the designs, they were handed over to the analytics team to provide detailed development specifications. Subsequently, we conducted weekly calls with the development and analytics teams to address any questions that arose during the development phase.
            
            Once the development of a specific feature was completed, thorough testing was conducted to ensure that the implementation aligned with the intended design.
            "
          />,
        ]}
        bottomBlock={[<ImageElement maxWidth="v1" image={ui_kit} />]}
      />
      ,
      <SectionLCR
        centerBlock={[
          <TextBlock textBlockType="h2" text="Results" />,
          <TextBlock
            textBlockType="p"
            text="In eight months I successfully conceptualized, delivered and tested a comprehensive mobile app design along with web UI kit."
          />,
          <TextBlock
            textBlockType="h4"
            text="Successful launch
          "
          />,
          <TextBlock
            textBlockType="p"
            text="In eight months I successfully conceptualized, delivered and tested a comprehensive mobile app design along with web UI kit."
          />,
          <TextBlock textBlockType="h4" text="Valuable insights" />,
          <TextBlock
            textBlockType="p"
            text="Our extensive and meticulous research yielded crucial information about our customers, which not only educated the team about our users but also significantly influenced future solutions."
          />,
          <TextBlock textBlockType="h4" text="Metrics improvement" />,
          <TextBlock
            textBlockType="p"
            text="Usability metrics were improved by 48% and customer satisfaction increased by 70%"
          />,
          <TextBlock
            textBlockType="h4"
            text="Improved information architecture and structure:
          "
          />,
          <TextBlock
            textBlockType="p"
            text="The app's structure and architecture were entirely restructured and enhanced, addressing previous issues of inconvenience and scalability. The redesign resulted in a more scalable and efficient design, benefitting all sides — users, design and development teams."
          />,
        ]}
        bottomBlock={
          [
            // <PictureElement
            // backgroundImage={processBg}
            // image={Steps}
            // overflowImage={PlaneSEPA2}
            // />,
          ]
        }
      />
    </main>
  )
}

export default ArivalWeb
