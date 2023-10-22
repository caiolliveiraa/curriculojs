
// Função para buscar informações pessoais
async function getPersonalInfo() {
    try {
        const response = await fetch('/api/pessoal');
        const data = await response.json();
        return data[0]; // Suponha que haja apenas um conjunto de informações pessoais
    } catch (error) {
        console.error('Erro ao buscar informações pessoais:', error);
    }
}

// Função para buscar informações de educação
async function getEducation() {
    try {
        const response = await fetch('/api/educacao');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar informações de educação:', error);
    }
}

// Função para buscar informações de experiência
async function getExperience() {
    try {
        const response = await fetch('/api/experiencia');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar informações de experiência:', error);
    }
}

// Função para buscar informações de habilidades
async function getSkills() {
    try {
        const response = await fetch('/api/habilidades');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar informações de habilidades:', error);
    }
}

// Função para preencher as informações pessoais na página
async function fillPersonalInfo() {
    const pessoal = await getPersonalInfo();
    document.getElementById('nome').textContent = pessoal.nome;
    document.getElementById('titulo').textContent = pessoal.titulo;
    document.getElementById('resumo').textContent = pessoal.resumo;
    document.getElementById('email').textContent = pessoal.email;
    document.getElementById('telefone').textContent = pessoal.telefone;
}

// Função para preencher informações de educação na página
async function fillEducation() {
    const educacaoList = await getEducation();
    const educacaoListElement = document.getElementById('educacao-list');
    educacaoList.forEach((educacao) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${educacao.instituicao}, ${educacao.curso} (${educacao.periodo})`;
        educacaoListElement.appendChild(listItem);
    });
}

// Função para preencher informações de experiência na página
async function fillExperience() {
    const experienciaList = await getExperience();
    const experienciaListElement = document.getElementById('experiencia-list');
    experienciaList.forEach((experiencia) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${experiencia.cargo} at ${experiencia.empresa} (${experiencia.periodo}) - ${experiencia.descricao}`;
        experienciaListElement.appendChild(listItem);
    });
}

// Função para preencher informações de habilidades na página
async function fillSkills() {
    const habilidadesList = await getSkills();
    const habilidadesListElement = document.getElementById('habilidades-list');
    habilidadesList.forEach((habilidade) => {
        const listItem = document.createElement('li');
        listItem.textContent = habilidade.habilidade;
        habilidadesListElement.appendChild(listItem);
    });
}

// Chame as funções para preencher as informações na página
fillPersonalInfo();
fillEducation();
fillExperience();
fillSkills();
