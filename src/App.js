import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
function App() {
  return (
    <div className="slider">
      
      <div className="load">
      </div>

      <div className="content">
        <div className="app animate__animated animate__fadeIn">
          <h2>Bienvenidos a la mejor y más completa guia de Among Us el juego más popular del momento</h2>
          <p className="apagado">En esta guía aprenderás los mejores trucos</p>
          <div className="app__index">
            <h5>Indice</h5>
            <ul>
              <LinkScroll className="enlace" to="howPlay" smooth={true} duration={1000}><li>Como se juega</li></LinkScroll>
              <LinkScroll className="enlace" to="tasks" smooth={true} duration={1000}><li>Tareas</li></LinkScroll>
              <LinkScroll className="enlace" to="skills" smooth={true} duration={1000}><li>Habilidades</li></LinkScroll>
              <LinkScroll className="enlace" to="maps" smooth={true} duration={1000}><li>Mapas</li></LinkScroll>
              <LinkScroll className="enlace" to="skins" smooth={true} duration={1000}><li>Skins</li></LinkScroll>
            </ul>
          </div>
          <div className="app__howPlay">
            <h3 id="howPlay">Como se juega</h3>
            <p>Lo primero y más importante de lo que queremos hablar es de <Link to="/comojugar">como se juega</Link> a Among Us. Las primeras partidas pueden ser un poco caos si no estáis acostumbrados a sus mecánicas, pero por suerte todo es fácil de entender y más con nuestra ayuda. Además, también nos centramos en dar las claves y consejos para jugar en uno u otro bando.</p>
            <ul>
              <li>
                <Link to="/tripulantes">Consejos para Tripulantes:</Link> ten en cuenta todos estos trucos si no quieres acabar degollado o flotando por el espacio.
              </li>
              <li>
              <Link to="/impostores">Consejos para Impostores:</Link> aquí te desvelamos las mejores estrategias y ayudas para matarlos a todos sin que te descubran.
              </li>
            </ul>
          </div>
          <div className="app__tasks">
            <h4 id="tasks">Tareas</h4>
            <p>
              Hay una serie de <Link to="/tareas">tareas</Link> que los jugadores pueden cumplir durante las partidas de Among Us. Estas están pensadas especialmente para el grupo de los tripulantes, que pueden ganar la partida si las completan a tiempo (aunque los impostores pueden fingir realizarlas para crear coartadas y que no sospechen de ellos). Es importante saber cuáles existen y qué hay que hacer en cada una de ellas, por eso nosotros te las mostramos todas aquí.
            </p>

          </div>
          <div className="app__skills">
            <h3 id="skills">Habilidades</h3>
            <p>
              Los jugadores de Among Us cuentan con un puñado de <Link to="/habilidades">habilidades</Link> de las que pueden hacer uso para tratar de conseguir ventajas en la partida; los tripulantes pueden dar más fácilmente con el impostor, y los impostores pueden aprovecharlas para acabar con los tripulantes de maneras efectivas. Para que no queden dudas, nosotros os explicamos cuáles hay a nuestro alcance en todo momento.
            </p>
            <ul>
              <li>
                Admin: un mapa con la posición de cada jugador en las diferentes salas.
              </li>
              <li>
                Kill: la letal y característica habilidad de los impostores.
              </li>
              <li>
                Report: un botón para dar la alarma cuando encontramos cadáveres.
              </li>
              <li>
                Sabotage: una serie de sabotajes que los impostores pueden activar.
              </li>
              <li>
                Security: sistemas de cámaras de vigilancia para ojear los escenarios.
              </li>
              <li>
                Vent: unas rejillas de ventilación para que los impostores se oculten y se muevan rápido.
              </li>
            </ul>
          </div>
          <div className="app__maps">
            <h3 id="maps">Mapas</h3>
            <p>
              Among Us cuenta con hasta 3 <Link to="/mapas">mapas</Link> diferentes que se fueron implementando con el tiempo y que, ahora, son totalmente gratuitos para todos los jugadores. La partida puede variar un tanto dependiendo del mapa en el que juegues, así que aquí te hablamos de cómo es cada uno de ellos y cuáles son sus características únicas.
            </p>
            <ul>
              <li>
                Skeld: una nave que surca el espacio. Es el primero de los mapas y el más típico.
              </li>
              <li>
                Mira HQ: un cuartel general, el segundo mapa disponible.
              </li>
              <li>
                Polus: una base planetaria. El tercer mapa y el más grande.
              </li>
            </ul>
          </div>
          <div className="app__skins">
            <h3 id="skins">Skins</h3>
            <p>
              Among Us también cuenta con unas divertidas opciones de personalización para que vistamos a nuestro personaje con <Link to="/skins">skins</Link>; se trata de disfraces, sombreros e incluso mascotas. No está de más echarle un vistazo a este apartado ya que hay alguna que otra cosa gratuita y también de pago, todo sea por ir a la última mientras jugamos.
            </p>
            <ul>
              <li>
                Disfraces: temáticos, especiales y más.
              </li>
              <li>
                Sombreros: para llevar sobre la cabeza, gratuitos y de pago.
              </li>
              <li>
                Mascotas: nos acompañan durante las partidas y tienen animaciones propias.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
