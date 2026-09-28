# FOOT INTELLIGENCE

Plateforme football intelligente : Live + Data + XG + Analyse + Scanner

## Stack technique

- Frontend : Next.js + TypeScript + Tailwind CSS
- Backend : NestJS + TypeScript
- Base de données : PostgreSQL
- ORM : Prisma
- Cache : Redis
- Authentification : JWT + refresh tokens
- Conteneurisation : Docker Compose

## Structure

- `apps/web` : frontend
- `apps/api` : backend NestJS
- `packages/shared` : types et utilitaires partagés

## Démarrage rapide

1. Installer les dépendances :
   ```bash
   npm install
   ```

2. Lancer les services de base :
   ```bash
   docker compose up -d postgres redis
   ```

3. Copier les variables d'environnement :
   ```bash
   cp .env.example .env
   ```

4. Démarrer le projet :
   ```bash
   npm run dev
   ```

## Phase 1 livrée

- Architecture monorepo
- Authentification prête pour intégration
- Modèle de données principal
- Modules API de base
- Interfaces web de base
- Dashboard de démonstration

## Règles de conception

- Aucune donnée inventée
- "Non disponible" ou "Pas suffisamment de données" si les informations sont absentes
- Les clés API restent côté serveur
- Les projections sont des probabilités statistiques, pas des garanties

## URLs de développement

- Frontend : http://localhost:3000
- API : http://localhost:3001

## Licence

MIT
