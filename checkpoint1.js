function Aluno (nome, qtdDeFaltas, notas) {
    this.nome = nome;
    this.qtdDeFaltas = qtdDeFaltas;
    this.notas = notas;

    this.calculaMedia = function () {
        const soma = this.notas.reduce((acumulador, nota) => {
            return acumulador + nota;
        }, 0);
        const media = soma / this.notas.length;
        return media
    };

    this.faltas = function () {
        this.qtdDeFaltas += 1;
        return this.qtdDeFaltas;
    }

}

let aluno1 = new Aluno("carlos", 3, [9, 5, 6, 4]);
let aluno2 = new Aluno("dani", 2, [9, 2, 8, 4]);
let aluno3 = new Aluno("helter", 1, [5, 5, 8, 10]);
let aluno4 = new Aluno("marcio", 0, [6, 6, 0, 3]);
let aluno5 = new Aluno("Thiago", 3, [8, 7, 6, 8]);

const listaDeEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5];

const curso = {
    nomeDoCurso: "CTD",
    notaDeAprovacao: 7,
    faltasMaximas: 4,
    listaDeEstudantes: listaDeEstudantes,
    adicionarAluno: function (nome, qtdDeFaltas, notas) {
        let aluno = new Aluno(nome, qtdDeFaltas, notas);
        this.listaDeEstudantes.push(aluno);
    },
    consultarAluno: function (nome) {
        const aluno = this.listaDeEstudantes.find((aluno) => {
            return aluno.nome === nome;
        });
        return aluno;
    },
    media: function (nome) {
        let aluno = this.consultarAluno(nome);
        let media = aluno.calculaMedia();
        let resultado = false; 
        if(media >= this.notaDeAprovacao && aluno.qtdDeFaltas < this.faltasMaximas){
            console.log(`O(A) Aluno(a) ${aluno.nome} foi Aprovado(a)!`);
            resultado = true;
        } else if(aluno.qtdDeFaltas === this.faltasMaximas && media > this.notaDeAprovacao * 1.1){
            resultado = true;
        } else {
            console.log(`O(a) ${aluno.nome} foi reprovado(a).`);
        }
        return resultado;
    },
    aprovacao: function () {
        const aprovados = this.listaDeEstudantes.map((aluno) => {
            return this.media(aluno.nome);
        });
        return aprovados;
    }
}

console.log(curso.aprovacao());
