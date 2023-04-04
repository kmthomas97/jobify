import Wrapper from "../assets/wrappers/Job"

//icon and text as props then the icons will be coming as a prop

const JobInfo = ({icon, text}) => {
  return <Wrapper>
    <span className="icon">{icon}</span>
    <span className="text">{text}</span>
  </Wrapper>
}
export default JobInfo