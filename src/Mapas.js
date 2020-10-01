import React from 'react'
import "./Mapas.css"
import { Link as LinkScroll } from "react-scroll";
function Mapas() {
    return (
        <div className="slider">

            <div className="load">
            </div>

            <div className="content">
                <div className="maps animate__animated animate__fadeIn">
                    <h2>Mapas de Among Us: Características de Skeld, Mira HQ y Polus</h2>
                    <p className="apagado">Te mostramos todos los detalles y características de los tres mapas disponibles para jugar partidas en Among Us: Skeld, Mira HQ y Polus.</p>
                    <div className="maps__index">
                        <h5>Índice</h5>
                        <ul>
                            <LinkScroll className="enlace" to="skeld" smooth={true} duration={1000}><li>Skeld</li></LinkScroll>
                            <LinkScroll className="enlace" to="mirahq" smooth={true} duration={1000}><li>Mira HQ</li></LinkScroll>
                            <LinkScroll className="enlace" to="polus" smooth={true} duration={1000}><li>Polus</li></LinkScroll>
                            <LinkScroll className="enlace" to="choose" smooth={true} duration={1000}><li>¿Cómo escoger el mapa de una partida?</li></LinkScroll>
                        </ul>
                    </div>
                    <p>
                        En Among Us hay disponibles tres mapas en total para jugar sus emocionantes y adictivas partidas. Todos son gratuitos y cada uno de ellos cuenta con diferentes características y estilos, a continuación te mostramos los detalles que debes conocer de los mismos.
                </p>
                    <h3 id="skeld">Skeld</h3>
                    <ul>
                        <li>Fecha de lanzamiento: 15 de junio de 2018.</li>
                        <li>Disponible: gratis para todas las plataformas.</li>
                        <li>Habitaciones: 14.</li>
                    </ul>
                    <p>Skeld fue el primer mapa de Among Us, y es el más característico y típico. Está ambientando en el interior de una nave que recorre el espacio y cuenta con hasta 14 habitaciones repartidas entre pasillos. Todas las partidas empiezan en la sección central llamada Cafetería.</p>
                    <p>Los jugadores impostores pueden usar rejillas de ventilación repartidas por las estancias para moverse rápidamente y a hurtadillas. Hay cámaras de seguridad que pueden usarse desde la habitación Seguridad para vigilar los movimientos de los jugadores.</p>
                    <h3 id="mirahq">Mira HQ</h3>
                    <ul>
                        <li>Fecha de lanzamiento: 8 de agosto de 2019.</li>
                        <li>Disponible: gratis para todas las plataformas.</li>
                        <li>Habitaciones: 13.</li>
                    </ul>
                    <p>Mira HQ fue el segundo mapa añadido al juego y está ambientado en el interior de una estación espacial que forma parte de la sede de Mira Headquarters. El tamaño de este mapa es similar a Skeld y también cuenta con rejillas de ventilación completamente conectadas entre sí.</p>
                    <p>Además este mapa presenta algunas tareas nuevas y distintas y también un sistema de apertura y bloqueo de puertas del que los impostores se pueden aprovechar.</p>

                    <h3 id="polus">Polus</h3>
                    <ul>
                        <li>Fecha de lanzamiento: 12 de noviembre de 2019.</li>
                        <li>Disponible: gratis para todas las plataformas.</li>
                        <li>Habitaciones: 22.</li>
                    </ul>
                    <p>Polus es el tercer mapa añadido a Among Us y el más extenso de los disponibles. Este mapa nos traslada a una base de investigación situada en el planeta de Polus con sistemas de seguridad similares a Skeld y, en lugar de rejillas de ventilación, encontramos grietas en el suelo.</p>
                    <h3 id="choose">¿Cómo escoger el mapa de una partida?</h3>
                    <p>Cuando vamos a jugar una partida en Among Us uniéndonos a una que ya está creada, debemos fijarnos en el logo que aparece junto al nombre de la partida para saber en qué mapa se jugará la misma. Cada mapa tiene un logo distintivo.</p>
                    <p>Para poder buscar partidas en los tres mapas, debes activar cada mapa en la parte superior de la pantalla de búsqueda de partida en línea. Los nombres de cada mapa deben estar resaltados en color (por defecto solo está activado Skeld mientras que los otros permanecen en blanco y negro).</p>
                    <p>En caso de que tú seas el creador de una partida, al pulsar la opción "Ser anfitrión - Crear partida", en las opciones principales de la creación de la partida se te dará a escoger entre los 3 mapas para que selecciones uno.</p>
                </div>
            </div>
        </div>
    )
}

export default Mapas
