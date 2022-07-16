export default function SkillCard(props) {
  return (
    <div className="skill">
      <br></br>
      <div class="container">
        <div class="flex-1 leftmost">
          <div>sidezone</div>
        </div>
        <div class="flex-2">
          flex-1
          <div class="flex-2-child">
            <p class="skilltext skilltexthead"> Skills </p>
            <ul class="skilltext">
            {props.skills.slice(0,3).map(function(skill, i) {
                return (
                  <li className='skillitem' key={i}>{`${skill}\n`}</li>
                )
              })}
            </ul>
          </div>
          <div class="flex-2-child socialbox">
            <ul class="skilltext">
              {props.skills.slice(3,5).map(function(skill, i) {
                  return (
                    <li className='skillitem' key={i}>{`${skill}\n`}</li>
                  )
                })}
            </ul>
          </div>
        </div>
        <div class="flex-2">
          flex-2<br></br>
          <div class="flex-2-child">
            <p class="skilltext skilltexthead"> Needs </p>
            <ul class="skilltext">
            {props.needs.slice(0,3).map(function(skill, i) {
                return (
                  <li className='skillitem' key={i}>{`${skill}\n`}</li>
                )
              })}
            </ul>
          </div>
          <div class="flex-2-child socialbox">
            <ul class="skilltext">
              {props.needs.slice(3,5).map(function(skill, i) {
                  return (
                    <li className='skillitem' key={i}>{`${skill}\n`}</li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
