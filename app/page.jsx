// ...
import Image from "next/image"
import Form from "./Form"
import "./globals.css"

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem
          sapiente, ea ipsam recusandae minus quo odit alias, labore eaque
          repellat tenetur saepe voluptatibus fugit quisquam sunt. Nesciunt ab
          explicabo placeat harum at temporibus, qui magni eius repudiandae
          saepe ipsam enim? Mollitia iure est ullam temporibus velit! Qui hic
          quisquam mollitia necessitatibus accusamus veritatis ipsam accusantium
          dolorem recusandae excepturi ad molestias blanditiis distinctio harum
          fuga suscipit expedita consequuntur, cumque consequatur minima sint,
          animi nihil eveniet facere. Laudantium, dignissimos autem. Sequi
          aliquam quaerat sunt ipsa ipsum cum corporis perspiciatis id amet
          animi possimus corrupti ducimus, delectus, fuga at repellat neque
          velit quis qui necessitatibus. Molestiae adipisci dolor consectetur,
          minus excepturi tempora illum ex numquam debitis, et at non atque
          distinctio facere quisquam sapiente nobis, nisi ullam. Velit debitis
          facilis deserunt asperiores cumque non voluptas illo error, modi,
          voluptatem libero ad quas quibusdam iure enim, perspiciatis ab.
          Quaerat, nemo! Doloremque voluptatum corrupti aut voluptatem ipsum
          voluptates nesciunt ex obcaecati facere eum ab, reprehenderit, quae
          accusantium! Soluta esse dolorem labore molestias repudiandae commodi
          corporis repellat sint autem, dolorum, voluptatum sunt vitae modi,
          doloremque cumque quia. Minima blanditiis minus dicta fuga, expedita
          ipsa totam assumenda deleniti voluptatum nam veniam amet impedit
          corporis quasi ipsam iste ducimus vitae earum a, dolorem eos! Ipsa
          fugit, hic reprehenderit tempora adipisci ab voluptatum facilis? Culpa
          ducimus dolorem eveniet numquam beatae, consequuntur veniam
          praesentium ut cum esse doloremque dolore autem maxime pariatur
          suscipit. Porro doloremque ipsa accusamus excepturi, quaerat
          consequuntur nemo cupiditate blanditiis, ullam rem repellendus aperiam
          eaque totam enim. Officia quos sunt unde nulla reiciendis, temporibus,
          voluptatem quibusdam eos repudiandae corrupti facilis, vitae neque
          illum rerum itaque animi tempore ut alias fugit incidunt quis
          recusandae? Voluptatibus excepturi quidem nostrum non possimus. Quidem
          illo corporis, iste molestiae minima et facilis tenetur veniam
          perspiciatis necessitatibus! Sed earum, maiores inventore aspernatur
          est voluptas quam modi minima soluta reprehenderit eos, rem quia
          tenetur praesentium. Placeat quae alias magnam a nulla repellat
          temporibus praesentium obcaecati! Ea facere accusamus quibusdam
          exercitationem cumque ipsam mollitia necessitatibus, soluta debitis
          eius sequi veniam quia, neque hic quo consequuntur expedita incidunt
          accusantium, at voluptatem vitae explicabo aspernatur optio. Doloribus
          sequi quae tenetur quo veritatis voluptatum asperiores quaerat
          possimus delectus at deserunt nihil animi illum magnam quis molestiae
          officiis voluptatem obcaecati, sint assumenda ad nemo totam iure.
          Adipisci, quisquam ullam. Dolores corporis eligendi, ex aperiam
          aliquam exercitationem distinctio suscipit odio iusto necessitatibus.
          Voluptatem dolor dolores quis. Maiores fugit deserunt quaerat, atque
          id corporis rerum beatae soluta incidunt reprehenderit sint esse in
          eius velit, a dolor labore voluptates error ratione dolorum obcaecati
          repellendus impedit eaque minima. Eaque rerum, harum fugiat sed
          sapiente veniam voluptatem velit mollitia. Exercitationem, totam non.
          Fugiat rem perferendis asperiores saepe, doloremque voluptates
          inventore maxime! Illo totam provident saepe nam, eaque soluta et
          suscipit excepturi, dolor ea quidem, velit pariatur omnis! Mollitia
          atque explicabo earum quidem nesciunt quasi ex tempore et tempora
          rerum, voluptatibus similique qui, ullam dolores odit neque doloribus
          perspiciatis illum velit accusantium maxime nihil officiis! Quidem
          inventore modi, ex ab placeat velit eligendi hic.
        </section>
      </div>
    </div>
  )
}
