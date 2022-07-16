export default function SkillCard(props) {
  return (
    <div className="skill">
      <br></br>
      <div class="container">
        <div class="flex-1 leftmost">
          <div>skill div</div>
        </div>
        <div class="flex-1">
          flex 1<br></br>
          <ul class="skilltext">
          {props.skills.map(function(skill, i) {
              return (
                <li style={{ padding: '5px' }} key={i}>{`${skill}\n`}</li>
              )
            })}
          </ul>
        </div>
        <div class="flex-2">
          flex 2<br></br>
          <div class="flex-2-child">
            flex 2 child <br></br>
            <ul class="skilltext">
              {props.needs.map(function(skill, i) {
                return (
                  <li style={{ pading: '5px'}}>{`${skill}\n`}</li>
                )
              })}
            </ul>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
