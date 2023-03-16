import Profile from "../../../components/Profile";
import * as profileService from '../../../services/profile-service';

export default function After(){

const profile = profileService.findById(13897257);

return(
<section>
      <div className="container ">
        <div className="mt54 ml54 mr54">
          {
          profile &&
          <Profile profile={profile}/>
          }
        </div>
      </div>
    </section>
);
}