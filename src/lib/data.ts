// ── Personal Info ──
export const personalInfo = {
    name: "Johann Daniel",
    lastName: "Trejo Flores",
    title: "Estudiante de Ingeniería en Sistemas Computacionales",
    description:
        "Estudiante de Ingeniería en Sistemas Computacionales en Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional (IPN), apasionado por el desarrollo backend, tecnologías nuevas y algoritmos.",
    profileImage: "/assets/profile/profile.png",
    cvUrl: "/assets/English_CV_TrejoFlores.pdf",
};

// ── Education ──
export const education = [
  {
    id: 1,
    institution: "Instituto Politécnico Nacional (IPN) – Escuela Superior de Cómputo (ESCOM)",
    degree: "Ingeniería en Sistemas Computacionales",
    period: "2022 – Dic. 2026 (esperado)",
    gpa: "91/100",
    highlights: [
      "Participante en el International Collegiate Programming Contest (ICPC), dentro del top 10 de equipos de ESCOM.",
    ],
  },
  {
    id: 2,
    institution: "Centro de Estudios Científicos y Tecnológicos No. 1 \"Gonzalo Vázquez Vela\"",
    degree: "Técnico en Sistemas Digitales",
    period: "2019 – 2022",
    gpa: "91/100",
    highlights: [],
  },
];

// ── Projects ──
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl: string;
  deployUrl?: string;
  owner: {
    name: string;
    avatar: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ollin",
    subtitle: "Sistema de Monitoreo Sísmico",
    period: "Sep. – Dic. 2025",
    description:
      "Aplicación nativa Android desarrollada en equipo para visualización en tiempo real de sismos en México con datos del Sismológico Nacional (SSN). Integra Google Maps API para navegación interactiva, Firebase Cloud Messaging para notificaciones y generación de reportes sismicos en PDF",
    tags: ["Android", "Kotlin", "Spring Boot", "PostgreSQL", "Docker", "Firebase", "Redis"],
    image: "/assets/projects/ollin.jpg",
    repoUrl: "https://github.com/JohannTF/Ollin",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 2,
    title: "Shortest Path Algorithm",
    subtitle: "Visualizador interactivo Dijkstra",
    period: "Dic. 2025",
    description:
      "Aplicación interactiva en React para explorar y ver la ejecución del algoritmo de Dijkstra paso a paso con animaciones y representación visual de grafos.",
    tags: ["React", "TypeScript", "React Flow"],
    image: "/assets/projects/shortest-path-algorithm.jpg",
    repoUrl: "https://github.com/JohannTF/shortest-path-algorithm",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 3,
    title: "PSO",
    subtitle: "Servicio Social",
    period: "Feb. – Jul. 2025",
    description:
      "Implementación completa del algoritmo de Optimización por Enjambre de Partículas (PSO) desde cero, con análisis numérico y gráficas dinámicas para evaluar la convergencia del algoritmo bajo diferentes parámetros.",
    tags: ["Python", "Matplotlib", "Numpy"],
    image: "/assets/projects/pso.jpg",
    repoUrl: "https://github.com/JohannTF/PSO-algorithm",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 4,
    title: "gRPC File Transfer",
    subtitle: "Transferencia de archivos",
    period: "Jun. 2025",
    description:
      "Sistema de transferencia de archivos basado en gRPC usando chunks para la entrega de datos a multiples equipos conectados dentro de una misma LAN.",
    tags: ["Python", "gRPC", "Shell"],
    image: "/assets/projects/grpc-file-transfer.jpg",
    repoUrl: "https://github.com/JohannTF/grpc-file-transfer",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 5,
    title: "Toy Block Cipher",
    subtitle: "Cifrado de bloque en C++",
    period: "Jun. 2025",
    description:
      "Implementación de un cifrador de bloque (toy block cipher) en C++ con SP-Network de 16 bits y 5 rondas, soporte para modos ECB/CBC/CTR, generación segura de claves/IV con OpenSSL y entrada/salida en Base64 desde una interfaz CLI.",
    tags: ["C++", "OpenSSL"],
    image: "/assets/projects/toy-block-cipher.jpg",
    repoUrl: "https://github.com/JohannTF/toy-block-cipher",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 6,
    title: "OpenBook",
    subtitle: "Sistema de Recomendación de Libros",
    period: "Mar. – Jun. 2025",
    description:
      "Implementación de una plataforma web literaria para recomendación de libros usando la API pública de Openlibrary",
    tags: ["Spring Boot", "JavaScript", "CSS", "HTML", "MySQL", "Thymeleaf", "Docker"],
    image: "/assets/projects/openbook.jpg",
    repoUrl: "https://github.com/JohannTF/hola-spring-6IV3",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 7,
    title: "Compyler",
    subtitle: "Compilador en Python",
    period: "Mar. – Jun. 2025",
    description:
      "Compilador hecho desde cero en Python enfocado en el frontend del pipeline: compilación de archivos y argumentos pasados desde línea de comandos, y análisis léxico, sintáctico y semántico.",
    tags: ["Python", "Collaborative"],
    image: "/assets/projects/compyler.jpg",
    repoUrl: "https://github.com/JohannTF/compyler",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 8,
    title: "Graph News",
    subtitle: "Arbol de conocimiento",
    period: "Feb. – Jun. 2025",
    description:
      "Aplicación web desarrollada en equipo que analiza y gestiona noticias interconectando relaciones entre si y mostrando los resultados del procesamiento visualmente a través de grafos de conocimiento.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Neo4j",
      "TEAM WORK",
    ],
    image: "/assets/projects/graph-news.jpg",
    repoUrl: "https://github.com/IrminDev/graph-news",
    owner: {
      name: "IrminDev",
      avatar: "https://github.com/IrminDev.png",
    },
  },
  {
    id: 9,
    title: "Volume Integrals",
    subtitle: "Volumenes de Integrales",
    period: "Ene. 2023",
    description:
      "Programa con interfaz gráfica que calcula el area entre la parabola y la recta y muestra la graficación en 2d y 3d de su volumen",
    tags: ["Python", "Matplotlib", "Sympy"],
    image: "/assets/projects/volume-integrals.jpg",
    repoUrl: "https://github.com/JohannTF/Volume-Integrals",
    owner: {
      name: "IrminDev",
      avatar: "https://github.com/JohannTF.png",
    },
  }, 
];

