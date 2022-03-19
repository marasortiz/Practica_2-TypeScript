// Clase Principal
// Se deben importar todos

import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Persona } from "./persona";
import { Telefono } from "./telefono";

// Datos iniciales Persona 1
const direccionPaula = new Direccion(
  "Calle Llave",
  15,
  8,
  "C",
  50001,
  "Zaragoza",
  "Zaragoza"
);
const mailPaula = new Mail("trabajo", "elena.paula@gmail.com");
const telefonoPaula = new Telefono("movil", 600800900);
const personaPaula = new Persona(
  "Elena Paula",
  "García",
  30,
  "12345678A",
  new Date(1992, 2, 1),
  "rosa",
  "mujer",
  [direccionPaula],
  [mailPaula],
  [telefonoPaula],
  "Solo se disponen de los datos de trabajo"
);

// Datos iniciales Persona 2
const direccionElena = new Direccion(
  "Calle Puertas",
  8,
  3,
  false,
  3001,
  "Alicante",
  "Alicante"
);
const mailElena = new Mail("personal", "elena.rodriguez@gmail.com");
const telefonoElena = new Telefono("movil", 637856967);
const personaElena = new Persona(
  "Elena",
  "Rodríguez",
  25,
  "12749368Z",
  new Date(1997, 4, 4),
  "negro",
  "mujer",
  [direccionElena],
  [mailElena],
  [telefonoElena],
  "Solo se disponen de los datos personales"
);

// Datos iniciales Persona 3
const direccionAlvaro = new Direccion(
  "Gran Vía",
  50,
  6,
  "A",
  28003,
  "Madrid",
  "Madrid"
);
const mailUnoAlvaro = new Mail("personal", "alvlo20@gmail.com");
const mailDosAlvaro = new Mail("trabajo", "alvaro.lopez@gmail.com");
const telefonoUnoAlvaro = new Telefono("movil", 606845907);
const telefonoDosAlvaro = new Telefono("movil trabajo", 668867947);
const personaAlvaro = new Persona(
  "Alvaro",
  "López",
  21,
  "12444345Z",
  new Date(2000, 5, 7),
  "morado",
  "hombre",
  [direccionAlvaro],
  [mailUnoAlvaro, mailDosAlvaro],
  [telefonoUnoAlvaro, telefonoDosAlvaro],
  "Se disponen de los datos personales y de trabajo"
);

console.log("Contactos antes de los cambios:");
console.log(personaPaula);
console.log(personaElena);
console.log(personaAlvaro);

// Se realiza la busqueda y los cambios a una persona

const agenda: Array<Persona> = new Array(
  personaPaula,
  personaElena,
  personaAlvaro
);

const dniBusqueda: string = "12345678A";

const personaModificada: Persona = agenda.find(
  (persona) => persona.dni === dniBusqueda
) as Persona;

const nuevaDireccion = new Direccion(
  "Avenida América",
  10,
  5,
  false,
  34001,
  "Palencia",
  "Palencia"
);
personaModificada.direcciones.pop();
personaModificada.direcciones.push(nuevaDireccion);

const nuevoMail = new Mail("trabajo", "ep.garcia@outlook.com");
personaModificada.mails.pop();
personaModificada.mails.push(nuevoMail);

const nuevoTelefono = new Telefono("trabajo", 674963684);
personaModificada.telefonos.pop();
personaModificada.telefonos.push(nuevoTelefono);

console.log("Contactos DESPUÉS de los cambios:");
console.log(personaPaula);
console.log(personaElena);
console.log(personaAlvaro);
