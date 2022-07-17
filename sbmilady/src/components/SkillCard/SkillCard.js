import { useState } from "react";
import { default as im } from "../../assets/milady100x125/06_small.png";
// import * as smalls from "../../assets/milady100x125/";

import "./skillcard.css";

export default function SkillCard(props) {
  const [miladyLoading, setMiladyLoading] = useState(true);

  const Badge = ({ id }) => (
    <div className={`badgediv`}>
      <img src={im} id={`badge-${id}`} className="badge" />
    </div>
  );
  // const badgeElements =

  // const badges: JSX.Element[] = []; // todo: implement typescript
  const badges = [];

  [...Array(3)].map((value, index) =>
    // <img src={im} alt="Milady" className="badge" />
    badges.push(<Badge id={index} key={index}></Badge>)
  );

  console.log(badges);

  return (
    <div className="skill">
      <br></br>
      <div className="container">
        <div className="sidezone flex-1 leftmost">
          <div>sidezone</div>
          <div className="placeholder">
            <img
              src={`https://miladymaker.net/milady/${props.miladyID}.png`}
              alt="Milady"
              className="pfp"
              onLoad={() => setMiladyLoading(false)}
              style={miladyLoading ? { display: "none" } : undefined}
            />
          </div>
        </div>
        <div className="flex-2">
          flex-1
          <div className="flex-2-child">
            <p className="skilltext skilltexthead"> Skills </p>
            <ul className="skilltext">
              {props.skills.slice(0, 3).map(function (skill, i) {
                return <li className="skillitem" key={i}>{`${skill}\n`}</li>;
              })}
            </ul>
          </div>
          <div className="flex-2-child socialbox">
            <ul className="skilltext">
              {props.skills.slice(3, 5).map(function (skill, i) {
                return <li className="skillitem" key={i}>{`${skill}\n`}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="flex-2">
          flex-2<br></br>
          <div className="flex-2-child">
            <p className="skilltext skilltexthead"> Needs </p>
            <ul className="skilltext">
              {props.needs.slice(0, 3).map(function (skill, i) {
                return <li className="skillitem" key={i}>{`${skill}\n`}</li>;
              })}
            </ul>
          </div>
          <div className="flex-2-child socialbox">
            <ul className="skilltext">
              {props.needs.slice(3, 5).map(function (skill, i) {
                return <li className="skillitem" key={i}>{`${skill}\n`}</li>;
              })}
            </ul>
            {badges}
          </div>
        </div>
      </div>
    </div>
  );
}
