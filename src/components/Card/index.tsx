import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css";

type Props = {
  text: string;
};

type FormData = {
  userGithub: string;
};

export default function Card({ text }: Props) {
  

  const [formData, setFromData] = useState<FormData>({
    userGithub: "",
  });

  function handleUserChange(event: any) {
    setFromData({ ...formData, userGithub: event.target.value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
  }


  return (
    <>
      <div className="card">
        <div>
          <h2>{text}</h2>
          <div className="card-form">
            <form onSubmit={handleFormSubmit} >
              <div>
                <input
                  name="userGithub"
                  id="userLogin"
                  value={formData.userGithub}
                  type="text"
                  placeholder="Usuário Github"
                  onChange={handleUserChange}
                />
              </div>

              <div className="dflex mt20">
                <Link to={`/before/after/${formData.userGithub}`}>
                  <button type="submit" className="button">
                    Encontrar
                  </button>
                </Link>
  
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
