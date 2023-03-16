import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Before(){
return (
    <main>
    <section>
      <div className="container ">
        <div className="mt54 ml54 mr54">
          <Card text="Encontre um perfil Github" />
        </div>
      </div>
      <Outlet />
    </section>
  </main>
);
}