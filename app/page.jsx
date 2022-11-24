// ...
import Image from "next/image"
import Form from "./Form"
import "./globals.css"
import { GiShakingHands, GiArcheryTarget } from "react-icons/gi"
import { BsPiggyBank } from "react-icons/bs"
import { GrFormCheckmark } from "react-icons/gr"

export default function Home() {
  return (
    <div className="page-container">
      {/* video */}
      <div className="top">
        <video
          width="100%"
          height="auto"
          autoPlay={true}
          loop={true}
          muted={true}
          poster="/images/bg.jpg"
          id="bgvid"
        >
          <source src="/assets/SprayFootage.webm" type="video/webm" />
          {/* <source
                src="index_files/SFWWApplicationVideo.mp4"
                type="video/mp4"
              /> */}
        </video>

        {/* form */}
        <div className="form-container">
          <div className="form">
            <Form />
          </div>
          <div className="blob">
            <Image
              src="/images/SFWW_Foamie_Puppet4.png"
              width={544}
              height={510}
              alt="Spray Foam Wizard"
            />
          </div>
        </div>

        {/* section */}

        <section className="section2">
          <div className="section2-top">
            <h1>The most satisfying career you've never heard of.</h1>
            <p>
              Level up your life in the spray foam industry and all your wildest
              dreams will come true.
            </p>
          </div>
          <div className="section2-bottom">
            <div className="section2-bottom-left">
              <GiShakingHands size={75} />
              <h2>Brotherhood</h2>
              <p>Experience the industry brotherhood</p>
            </div>
            <div className="section2-bottom-middle">
              <GiArcheryTarget size={75} />
              <h2>Training</h2>
              <p>Learn the trade and gain construction experience</p>
            </div>
            <div className="section2-bottom-right">
              <BsPiggyBank size={75} />
              <h2>Money</h2>
              <p>Enter a career with high salary potential</p>
            </div>
          </div>
        </section>

        {/* section3 */}
        <div className="section3">
          <div className="section3-left">
            <Image src="/images/carnivalposter.jpg" width={555} height={420} />
          </div>
          <div className="section3-right">
            <h1>What is Spray Foam?</h1>
            <p>
              The demand for new applicants to work in this trade has never been
              higher. So get in now.
            </p>
            <div className="section3-right-list">
              <li>
                <GrFormCheckmark size={20} />
                <p>Non-toxic</p>
              </li>
              <li>
                <GrFormCheckmark size={20} />
                <p>Fire resistant</p>
              </li>
              <li>
                <GrFormCheckmark size={20} />
                <p>Energy efficient</p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
