# VISHAL.X — Futuristic 3D Portfolio

Complete Next.js 14 + React 18 portfolio with an interactive Three.js / React Three Fiber hero scene.

## Requirements
- Node.js 18.17 or newer
- npm

## Run locally
1. Extract this project.
2. Open the extracted folder in VS Code.
3. In the terminal run `npm install`.
4. Copy `.env.example` to `.env.local` and set your public contact email:
   `NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com`
5. Run `npm run dev`.
6. Visit http://localhost:3000.

## Build
Run `npm run build`, then `npm start`.

## Notes
- The 3D scene supports pointer drag/orbit via React Three Fiber's Canvas controls through native pointer interaction; it continuously animates.
- Keep `app/layout.tsx` and `app/globals.css` together as provided.
- Add your resume as `public/resume.pdf` when ready.
- Replace any profile details or links that change before publishing.
