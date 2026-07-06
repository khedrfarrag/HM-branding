# Quickstart Guide: Project Scaffolding & Setup

---

## 1. Prerequisites
Ensure you have the following installed locally:
- Node.js 18.x or newer
- npm 10.x or newer

---

## 2. Installation
To install the project dependencies, run the following command from the repository root:
```bash
npm install
```

*Note: If npm reports peer dependency warnings for React 19 / Three.js, run:*
```bash
npm install --legacy-peer-deps
```

---

## 3. Launching Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 4. Verification Checkpoints

### A. TypeScript Compilation
Run the TypeScript compiler to verify zero type diagnostics errors:
```bash
npx tsc --noEmit
```

### B. Lint Verification
Run ESLint check to ensure code cleanliness:
```bash
npm run lint
```

### C. Build Verification
Run the production compiler to test static optimization output:
```bash
npm run build
```
Ensure all pages compile successfully.
