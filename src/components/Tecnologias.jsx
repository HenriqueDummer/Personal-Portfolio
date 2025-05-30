import htmlIcon from "../assets/HTML5.png"
import cssIcon from "../assets/CSS3.png"
import javascriptIcon from "../assets/JavaScript.png"
import reactIcon from "../assets/React.png"
import tailwindIcon from "../assets/TailwindCSS.png"
import gitIcon from "../assets/Git.png"
import sassIcon from "../assets/Sass.png"
import figmaIcon from "../assets/Figma.png"
import viteIcon from "../assets/Vite.png"
import mongoDBICon from "../assets/MongoDB.png"
import expressIcon from "../assets/Express.png"
import nodeIcon from "../assets/Node.png"
import reactQueryIcon from "../assets/ReactQuery.webp"
import mySqlIcon from "../assets/MySQL.png"

const Tecnologias = () => {

  const itemsClass = "flex flex-col justify-center items-center gap-4 text-slate-200 text-lg"
  const imgClass = "w-32 h-32"
  
  return (
    <section className="py-[5rem] bg-zinc-900 flex items-center flex-col">
        <h2 className="mt-10 text-4xl font-semibold text-slate-200">Tecnologias</h2>
        <ul className="flex justify-center my-[10rem] max-w-[68rem] gap-10 flex-wrap">
          <li className={itemsClass}>
            <img className={imgClass} src={htmlIcon} alt="" />
            <p>HTML</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={cssIcon} alt="" />
            <p>CSS</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={javascriptIcon} alt="" />
            <p>JavaScript</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={reactIcon} alt="" />
            <p>React</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={tailwindIcon} alt="" />
            <p>TailWind</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={gitIcon} alt="" />
            <p>Git</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={sassIcon} alt="" />
            <p>Sass</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={figmaIcon} alt="" />
            <p>Figma</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={viteIcon} alt="" />
            <p>Vite</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={reactQueryIcon} alt="" />
            <p>React Query</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={nodeIcon} alt="" />
            <p>NodeJS</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={expressIcon} alt="" />
            <p>Express</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={mongoDBICon} alt="" />
            <p>MongoDB</p>
          </li>
          <li className={itemsClass}>
            <img className={imgClass} src={mySqlIcon} alt="" />
            <p>MySQL</p>
          </li>
        </ul>
    </section>
  )
}

export default Tecnologias