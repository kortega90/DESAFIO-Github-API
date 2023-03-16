import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt20 mb20">
            <div className="home-text-format">
              <h2>Desafio Github API</h2>
            </div>

            <div className="home-text-format">
              <h3>DevSuperior - Escola de programação</h3>
            </div>
          </div>

          <div className="dflex">
            <Link to="/before">
              <Button text="Começar" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
