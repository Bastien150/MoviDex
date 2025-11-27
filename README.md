# MoviDex 🍿

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-green)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## ✨ Présentation
**MoviDex** est un projet personnel créé pour me familiariser avec **React** et **TailwindCSS**.  
Il permet de parcourir et d’afficher des informations sur des films, en utilisant les données fournies par l’API **The Movie Database (TMDb)**.  

> Ce projet ne stocke aucune donnée, il ne fait que **consommer l’API TMDb et afficher les informations** dans une interface simple et responsive.

---

## 🚀 Fonctionnalités
- Recherche de films par titre.  
- Affichage des résultats avec **affiches, titres et notes**.  
- Interface responsive grâce à **TailwindCSS**.  
- Navigation fluide et expérience utilisateur simple.  

---

## 🛠️ Tech Stack
- **React** – pour la construction de l’interface.  
- **TailwindCSS** – pour le design et le responsive.  
- **TMDb API** – pour les données des films.  
- **Vite** – pour le bundling et le dev rapide.  

---

## 🎯 Objectif du projet
- Pratiquer **React** (hooks, state, props).  
- Comprendre et manipuler **les API externes** (fetch, async/await).  
- Explorer **TailwindCSS** pour créer un style moderne et responsive.  
- Créer un projet fonctionnel à partir de zéro, intégrant **UI + données externes**.

---

## 📦 Installation et utilisation

1. **Cloner le dépôt :**
-bash
git clone https://github.com/Bastien150/MoviDex.git
cd MoviDex
Installer les dépendances :

-bash
Copier le code
npm install
Configurer l’API TMDb :

Crée un fichier .env à la racine avec ta clé TMDb :

.env
Copier le code
VITE_TMDB_API_KEY=ta_clef_tmdb_ici
VITE_TMDB_LANG=fr-FR
Lancer le projet en développement :

bash
Copier le code
npm run dev
Ouvrir dans le navigateur :
http://localhost:5173 (ou le port indiqué par Vite)
