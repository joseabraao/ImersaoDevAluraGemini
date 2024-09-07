function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa"
    // onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    if(!campoPesquisa||campoPesquisa == " "){
      section.innerHTML="nada encontrado"
      return
    }
  
    campoPesquisa = campoPesquisa.toLowerCase();
    
  

    // Itera sobre cada item (x) no array de dados.
    for (let dado of dados) {
      
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)){
        
        resultados += `<div class="item-resultado">
        <h2>
          <a href="https://www.instagram.com/micagalvaojj/" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">mais informações</a>
      </div>`;
      }
    }

      // Constrói o HTML para cada item do resultado da pesquisa.
      // Inclui o título, descrição e link em um elemento div com a classe "item-resultado".

      if(!resultados){
        resultados="nada foi encontrado"
      }
    // Atribui o HTML gerado para a propriedade innerHTML da seção,
    // substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }
                 
