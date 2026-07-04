# 🚀 Sonium

> **Reserve money for internet. Buy data instantly anytime.**

Sonium is a modern fintech-inspired web application that helps users reserve money specifically for internet purchases and buy mobile data bundles from one dedicated wallet.

The goal is simple:

> **Never run out of data unexpectedly again.**

---

## 📖 About

Sonium is not a bank and not a telecom provider.

It is a dedicated **Internet Wallet** designed to make buying mobile data faster, simpler, and more organized.

Instead of constantly searching for cash whenever you need internet, Sonium lets you reserve funds for data purchases and manage them in one place.

This repository contains the **MVP (Minimum Viable Product)** built to validate the product idea before expanding into additional features.

---

## ✨ Features

### Authentication

* User Registration
* Login
* Logout
* Forgot Password
* Protected Routes

---

### Wallet

* Dedicated Internet Wallet
* View Wallet Balance
* Wallet Transaction History

---

### Buy Data

Supports:

* MTN
* Airtel
* Glo
* 9mobile

Users can:

* Select Network
* Choose Bundle
* Enter Phone Number
* Purchase Data

---

### Dashboard

* Wallet Balance
* Quick Actions
* Recent Transactions
* Modern Fintech UI

---

### Profile

* Update Profile
* Change Password

---

## 🚫 Not Included (MVP)

The following features are intentionally excluded from Version 1.

* Auto Buy
* Family Pools
* Rewards
* Referral System
* Cashback
* Airtime Purchase
* Electricity Bills
* Cable TV
* Savings Goals
* Emergency Data Credit
* AI Recommendations
* Usage Analytics
* Team Accounts

---

# 🛠 Tech Stack

## Frontend

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Shadcn UI

## Backend

* Next.js Route Handlers
* Next.js Server Actions

## Database

* PostgreSQL

## ORM

* Prisma **6.x**

## Authentication

* Auth.js (NextAuth)

## Deployment

* Vercel
* Neon PostgreSQL

---

# 📂 Project Structure

```text
src/
│
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── wallet/
│   ├── buy-data/
│   ├── settings/
│   ├── api/
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── dashboard/
│   ├── wallet/
│   └── purchase/
│
├── actions/
│
├── lib/
│   ├── prisma/
│   ├── auth/
│   ├── validators/
│   └── utils/
│
├── types/
│
└── middleware.ts
```

---

# 🗄 Database

Main models:

* User
* Wallet
* Transaction
* DataPurchase

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/sonium.git
```

```bash
cd sonium
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create:

```text
.env
```

Example:

```env
DATABASE_URL=""

AUTH_SECRET=""

AUTH_URL="http://localhost:3000"
```

Additional variables will be added as payment gateway and data vendor integrations are introduced.

---

## Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

## Run Development Server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

# 🎨 Design System

Sonium follows one consistent design language.

### Visual Principles

* Premium fintech aesthetic
* Soft shadows
* Rounded cards
* Spacious layout
* Mobile-first
* Blue primary color
* Minimalistic interface
* Accessible typography

Every page should feel like part of the same product universe.

---

# 🧱 Development Principles

This project follows strict engineering rules.

## DO

* Write clean TypeScript
* Use reusable components
* Use Prisma 6.x
* Keep components modular
* Use Server Actions when appropriate
* Build mobile-first
* Follow existing architecture

---

## DON'T

* Upgrade Prisma without approval
* Introduce unnecessary libraries
* Rewrite working code
* Use `any`
* Use `@ts-ignore`
* Create duplicate components
* Change folder structure without reason

---

# 📌 AI Development Rules

If you are an AI assistant contributing to this project, follow these rules.

### Rule 1

Never upgrade Prisma.

Always assume Prisma **6.x**.

---

### Rule 2

Never redesign the architecture.

Adapt to the existing codebase.

---

### Rule 3

Never modify working code unless required.

---

### Rule 4

Maintain strict TypeScript safety.

---

### Rule 5

Generate production-ready code.

Avoid placeholders and pseudo-code.

---

### Rule 6

Before generating code:

* Analyze existing files
* Explain planned changes
* Then implement

Never assume missing files exist.

---

### Rule 7

Respect the MVP.

Do not add extra features unless explicitly requested.

---

# 📈 Project Roadmap

## MVP (Current)

* Authentication
* Wallet
* Buy Data
* Dashboard
* Transaction History
* Profile Settings

---

## Version 2

* Wallet Funding
* Real Data Vendor Integration
* Push Notifications
* Purchase Receipts
* Referral Program

---

## Version 3

* Auto Buy
* Savings Goals
* Family Wallets
* Usage Insights
* Rewards

---

## Future Vision

Sonium aims to become the go-to platform for managing internet spending in Nigeria by helping users budget, reserve, and purchase connectivity with ease.

---

# 🤝 Contributing

Contributions are welcome.

Before opening a Pull Request:

* Follow the existing architecture.
* Follow the coding standards.
* Keep changes focused and well documented.
* Test your changes before submitting.

---

# 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

# 👨‍💻 Author

Built with ❤️ by **Moshood Ibrahim Bolaji**.

---

# ⭐ Support

If you like this project:

* Star the repository
* Share it with others
* Follow its development

Every star helps support the project and its future growth.