// ── Certifications & Achievements ──
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  period: string;
  description: string;
  tags: string[];
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    period: "Sep. 2025",
    description:
      "Entrenamiento en infraestructura de Google Cloud. Certificado verificable con Credly.",
    tags: ["Google Cloud", "Certificación"],
    url: "https://www.credly.com/badges/225ade52-d731-428a-a922-bf5ee14ffdc8/linked_in_profile",
  },
  {
    id: 2,
    title: "Inglés Nivel B2",
    issuer: "CELEX – IPN",
    period: "2020 – 2023",
    description:
      "Certificación de nivel B2 de inglés en el Centro de Lenguas Extranjeras del IPN.",
    tags: ["Inglés", "B2"],
  },
  {
    id: 3,
    title: "International Collegiate Programming Contest (ICPC)",
    issuer: "ICPC",
    period: "Jun. – Ago. 2025",
    description:
      "Participante del ICPC regional.",
    tags: ["ICPC"],
    url: "https://icpc.global/ICPCID/30E3INV5W5OJ",
  }, 
];

// ── Technologies (for grid section) ──
export interface Technology {
  id: number;
  name: string;
  iconKey: string;
  brandColor: string;
}

export const technologies: Technology[] = [
    { id: 1, name: "Python", iconKey: "python", brandColor: "#3776AB" },
    { id: 2, name: "C++", iconKey: "cplusplus", brandColor: "#00599C" },
    { id: 3, name: "Java", iconKey: "java", brandColor: "#ED8B00" },
    { id: 4, name: "TypeScript", iconKey: "typescript", brandColor: "#3178C6" },
    { id: 5, name: "React", iconKey: "react", brandColor: "#61DAFB" },
    { id: 6, name: "Spring Boot", iconKey: "springboot", brandColor: "#6DB33F" },
    { id: 7, name: "PostgreSQL", iconKey: "postgresql", brandColor: "#4169E1" },
    { id: 8, name: "MySQL", iconKey: "mysql", brandColor: "#4479A1" },
    { id: 9, name: "Docker", iconKey: "docker", brandColor: "#2496ED" },
    { id: 10, name: "Git", iconKey: "git", brandColor: "#F05032" },
    { id: 11, name: "Linux", iconKey: "linux", brandColor: "#FCC624" },
    { id: 12, name: "Google Cloud", iconKey: "googlecloud", brandColor: "#4285F4" },
    { id: 13, name: "Azure", iconKey: "azure", brandColor: "#0078D4" },
];

// ── Soft Skills ──
export interface SoftSkill {
  id: number;
  title: string;
  description: string;
  iconKey: string;
}

export const softSkills: SoftSkill[] = [
  {
    id: 1,
    title: "Trabajo en equipo",
    description:
      "He cultivado mi habilidad para trabajar en equipo a través de diversas experiencias colaborativas. Interactuar con personas de diferentes perspectivas me ha enseñado la importancia de la comunicación clara, la cooperación y la empatía para alcanzar metas comunes.",
    iconKey: "users",
  },
  {
    id: 2,
    title: "Resiliencia",
    description:
      "He desarrollado mi resiliencia a lo largo del tiempo al enfrentar situaciones difíciles y superar adversidades. Cada desafío me ha enseñado a mantener la calma, aprender de las experiencias y continuar con determinación.",
    iconKey: "shield",
  },
  {
    id: 3,
    title: "Adaptabilidad",
    description:
      "Mi capacidad de adaptabilidad se ha formado al haberme expuesto a diferentes entornos y circunstancias cambiantes. He aprendido a ajustar rápidamente mis enfoques y a adaptarme a nuevas situaciones, viendo el cambio como una oportunidad para crecer.",
    iconKey: "refresh",
  },
  {
    id: 4,
    title: "Toma de decisiones",
    description:
      "He fortalecido mi capacidad de toma de decisiones al enfrentarme a escenarios donde evaluar alternativas y actuar con criterio es fundamental. Priorizo el análisis objetivo y la reflexión para elegir el mejor camino posible.",
    iconKey: "compass",
  },
];
