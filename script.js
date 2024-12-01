// Defina os textos para os dois idiomas
const translations = {
    pt: {
        navAbout: "Sobre",
        navProjects: "Projetos",
        navContact: "Contato",
        labelLang: "Idioma:",
        title: "Lucas é um Desenvolvedor Full Sack.",
        description: "/* Ele cria sites funcionais e responsivos */",
        titleAbout: "Sobre mim",
        p1About: "Eu sou um Desenvolvedor Full stack Brasileiro. Posso desenvolver sites responsivos do zero e elevá-los a experiências web modernas e amigáveis.",
        p2About: "Transformar minha criatividade e conhecimento no desenvolvimento de sites e sistemas tem sido minha paixão por mais de um ano. Tenho auxiliado na manutenção e desenvolvimento de sistemas para hospitais por cerca de um ano. Sempre me esforço para aprender sobre as mais novas tecnologias e frameworks, pois aprender é a minha maior paixão.",
        viewCV: "Visualizar CV",
        projectTitle: "Projetos",
        selectionProcessTitle: "Processo Seletivo HCP Gestão",
        websiteHcpTitle: "Site HCP Gestão",
        transparencyHcpTitle: "Portal da Transparência - HCP Gestão",
        descriptionAllMyLinks: "Página Web onde Contém todos os links das minhas midias sociais.",
        processoSeletivoDescription: "Página Web onde são realizadas todas os processos seletivos das unidades HCP.",
        portalTransparenciaDescription: "Página web onde são encontradas todas as informações referentes às unidades HCP.",
        siteHcpDescription: "Página web do HCP (Hospital de Câncer de Pernambuco).",
        contactTitle: "Contato",
        contactText: "Estou interessado em uma oportunidade como Desenvolvedor full stack, no entanto, se você tiver outra solicitação ou pergunta não hesite em me contatar.",
        copyRight: "2024 LucasFigueiredoDEV. Todos os direitos reservados.",
        exampleModalLabel1: "Projeto - Processo Seletivo HCP",
        codeMyLinks: "Código",
        visitMyLinks: "Visitar",
        exampleModalLabel2: "Projeto - Portal da Transparência HCP",
        exampleModalLabel3: "Projeto - Site HCP Gestão",
        exampleModalLabel4: "Projeto - All My Links",
        detailedDescription: "Descrição Detalhada:",
        detailedDescriptionText: "Este projeto consiste em uma página web onde são realizadas todos os processos seletivos das unidades HCP Gestão.",
        detailedDescription2Text: "Este projeto consiste em uma Página web onde são encontradas todas as informações referentes às unidades HCP.",
        detailedDescription3Text: "Este projeto consiste em uma página web dedicada às unidades HCP Gestão.",
        detailedDescription4Text: "Página Web onde Contém todos os links das minhas midias sociais.",
        mainTech: "Principais Tecnologias:",
        auxDev: "Neste Projeto auxiliei no desenvolvimento:",
        p1m1:"1 - Lobby de Realização de provas.",
        p2m1:"2 - Autenticação de Logins.",
        p3m1:"3 - APIs de comunicação via E-mail.",
        p4m1:"4 - Cálculo para geração de rankings.",
        p5m1:"5 - Validação de etapas de referente ao processo seletivo.",
        p6m1:"6 - Aba para cadastro de Processos Seletivos.",
        p7m1:"7 - Aba para cadastro de Pergunta, Respostas e Tempo de prova referente a cada Processo Seletivo.",
        p1m2: "1 - Atualização de código para versão PHP mais recentes.",
        p2m2: "2 - Autenticação de Login de Usuários.",
        p3m2: "3 - Alteração de Layouts e Estilização de Páginas.",
        p4m2: "4 - Permissões de Usuários.",
        p5m2: "5 - Cadastro de Contratações.",
        p1m3: "1 - Atualização de código para versão PHP mais recentes.",
        p2m3: "2 - Alteração de Layouts e Estilização de Páginas.",
        projeto1Details: "Ver mais",
        creditsAnchor: "Créditos",
        credits: "Créditos"
    },
    en: {
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        labelLang: "Language:",
        title: "Lucas is a Full Stack Developer.",
        description: "/* He creates functional and responsive websites */",
        titleAbout: "About me",
        p1About: "I am a Brazilian Full Stack Developer. I can build responsive websites from scratch and elevate them to modern, user-friendly web experiences.",
        p2About: "Transforming my creativity and knowledge into website and system development has been my passion for over a year. I have been assisting with the maintenance and development of systems for hospitals for about a year. I always strive to learn about the newest technologies and frameworks, as learning is my biggest passion.",
        viewCV: "View CV",
        projectTitle: "Projects",
        selectionProcessTitle: "HCP Management Selection Process",
        websiteHcpTitle: "HCP Website",
        transparencyHcpTitle: "Transparency Portal - HCP Management",
        descriptionAllMyLinks: "Web page where contain all my social medias links.",
        processoSeletivoDescription: "Website where all selection processes for HCP units are carried out.",
        portalTransparenciaDescription: "Website where all information regarding HCP units can be found.",
        siteHcpDescription: "HCP (Pernambuco Cancer Hospital) website.",
        contactTitle: "Contact me",
        contactText: "I'm interested in a Full Stack Developer opportunity, however, if you have any other requests or questions please don't hesitate to contact me.",
        copyRight: "2024 LucasFigueiredoDEV. All rights reserved.",
        exampleModalLabel1: "Project - HCP Selection Process",
        codeMyLinks: "Code",
        visitMyLinks: "Visit",
        exampleModalLabel2: "Project - HCP Transparency Portal",
        exampleModalLabel3: "Project - HCP Website",
        exampleModalLabel4: "Project - All My Links",
        detailedDescription: "Detailed Description:",
        detailedDescriptionText: "This project consists of a web page where all the selection processes of the HCP Gestão units are carried out.",
        detailedDescription2Text: "This project consists of a web page where all information relating to HCP units can be found.",
        detailedDescription3Text: "This project consists of a web page dedicated to HCP Gestão units.",
        detailedDescription4Text: "Web page containing all my social media links.",
        mainTech: "Main Technologies:",
        auxDev: "In this Project I helped in the development:",
        p1m1:"1 - Exam Lobby.",
        p2m1:"2 - Login Authentication.",
        p3m1:"3 - Email communication APIs.",
        p4m1:"4 - Calculation for generating rankings.",
        p5m1:"5 - Validation of stages related to the selection process.",
        p6m1:"6 - Tab for registering Selection Processes.",
        p7m1:"7 - Tab for registering Questions, Answers and Test Time for each Selection Process.",
        p1m2: "1 - Update code to latest PHP version.",
        p2m2: "2 - User Login Authentication.",
        p3m2: "3 - Changing Layouts and Page Styling.",
        p4m2: "4 - User Permissions.",
        p5m2: "5 - Contract Registration.",
        p1m3: "1 - Update code to latest PHP version.",
        p2m3: "2 - Changing Layouts and Page Styling.",
        projeto1Details: "Details",
        creditsAnchor: "Credits",
        credits: "Credits"
    }
};

