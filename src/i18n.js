import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      inicio: "I'm a Software Dev and Data Scientist",
      curiculo: "Download Resume",
      contato: "Contact me",
      sobre: "My name is Lucas Eduardo de Freitas. I completed the Computer Science program at the Federal University of Mato Grosso (UFMT). I have experience in backend and frontend development, data science, and machine learning/AI.",
      showMei: "I am a producer and seller of cookies and artisanal alfajores. My job is to prepare the sweets with quality ingredients, ensuring flavor and freshness in each unit. In addition to producing, I am also responsible for sales and marketing, offering personalized service and ensuring that each customer has the best experience when tasting my products",
      showSedec: "I work as follows: first, I seek to understand the needs of the stakeholders. Then, I do some research to identify the best ways to obtain the data, such as through APIs, files, among others. I use Python to collect and process this data. After this step, I carry out the ETL (extraction, transformation and load) process, also using Python to ensure the quality and consistency of the data. Finally, I build a BI in Power BI, creating visualizations that present the information clearly and effectively. This entire process is automated, ensuring efficiency and consistency",
      showNiesa: "Project developed with a focus on data engineering best practices. Initially, requirements were gathered from stakeholders. Then, a GitHub repository was created for code versioning, along with a shared drive for project organization and file collaboration.Using Python, I performed data collection, processing, and ETL pipelines, including the modeling of tables related to water and sewage data. The database was normalized and documented through a data dictionary.",
      cursos: "Courses",
      curso: "Course",
      certificado: "Certificate",
      estagiario: "Trainee",
      atualmente: "Now",
      fechar: "Close",
      projetos: "Projects",
      gestao: "PROJECTS MANAGEMENT",
      sobreMim: "ABOUT ME",
      mim: "About",
    },
  },
  pt: {
    translation: {
      inicio: "Sou Desenvolvedor de Software e Cientista de Dados",
      curiculo: "Download CV",
      contato: "Meu contato",
      sobre: "Meu nome é Lucas Eduardo de Freitas. Finalizei o curso de Ciência da Computação na Universidade Federal de Mato Grosso (UFMT) em 2025. Possuo experiência nas áreas de desenvolvimento backend e frontend, ciência de dados e machine learning/IA.",
      showMei: "Sou produtor e vendedor de cookies e alfajores artesanais. Minha função é preparar os doces com ingredientes de qualidade, garantindo sabor e frescor em cada unidade. Além de produzir, também sou responsável pelas vendas e o marketing, oferecendo um atendimento personalizado e garantindo que cada cliente tenha a melhor experiência ao saborear meus produtos",
      showSedec: "Trabalho da seguinte maneira: primeiro, busco entender as necessidades das partes interessadas. Em seguida, faço uma pesquisa para identificar as melhores formas de obter os dados, como por meio de APIs, arquivos, entre outros. Utilizo o Python para coletar e tratar esses dados. Após essa etapa, realizo o processo de ETL (extração, transformação e carga), utilizando também o Python para garantir a qualidade e a consistência dos dados. Por fim, construo um BI no Power BI, criando visualizações que apresentam as informações de forma clara e eficaz. Todo esse processo é automatizado, garantindo eficiência e consistência",
      showNiesa: "Projeto desenvolvido com foco em boas práticas de engenharia de dados. Inicialmente, foram levantados os requisitos junto às partes interessadas. Em seguida, foi criado um repositório no GitHub para versionamento do código e um drive para organização e compartilhamento dos arquivos do projeto.Utilizando Python, realizei a coleta, o tratamento e o ETL dos dados, incluindo a modelagem das tabelas relacionadas a água e esgoto. O banco de dados foi normalizado e documentado por meio de um dicionário de dados",
      cursos: "Cursos",
      curso: "Curso",
      certificado: "Certificado",
      estagiario: "Estagiário", 
      atualmente: "Atualmente", 
      fechar: "Fechar", 
      projetos: "Projetos", 
      gestao: "GESTÃO DE PROJETOS", 
      sobreMim: "SOBRE MIM", 
      mim: "Sobre", 
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || navigator.language.split('-')[0] || 'en',  
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
