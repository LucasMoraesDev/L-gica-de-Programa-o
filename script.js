// let name = prompt("Digite seu nome");

let option = 100;

const calculos = () => {
  let number1 = Number(prompt("Digite o primeiro número"));
  let number2 = Number(prompt("Digite o segundo número"));
  let sum = number1 + number2;
  let isSumOdd = Boolean(sum % 2);
  alert(
    `${number1} + ${number2} = ${sum}\n${sum} é ${isSumOdd ? "ímpar" : "par"}`
  );
  alert(`${number1} - ${number2} = ${number1 - number2}`);
  alert(`${number1} * ${number2} = ${number1 * number2}`);
  alert(`${number1} / ${number2} = ${(number1 / number2).toFixed(2)}`);
  alert(`${number1} % ${number2} = ${number1 % number2}`);
  alert(
    `${number1} é ${
      number1 === number2 ? "igual a" : "diferente de"
    } ${number2}`
  );
};

const medias = () => {
  let alunos = [];

  for (let i = 0; i < 2; i++) {
    let aluno = {
      name: prompt(`- Digite o nome do aluno número ${i + 1}`),
      grade1: Number(prompt(`Digite a primeira nota do aluno número ${i + 1}`)),
      grade2: Number(prompt(`Digite a segunda nota do aluno número ${i + 1}`)),
    };
    alunos.push(aluno);
  }
  for (aluno of alunos) {
    isApprovedProcess(aluno);
  }
};

const isApprovedProcess = (aluno) => {
  let average = (aluno.grade1 + aluno.grade2) / 2;
  let isApproved = average >= 7;
  let calculo = `(${aluno.grade1} + ${aluno.grade2}) / 2 = ${average}\n`;
  if (isApproved) {
    alert(`${calculo}Parabéns ${aluno.name}! Você está aprovado!`);
  } else {
    alert(`${calculo}Que pena ${aluno.name}! Você não passou!`);
  }
};

while (option != 0) {
  option = Number(
    prompt(`
  - [1]  Cálculos com Números;
  - [2]  Média dos Alunos;
  - [0]  Sair;`)
  );
  switch (option) {
    case 1:
      calculos();
      break;
    case 2:
      medias();
      break;
    case 0:
      break;
    default:
      alert("Opção inválida");
  }
}
