const tarefa = document.getElementById('tarefa')

function adicionar() {
    const prioritySelect = document.getElementById('prioritySelect');
    const priority = prioritySelect.value;
    
    const li = document.createElement('li')
    li.className = priority
    li.style.fontSize = '16px'
    
    const p = document.createElement('p')

    p.innerText = tarefa.value
    
    const btnExcluir = document.createElement('button')
    btnExcluir.className = 'button'
    btnExcluir.innerText = 'Excluir'
    btnExcluir.style.cursor = 'pointer'
    btnExcluir.style.color = '#FF0000'
    btnExcluir.style.fontWeight = '700'

    btnExcluir.addEventListener('click', function () {
        li.remove()
    })

    const btnConcluir = document.createElement('button')
    btnConcluir.className = 'button'
    btnConcluir.innerText = 'Concluir'
    btnConcluir.style.color = 'Green'
    btnConcluir.style.cursor = 'pointer'
    btnConcluir.style.justifyContent = 'end'
    btnConcluir.style.alignItems= 'end'
    btnConcluir.style.fontWeight = '650'

    btnConcluir.onclick = function() {
        console.log(li)
        moverParaConcluidas(li);

    };
    // btnConcluir.addEventListener('click'), function(){
    //     li.appendChild(tarefa)
    // }
    // }

    li.appendChild(p)
    li.appendChild(btnConcluir)
    li.appendChild(btnExcluir)

    const relacionados = document.getElementById('relacionados')
    relacionados.appendChild(li)

    if (tarefaText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }
}

function moverParaConcluidas(tarefaItem) {
    const completedTasks = document.getElementById('completedTasks');
    
    const concluirButton = tarefaItem.querySelector('button');
    concluirButton.remove();

    const dataHora = new Date();
    const dataFormatada = dataHora.toLocaleDateString();
    const horaFormatada = dataHora.toLocaleTimeString();

    const dataHoraText = document.createElement('span');
    dataHoraText.textContent = ` Concluída em: ${dataFormatada} às ${horaFormatada}`;
    dataHoraText.classList.add('data-hora');

    tarefaItem.appendChild(dataHoraText);
    completedTasks.appendChild(tarefaItem);
}