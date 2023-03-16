import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../../components/Profile";
import { ProfileDTO } from "../../../model/Profile";


export default function After(){

const params = useParams();
const [paramsLogin, setParamsLogin] = useState(params.profileUser);
const [profile, setProfile] = useState<ProfileDTO>();

useEffect(()=> {
  axios.get(`https://api.github.com/users/${paramsLogin}`)
  .then(
    response => {
      setProfile(response.data);
    });
},[setParamsLogin]);

return(
<section>
      <div className="container ">
        <div className="mt54 ml54 mr54">
          {
          profile ?<Profile profile={profile}/>
          : <h2>Erro ao buscar usuário</h2>
          }
        </div>
      </div>
    </section>
);
}