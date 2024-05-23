const nome = ["Eduarda", "Fernando", "Guta", "Guta", "Helena", "Helena", "Helena"];

const meuSet = new Set((nome));

const nomesAtualizados = [... new Set(nome)]; 

console.log(nomesAtualizados);