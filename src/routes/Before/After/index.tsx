import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../../../components/NotFound";
import Profile from "../../../components/Profile";
import { ProfileDTO } from "../../../model/Profile";
import * as profileService from '../../../services/profile-service'


export default function After() {


  const params = useParams();
  //const [paramsLogin, setParamsLogin] = useState();
  const [profile, setProfile] = useState<ProfileDTO>();
  const [error, setError] = useState();

  useEffect(() => {
    profileService.findById(String(params.profileUser))
      .then(
        response => {
          setProfile(response.data);
        })
        .catch((error) =>{
          setError(error.response.data);
          setProfile(undefined);
        });
  }, [profile,error]);

  return (
    <section>
      <div className="container ">
        <div className="mt54 ml54 mr54">
          {
          profile &&
           <Profile profile={profile} />
           || (error && <NotFound title = 'Erro ao buscar usuário'/>)
          }
        </div>
      </div>
    </section>
  );
}