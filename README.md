![CineInSal Animated Banner](docs/animations/hero.svg)

<div align="center">
  <h1>CineInSal</h1>
  <p>Platform streaming edukasi dan hiburan dengan UI modern, responsif, dan fokus pada pengalaman pengguna.</p>
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=0EA5E9&center=true&vCenter=true&width=720&lines=Streaming+edukasi+%2B+hiburan;React+%7C+Vite+%7C+Tailwind+%7C+MUI;Mock+API+%7C+i18n+%7C+Admin+Dashboard;Fast%2C+clean%2C+and+animation-friendly" alt="Typing animation" />
  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React badge" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite badge" />
    <img src="https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind badge" />
    <img src="https://img.shields.io/badge/MUI-5-007FFF?logo=mui&logoColor=white" alt="MUI badge" />
    <img src="https://img.shields.io/badge/Zustand-4-433E38?logo=zustand&logoColor=white" alt="Zustand badge" />
    <img src="https://img.shields.io/badge/Jest-29-C21325?logo=jest&logoColor=white" alt="Jest badge" />
  </p>
  <p>
    <img src="https://img.shields.io/badge/UI-Responsive-22c55e" alt="Responsive badge" />
    <img src="https://img.shields.io/badge/Dark-Default-111827" alt="Dark mode badge" />
    <img src="https://img.shields.io/badge/Animation-Framer%20Motion-FF2D20?logo=framer&logoColor=white" alt="Framer Motion badge" />
    <img src="https://img.shields.io/badge/State-Zustand%20%2B%20Context-8B5CF6" alt="State badge" />
  </p>
</div>

![Animated Divider](docs/animations/scanline.svg)

## Table of Contents
- Overview
- Highlights
- Tech Stack
- Motion and Visuals
- UML Diagrams
- Project Structure
- Getting Started
- Scripts
- Data and Docs

## Overview
CineInSal adalah aplikasi web streaming untuk konten edukasi dan hiburan. Fokus utamanya adalah pengalaman menonton yang halus, navigasi cepat, dan desain UI modern yang konsisten di desktop maupun mobile.

## Highlights
- <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/log-in.svg" width="16" height="16" alt="auth icon" /> Auth lengkap: login, register, dan role admin.
- <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/search.svg" width="16" height="16" alt="search icon" /> Explore dengan pencarian, filter, dan kategori konten.
- <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/play-circle.svg" width="16" height="16" alt="player icon" /> Pemutar video dengan tab deskripsi, episode, dan catatan.
- <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/bookmark.svg" width="16" height="16" alt="bookmark icon" /> Watchlist dan riwayat tontonan.
- <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/grid.svg" width="16" height="16" alt="admin icon" /> Admin dashboard untuk kelola konten dan pengguna.
- <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/globe.svg" width="16" height="16" alt="i18n icon" /> i18n berbasis JSON dan data mock untuk pengembangan cepat.
- <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/activity.svg" width="16" height="16" alt="chart icon" /> Analitik dan chart untuk insight konten.

## Tech Stack
| Layer | Tools | Notes |
| --- | --- | --- |
| Frontend | React 18, React Router | SPA cepat dan modular |
| Styling | Tailwind CSS, MUI | Utility-first dan komponen kompleks |
| State | Zustand, Context | State global ringan |
| Data | Axios, mock JSON | API mock untuk dev |
| i18n | i18next | Multi bahasa |
| Charts | Chart.js, Recharts | Visualisasi data |
| Testing | Jest, Testing Library | Unit dan UI test |
| Motion | Framer Motion | Animasi transisi dan interaksi |

## Motion and Visuals
Animasi diprioritaskan untuk memberikan rasa hidup pada UI, transisi halaman, dan feedback interaksi.

![Orbit Animation](docs/animations/orbit.svg)

## UML Diagrams
Sumber UML non-sensitive ada di `uml/` dan cuplikan berikut memakai format Mermaid agar mudah dibaca di README.

<details>
<summary>Use Case Diagram - Roles and Actions</summary>

Source: `uml/usecase-platform.mmd`

