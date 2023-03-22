import "./Footer.scss"
import Instagram from "../../assets/img/social.png"

const Footer = () => {

    return (
        
        <div className="container-fluid fluid-footer bg-dark">
            <div className="row row-dos">
                <span>Seguinos en nuestras redes.</span>
                <div className="imagen-footer">
                    <a href="https://www.facebook.com/PokemonOficialLatAm/?brand_redir=230809307041021&locale=es_LA" target="_blank"><img src={require('../../assets/img/facebook.png')} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/pokemon/" target="_blank"><img src={require('../../assets/img/instagram.png')} alt="Instagram" /></a>
                    <a href="https://www.pinterest.es/zarabpiuri/pokemon/" target="_blank"><img src={require('../../assets/img/social.png')} alt="Pinterest" /></a>
                    <a href="https://www.youtube.com/@PokemonOficialES" target="_blank"><img src={require('../../assets/img/youtube.png')} alt="Youtube" /></a>
                    <hr />
                </div>
                <div className="footer-final">
                    <p className="footer-final-p"> <b> Tienda Oficial de Pokemon - Todos los derechos reservados - Copyright
                        2023 </b> </p>
                </div>
            </div>
        </div>

    )
}

export default Footer