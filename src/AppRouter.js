import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from './App';
import Comojugar from './Comojugar';
import Contacto from './Contacto';
import Footer from './Footer';
import Habilidades from './Habilidades';
import Impostores from './Impostores';
import Mapas from './Mapas';
import Navbar from './Navbar';
import Skins from './Skins';
import Tareas from './Tareas';
import Tripulantes from './Tripulantes';
import Videos from './Videos';
function AppRouter() {
    return (
        <div>
            
            <Router>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/comojugar" component={Comojugar} />
                        <Route exact path="/tripulantes" component={Tripulantes} />
                        <Route exact path="/impostores" component={Impostores} />
                        <Route exact path="/tareas" component={Tareas} />
                        <Route exact path="/habilidades" component={Habilidades} />
                        <Route exact path="/mapas" component={Mapas} />
                        <Route exact path="/skins" component={Skins} />
                        <Route exact path="/videos" component={Videos} />
                        <Route exact path="/contacto" component={Contacto} />
                    </Switch>
                </div>
            </Router>
            <Footer />
        </div>
    )
}

export default AppRouter
