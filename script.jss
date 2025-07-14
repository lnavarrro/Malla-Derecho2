const materias = [
  { nombre: "Catedra Caribe", semestre: 1, creditos: 2 },
  { nombre: "Ciencias políticas", semestre: 1, creditos: 2 },
  { nombre: "General English I", semestre: 1, creditos: 2 },
  { nombre: "Instituciones Juridicas", semestre: 1, creditos: 2 },
  { nombre: "Introduccion al derecho", semestre: 1, creditos: 2 },
  { nombre: "Procesos Lectores Y Escriturales", semestre: 1, creditos: 2 },
  { nombre: "Razonamiento Y Representacion Matematica", semestre: 1, creditos: 2 },
  { nombre: "Sociologia General", semestre: 1, creditos: 2 },
  { nombre: "Teoria Constitucional Y Del Estado", semestre: 1, creditos: 2 },
  { nombre: "Derecho Civil General Y Personas", semestre: 2, creditos: 3 },
  { nombre: "Derecho Constitucional Colombiano I", semestre: 2, creditos: 3, prerequisitos: ["Teoria Constitucional Y Del Estado"] },
  { nombre: "Derecho Penal General", semestre: 2, creditos: 3 },
  { nombre: "Expresion Oral Y Argumentacion", semestre: 2, creditos: 2, prerequisitos: ["Procesos Lectores Y Escriturales"] },
  { nombre: "General English II", semestre: 2, creditos: 2, prerequisitos: ["General English I"] },
  { nombre: "Hermeneutica, Logica Y Argumentacion Juridica", semestre: 2, creditos: 3 },
  { nombre: "Teoria Del Derecho", semestre: 2, creditos: 2, prerequisitos: ["Introduccion al derecho"] },
  // El resto de materias irá aquí. Por brevedad, se completa en la siguiente ejecución.
];

const aprobadas = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  for (let semestre = 1; semestre <= 10; semestre++) {
    const sem = document.createElement("div");
    sem.className = "semestre";
    sem.innerHTML = `<h2>${semestre}° Semestre</h2>`;
    materias.filter(m => m.semestre === semestre).forEach(m => {
      const ramo = document.createElement("div");
      ramo.className = "ramo";
      ramo.id = m.nombre;
      ramo.innerHTML = `<strong>${m.nombre}</strong> (${m.creditos} créditos)
        <button onclick="aprobar('${m.nombre}')">Aprobar</button>`;
      sem.appendChild(ramo);
    });
    contenedor.appendChild(sem);
  }
  actualizarBloqueos();
}

function aprobar(nombre) {
  aprobadas.add(nombre);
  document.getElementById(nombre).classList.add("aprobado");
  actualizarBloqueos();
}

function actualizarBloqueos() {
  materias.forEach(m => {
    const elem = document.getElementById(m.nombre);
    if (!elem) return;
    const bloqueado = m.prerequisitos && !m.prerequisitos.every(r => aprobadas.has(r));
    elem.classList.toggle("bloqueado", bloqueado);
  });
}

window.onload = crearMalla;
