
type BasicProfileCardProps = {
  type: "basic",
  name: string,
}

type AdvancedProfileCardProps = {
  type: "advanced",
  name: string,
  email: string
}

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps

function Component(props:ProfileCardProps) {
  const {type, name} = props
  if(type === "basic"){ 
  return (
    <div className= "alert-success">
      <h2>User: {name}</h2> 
    </div>)
  }
    
  const { email } = props
  return (
    <div className= "alert-danger">
      <h2>User: {name}</h2> 
      <h2>{email}</h2>
    </div>)
}
export default Component;
