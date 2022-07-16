import athousandwords from "../../utils/1000words.js";

export default function SkillCard(props) {
  console.log(props)
  let words = athousandwords.split(" ");
  let rando = Array(2)
    .fill()
    .map(() => Math.floor(Math.random() * words.length));
  return (
    <div className="skill">
      <br></br>
      {/* <hr></hr> */}
      <div class="container">
        <div class="flex-1 leftmost">
          <div>skill div</div>
        </div>
        <div class="flex-1">
          flex 1<br></br>
          <p className="skilltext">{words[rando[0]]} </p>
          <p className="skilltext">{words[rando[1]]} </p>
          <p class="skilltext">
          {props.skills.map(function(skill, i) {
              return (
                <>{`${skill}\n`}</>
              )
            })}
          </p>
        </div>
        <div class="flex-2">
          flex 2<br></br>
          <p class="skilltext">
            {words[Math.floor(Math.random() * words.length)]}
          </p>
          <p class="skilltext">
            {words[Math.floor(Math.random() * words.length)]}{" "}
            {words[Math.floor(Math.random() * words.length)]}{" "}
            {words[Math.floor(Math.random() * words.length)]}{" "}
            {words[Math.floor(Math.random() * words.length)]}{" "}
            {words[Math.floor(Math.random() * words.length)]}
          </p>
          <div class="flex-2-child">
            flex 2 child <br></br>
            <p class="skilltext">
              {words[Math.floor(Math.random() * words.length)]}{" "}
              {words[Math.floor(Math.random() * words.length)]}{" "}
              {words[Math.floor(Math.random() * words.length)]}{" "}
              {words[Math.floor(Math.random() * words.length)]}{" "}
            </p>
            <br></br>
            {words[Math.floor(Math.random() * words.length)]}{" "}
            {words[Math.floor(Math.random() * words.length)]}
          </div>
        </div>
      </div>
      {/* <img src={stronger} className="" alt="logo" /> */}
    </div>
  );
}