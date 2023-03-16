import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css";

type Props = {
  text: string;
};

type FormData={
  userGithub:string;
}

export default function Card({ text }: Props) {

  const[formData,setFromData] = useState<FormData>(
    {
      userGithub: '',
    });

function handleInputChange(event:any){
  const value =event.target.value;
  const name = event.target.name;
  setFromData({...formData, [name]: value})
}

  return (
    <>
      <div className="card">
        <div>
          <h2>{text}</h2>

          <form onSubmit={handleFormSubmit} className="card-form">
            <input
             name="userGithub"
             value={formData.userGithub}
             type="text" 
             placeholder="Usuário Github"
             onChange={handleInputChange}
              />
          </form>
          
        </div>

        <div className="dflex">
          <Link to="/sub">
            <Button text="Encontrar" />
          </Link>
        </div>
      </div>
    </>
  );
}
