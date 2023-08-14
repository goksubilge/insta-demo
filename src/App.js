import React from "react";
import "./App.css";
import MainNavLinks from "./compo/MainNavLinks";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className=" max-w-[480px] mx-auto bg-fuchsia-200">
      <MainNavLinks />
      <Switch>
        <Route path="/" exact>
          <h1 className="flex justify-center text-3xl font-bold text-yellow-300">
            Main !
          </h1>
          <article className="border border-black">
            <div className="flex item-center p-2">
              <img
                src="./cat-head.jpg"
                alt="Kedi Kafası"
                className="border border-blue-700 rounded-full w-8 h-8 mr-3"
              />
              <h3 className="flex-1 font-bold"> love the cat</h3>
              <h3 className="text-stone-600">1 hour ago</h3>
            </div>
            <img
              src="https://www.victorpest.com/media/wysiwyg/Articles/Victorpest/VP_What-to-Do-if-Your-Cat-Brings-You-a-Gift_M2-hero.jpg"
              alt="Black Cat"
              className="object-scale-down w-300"
            />
          </article>
        </Route>
        <Route path="/profile" exact>
          <h1 className="text-3xl font-bold text-pink-300">Profiloo !</h1>
        </Route>
        <Route path="/login" exact>
          <h1 className="text-3xl font-bold text-red-700">Gir artık !</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
