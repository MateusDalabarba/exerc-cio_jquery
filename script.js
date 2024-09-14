$(document).ready(function() {
    // Ao submeter o formulário, adiciona uma nova tarefa à lista
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();

        // Cria um novo item da lista (<li>) e adiciona na lista de tarefas
        const novaTarefa = $('<li></li>').text(nomeTarefa);

        // Adiciona o evento de riscar a tarefa ao clicar
        $(novaTarefa).on('click', function() {
            $(this).toggleClass('line-through');
        });

        // Adiciona o item na lista ordenada
        $('#lista-tarefas').append(novaTarefa);

        // Limpa o campo de entrada
        $('#nome-tarefa').val('');
    });
});
