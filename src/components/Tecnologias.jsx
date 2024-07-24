import React from 'react'
import htmlIcon from "../assets/html.png"
import cssIcon from "../assets/css.png"
import javascriptIcon from "../assets/javascript.png"
import reactIcon from "../assets/react.png"
import tailwindIcon from "../assets/tailwind.png"
import gitIcon from "../assets/git.png"
import sassIcon from "../assets/sass.png"
import figmaIcon from "../assets/figma.png"

const Tecnologias = () => {

  const itemsClass = "flex flex-col justify-center items-center gap-4 text-slate-200 text-lg"
  const imgClass = "w-32 h-32"
  
  return (
    <section id="Tecnologias" className="py-[5rem] bg-zinc-900 flex items-center flex-col">
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
        </ul>
    </section>
  )
}

export default Tecnologias