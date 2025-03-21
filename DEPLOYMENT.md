# Deployment Instructions for Lalina Next.js Website

This guide provides instructions for deploying the Lalina Next.js website to various hosting platforms.

## Option 1: Vercel (Recommended)

Vercel is the platform built by the creators of Next.js and offers the best deployment experience.

1. Create a Vercel account at https://vercel.com
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Log in to Vercel:
   ```
   vercel login
   ```
4. Deploy the project (from the project directory):
   ```
   vercel
   ```
5. For production deployment:
   ```
   vercel --prod
   ```

## Option 2: Firebase Hosting (Similar to the original Angular project)

1. Install Firebase CLI:
   ```
   npm install -g firebase-tools
   ```
2. Log in to Firebase:
   ```
   firebase login
   ```
3. Initialize Firebase in your project directory:
   ```
   firebase init
   ```
   - Select "Hosting" as the feature
   - Select your Firebase project or create a new one
   - Set "out" as the public directory
   - Configure as a single-page app: No (Next.js handles routing)
   - Set up automatic builds and deploys with GitHub: Optional

4. Build your Next.js project for production:
   ```
   npm run build
   npm run export
   ```

5. Deploy to Firebase:
   ```
   firebase deploy
   ```

## Option 3: Traditional Web Hosting

1. Build your Next.js project for static export:
   ```
   npm run build
   npm run export
   ```
2. The static files will be in the `out` directory
3. Upload these files to your web hosting service using FTP or their provided dashboard

## Option 4: Docker Deployment

1. Create a Dockerfile in the project root:
   ```
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   COPY --from=builder /app/package*.json ./
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. Build the Docker image:
   ```
   docker build -t lalina-next .
   ```

3. Run the Docker container:
   ```
   docker run -p 3000:3000 lalina-next
   ```

## Environment Variables

For any sensitive data or configuration that varies between environments, use environment variables:

1. Create a `.env.local` file in the project root (this file should not be committed to Git)
2. Add your environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   SOME_SECRET_KEY=your_secret_key
   ```
3. Access these variables in your code:
   ```javascript
   // For client-side code (only NEXT_PUBLIC_ variables)
   console.log(process.env.NEXT_PUBLIC_API_URL)
   
   // For server-side code (all variables)
   console.log(process.env.SOME_SECRET_KEY)
   ```

## CI/CD Setup

For continuous integration and deployment, you can set up GitHub Actions:

1. Create a `.github/workflows/deploy.yml` file:
   ```yaml
   name: Deploy to Vercel
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - name: Install dependencies
           run: npm ci
         - name: Deploy to Vercel
           run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
   ```

2. Add your Vercel token to GitHub repository secrets
