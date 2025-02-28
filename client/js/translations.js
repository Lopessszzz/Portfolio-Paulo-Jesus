// Traduções para o inglês
const translations = {
    "en": {
        "title": "Home",
        "skills": "Skills",
        "about": "About",
        "projects": "Projects",
        "contact": "Contact",
        "transforming": "Transforming Ideas into Reality<span>.</span>",
        "welcome": "Hello, welcome to my portfolio. I'm a front-end developer and I build responsive websites, helping people turn their ideas into code.",
        "contactme": "Contact Me",
        "myskills": "MY <span>SKILLS.</span>",
        "websitestitle": "Websites",
        "websites": "I really enjoy creating websites for personal and/or professional projects. You can see some examples below or visit my github profile to check out the projects fully.",
        "database": "DataBase",
        "datamanipulation": "I can handle data smoothly, I've worked with MySQL, SQLServer and MongoDB. The minimal-api project on my Github is an API integrated with MySQL, using .NET and JS.",
        "lifestyle": "Lifestyle",
        "sports": "I love playing sports and I'm quite competitive. My favorite sports are tennis, soccer and bike trail. I'm always venturing around. I believe that sport, in addition to being good for your health, educates.",
        "nicetomeetyou": "NICE TO MEET YOU, <span>I'M PAULO JESUS</span>",
        "frontenddev": "Front-End Developer always looking for improvements to conquer the desired Full Cycle. I have 1.5 year of professional experience as a front-end developer and over 2 years of study focused on programming. I also have experience as a helpdesk and user support. Graduating in IT Management.",
        "passion": "I'm passionate about computers and have been using them since I was a kid. Would you like to know a little bit more? Follow me on social media, download my resume in this last button below or send me an email by filling out the form at the end of this page.",
        "myabilities": "MY <span>ABILITIES.</span>",
        "myprojects": "MY <span>PROJECTS.</span>",
        "project1": "Project 1",
        "project2": "Project 2",
        "project3": "Project 3",
        "talktome": "REACH <span>ME.</span>",
        "yourname": "Your full name",
        "youremail": "Your e-mail:",
        "yourtel": "Your phone number",
        "yourmessage": "Your message",
        "send": "Send",
        "en": "EN"
    },

    "pt-BR": {
        "title": "Início",
        "skills": "Especialidades",
        "about": "Sobre",
        "projects": "Projetos",
        "contact": "Contato",
        "transforming": "Transformando Ideias em Realidade<span>.</span>",
        "welcome": "Olá, seja bem-vindo ao meu portfólio. Sou desenvolvedor front-end e realizo a construção de websites responsivos, ajudando pessoas a tornar suas ideias em códigos.",
        "contactme": "Entre em Contato",
        "myskills": "MINHAS <span>ESPECIALIDADES.</span>",
        "websitestitle": "Websites",
        "websites": "Gosto muito de criar websites para projetos pessoais e/ou profissionais. Você poderá ver alguns exemplos mais abaixo ou então entrar em meu perfil github para verificar os projetos na íntegra.",
        "database": "Banco de Dados",
        "datamanipulation": "Consigo manipular dados tranquilamente, já atuei com MySQL, SQLServer e MongoDB. O projeto minimal-api em meu Github é uma API integrada com o MySQL, utilizando .NET e JS.",
        "lifestyle": "Estilo de Vida",
        "sports": "Amo praticar esportes e sou um tanto competitivo. Meus esportes favoritos são tênis, futebol e trilha de bike. Estou sempre me aventurando por aí. Acredito que o esporte além de ser bom para a saúde, educa.",
        "nicetomeetyou": "MUITO PRAZER, <span>SOU PAULO JESUS</span>",
        "frontenddev": "Desenvolvedor Front-End sempre em busca de conhecimentos para alcançar o almejado Full Cycle. Tenho 1,5 ano de experiência profissional como desenvolvedor front-end e pouco mais de 2 anos de estudo voltado a programação. Também tenho experiência como helpdesk e suporte ao usuário. Formando em Gestão da TI.",
        "passion": "Sou apaixonado por computadores e utilizo desde que me entendo por gente. Gostaria de saber um pouco mais? Me siga nas redes sociais, baixe meu currículo neste último botão abaixo ou me envie um email preenchendo o formulário no fim desta página.",
        "myabilities": "MINHAS <span>HABILIDADES.</span>",
        "myprojects": "MEUS <span>PROJETOS.</span>",
        "project1": "Projeto 1",
        "project2": "Projeto 2",
        "project3": "Projeto 3",
        "talktome": "FALE <span>COMIGO.</span>",
        "yourname": "Seu nome completo",
        "youremail": "Seu e-mail:",
        "yourtel": "Seu celular",
        "yourmessage": "Sua mensagem",
        "send": "Enviar",
        "pt-BR": "PT-BR" 
    }

};// Fim translations


function translatePage(lang) {
    console.log("Iniciando tradução para o idioma:", lang);

    document.documentElement.lang = lang;

    // Adiciona transição suave para elementos com data-translate
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        element.classList.remove('visible');
    });

    setTimeout(() => {
        for (const key in translations[lang]) {
            const translatedText = translations[lang][key];
            const elements = document.querySelectorAll(`[data-translate="${key}"]`);
            console.log(`Traduzindo chave: ${key}, com texto: "${translatedText}"`);

            elements.forEach(element => {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'submit') {
                        element.value = translatedText;
                    } else {
                        element.placeholder = translatedText;
                    }
                } else if (element.tagName === 'BUTTON') {
                    element.textContent = translatedText;
                } else {
                    if (translatedText.includes('<')) {
                        element.innerHTML = translatedText;
                    } else {
                        element.textContent = translatedText;
                    }
                }
            });
        }

        // Habilita a visibilidade com transição suave
        elementsToTranslate.forEach(element => {
            element.classList.add('visible');
        });
    }, 200);  // Tempo para aplicar o efeito de transição
}

// Seleciona todos os botões de idioma
const langButtons = document.querySelectorAll('.language-selector');

// Adiciona o evento de clique em cada botão
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        translatePage(lang); 

        // Salva a escolha do idioma no localStorage
        localStorage.setItem( lang);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se já existe um idioma armazenado e aplica
    const initialLang = localStorage.getItem('pt-BR') || 'pt-BR';
    document.documentElement.lang = initialLang;

    langButtons.forEach(button => {
        if (button.dataset.lang === initialLang) {
            button.classList.add('active');
        }
    });

    translatePage(initialLang); 
});
