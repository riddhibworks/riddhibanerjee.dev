# Full-Stack Portfolio Application — Riddhi Banerjee

A modern, production-grade personal portfolio monorepo application featuring a **Java 21 / Spring Boot 3 REST API** backend and a **React 18 / TypeScript / Tailwind CSS / Framer Motion** frontend.

Designed with an editorial **Vermillion & Paper Beige** aesthetic, typed API communication layer, interactive project detail modals, dynamic skill meters, vertical timeline, and a validated contact form with DB persistence & email dispatch support.

---

## 🌟 Key Features

### 🚀 Backend (Spring Boot 3 REST API)
- **RESTful Endpoints**:
  - `GET /api/profile` — Developer profile, bio, location, social links, quick facts.
  - `GET /api/projects` — Portfolio project listing with tech stack & highlights.
  - `GET /api/projects/{id}` — Single project detail by ID.
  - `GET /api/experience` — Work history and education timeline milestones.
  - `GET /api/skills` — Categorized skills with proficiency scores.
  - `POST /api/contact` — Validated contact form endpoint storing messages in DB with optional SMTP email forwarding.
- **Architecture**: DTO pattern, Service layer, Repository pattern. No entity leaking.
- **Database**: H2 In-Memory (zero-config local dev) + PostgreSQL ready (`postgres` profile).
- **Validation**: Bean Validation (`@Valid`, `@NotBlank`, `@Email`, `@Size`).
- **Global Error Handling**: `@ControllerAdvice` returning standardized JSON error payloads.
- **CORS**: Pre-configured for Vite frontend origins (`http://localhost:5173`).
- **OpenAPI / Swagger**: Interactive API docs available at `http://localhost:8080/swagger-ui.html`.
- **Database Seeding**: Automatic startup seed data tailored for Riddhi Banerjee.

### 🎨 Frontend (React 18 + Vite + TypeScript)
- **Styling & Theme**: Minimalist Monochrome & Electric Violet theme with dark/light mode toggle stored in `localStorage`.
- **Animations**: Framer Motion scroll reveals, hero staggered text, project cards, and active tab transitions.
- **Navigation**: Fixed backdrop-blur navbar with `useActiveSection` IntersectionObserver scroll tracking.
- **Projects Section**: Tag filtering by technology ("React", "TypeScript", "Spring Boot", etc.) and project details overlay modal.
- **Timeline**: Interactive vertical experience & education timeline with glowing nodes.
- **Contact Form**: Real-time client-side validation, submit spinner, and accessible glass toast notifications.
- **Resilient API Layer**: Typed API client with automatic fallback mock data so frontend can be run independently.
- **Loading Skeletons**: Smooth pulse loading states with zero layout shift.

---

## 📁 Repository Structure

```
riddhibanerjee.dev/
├── backend/                  # Spring Boot 3.3.4 REST API
│   ├── src/main/java/        # Java 21 Source Code
│   │   └── dev/riddhibanerjee/portfolio/
│   │       ├── config/       # CorsConfig, OpenApiConfig, DatabaseSeeder
│   │       ├── controller/   # Profile, Project, Experience, Skill, Contact Controllers
│   │       ├── dto/          # ProfileDto, ProjectDto, ExperienceDto, SkillDto, etc.
│   │       ├── entity/       # Profile, Project, Experience, Skill, ContactMessage
│   │       ├── exception/    # GlobalExceptionHandler, ResourceNotFoundException
│   │       ├── repository/   # Spring Data JPA Repositories
│   │       └── service/      # Business Logic & DTO Mapping
│   ├── src/main/resources/
│   │   ├── application.yml   # H2 default config & app settings
│   │   └── application-postgres.yml # PostgreSQL profile config
│   └── pom.xml               # Maven Dependencies & Plugins
│
├── frontend/                 # React 18 + Vite + TypeScript Frontend
│   ├── src/
│   │   ├── components/       # Navbar, Hero, About, Skills, Projects, ProjectModal, Experience, Contact, Toast, Skeletons, Footer
│   │   ├── context/          # ThemeContext (dark/light mode)
│   │   ├── hooks/            # useActiveSection
│   │   ├── services/         # API Client layer (Axios)
│   │   ├── types/            # TypeScript DTO interfaces
│   │   ├── App.tsx           # Main application shell
│   │   ├── index.css         # Tailwind & Custom Design System styles
│   │   └── main.tsx          # React Root & ThemeProvider
│   ├── .env.example          # Frontend environment variables template
│   ├── package.json
│   ├── tailwind.config.js    # Electric Violet & Monochrome palette
│   └── vite.config.ts        # Vite config with API proxy
└── README.md                 # Project Documentation
```

---

## 🛠️ Quick Start & Running Locally

### Prerequisites
- **Java**: 17+ (Java 21 recommended)
- **Maven**: 3.8+
- **Node.js**: v18+ (Node 24 tested)
- **npm**: 9+

---

### 1. Start the Backend API

```bash
cd backend
mvn spring-boot:run
```

The Spring Boot backend will start on **`http://localhost:8080`**.
- **REST Endpoints**: `http://localhost:8080/api/...`
- **Swagger API Docs**: `http://localhost:8080/swagger-ui.html`
- **H2 Console**: `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:portfoliodb`, User: `sa`, Password: empty)

To run backend unit and integration tests:
```bash
mvn test
```

---

### 2. Start the Frontend Application

In a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

The React frontend will start on **`http://localhost:5173`**.

---

## 🌐 Environment Variables

### Backend Configuration (`backend/src/main/resources/application.yml`)
- `server.port`: Defaults to `8080`.
- `app.cors.allowed-origins`: `http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173`.
- `app.contact.smtp-enabled`: Set to `true` if you configure Spring Mail host and credentials.

#### Using PostgreSQL Profile (Optional):
To connect to PostgreSQL instead of in-memory H2:
```bash
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=postgres
```
Configure environment variables:
- `DB_HOST`: Database host (default: `localhost`)
- `DB_PORT`: Database port (default: `5432`)
- `DB_NAME`: Database name (default: `portfoliodb`)
- `DB_USER`: Database username (default: `postgres`)
- `DB_PASSWORD`: Database password (default: `postgres`)

### Frontend Configuration (`frontend/.env.example`)
Copy `.env.example` to `.env`:
```bash
cd frontend
cp .env.example .env
```
Contents:
```env
VITE_API_BASE_URL=http://localhost:8080/api
```

---

## 📜 API Endpoint Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/profile` | Developer bio, title, location, quick facts, social links |
| **GET** | `/api/projects` | All portfolio projects sorted by display priority |
| **GET** | `/api/projects/{id}` | Detailed single project info |
| **GET** | `/api/experience` | Career timeline (work history & education) |
| **GET** | `/api/skills` | Categorized skills with proficiencies |
| **POST** | `/api/contact` | Submits a contact inquiry (`{ name, email, subject, message }`) |

---

## 🎨 Visual Styling & Design System
- **Theme**: Vermillion & Paper Beige aesthetic (`#EFE7DC` background canvas, `#F7F2E9` warm parchment surfaces) with Vermillion Red accents (`#B91C1C` / `#D32F2F`).
- **Typography**: Cormorant Garamond (editorial serif headings), Inter (sans body), JetBrains Mono (monogram and technical badges).
- **Components**: Architectural floating panels (`backdrop-blur-md`), tactile paper cards, hairline borders, subtle grid pattern.

---

## 📄 License
MIT License. Created by [Riddhi Banerjee](https://riddhibanerjee.dev).
