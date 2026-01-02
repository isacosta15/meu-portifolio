// Mock data for Isabela's Portfolio
// Exemplo: Se o componente está em src/components/ e a foto em src/assets/images/
import fotoPerfil from 'src/data/img/Perfil.jpg';
import italents from 'src/data/img/italents.png';
import senai from 'src/data/img/senai.png';
import EcoTrack from 'src/data/img/Eco.png';
import Yomu from 'src/data/img/Yomu.jpg';
import Arduino from 'src/data/img/Arduino.png';
import Alzheimer from 'src/data/img/Alzheimer.png';

export const personalInfo = {
  name: "Isabela Costa Nunes",
  title: "Desenvolvedora em Formação",
  subtitle: "Fullstack • Java • JavaScript • React • .NET • SQL",
  quote: "Transformo ideias em soluções digitais criativas e funcionais.",
  email: "isabela.costa.dev@email.com",
  linkedin: "https://linkedin.com/in/isabela-nunes-dev",
  github: "https://github.com/isacosta15",
  profileImage: fotoPerfil
};

export const about = {
  description: `Sou formada no curso Técnico em Desenvolvimento de Sistemas pela ETEC de Carapicuíba e atualmente curso o primeiro ano de Análise e Desenvolvimento de Sistemas na FATEC. Tenho grande interesse na área de desenvolvimento de software, com experiência prática em Java, JavaScript, React, .NET e SQL.

Ao longo da minha formação, desenvolvi habilidades sólidas em trabalho em equipe, resolução de problemas, liderança e comunicação, participando de competições e hackathons voltados à tecnologia e à inovação.

Busco constantemente novos desafios que me permitam evoluir profissionalmente e contribuir para projetos que unam tecnologia e impacto social.`
};

export const hardSkills = [
  "Java",
  "JavaScript",
  "Python",
  "C#",
  "SQL",
  "React.js",
  "Node.js",
  ".NET",
  "MySQL",
  "MongoDB",
  "Git",
  "Postman",
  "Figma",
  "VS Code",
  "APIs RESTful",
  "TensorFlow",
  "Scrum/Kanban"
];

export const softSkills = [
  "Comunicação e Liderança",
  "Trabalho em equipe",
  "Proatividade",
  "Criatividade e Inovação",
  "Foco em resultados"
];

export const projects = [
  {
    id: 1,
    title: "EcoTrack",
    subtitle: "Hackteen (Venturus/Fundação Iochpe, 2025)",
    description: "Plataforma gamificada de reciclagem com reconhecimento de materiais via TensorFlow, sistema de pontuação e painel administrativo.",
    image: EcoTrack,
    siteUrl: "https://ecotrack-frontend-deploy.vercel.app/",
    tags: ["TensorFlow", "React", "Gamificação"]
  },
  {
    id: 2,
    title: "YOMU - Você no Mundo!",
    subtitle: "Desafio Learning Sectors (British Council, 2025)",
    description: "Plataforma inclusiva voltada à aprendizagem de crianças com deficiência visual e auditiva.",
    image: Yomu,
    siteUrl: "https://youtu.be/QSfhEHnZLyY",
    tags: ["Acessibilidade", "Educação", "React"]
  },
  {
    id: 3,
    title: "Arduino PlayTech",
    subtitle: "Campus Party Brasil 16 (2024)",
    description: "Projeto de robótica educativa apresentado como startup.",
    image: Arduino,
    siteUrl: "https://youtu.be/GItG0J0CYiY?si=G97eT3D3PEfABEzM",
    tags: ["Arduino", "IoT", "Educação"]
  },
  {
    id: 4,
    title: "Alzheimer-Care",
    subtitle: "X-Mostra de Projetos COTUCA - UNICAMP(2024)",
    description: "Aplicativo móvel criado para auxiliar no monitoramento de pacientes com Alzheimer.",
    image: Alzheimer,
    siteUrl: "https://github.com/isacosta15/alzheimer-care",
    tags: ["Mobile", "React Native", "Java", "Monitoramento"]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: 2,
    title: "Project Management Fundamentals",
    issuer: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: 3,
    title: "CyberOps Associate",
    issuer: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
  },
  {
    id: 4,
    title: "CCNA 1",
    issuer: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
  },
  {
    id: 5,
    title: "Network Security",
    issuer: "SENAI/SC",
    logo: senai
  },
  {
    id: 6,
    title: "Fundamentos de UX/UI",
    issuer: "iTalents",
    logo: italents
  }
];

export const education = {
  institution: "Fatec de Carapicuíba",
  course: "Graduação Tecnológica em Análise e Desenvolvimento de Sistemas (AMS)",
  conclusion: "Conclusão prevista: 2027"
};
