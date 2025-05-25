const listaBebidas = document.getElementById('lista-bebidas');
const btnGetTodas = document.getElementById('btn-todas');
const inputId = document.getElementById('input-buscaId');
const formId = document.getElementById('form-buscaId');
const inputNome = document.getElementById('newNome');
const inputTeor = document.getElementById('newTeor');
const formPost = document.getElementById('form-post');
const formPut = document.getElementById('form-put');
const formDelete = document.getElementById('form-delete');
const apiURL = 'http://localhost:5094/bebidas';

const getBebidas = async () => {
    listaBebidas.innerHTML = '';

    try {
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if(!response.ok){
            throw new Error('Erro ao buscar as bebidas.');
        }

        const bebida = await response.json();

        bebida.forEach(bebida => {
            const newLi = document.createElement('li');
            newLi.innerHTML = `<strong>Cod. ${bebida.id}</strong> <br>
             Nome: ${bebida.nome} <br>
             Teor Alcoólico: ${bebida.teorAlcoolico}%`;
            listaBebidas.appendChild(newLi);
        });

    } 
    catch (error) {
        console.log(error.message);
        listaBebidas.innerText = `${error.message}`;
    }
}

const getBebidaPorId = async (id) => {
    listaBebidas.innerHTML = '';

    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok){
            throw new Error("Bebida não encontrada!");
        }

        const bebida = await response.json();

        const newLi = document.createElement('li');
        newLi.innerText = `ID: ${bebida.id} | Nome: ${bebida.nome} | Teor Alcoólico: ${bebida.teorAlcoolico}%`;
        listaBebidas.appendChild(newLi);
    } catch (error) {
        console.log(error.message);
        listaBebidas.innerText = `${error.message}`;
        alert(error.message);
    }
}

const postBebida = async (novaBebida) => {
    listaBebidas.innerHTML = '';
    
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaBebida)
        });

        if (!response.ok) {
            throw new Error("Erro ao adicionar nova bebida!");         
        }

        const bebida = await response.json();

        alert(`${bebida.nome} foi adicionado(a) ao catálogo!`);
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
}

const putBebida = async () => {
    const id = document.getElementById('updatedId').value;
    const nome = document.getElementById('updatedNome').value;
    const teorAlcoolico = document.getElementById('updatedTeor').value;
    
    listaBebidas.innerHTML = '';
    
    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome, 
                teorAlcoolico
            })
        });

        if (!response.ok) {
            throw new Error("Erro ao editar bebida!");         
        }

        const bebida = await response.json();

        alert(`A bebida ${bebida.nome} foi atualizado(a) com sucesso!`);
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
}

const deleteBebida = async () => {
    const id = document.getElementById('input-deleteId').value;
    listaBebidas.innerHTML = '';
    
    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao apagar bebida!");         
        }

        // const resultado = await response.text();

        alert(`A bebida foi retirada do catálogo!`);
    } catch (error) {
        alert(error.message);
    }
}

btnGetTodas.addEventListener('click', (event) => {
    event.preventDefault();
    getBebidas();
});

formId.addEventListener('submit', (event) => {
    event.preventDefault();
    getBebidaPorId(inputId.value);
});

formPost.addEventListener('submit', (event) => {
    event.preventDefault();
    postBebida({
        nome: inputNome.value,
        teorAlcoolico: inputTeor.value
    });
});

formPut.addEventListener('submit', (event) => {
    event.preventDefault();
    putBebida();
});

formDelete.addEventListener('submit', (event) => {
    event.preventDefault();
    deleteBebida();
});