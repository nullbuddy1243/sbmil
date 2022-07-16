// import "./App.css";
import SkillCard from "../SkillCard";
import athousandwords from "../../utils/25000words.js";

export default function Box() {
  const words = athousandwords.split(" ");
  const mySkills = [
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)]
  ]
  const myNeeds = [
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)]
  ]

  return (
    <div className="Box">
      <SkillCard 
        skills={mySkills}
        needs={myNeeds}
      />
    </div>
  );
}
