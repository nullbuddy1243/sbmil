// import "./App.css";
import SkillCard from "../SkillCard";
import athousandwords from "../../utils/1000words.js";

export default function Box() {
  let words = athousandwords.split(" ");
  return (
    <div className="Box">
      <SkillCard 
        skills={[
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)]
          ]}
        needs={[
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)],
            words[Math.floor(Math.random() * words.length)]
        ]}
      />
    </div>
  );
}