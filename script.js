// Função para adicionar um comentário
function adicionarComentario() {
    const comentarioTexto = document.getElementById("comentario").value;
    if (comentarioTexto.trim() !== "") {
        // Criar um novo elemento de comentário
        const novoComentario = document.createElement("p");
        novoComentario.textContent = comentarioTexto;

        // Adicionar o novo comentário à lista de comentários
        const listaComentarios = document.getElementById("lista-comentarios");
        listaComentarios.appendChild(novoComentario);

        // Limpar o campo de texto após o envio
        document.getElementById("comentario").value = "";
    } else {
        alert("Por favor, escreva um comentário antes de enviar.");
    }
}