// Função para alterar o idioma
function changeLanguage() {
    const language = document.getElementById('language').value;

    // Atualiza os textos com base no idioma selecionado
    document.getElementById('navAbout').innerText = translations[language].navAbout;
    document.getElementById('navAbout2').textContent = translations[language].navAbout;
    document.getElementById('navProjects').innerText = translations[language].navProjects;
    document.getElementById('navProjects2').textContent = translations[language].navProjects;
    document.getElementById('navContact').innerText = translations[language].navContact;
    document.getElementById('navContact2').textContent = translations[language].navContact;
    document.getElementById('labelLang').innerText = translations[language].labelLang;
    document.getElementById('labelLang2').textContent = translations[language].labelLang;
    document.getElementById('title').innerText = translations[language].title;
    document.getElementById('description').innerText = translations[language].description;
    document.getElementById('titleAbout').innerText = translations[language].titleAbout;
    document.getElementById('p1About').innerText = translations[language].p1About;
    document.getElementById('p2About').innerText = translations[language].p2About;
    document.getElementById('viewCV').innerText = translations[language].viewCV;
    document.getElementById('projectTitle').innerText = translations[language].projectTitle;
    document.getElementById('selectionProcessTitle').innerText = translations[language].selectionProcessTitle;
    document.getElementById('websiteHcpTitle').innerText = translations[language].websiteHcpTitle;
    document.getElementById('transparencyHcpTitle').innerText = translations[language].transparencyHcpTitle;
    document.getElementById('descriptionAllMyLinks').innerText = translations[language].descriptionAllMyLinks;
    document.getElementById('processoSeletivoDescription').innerText = translations[language].processoSeletivoDescription;
    document.getElementById('siteHcpDescription').innerText = translations[language].siteHcpDescription;
    document.getElementById('portalTransparenciaDescription').innerText = translations[language].portalTransparenciaDescription;
    document.getElementById('contactTitle').innerText = translations[language].contactTitle;
    document.getElementById('contactText').innerText = translations[language].contactText;
    document.getElementById('copyRight').innerText = translations[language].copyRight;
    document.getElementById('exampleModalLabel1').textContent = translations[language].exampleModalLabel1;
    document.getElementById('exampleModalLabel2').textContent = translations[language].exampleModalLabel2;
    document.getElementById('exampleModalLabel3').textContent = translations[language].exampleModalLabel3;
    document.getElementById('exampleModalLabel4').textContent = translations[language].exampleModalLabel4;
    document.getElementById('detailedDescription').textContent = translations[language].detailedDescription;
    document.getElementById('detailedDescriptionText').textContent = translations[language].detailedDescriptionText;
    document.getElementById('detailedDescription2Text').textContent = translations[language].detailedDescription2Text;
    document.getElementById('detailedDescription3Text').textContent = translations[language].detailedDescription3Text;
    document.getElementById('detailedDescription4Text').textContent = translations[language].detailedDescription4Text;
    document.getElementById('detailedDescription2').textContent = translations[language].detailedDescription;
    document.getElementById('detailedDescription3').textContent = translations[language].detailedDescription;
    document.getElementById('detailedDescription4').textContent = translations[language].detailedDescription;
    document.getElementById('mainTech').textContent = translations[language].mainTech;
    document.getElementById('mainTech2').textContent = translations[language].mainTech;
    document.getElementById('mainTech3').textContent = translations[language].mainTech;
    document.getElementById('mainTech4').textContent = translations[language].mainTech;
    document.getElementById('auxDev').textContent = translations[language].auxDev;
    document.getElementById('auxDev2').textContent = translations[language].auxDev;
    document.getElementById('auxDev3').textContent = translations[language].auxDev;
    document.getElementById('p1m1').textContent = translations[language].p1m1;
    document.getElementById('p2m1').textContent = translations[language].p2m1;
    document.getElementById('p3m1').textContent = translations[language].p3m1;
    document.getElementById('p4m1').textContent = translations[language].p4m1;
    document.getElementById('p5m1').textContent = translations[language].p5m1;
    document.getElementById('p6m1').textContent = translations[language].p6m1;
    document.getElementById('p7m1').textContent = translations[language].p7m1;
    document.getElementById('p1m2').textContent = translations[language].p1m2;
    document.getElementById('p2m2').textContent = translations[language].p2m2;
    document.getElementById('p3m2').textContent = translations[language].p3m2;
    document.getElementById('p4m2').textContent = translations[language].p4m2;
    document.getElementById('p5m2').textContent = translations[language].p5m2;
    document.getElementById('p1m3').textContent = translations[language].p1m3;
    document.getElementById('p2m3').textContent = translations[language].p2m3;
    document.getElementById('projeto1Details').textContent = translations[language].projeto1Details;
    document.getElementById('codeMyLinks').textContent = translations[language].codeMyLinks;
    document.getElementById('visitMyLinks').textContent = translations[language].visitMyLinks;
    document.getElementById('visitMyLinks1').textContent = translations[language].visitMyLinks;
    document.getElementById('visitMyLinks2').textContent = translations[language].visitMyLinks;
    document.getElementById('visitMyLinks3').textContent = translations[language].visitMyLinks;
    document.getElementById('projeto2Details').textContent = translations[language].projeto1Details;
    document.getElementById('projeto3Details').textContent = translations[language].projeto1Details;
    document.getElementById('projeto4Details').textContent = translations[language].projeto1Details;
    document.getElementById('creditsAnchor').innerText = translations[language].creditsAnchor;
    document.getElementById('exampleModalLabel').textContent = translations[language].credits;

    // Alterar a linguagem do atributo "lang" na tag HTML
    document.documentElement.lang = language;
}
