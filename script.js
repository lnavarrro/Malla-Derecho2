const semestres = [
  {
    nombre: "Primer semestre",
    ramos: [
      { nombre: "Catedra Caribe" },
      { nombre: "Ciencias políticas" },
      { nombre: "General English I" },
      { nombre: "Instituciones Juridicas" },
      { nombre: "Introduccion al derecho" },
      { nombre: "Procesos Lectores Y Escriturales" },
      { nombre: "Razonamiento Y Representacion Matematica" },
      { nombre: "Sociologia General" },
      { nombre: "Teoria Constitucional Y Del Estado" }
    ]
  },
  {
    nombre: "Segundo semestre",
    ramos: [
      { nombre: "Derecho Civil General Y Personas" },
      { nombre: "Derecho Constitucional Colombiano I", requisitos: ["Teoria Constitucional Y Del Estado"] },
      { nombre: "Derecho Penal General" },
      { nombre: "Expresion Oral Y Argumentacion", requisitos: ["Procesos Lectores Y Escriturales"] },
      { nombre: "General English II", requisitos: ["General English I"] },
      { nombre: "Hermeneutica, Logica Y Argumentacion Juridica" },
      { nombre: "Teoria Del Derecho", requisitos: ["Introduccion al derecho"] }
    ]
  },
  {
    nombre: "Tercer semestre",
    ramos: [
      { nombre: "Derecho Civil Bienes" },
      { nombre: "Derecho Comercial General", requisitos: ["Derecho Civil General Y Personas"] },
      { nombre: "Derecho Constitucional Colombiano II", requisitos: ["Derecho Constitucional Colombiano I"] },
      { nombre: "Derecho Penal Especial", requisitos: ["Derecho Penal General"] },
      { nombre: "General English III", requisitos: ["General English II"] },
      { nombre: "Teoria Economica" },
      { nombre: "Teoria General Del Proceso" }
    ]
  },
  {
    nombre: "Cuarto semestre",
    ramos: [
      { nombre: "Derecho Administrativo General", requisitos: ["Teoria Constitucional Y Del Estado", "Derecho Constitucional Colombiano I", "Derecho Constitucional Colombiano II"] },
      { nombre: "Derecho Civil Obligaciones", requisitos: ["Derecho Civil Bienes"] },
      { nombre: "Derecho Procesal Constitucional", requisitos: ["Derecho Constitucional Colombiano I", "Derecho Constitucional Colombiano II"] },
      { nombre: "Derecho Procesal Penal", requisitos: ["Teoria General Del Proceso", "Derecho Penal Especial", "Derecho Penal General"] },
      { nombre: "Derechos Humanos Y Catedra De La Paz" },
      { nombre: "General English IV", requisitos: ["General English III"] },
      { nombre: "Procesal Civil Especial I", requisitos: ["Teoria General Del Proceso"] },
      { nombre: "Sociedades Comerciales", requisitos: ["Derecho Comercial General"] }
    ]
  },
  {
    nombre: "Quinto semestre",
    ramos: [
      { nombre: "Contratos I", requisitos: ["Derecho Civil Obligaciones"] },
      { nombre: "Derecho Administrativo Colombiano", requisitos: ["Derecho Administrativo General"] },
      { nombre: "Derecho Internacional Publico" },
      { nombre: "Derecho Laboral" },
      { nombre: "Derecho Maritimo" },
      { nombre: "General English V", requisitos: ["General English IV"] },
      { nombre: "Mecanismos Alternativos De Resolucion De Conflictos" },
      { nombre: "Procesal Civil Especial II", requisitos: ["Procesal Civil Especial I"] }
    ]
  },
  {
    nombre: "Sexto semestre",
    ramos: [
      { nombre: "Contratacion Estatal", requisitos: ["Derecho Administrativo General", "Derecho Administrativo Colombiano"] },
      { nombre: "Contratos II", requisitos: ["Contratos I"] },
      { nombre: "Derecho Culturales", requisitos: ["Derecho Internacional Publico"] },
      { nombre: "Derecho Internacional Privado" },
      { nombre: "Derecho Probatorio", requisitos: ["Procesal Civil Especial II", "Procesal Civil Especial I", "Teoria General Del Proceso"] },
      { nombre: "Electiva De Profundizacion I" },
      { nombre: "Fundamentos De La Investigacion Juridica Y Socio Juridica" },
      { nombre: "Seguridad Social", requisitos: ["Derecho Laboral"] }
    ]
  },
  {
    nombre: "Septimo semestre",
    ramos: [
      { nombre: "Consultorio Juridico Y Centro De Conciliacion I" },
      { nombre: "Derecho De Familia", requisitos: ["Derecho Civil General Y Personas"] },
      { nombre: "Electiva De Profundizacion II" },
      { nombre: "Metodos Y Tecnicas De La Investigacion Juridica Y Socio-Juridica", requisitos: ["Fundamentos De La Investigacion Juridica Y Socio Juridica"] },
      { nombre: "Procesal Administrativo", requisitos: ["Derecho Administrativo General", "Derecho Administrativo Colombiano"] },
      { nombre: "Procesal Laboral", requisitos: ["Derecho Laboral", "Seguridad Social"] },
      { nombre: "Titulos Valores" }
    ]
  },
  {
    nombre: "Octavo semestre",
    ramos: [
      { nombre: "Consultorio Juridico Y Centro De Conciliacion II", requisitos: ["Consultorio Juridico Y Centro De Conciliacion I"] },
      { nombre: "Derecho Ambiental" },
      { nombre: "Derecho Digital" },
      { nombre: "Derecho Tributario", requisitos: ["Derecho Administrativo Colombiano"] },
      { nombre: "Electiva De Profundizacion III" },
      { nombre: "Electiva De Profundizacion IV" },
      { nombre: "Seminario De Investigacion Juridica Y Socio-Juridica", requisitos: ["Metodos Y Tecnicas De La Investigacion Juridica Y Socio-Juridica"] },
      { nombre: "Sucesiones", requisitos: ["Derecho De Familia"] }
    ]
  },
  {
    nombre: "Noveno semestre",
    ramos: [
      { nombre: "Consultorio Juridico Y Centro De Conciliacion III", requisitos: ["Consultorio Juridico Y Centro De Conciliacion II"] },
      { nombre: "Curso Libre I" },
      { nombre: "Diversidad Cultural Y Conflictos Socioambientales", requisitos: ["Derecho Ambiental", "Derecho Culturales", "Derecho Administrativo General", "Derecho Administrativo Colombiano"] },
      { nombre: "Electiva De Profundizacion V" },
      { nombre: "Electiva De Profundizacion VI" },
      { nombre: "Filosofia Del Derecho", requisitos: ["Teoria Del Derecho"] },
      { nombre: "Responsabilidad Civil", requisitos: ["Derecho Probatorio", "Procesal Civil Especial II", "Procesal Civil Especial I", "Teoria General Del Proceso"] },
      { nombre: "Responsabilidad Y Etica Profesional" }
    ]
  },
  {
    nombre: "Décimo semestre",
    ramos: [
      { nombre: "Consultorio Juridico Y Centro De Conciliacion IV", requisitos: ["Consultorio Juridico Y Centro De Conciliacion III"] },
      { nombre: "Curso Libre II" },
      { nombre: "Curso Libre III" },
      { nombre: "Electiva De Profundizacion IX" },
      { nombre: "Electiva De Profundizacion VII" },
      { nombre: "Electiva De Profundizacion VIII" },
      { nombre: "Ingles Juridico", requisitos: ["General English I", "General English II", "General English III", "General English IV", "General English V"] },
      { nombre: "Procedimientos Administrativos Ambientales", requisitos: ["Derecho Ambiental", "Derecho Administrativo Colombiano", "Derecho Administrativo General"] }
    ]
  }
];

