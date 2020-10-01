import React from 'react'
import "./Comojugar.css"
import {Link as LinkScroll} from "react-scroll";
function Comojugar() {
    return (
        <div className="slider">

            <div className="load">
            </div>

            <div className="content">
                <div className="howTo animate__animated animate__fadeIn">
                    <h2>Among Us: ¿Cómo jugar y ganar? trucos y consejos</h2>
                    <p className="apagado">¿Quieres empezar a jugar a Among Us pero no sabes cómo funciona este divertido título? No te preocupes, aquí te damos las claves, trucos y consejos que necesitas para aprender a jugar.</p>
                    <div className="howTo__index">
                        <h5>Indice</h5>
                        <ul>
                        <LinkScroll className="enlace" to="howWin" smooth={true} duration={1000}><li>Como jugar y ganar en Among Us</li></LinkScroll>
                        <LinkScroll className="enlace" to="rules" smooth={true} duration={1000}><li>Reglas y mecanicas</li></LinkScroll>
                        <LinkScroll className="enlace" to="start" smooth={true} duration={1000}><li>Como empezar una partida o unirse a una</li></LinkScroll>
                        </ul>
                    </div>
                    <p>
                        Among Us es el divertido título multijugador de Innersloth, disponible en Android, iOS y PC, en el que deberemos sobrevivir en una nave como tripulantes o ser el impostor que tratará de asesinar a todos los demás. Si estás empezando tus primeras partidas o eres nuevo y quieres saber cómo se juega, en esta guía te contamos todos los secretos y consejos para que sepas qué hay que hacer.
                    </p>
                    <h3 id="howWin">Como jugar y ganar en Among Us</h3>
                    <p>
                        Las partidas de Among Us pueden ser de entre 4 a 10 jugadores como máximo en 3 mapas diferentes. El planteamiento es sencillo; somos tripulantes de una nave y entre nosotros hay un impostor con el objetivo de matarlos a todos. Pero ojo, porque ese impostor puede que seamos nosotros mismos.
                    </p>
                    <p>
                        Al comienzo de cada partida se decide aleatoriamente quién será el impostor. Puedes ser tú o puede ser cualquier otro jugador, el caso es que solo el impostor sabrá que él lo es, y todos los demás deberán sospechar hasta de su propia sombra mientras tratan de sobrevivir.
                    </p>
                    <p>
                        Así pues, el objetivo de cada bando para ganar es muy claro.
                    </p>
                    <ul>
                        <li>
                            Los tripulantes: deben cooperar entre ellos realizando tareas en la nave mientras intentan descubrir al impostor para eyectarlo al espacio.
                        </li>
                        <li>
                            El impostor: tiene que fingir ser un tripulante mientras sabotea la nave y va asesinando a todos los demás para ganar (puede haber hasta 3 impostores como máximo).
                        </li>
                    </ul>
                    <h3 id="rules">Reglas y mecanicas</h3>
                    <p>
                        Cada jugador en una partida de Among Us adopta un color diferente (de entre 12 disponibles), y sobre la cabeza de su personaje aparece su nombre. Los tripulantes tienen que realizar tareas de mantenimiento en la nave para ganar o descubrir al impostor y eyectarlo fuera de la nave antes de que este acabe por matarlos a todos.
                    </p>
                    <p>
                        Cada vez que un jugador encuentra el cadáver de otro puede pulsar el botón de alarma y llamar a discusión para hablar entre todos sobre lo que ha pasado. La idea principal es señalar pruebas o hechos para descubrir al impostor.
                    </p>
                    <ul>
                        <li>
                            En las discusiones cada jugador puede votar por otro para eyectarlo de la nave si cree que es el impostor.
                        </li>
                        <li>
                            El jugador que reciba más votos será eyectado al espacio y se descubrirá si era o no el impostor (puede haber empate, en cuyo caso nadie es eyectado).
                        </li>
                        <li>
                            También es posible abstenerse de votar en caso de que tengas dudas en ese turno.
                        </li>
                        <li>
                            El impostor puede participar haciéndose pasar por tripulante y convenciendo a los demás de que lo es, acusando a otro jugador e incluso votando para eyectar a inocentes.
                        </li>
                    </ul>
                    <p>
                        Los tripulantes que mueran a manos del impostor se convertirán en fantasmas invisibles que pueden seguir vagando por el mapa y ayudando a realizar tareas en la nave, pero ya no podrán hablar en las discusiones ni votar, porque sabrán quién es el impostor.
                    </p>
                    <h3 id="start">Como empezar una partida o unirse a una</h3>
                    <p>
                        Desde el menú principal de Among Us podemos unirnos a partidas de otros jugadores o directamente crear una partida privada si queremos jugar solo con nuestros amigos. La opción más sencilla es pulsar en el botón "Jugar en línea" y escoger uno de los servidores o partidas disponibles.
                    </p>
                    <p>
                        En la tabla que aparece puedes ver el nombre de la partida y a la derecha la cantidad de jugadores que hay en ella. Si hay un hueco libre, pulsa sobre una partida e intenta unirte. El juego te dirá si la sala está completa o no (es preferible elegir partidas que no estén cerca del máximo de jugadores para asegurarte un hueco).
                    </p>
                    <h4>Aprende a jugar en el modo libre</h4>
                    <p>
                        Otra opción disponible de Among Us es jugar en el modo libre, al que se puede acceder desde el menú principal. Este modo es una opción de lo más interesante para los jugadores nuevos porque te permitirá adaptarte a los controles y mecánicas sin tener que sufrir la tensión de una partida real.
                    </p>
                    <p>
                        Es recomendable pasar por el modo libre la primera vez que juegas a Among Us para reconocer los mapas que hay disponibles, comprobar cómo funcionan las tareas de la nave y saber usar los controles mínimamente.
                    </p>
                    <h4>Practicar como impostor (modo libre)</h4>
                    <p>
                        Un gran consejo que queremos darte es que practiques primero cómo se juega siendo el impostor. Dado que el impostor se elige al azar, es poco probable que te toque serlo, pero cuando así sea no querrás ser descubierto enseguida por no saber cómo se juega en este bando. Así que una gran idea es practicar en el modo libre las mecánicas de impostor.
                    </p>
                    <ul>
                        <li>
                            Para ello entra en una partida en el modo libre
                        </li>
                        <li>
                            Cuando comience la partida acércate al ordenador central con el que puedes interactuar.
                        </li>
                        <li>
                            Pulsa en "Customize" y se abrirán varias carpetas.
                        </li>
                        <li>
                            Selecciona el documento de color rojo llamado "Be_Impostor.exe"
                        </li>
                    </ul>
                    <p>
                        Ahora adoptarás el rol del impostor y tendrás acceso a sus habilidades y características. Juega un rato por el mapa para comprobar las opciones que tienes disponibles, tales como sabotear diferentes habitaciones o matar personajes dummies. Así cuando te toque ser realmente un impostor estarás preparado para cumplir con tu rol.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comojugar
