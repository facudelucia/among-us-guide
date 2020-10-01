import React from 'react'
import "./Tareas.css"
import { Link as LinkScroll } from "react-scroll";
function Tareas() {
    return (
        <div className="slider">

            <div className="load">
            </div>

            <div className="content">
                <div className="tasks animate__animated animate__fadeIn">
                    <h2>Among Us: Todos los tipos de Tareas y cómo completarlas</h2>
                    <p className="apagado">Te mostramos la lista completa de tareas que se pueden realizar durante las partidas de Among Us y cómo puedes completarlas todas con éxito.</p>
                    <div className="tasks__index">
                        <h5>Índice</h5>
                        <ul>
                            <LinkScroll className="enlace" to="t1" smooth={true} duration={1000}><li>Abrir camino del agua</li></LinkScroll>
                            <LinkScroll className="enlace" to="t2" smooth={true} duration={1000}><li>Alinear la salida del motor</li></LinkScroll>
                            <LinkScroll className="enlace" to="t3" smooth={true} duration={1000}><li>Alinear telescopio</li></LinkScroll>
                            <LinkScroll className="enlace" to="t4" smooth={true} duration={1000}><li>Almacenar artefactos</li></LinkScroll>
                            <LinkScroll className="enlace" to="t5" smooth={true} duration={1000}><li>Armar artefacto</li></LinkScroll>
                            <LinkScroll className="enlace" to="t6" smooth={true} duration={1000}><li>Arrancar reactor</li></LinkScroll>
                            <LinkScroll className="enlace" to="t7" smooth={true} duration={1000}><li>Arreglar cableado</li></LinkScroll>
                            <LinkScroll className="enlace" to="t8" smooth={true} duration={1000}><li>Calibrar distribuidor</li></LinkScroll>
                            <LinkScroll className="enlace" to="t9" smooth={true} duration={1000}><li>Comprar bebidas</li></LinkScroll>
                            <LinkScroll className="enlace" to="t10" smooth={true} duration={1000}><li>Desbloquear colectores</li></LinkScroll>
                            <LinkScroll className="enlace" to="t11" smooth={true} duration={1000}><li>Descargar datos / Subir datos</li></LinkScroll>
                            <LinkScroll className="enlace" to="t12" smooth={true} duration={1000}><li>Destruir asteroides</li></LinkScroll>
                            <LinkScroll className="enlace" to="t13" smooth={true} duration={1000}><li>Desviar energía</li></LinkScroll>
                            <LinkScroll className="enlace" to="t14" smooth={true} duration={1000}><li>Escanear pase de abordaje</li></LinkScroll>
                            <LinkScroll className="enlace" to="t15" smooth={true} duration={1000}><li>Encender escudos</li></LinkScroll>
                            <LinkScroll className="enlace" to="t16" smooth={true} duration={1000}><li>Estabilizar dirección</li></LinkScroll>
                            <LinkScroll className="enlace" to="t17" smooth={true} duration={1000}><li>Enviar escaneo</li></LinkScroll>
                            <LinkScroll className="enlace" to="t18" smooth={true} duration={1000}><li>Hacer diagnóstico</li></LinkScroll>
                            <LinkScroll className="enlace" to="t19" smooth={true} duration={1000}><li>Ingresar código ID</li></LinkScroll>
                            <LinkScroll className="enlace" to="t20" smooth={true} duration={1000}><li>Insertar llaves</li></LinkScroll>
                            <LinkScroll className="enlace" to="t21" smooth={true} duration={1000}><li>Inspeccionar muestra</li></LinkScroll>
                            <LinkScroll className="enlace" to="t22" smooth={true} duration={1000}><li>Limpia el filtro O2</li></LinkScroll>
                            <LinkScroll className="enlace" to="t23" smooth={true} duration={1000}><li>Llenar frascos</li></LinkScroll>
                            <LinkScroll className="enlace" to="t24" smooth={true} duration={1000}><li>Mapa de navegación</li></LinkScroll>
                            <LinkScroll className="enlace" to="t25" smooth={true} duration={1000}><li>Medir clima</li></LinkScroll>
                            <LinkScroll className="enlace" to="t26" smooth={true} duration={1000}><li>Monitorear árbol</li></LinkScroll>
                            <LinkScroll className="enlace" to="t27" smooth={true} duration={1000}><li>Ordenar muestras</li></LinkScroll>
                            <LinkScroll className="enlace" to="t28" smooth={true} duration={1000}><li>Procesar información</li></LinkScroll>
                            <LinkScroll className="enlace" to="t29" smooth={true} duration={1000}><li>Recargar motores</li></LinkScroll>
                            <LinkScroll className="enlace" to="t30" smooth={true} duration={1000}><li>Reemplazar jarra de agua</li></LinkScroll>
                            <LinkScroll className="enlace" to="t31" smooth={true} duration={1000}><li>Regar plantas</li></LinkScroll>
                            <LinkScroll className="enlace" to="t32" smooth={true} duration={1000}><li>Registrar temperatura</li></LinkScroll>
                            <LinkScroll className="enlace" to="t33" smooth={true} duration={1000}><li>Reiniciar Wifi</li></LinkScroll>
                            <LinkScroll className="enlace" to="t34" smooth={true} duration={1000}><li>Reparar nodo del clima</li></LinkScroll>
                            <LinkScroll className="enlace" to="t35" smooth={true} duration={1000}><li>Reparar taladro</li></LinkScroll>
                            <LinkScroll className="enlace" to="t36" smooth={true} duration={1000}><li>Utilizar tarjeta</li></LinkScroll>
                            <LinkScroll className="enlace" to="t37" smooth={true} duration={1000}><li>Vaciar basurero / contenedor</li></LinkScroll>
                        </ul>
                    </div>
                    <p>Una de las mecánicas de juego de Among Us es completar una lista de tareas durante las partidas (que aparecen a la izquierda en la pantalla), las cuales pueden dar la victoria al equipo de los tripulantes si estos consiguen rellenar la barra correspondiente colaborando juntos antes de ser asesinados por los impostores.</p>
                    <p>Las tareas pueden ser de tres tipos distintos:</p>
                    <ul>
                        <li>Tareas cortas: se hacen en apenas un instante fácilmente.</li>
                        <li>Tareas comunes: se completan en unos pocos segundos, aunque son algo más complejas que las cortas.</li>
                        <li>Tareas largas: suelen requerir varios pasos o incluso esperar cierta cantidad de tiempo para poder completarlas.</li>
                    </ul>
                    <p>Las tareas se escogen aleatoriamente al principio de cada partida y en pantalla junto al título de la misma siempre se especifica en qué habitación está situada. Son señaladas con un icono amarillo en el mapa (algunas tareas son exclusivas de ciertos mapas).</p>
                    <p>A continuación en este apartado de nuestra guía completa del juego vamos a mostrar todos los tipos de tareas que existen y cómo se completan con éxito cada una de ellas.</p>

                    <h3 id="t1">Abrir camino del agua</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: gira las palancas en sentido antihorario para abrir el agua.</li>
                    </ul>


                    <h3 id="t2">Alinear la salida del motor</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: ve a lo paneles y mueve la palanca para hacer coincidir las líneas hasta que se pongan de color verde.</li>
                    </ul>
                    <h3 id="t3">Alinear telescopio</h3>

                    <ul>
                        <li>
                            ¿En qué mapa?: exclusiva de Polus.
    </li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: mueve y apunta el telescopio hacia el objeto que se muestra dentro del círculo.</li>
                    </ul>
                    <h3 id="t4">Almacenar artefactos</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: coloca cada uno de los artefactos dentro de su correspondiente lugar.</li>
                    </ul>
                    <h3 id="t5">Armar artefacto</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Mira HQ.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: monta las piezas en el orden correcto encajándolas entre sí para armar de nuevo el artefacto.</li>
                    </ul>

                    <h3 id="t6">Arrancar reactor</h3>


                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: repite la secuencia pulsando los botones en el orden correcto tal y como se muestra en el panel izquierdo.</li>
                    </ul>
                    <h3 id="t7">Arreglar cableado</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: común.</li>
                        <li>Cómo completar: debes unir cada cable de un lado a otro del panel con su color correspondiente.</li>
                    </ul>

                    <h3 id="t8">Calibrar distribuidor</h3>

                    <ul>
                        <li>¿En qué mapa?: en Skeld.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: pulsa los botones para detener cada uno de los círculos que giran en el momento en que se unen con su color respectivo.</li>
                    </ul>
                    <h3 id="t9">Comprar bebidas</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Mira HQ.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: ve a la máquina expendedor e introduce el código de la bebida que corresponde a la que está dibujada en el papel pegado.</li>
                    </ul>

                    <h3 id="t10">Desbloquear colectores</h3>

                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: debes pulsar la secuencia de botones en el orden correcto, del 1 al 10.</li>
                    </ul>

                    <h3 id="t11">Descargar datos / Subir datos</h3>

                    <ul>
                        <li>¿En qué mapa?: en Skeld y Polus.</li>
                        <li>Tipo de tarea: corta (larga en Skeld).</li>
                        <li>Cómo completar: debes pulsar en el botón de descargar datos y esperar unos segundos a que se complete la barra, después ve al siguiente panel y pulsa en subir datos y espera de nuevo a que se complete.</li>
                    </ul>
                    <h3 id="t12">Destruir asteroides</h3>

                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: larga (corta en Polus).</li>
                        <li>Cómo completar: apunta y dispara a los asteroides que aparecen en pantalla para destruirlos hasta completar la tarea.</li>
                    </ul>
                    <h3 id="t13">Desviar energía</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld y Mira HQ.</li>
                        <li>Tipo de tarea: corta (corta o larga en Mira HQ).</li>
                        <li>Cómo completar: debes acudir al primer panel de la habitación que corresponda y bajar la palanca para desviar la energía, después debes acudir al siguiente panel señalado y girar la manecilla del centro para aceptar la energía desviada.</li>
                    </ul>
                    <h3 id="t14">Escanear pase de abordaje</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: común.</li>
                        <li>Cómo completar: saca tu pase de abordaje, dale la vuelta y colócale en el escáner.</li>
                    </ul>

                    <h3 id="t15">Encender escudos</h3>

                    <ul>
                        <li>¿En qué mapa?: en Skeld y Mira HQ.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: pulsa los rombos de color rojo para activar los escudos.</li>
                    </ul>
                    <h3 id="t16">Estabilizar dirección</h3>

                    <ul>
                        <li>¿En qué mapa?: en Skeld.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: mueve la diana hacia el punto del radar para estabilizar la dirección.</li>
                    </ul>
                    <h3 id="t17">Enviar escaneo</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: larga (corta en Polus).</li>
                        <li>Cómo completar: súbete y usa la plataforma de escaneo durante unos segundos hasta que se complete el escaneo.</li>
                    </ul>
                    <h3 id="t18">Hacer diagnóstico</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Mira HQ.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: interactúa con el panel y pulsa el botón para que dé comienzo el diagnóstico, entonces espera hasta que pasen los segundos necesarios y regresa al panel para pulsar sobre la anomalía de color rojo.</li>
                    </ul>
                    <h3 id="t19">Ingresar código ID</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld y Mira HQ.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: interactúa con el panel, saca de la cartera tu tarjeta e introduce el código que sale escrito en la misma.</li>
                    </ul>
                    <h3 id="t20">Insertar llaves</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: común.</li>
                        <li>Cómo completar: inserta la llave correcta en la ranura señalada y gírala.</li>
                    </ul>
                    <h3 id="t21">Inspeccionar muestra</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld y Polus.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: presiona el botón verde y espera unos segundos mientras la muestra se procesa después regresa al panel y selecciona la muestra que es de color distinto.</li>
                    </ul>
                    <h3 id="t22">Limpia el filtro O2</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld y Mira HQ.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: empuja las hojas hacia la rendija de la izquierda para limpiar el filtro.</li>
                    </ul>
                    <h3 id="t23">Llenar frascos</h3>

                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: llena las bombonas de oxígeno colocándolas en la boquilla de aire.</li>
                    </ul>
                    <h3 id="t24">Mapa de navegación</h3>

                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: mueve la nave por las líneas hacia los puntos para completar el mapa de navegación.</li>
                    </ul>
                    <h3 id="t25">Medir clima</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Mira HQ.</li>
                        <li>Tipo de tarea: común.</li>
                        <li>Cómo completar: interactúa con el panel del clima y pulsa en el botón para medir el mismo durante unos segundos.</li>
                    </ul>
                    <h3 id="t26">Monitorear árbol</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: mueve las palancas hacia las zonas de líneas de puntos para equilibrar correctamente la monitorización del árbol.</li>
                    </ul>
                    <h3 id="t27">Ordenar muestras</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Mira HQ.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: introduce cada una de las muestras en sus cajas correspondientes.</li>
                    </ul>
                    <h3 id="t28">Procesar información</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Mira HQ.</li>
                        <li>Tipo de tarea: común.</li>
                        <li>Cómo completar: ve hasta el ordenador y pulsa el botón para procesar la información durante unos segundos.</li>
                    </ul>
                    <h3 id="t29">Recargar motores</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld y Polus.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: mantén pulsado el botón para rellenar de fuel la botella, después ve hacia lo motores y llénalos con el fuel.</li>
                    </ul>

                    <h3 id="t30">Reemplazar jarra de agua</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: mantén pulsado el botón azul para transferir el agua de un recipiente a otro.</li>
                    </ul>
                    <h3 id="t31">Regar plantas</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Mira HQ.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: recoge la regadera en el almacén pulsando sobre ella y ve hasta las plantas mustias, toca cada una para que vuelvan a crecer.</li>
                    </ul>
                    <h3>Registrar temperatura</h3>

                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: pulsa las flechas arriba o abajo para igualar la temperatura del panel de la izquierda con la que se muestra en el panel de la derecha.</li>
                    </ul>
                    <h3 id="t32">Reiniciar Wifi</h3>

                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: larga.</li>
                        <li>Cómo completar: baja la palanca para apagar el Wifi y vuelve después de los segundos señalados para subirla y volver a activar el Wifi.</li>
                    </ul>
                    <h3 id="t33">Reparar nodo del clima</h3>

                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: corta o larga.</li>
                        <li>Cómo completar: recoge el cuadrado brillante y llévalo a través del recorrido correcto hacia la salida para reparar el nodo del clima.</li>
                    </ul>

                    <h3 id="t34">Reparar taladro</h3>
                    <ul>
                        <li>¿En qué mapa?: exclusiva de Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: pulsa repetidamente sobre los iconos de exclamación hasta que desaparezcan.</li>
                    </ul>
                    <h3 id="t35">Utilizar tarjeta</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: corta.</li>
                        <li>Cómo completar: ve al panel, saca tu tarjeta de la cartera y pásala por el lector ni muy rápido ni muy lento.</li>
                    </ul>

                    <h3 id="t36">Vaciar basurero / contenedor</h3>
                    <ul>
                        <li>¿En qué mapa?: en Skeld, Mira HQ y Polus.</li>
                        <li>Tipo de tarea: corta (larga en Skeld).</li>
                        <li>Cómo completar: debes tirar y mantener bajada la palanca para vaciar la basura, luego haz lo mismo en el siguiente punto marcado.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas
