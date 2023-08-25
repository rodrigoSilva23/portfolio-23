type projectsProps = {
  id: number;
  name: string;
  imgUrl: "/frontend.svg" | "/backend.svg";
  description: string;
  access: string;
  type: "Back End" | "Front End";
  iconsSkills?: Array<string>;
};

export const projects: Array<projectsProps> = [
  {
    id: 1,
    name: "Pokemon Randow",
    imgUrl: "/frontend.svg",
    description:
      "Desafio prático envolvendo a integração com uma API de Pokémon, com a finalidade de obter e exibir informações sobre um Pokémon aleatório. Além disso, a interface da tela se adapta dinamicamente com base no elemento atribuído ao Pokémon, proporcionando uma experiência visualmente enriquecedora e interativa.",
    access: "https://randow-pokemon.vercel.app",
    type: "Front End",
    iconsSkills: [
      "https://skillicons.dev/icons?i=js",
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=vercel",
    ],
  },
  {
    id: 3,
    name: "circuito de surf ",
    imgUrl: "/backend.svg",
    description: `O projeto SurfResult é uma aplicação inovadora que visa simplificar e aprimorar a experiência de gerenciamento e visualização dos resultados do Circuito Mundial de Surfe. Inspirado na tecnologia brasileira que revolucionou a transmissão online do esporte desde os anos 90, o SurfResult é uma celebração da excelência tecnológica nacional.🌊
    🏆
    🚀`,
    access: "https://moveit-rodrigo23.vercel.app",
    type: "Back End",
    iconsSkills: [
      "https://skillicons.dev/icons?i=php",
      "https://skillicons.dev/icons?i=laravel",
    ],
  },
  {
    id: 4,
    name: "dslist",
    imgUrl: "/backend.svg",
    description: `O Projeto DSList é uma iniciativa dedicada a aprimorar e fortalecer o meu domínio do universo Java, com foco especial na framework Spring. 

    O DSList é o meu espaço pessoal para aplicar os conceitos e práticas que tenho explorado no mundo Java. Refletindo a minha dedicação em expandir as habilidades em programação, este projeto incorpora lições valiosas enquanto desenvolvo um sólido entendimento do ecossistema Java.`,
    access: "https://moveit-rodrigo23.vercel.app",
    type: "Back End",
    iconsSkills: [
      "https://skillicons.dev/icons?i=java",
      "https://skillicons.dev/icons?i=spring",
      "https://skillicons.dev/icons?i=docker",
      "https://skillicons.dev/icons?i=postgres",
    ],
  },
  {
    id: 5,
    name: "Intenção de Compra",
    imgUrl: "/backend.svg",
    description: `Com o objetivo de aprimorar e validar ainda mais os conhecimentos adquiridos no curso de Desenvolvimento Web Moderno, busquei refinar o código base por meio de várias modificações significativas. Implementei uma estrutura de pastas mais otimizada, introduzi validações essenciais e documentei minuciosamente cada etapa usando a ferramenta Swagger.`,
    access: "https://github.com/rodrigoSilva23/desafio-final-cod3r-web-moderno",
    type: "Back End",
    iconsSkills: [
      "https://skillicons.dev/icons?i=nodejs",
      "https://skillicons.dev/icons?i=express",
      "https://skillicons.dev/icons?i=docker",
      "https://skillicons.dev/icons?i=mongodb",
      "https://skillicons.dev/icons?i=postgres",
    ],
  },
  {
    id: 6,
    name: "Intenção de Compra",
    imgUrl: "/backend.svg",
    description: `Imagine um desafio emocionante para desenvolvedores back-end que desejam testar suas habilidades em um cenário de desenvolvimento real. Bem-vindo ao "Desafio Intenção de Compra", uma oportunidade única de criar e interligar dois serviços que irão gerenciar as intenções de compra dos usuários de forma eficiente e inovadora.

       Em um ambiente de desenvolvimento, você terá a oportunidade de criar dois serviços, cada um com suas próprias tarefas e responsabilidades. O primeiro serviço, desenvolvido em PHP ou TypeScript, irá permitir que você liste produtos e crie intenções de compra. Você poderá escolher entre usar uma arquitetura Rest ou GraphQL, dependendo da sua preferência. A lista de produtos será obtida a partir da Fake Store API, fornecendo dados reais para o seu serviço.`,
    access: "https://github.com/rodrigoSilva23/mono-challenge-intention",
    type: "Back End",
    iconsSkills: [
      "https://skillicons.dev/icons?i=laravel",
      "https://skillicons.dev/icons?i=nestjs",
      "https://skillicons.dev/icons?i=docker",
      "https://skillicons.dev/icons?i=postgres",
    ],
  },
];
