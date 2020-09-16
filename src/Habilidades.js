import React from 'react'
import "./Habilidades.css"
function Habilidades() {
    return (
        <div className="slider">

            <div className="load">
            </div>

            <div className="content">
                <div className="skills">
                    <h2>Habilidades de Among Us: Cómo usarlas y para qué sirve cada una</h2>
                    <p className="apagado">Explicamos cuáles son las habilidades especiales que podemos usar en Among Us y para qué sirve exactamente cada una durante las partidas.</p>
                    <div className="skills__index">
                        <h5>Índice</h5>
                        <ul>
                            <li>Admin</li>
                            <li>Kill</li>
                            <li>Report</li>
                            <li>Sabotage</li>
                            <li>Security</li>
                            <li>Vent</li>
                        </ul>
                    </div>
                    <p>Durante las partidas de Among Us los jugadores podemos hacer uso de ciertas habilidades especiales dependiendo del momento, la situación o nuestro rol (seamos tripulantes o impostores). En esta entrada desglosamos todas las habilidades que existen, cómo usar cada una de ellas y para qué sirven exactamente.</p>
                    <h3>Admin</h3>
                    <ul>
                        <li>
                            ¿Quién puede usarla?: cualquier jugador de la partida.
                        </li>
                        <li>
                            ¿En qué mapas está disponible?: en Skeld, Mira HQ y Polus.
                        </li>
                    </ul>
                    <p>
                        Esta habilidad se puede usar desde el panel de la sala de Administración. Al interactuar con este se nos abre el Mapa del nivel y podemos ver en qué habitación se encuentra cada uno de los jugadores en ese momento, aunque no sabremos quién es quién y su ubicación exacta no estará marcada (este mapa solo actualiza sus posiciones cuando un jugador cambia de sala).
                    </p>
                    <p>
                        Puede ser bastante útil para descubrir al impostor si se colabora con otros tripulantes situados en distintas estancias.
                    </p>
                    <h3>Kill</h3>
                    <ul>
                        <li>
                            ¿Quién puede usarla?: solo los jugadores impostores.
                        </li>
                        <li>
                            ¿En qué mapas está disponible?: en Skeld, Mira HQ y Polus.
                        </li>
                    </ul>
                    <p>
                        La habilidad de asesinar es única de los impostores y sirve, obviamente, para matar a otros jugadores. Tiene un tiempo de recarga que va desde los 10 segundos hasta las 60, dependiendo del número de asesinatos que realicemos (dentro de las rejillas de ventilación o usando cámaras de vigilancia la recarga se detiene).
                    </p>
                    <p>
                        Puede usarse contra cualquier jugador tripulante cuando se está lo suficientemente cerca del mismo, en cuyo caso el botón de la habilidad pasará del blanco y negro a color. Cuando un tripulante es asesinado aparecerá en su pantalla una animación brutal.
                    </p>
                    <h3>Report</h3>
                    <ul>
                        <li>
                            ¿Quién puede usarla?: cualquier jugador de la partida
                        </li>
                        <li>
                            ¿En qué mapas está disponible?: en Skeld, Mira HQ y Polus.
                        </li>
                    </ul>
                    <p>
                        Report sirve para alertar al resto de jugadores de que se ha encontrado un cadáver, y puede ser usado tanto por tripulantes como por el propio impostor. Al activar esta habilidad todos los jugadores se desplazan automáticamente a la sala central del mapa para tener una discusión sobre lo ocurrido.
                    </p>
                    <p>
                        Durante la discusión los jugadores deberán hablar y exponer los hechos para tratar de deducir, descubrir o acusar al impostor. Los jugadores podrán votar o abstenerse de echar a otro jugador al espacio.
                    </p>
                    <h3>Sabotage</h3>
                    <ul>
                        <li>
                            ¿Quién puede usarla?: solo los jugadores impostores.
                        </li>
                        <li>
                            ¿En qué mapas está disponible?: en Skeld, Mira HQ y Polus.
                        </li>
                    </ul>
                    <p>La habilidad de Sabotaje es única de los impostores y muy útil para estos ya que permite crear un problema temporal en el escenario que los tripulantes deberán atender si quieren volver a la normalidad. El impostor puede aprovecharse de esto para planear trampas, crear distracciones o incluso participar en la solución del sabotaje para fingir ser tripulante.</p>
                    <p>Se puede usar pulsando su botón correspondiente y luego escogiendo el lugar del mapa donde se quiera producir el sabotaje. Solo se puede realizar un sabotaje al mismo tiempo y algunos de ellos pueden ser críticos como la fusión del reactor o cortar el oxígeno, los cuales si no se solucionan a tiempo darán la victoria al impostor.
                    </p>
                    <h3>Security</h3>
                    <ul>
                        <li>
                            ¿Quién puede usarla?: cualquier jugador de la partida.
                        </li>
                        <li>
                            ¿En qué mapas está disponible?: en Skeld y Polus.
                        </li>
                    </ul>
                    <p>Esta habilidad se trata de unas cámaras de vigilancia que cualquiera puede usar en todo momento para ver a través de las mismas distintos lugares del mapa. Es una de las formas ideales de dar con el impostor ya que se puede atrapar a este en el momento oportuno asesinando a otro jugador o usando rejillas de ventilación.</p>
                    <p>Hay que tener en cuenta que cuando alguien está usando las cámaras de vigilancia estas brillarán con una luz roja para que los demás sepan que alguien está vigilando a través de las mismas.</p>
                    <h3>Vent</h3>
                    <ul>
                        <li>
                            ¿Quién puede usarla?: solo los jugadores impostores.
                        </li>
                        <li>
                            ¿En qué mapas está disponible?: en Skeld, Mira HQ y Polus.
                        </li>
                    </ul>
                    <p>Esta es una habilidad única de los impostores que les permite colarse por rejillas de ventilación en los escenarios que están conectadas entre sí. Ocultos a la vista de los tripulantes, los impostores pueden usar estas rejillas para moverse rápidamente o pillar desprevenidos a otros jugadores.</p>
                    <p>Los tripulantes pueden descubrir a los impostores si los ven entrar o salir de una rejilla de ventilación, así que estos deben tener especial cuidado para escoger el momento oportuno de usarlas.</p>
                </div>
            </div>
        </div>
    )
}

export default Habilidades
