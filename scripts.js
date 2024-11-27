// Script para gerenciar o jogo interativo
document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn-proximo");
  
    botoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        const proximoPassoId = botao.getAttribute("data-proximo");
        mostrarPasso(proximoPassoId);
      });
    });
  
    function mostrarPasso(id) {
      // Esconde todos os passos
      const passos = document.querySelectorAll(".passo");
      passos.forEach((passo) => passo.classList.remove("ativo"));
  
      // Mostra o passo correspondente ao ID
      const passoAtual = document.getElementById(`passo-${id}`);
      if (passoAtual) {
        passoAtual.classList.add("ativo");
      }
    }
  });
  