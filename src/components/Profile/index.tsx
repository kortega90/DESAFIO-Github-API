import { Link } from "react-router-dom";
import { ProfileDTO } from "../../model/Profile";
import "./styles.css";

type Props = {
  profile: ProfileDTO;
};

export default function Profile({ profile }: Props) {
  return (
    <>
      <div className="card-profile">
        <div>
          <img src={profile.avatar_url} alt="ImgProfile" />
        </div>

        <div className="card-information">
          <p className="titel-profile">Informações</p>

          <div className="container-card-text-profile">
            <div className="dflex-profile card-information-api">
              <p className="fixed-text">Perfil:</p>
              <p className="text-perfil">{profile.url}</p>
            </div>

            <div className="dflex-profile card-information-api">
              <p className="fixed-text">Seguidores:</p>
              <p className="text-api">{profile.followers}</p>
            </div>
            <div className="dflex-profile card-information-api">
              <p className="fixed-text">Localidade:</p>
              <p className="text-api">{profile.location}</p>
            </div>
            <div className="dflex-profile card-information-api">
              <p className="fixed-text">Nome:</p>
              <p className="text-api">{profile.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
