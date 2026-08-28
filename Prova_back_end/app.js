import { Prestador } from './prestador.js';

console.log("ATIVIDADE: ORIENTAÇÃO A OBJETOS EM JAVASCRIPT");
console.log("");

console.log("CRIANDO PRESTADORES...");
console.log("");

const prestador1 = new Prestador(
    1,
    "Tech Solutions LTDA",
    "12.345.678/0001-90"
);

const prestador2 = new Prestador(
    2,
    "Digital Service ME",
    "98.765.432/0001-11"
);

console.log(" DADOS DOS PRESTADORES");
console.log("");

console.log(" PRESTADOR 1:");
console.log(" ID: " + prestador1.id);
console.log(" Razão Social: " + prestador1.razao_social);
console.log(" CNPJ: " + prestador1.cnpj);
console.log("");

console.log("PRESTADOR 2:");
console.log("ID: " + prestador2.id);
console.log("Razão Social: " + prestador2.razao_social);
console.log("CNPJ: " + prestador2.cnpj);
console.log("");

console.log("OBJETOS COMPLETOS:");
console.log("");

console.log("Prestador 1 (objeto completo):");
console.log(prestador1);
console.log("");

console.log("Prestador 2 (objeto completo):");
console.log(prestador2);
console.log("");

console.log("ATIVIDADE CONCLUÍDA COM SUCESSO!");
