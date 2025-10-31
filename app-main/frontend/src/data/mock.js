// Mock data for Isabela's Portfolio
// Exemplo: Se o componente está em src/components/ e a foto em src/assets/images/
import fotoPerfil from 'src/data/img/Perfil.jpg';
import cerebro from 'src/data/img/cerebro.jpg';
import italents from 'src/data/img/italents.png';
import senai from 'src/data/img/senai.png';

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
  description: `Sou estudante da 3ª Série do curso Técnico em Desenvolvimento de Sistemas na ETEC de Carapicuíba.
Tenho grande interesse por Análise e Desenvolvimento de Software, com experiência prática em Java, JavaScript, React, .NET e SQL.

Desenvolvi habilidades sólidas em trabalho em equipe, resolução de problemas, liderança e comunicação, participando de diversas competições e hackathons voltados à tecnologia e inovação.

Busco constantemente novos desafios que me permitam evoluir e contribuir para projetos que unam tecnologia e impacto social.`
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
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
    siteUrl: "https://ecotrack-frontend-deploy.vercel.app/",
    tags: ["TensorFlow", "React", "Gamificação"]
  },
  {
    id: 2,
    title: "YOMU - Você no Mundo!",
    subtitle: "Desafio Learning Sectors (British Council, 2025)",
    description: "Plataforma inclusiva voltada à aprendizagem de crianças com deficiência visual e auditiva.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    siteUrl: "https://youtu.be/QSfhEHnZLyY",
    tags: ["Acessibilidade", "Educação", "React"]
  },
  {
    id: 3,
    title: "Arduino PlayTech",
    subtitle: "Campus Party Brasil 16 (2024)",
    description: "Projeto de robótica educativa apresentado como startup.",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=600&h=400&fit=crop",
    siteUrl: "https://nanda-pereira.github.io/Arduino-PlayTech/?fbclid=PAb21jcANxKcRleHRuA2FlbQIxMQABp_ygtdfFslWHMvp4AVWxIOM56ZToEhmha9tN9wwFFiOWtnjA9uLaL3JkTUxj_aem_sfcUT1vfZ2ioNCzVB4_L3Q",
    tags: ["Arduino", "IoT", "Educação"]
  },
  {
    id: 4,
    title: "Alzheimer-Care",
    subtitle: "X-Mostra de Projetos COTUCA - UNICAMP(2024)",
    description: "Aplicativo móvel criado para auxiliar no monitoramento de pacientes com Alzheimer.",
    image: cerebro,
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
  institution: "ETEC de Carapicuíba",
  course: "Ensino Médio Técnico em Desenvolvimento de Sistemas (AMS)",
  conclusion: "Conclusão prevista: 2025"
};