const estadoRamos = {};

function crearMalla() {
  const malla = document.getElementById("malla");

  semestres.forEach((sem) => {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = sem.nombre;
    divSemestre.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.id = ramo.nombre;

      const nombre = document.createElement("span");
      nombre.textContent = ramo.nombre;

      const btn = document.createElement("button");
      btn.textContent = "Aprobar";
      btn.onclick = () => aprobarRamo(ramo.nombre);

      divRamo.appendChild(nombre);
      divRamo.appendChild(btn);
      divSemestre.appendChild(divRamo);

      estadoRamos[ramo.nombre] = {
        aprobado: false,
        requisitos: ramo.requisitos || [],
        boton: btn,
        div: divRamo
      };
    });

    malla.appendChild(divSemestre);
  });

  actualizarEstado();
}

function aprobarRamo(nombre) {
  estadoRamos[nombre].aprobado = true;
  estadoRamos[nombre].div.classList.add("aprobado");
  actualizarEstado();
}

function actualizarEstado() {
  Object.entries(estadoRamos).forEach(([nombre, info]) => {
    if (info.aprobado) {
      info.boton.disabled = true;
      return;
    }

    const habilitado = info.requisitos.every((req) => estadoRamos[req]?.aprobado);
    info.boton.disabled = !habilitado;
    info.div.classList.toggle("locked", !habilitado);
  });
}

window.onload = crearMalla;

