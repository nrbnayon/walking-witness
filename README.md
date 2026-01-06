# Walking Witness

Walking Witness is a modern, responsive web application built with [Next.js 16](https://nextjs.org/) and [React 19](https://react.dev/), designed to manage community resources, users, and donations efficiently. This project leverages the latest web technologies to provide a seamless user experience, including progressive web app (PWA) capabilities.

## 🚀 Features

- **Authentication System**: Secure login and user session management.
- **Comprehensive Dashboard**: Visual overview of key metrics and activities.
- **User Management**: Tools for managing user profiles and roles.
- **Donations & Projects**: detailed tracking of donations and ongoing projects.
- **Leader Requests**: Management interface for leadership or role-based requests.
- **File Management**: Integrated upload capabilities.
- **Responsive Design**: Mobile-first interface built with Tailwind CSS v4.
- **PWA Support**: Offline capabilities and installability powered by `@ducanh2912/next-pwa`.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**:
  - [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
  - [HugeIcons](https://hugeicons.com/) & [Lucide React](https://lucide.dev/)
  - [Sonner](https://sonner.emilkowal.ski/) for toast notifications
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## 🏁 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/walking-witness.git
    cd walking-witness
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📂 Project Structure

```text
walking-witness/
├── app/                  # App Router pages and layouts
│   ├── (auth)/           # Authentication routes
│   ├── (dashboard)/      # Protected dashboard routes (Overview, Users, etc.)
│   └── ~offline/         # PWA offline fallback page
├── components/           # Reusable UI components
│   ├── Auth/             # Auth-specific components
│   ├── Dashboard/        # Dashboard widgets and layouts
│   └── ui/               # Core design system components (buttons, inputs, etc.)
├── lib/                  # Utility functions and shared logic
├── public/               # Static assets and manifest files
└── ...
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Runs the built production application.
- `npm run lint`: Runs ESLint to identify code issues.
