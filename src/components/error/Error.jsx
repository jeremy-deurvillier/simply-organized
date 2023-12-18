import { Link, useRouteError } from "react-router-dom"
import { BiSolidMessageError } from "react-icons/bi"
import HeaderLogo from "../header-logo/HeaderLogo"
import './Error.css'

export default function Error() {
    const error = useRouteError()

    return (
        <section className='errorWrapper'>
            <HeaderLogo />

            <div className='errorContent'>
                <div>
                    <h1 hidden>Simply Organized</h1>
                    <h2>
                        <BiSolidMessageError />
                        <span>Erreur</span>
                    </h2>
                </div>
                <div>
                    <p align='center'>Oups ! Une erreur s'est produite.</p>
                    <p>
                        Essayez de revenir à la <Link to='/'>page d'accueil</Link>.
                    </p>
                </div>
                <div>
                    <p>
                        <em>
                            Statut : {error && (error.statusText || error.message).toLowerCase()}
                        </em>
                    </p>
                </div>
            </div>
        </section>
    )
}
