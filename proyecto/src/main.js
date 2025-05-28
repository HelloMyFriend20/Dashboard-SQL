import { supabase } from "./supabase.js";
import { mostrarLogin } from "./login.js";

document.addEventListener('DOMContentLoaded', async () => {
const user = await validarSesion();
if (!user) {
document.querySelector(".c-nav").innerHTML = ""
document.querySelector("#app").innerHTML = "no login"
mostrarLogin();

} else {
console.log('Usuario logueado:', user.email);
General(); // Aquí pones tu lógica para cargar contenido
document.querySelector(".c-nav").innerHTML = `
<button class="c-nav-item" onclick="General()">Home</button>
<button class="c-nav-item" onclick="mostrarAlbum()">Album</button>
<button class="c-nav-item" onclick="mostrarAleatorio()">Aleatorio</button>
<button class="c-nav-item" onclick="mostrarFavoritos()">Favoritos</button>
<button class="c-nav-item" onclick="mostrarDatos()">Usuario</button>
`
}
});

async function validarSesion() {
const { data: { session } } = await supabase.auth.getSession();
return session?.user || null;
}

import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