```mermaid
flowchart LR
  Guest([Guest]) --> UC_Browse((Browse catalog))
  Guest --> UC_Search((Search & filter))
  Guest --> UC_Preview((Watch trailer))
  Guest --> UC_Auth((Sign in / Sign up))

  Member([Member]) --> UC_Play((Play video))
  Member --> UC_Watchlist((Manage watchlist))
  Member --> UC_Profile((Manage profile))
  Member --> UC_Billing((Manage billing))
  Member --> UC_Notify((Receive notifications))

  Admin([Admin]) --> UC_AdminContent((Manage catalog))
  Admin --> UC_AdminUsers((Manage users))
  Admin --> UC_AdminPlans((Manage plans))
  Admin --> UC_AdminReports((Review reports))
  Admin --> UC_Auth
```
</details>

<details>
<summary>Activity Diagram - Main User Flow</summary>

Source: `uml/activity-main.mmd`

```mermaid
flowchart TD
  Start([Start]) --> Home[Open landing]
  Home --> AuthDecision{Logged in?}
  AuthDecision -- No --> AuthChoice{Login or register?}
  AuthChoice -- Login --> Login[Submit credentials]
  AuthChoice -- Register --> Register[Create account + verify]
  Login --> AuthResult{Auth ok?}
  Register --> AuthResult
  AuthResult -- No --> Fail[Show error]
  Fail --> End([End])
  AuthResult -- Yes --> Explore[Browse / search]
  AuthDecision -- Yes --> Explore
  Explore --> Detail[Open detail + trailer]
  Detail --> SubDecision{Subscription active?}
  SubDecision -- Yes --> Play[Play video]
  SubDecision -- No --> Pay[Choose plan + pay]
  Pay --> PayResult{Payment success?}
  PayResult -- No --> FailPay[Show payment failed]
  FailPay --> End
  PayResult -- Yes --> Play
  Play --> Manage[Manage watchlist/history]
  Manage --> Notify[Receive notifications]
  Notify --> End
```
</details>

<details>
<summary>Sequence Diagram - Login dan Playback</summary>

Source: `uml/sequence-playback.mmd`

```mermaid
sequenceDiagram
  autonumber
  actor User
  participant FE as Frontend (React/Vite)
  participant Auth as Auth Service
  participant Catalog as Catalog Service
  participant Player as Stream Service

  User->>FE: Open video page
  FE->>Auth: Validate session
  alt No active session
    Auth-->>FE: Not authenticated
    FE-->>User: Show login or register
    User->>FE: Submit credentials
    FE->>Auth: Login or register
    Auth-->>FE: Access token
  end

  FE->>Catalog: Fetch video details
  Catalog-->>FE: Metadata + access
  FE->>Player: Request stream token
  Player-->>FE: Stream URL
  FE-->>User: Start playback
```
</details>

<details>
<summary>Class Diagram - Core Domain</summary>

Source: `uml/class-core.mmd`

```mermaid
classDiagram
  class User {
    +UUID id
    +string email
    +string role
  }

  class Video {
    +UUID id
    +string title
    +string category
    +int durationSeconds
  }

  class Subscription {
    +UUID id
    +string plan
    +string status
    +date renewalDate
  }

  class WatchlistItem {
    +UUID id
    +date addedAt
  }

  class PlaybackHistory {
    +UUID id
    +int progressSeconds
    +date lastPlayedAt
  }

  User "1" --> "0..1" Subscription
  User "1" --> "0..*" WatchlistItem
  User "1" --> "0..*" PlaybackHistory
  WatchlistItem "1" --> "1" Video
  PlaybackHistory "1" --> "1" Video
```
</details>

## Project Structure
```text
.
├─ docs/
│  ├─ animations/
│  └─ uml-viewer.html
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ hooks/
│  ├─ layouts/
│  ├─ mocks/
│  ├─ pages/
│  ├─ routes/
│  ├─ services/
│  ├─ store/
│  └─ utils/
├─ uml/
└─ package.json
```

## Getting Started
### Prerequisites
- Node.js v18+
- npm / yarn / pnpm

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Test
```bash
npm run test
```

## Scripts
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview build
- `npm run lint` - lint code
- `npm run test` - run tests

## Data and Docs
- Mock data ada di `src/mocks/` untuk simulasi API.
- UML tambahan dan PlantUML lain ada di `docs/`.
- UML Mermaid yang non-sensitive ada di `uml/`.
<div align="center">
  <img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" alt="Animated footer" />
</div>
