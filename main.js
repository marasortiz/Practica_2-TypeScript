"use strict";
// Clase Principal
// Se deben importar todos
exports.__esModule = true;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
var telefono_1 = require("./telefono");
// Datos iniciales Persona 1
var direccionPaula = new direccion_1.Direccion("Calle Llave", 15, 8, "C", 50001, "Zaragoza", "Zaragoza");
var mailPaula = new mail_1.Mail("trabajo", "elena.paula@gmail.com");
var telefonoPaula = new telefono_1.Telefono("movil", 600800900);
var personaPaula = new persona_1.Persona("Elena Paula", "García", 30, "12345678A", new Date(1992, 2, 1), "rosa", "mujer", [direccionPaula], [mailPaula], [telefonoPaula], "Solo se disponen de los datos de trabajo");
// Datos iniciales Persona 2
var direccionElena = new direccion_1.Direccion("Calle Puertas", 8, 3, false, 3001, "Alicante", "Alicante");
var mailElena = new mail_1.Mail("personal", "elena.rodriguez@gmail.com");
var telefonoElena = new telefono_1.Telefono("movil", 637856967);
var personaElena = new persona_1.Persona("Elena", "Rodríguez", 25, "12749368Z", new Date(1997, 4, 4), "negro", "mujer", [direccionElena], [mailElena], [telefonoElena], "Solo se disponen de los datos personales");
// Datos iniciales Persona 3
var direccionAlvaro = new direccion_1.Direccion("Gran Vía", 50, 6, "A", 28003, "Madrid", "Madrid");
var mailUnoAlvaro = new mail_1.Mail("personal", "alvlo20@gmail.com");
var mailDosAlvaro = new mail_1.Mail("trabajo", "alvaro.lopez@gmail.com");
var telefonoUnoAlvaro = new telefono_1.Telefono("movil", 606845907);
var telefonoDosAlvaro = new telefono_1.Telefono("movil trabajo", 668867947);
var personaAlvaro = new persona_1.Persona("Alvaro", "López", 21, "12444345Z", new Date(2000, 5, 7), "morado", "hombre", [direccionAlvaro], [mailUnoAlvaro, mailDosAlvaro], [telefonoUnoAlvaro, telefonoDosAlvaro], "Se disponen de los datos personales y de trabajo");
console.log("Contactos antes de los cambios:");
console.log(personaPaula);
console.log(personaElena);
console.log(personaAlvaro);
// Se realiza la busqueda y los cambios a una persona
var agenda = new Array(personaPaula, personaElena, personaAlvaro);
var dniBusqueda = "12345678A";
var personaModificada = agenda.find(function (persona) { return persona.dni === dniBusqueda; });
var nuevaDireccion = new direccion_1.Direccion("Avenida América", 10, 5, false, 34001, "Palencia", "Palencia");
personaModificada.direcciones.pop();
personaModificada.direcciones.push(nuevaDireccion);
var nuevoMail = new mail_1.Mail("trabajo", "ep.garcia@outlook.com");
personaModificada.mails.pop();
personaModificada.mails.push(nuevoMail);
var nuevoTelefono = new telefono_1.Telefono("trabajo", 674963684);
personaModificada.telefonos.pop();
personaModificada.telefonos.push(nuevoTelefono);
console.log("Contactos DESPUÉS de los cambios:");
console.log(personaPaula);
console.log(personaElena);
console.log(personaAlvaro);
