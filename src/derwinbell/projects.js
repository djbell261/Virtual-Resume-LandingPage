const projects = [
  {
    label: "Project 01",
    shortTitle: "Health Monitoring",
    title: "Distributed Health Monitoring & Alerting System",
    subtitle: "Backend Systems",
    description:
      "LabWatch Platform is a distributed, event-driven monitoring system that simulates real-world infrastructure alerting workflows. Built with Spring Boot microservices and Apache Kafka, it ingests machine telemetry, processes events asynchronously, and manages alert lifecycles with deduplication and state transitions (ACTIVE → RESOLVED). The system is containerized with Docker and backed by PostgreSQL for scalable, production-style deployment.",
    tech: "Java, Spring Boot, Apache Kafka, PostgreSQL, Hibernate (JPA), Docker, Maven, Event-Driven Microservices Architecture",
    focus: "Backend architecture, event processing, alert lifecycle management",
    status: "In Progress",
    link: "https://github.com/djbell261/labwatch-platform.git",
    image: "images/Systems.png"
  },
  {
    label: "Project 02",
    shortTitle: "Sports News Center",
    title: "Sports News Center",
    subtitle: "Java Application",
    description:
      "A Java application built around object-oriented design where users can interact with sports content, manage articles, and work through structured content workflows. The project emphasizes OOP, SOLID principles, and custom data structures.",
    tech: "Java, OOP, SOLID, Custom Data Structures",
    focus: "Application architecture, clean logic, object-oriented design",
    status: "In Progress",
    link: "https://github.com/djbell261",
    image: "images/Sports.png"
  },
  {
    label: "Project 03",
    shortTitle: "JPMorgan Simulation",
    title: "JPMorgan Chase Software Engineering Job Simulation",
    subtitle: "Microservice Workflow",
    description:
      "A practical engineering simulation centered on backend development concepts, including transaction processing, service integration, REST endpoints, and structured workflow execution.",
    tech: "Spring Boot, Kafka, REST APIs, SQL, JPA, H2",
    focus: "Event-driven backend logic, API integration, service architecture",
    status: "Completed",
    link: "https://github.com/djbell261/forage-midas.git",
    image: "images/JP.png"
  },
  {
    label: "Project 04",
    shortTitle: "LeetCode Repository",
    title: "LeetCode Solutions Repository",
    subtitle: "Problem Solving",
    description:
      "A growing GitHub repository of algorithm and data structure solutions used to strengthen problem-solving, coding fluency, and technical interview readiness over time.",
    tech: "Java, Data Structures, Algorithms, GitHub",
    focus: "Problem solving, coding patterns, technical interview prep",
    status: "Ongoing",
    link: "https://github.com/djbell261/My-LeetCode-Solutions.git",
    image: "images/LeetCode.png"
  }
];

const carouselTrack = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const detailLabel = document.getElementById("detailLabel");
const detailTitle = document.getElementById("detailTitle");
const detailDescription = document.getElementById("detailDescription");
const detailTech = document.getElementById("detailTech");
const detailFocus = document.getElementById("detailFocus");
const detailStatus = document.getElementById("detailStatus");
const detailLink = document.getElementById("detailLink");

let currentIndex = 0;

function createCards() {
  carouselTrack.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-panel";
    card.dataset.index = index;

    card.innerHTML = `
      <div class="project-card-visual">
        <img src="${project.image}" alt="${project.title} preview" class="project-image" />
        <div class="project-overlay"></div>
        <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
        <div class="project-text">
          <h2>${project.shortTitle}</h2>
          <p>${project.subtitle}</p>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      currentIndex = index;
      renderCarousel();
      renderDetails();
    });

    carouselTrack.appendChild(card);
  });
}

function renderCarousel() {
  const cards = document.querySelectorAll(".project-panel");

  cards.forEach((card, index) => {
    card.classList.remove("active", "left", "right", "hidden-left", "hidden-right");

    if (index === currentIndex) {
      card.classList.add("active");
    } else if (index === (currentIndex - 1 + projects.length) % projects.length) {
      card.classList.add("left");
    } else if (index === (currentIndex + 1) % projects.length) {
      card.classList.add("right");
    } else if (index < currentIndex) {
      card.classList.add("hidden-left");
    } else {
      card.classList.add("hidden-right");
    }
  });

  document.body.className = `project-theme-${currentIndex}`;
}

function renderDetails() {
  const project = projects[currentIndex];

  detailLabel.textContent = project.label;
  detailTitle.textContent = project.title;
  detailDescription.textContent = project.description;
  detailTech.textContent = project.tech;
  detailFocus.textContent = project.focus;
  detailStatus.textContent = project.status;
  detailLink.href = project.link;

  const details = document.getElementById("projectDetails");
  details.style.animation = "none";
  void details.offsetWidth;
  details.style.animation = "fadeInUp 0.45s ease";
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderCarousel();
  renderDetails();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  renderCarousel();
  renderDetails();
});

createCards();
renderCarousel();
renderDetails();