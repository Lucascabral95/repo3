import "./FooterAnimation.scss"
import PikachuArcoiris from "../../assets/img/pikachu-arcoiris.png"
import Pokebola from "../../assets/img/pokebola.png"

const FooterAnimation = () => {

    return (

        <div className="container-fluid footer-animation">

            <div className="div-arcoiris">
                <img className="pika-arcoiris" src={PikachuArcoiris} alt="Pikachu Arcoiris" />
            </div>

            <img className="poke-bola" src={Pokebola} alt="Pokebola" />

        </div>

    )
}

export default FooterAnimation