const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const ListaDosAlunosEMedias = [alunos, medias];

function exibeNomeeNota(aluno){
    if (ListaDosAlunosEMedias[0].includes(aluno)){

        const indice = ListaDosAlunosEMedias[0].indexOf(aluno);

        const mediaAluno = ListaDosAlunosEMedias[1][indice]

        console.log(`${aluno} tem a média ${mediaAluno}`)

    }else { 
        console.log("Aluno(a) não encontrado!")
    }
}
exibeNomeeNota("João")
exibeNomeeNota("Juliana")
exibeNomeeNota("Ana")
exibeNomeeNota("Caio")
