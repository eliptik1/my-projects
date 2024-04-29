import { useState } from "react";

function Component() {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  type Person = {
    name: string
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    //const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    const text = formData.get("text") as string
    const person:Person= {name: data.text as string}
    console.log(data, text, person);
  }
  
  return (
    <section>
    
      <h2>Events example</h2>
      <form className="form" onSubmit={handleSubmit}>
      <input 
          type="text" 
          name="text"
          className="form-input mb-1" 
          value={text} 
          onChange={(e)=>{setText(e.target.value)}} //if you set up events using inline function, TS will infer it.
        />
        <input 
          type="email" 
          name="email"
          className="form-input mb-1" 
          value={email} 
          onChange={handleChange} //however, if you set up functions as references, then you need to provide correct types
        />
        <input 
          type="text" 
          name="deneme"
          className="form-input mb-1" 
          value={"test"} 
          
        />
        <button type="submit" className="btn btn-block">submit</button>
      </form>
    
    </section>
  );
}
export default Component;
