

Description
Ce projet a pour objectif de concevoir et de développer un site web moderne pour le Centre Commercial AUCHAN, afin d’offrir à ses clients une expérience d’achat fluide et interactive. Le site inclura des fonctionnalités essentielles telles que la gestion du panier, un filtre par catégorie, une option de personnalisation des produits, et une interface optimisée pour tous types d'appareils (bureau, tablette, smartphone).

Table des matières
Objectifs du Projet
Technologies Utilisées
Architecture du Site
User Stories et Fonctionnalités
Structure des Dossiers
Instructions d'Installation
Planification et Méthodologie
Conformité et Normes
Contributions
Licence
Objectifs du Projet
Le site a pour but de :

Offrir une expérience utilisateur fluide et agréable sur tous types d'appareils (desktop, tablette, smartphone).
Permettre aux utilisateurs de naviguer facilement à travers les produits, d'ajouter des articles à leur panier, de gérer leur panier et de finaliser leurs achats.
Intégrer des fonctionnalités dynamiques telles qu'un filtre par catégorie de produit, un carrousel sur la page d'accueil, et une option de personnalisation des produits.
Assurer la gestion des données du panier avec un stockage persistant à l'aide de sessions ou localStorage.
Technologies Utilisées
HTML5 : Structure de base des pages web.
CSS3 : Style et mise en page (Flexbox, Grid, Media Queries pour la responsivité).
JavaScript : Interactivité et gestion du panier (ajout, suppression, vérification des doublons).
API RandomUser : Génération de données aléatoires pour le formulaire de contact.
localStorage/sessionStorage : Stockage local des informations du panier et des préférences utilisateur.
JSON : Pour le stockage et la manipulation des données relatives au panier et aux produits.
Regex : Validation des champs du formulaire "Contactez-Nous".
Frameworks de développement Front-End (facultatif) : Par exemple, Bootstrap pour la responsivité, ou un framework JavaScript tel que React ou Vue.js pour la gestion dynamique de l’interface utilisateur.
Architecture du Site
Le site sera composé des pages suivantes :

Page d'Accueil : Affiche un carrousel de produits phares, des promotions et une section "À la Une" avec des produits populaires.
Page Catalogue : Affichage des produits avec un filtre par catégorie et un affichage en mode grille ou liste.
Page Promotion : Section dédiée aux promotions spéciales et offres exclusives.
Page Contactez-Nous : Formulaire permettant aux utilisateurs de poser des questions ou de demander des informations. Ce formulaire sera pré-rempli avec des données aléatoires via l'API RandomUser.
User Stories et Fonctionnalités
Fonctionnalités Conception :
Zoning : Définition de la disposition générale des pages (accueil, catalogue, promotion, contact).
Wireframes et Maquettes : Conception des wireframes pour chaque page, ainsi que des maquettes visuelles pour le design du site.
Carrousel Produit : Ajout d’un carrousel dynamique pour afficher les produits phares sur la page d’accueil.
Responsive Design : Création de maquettes pour différentes tailles d'écrans (desktop, tablette, mobile).
Prototype : Élaboration du prototype final du site web pour validation avant le développement.
Fonctionnalités Développement Front-End :
Gestion du Panier :

Ajout au panier avec vérification des doublons.
Affichage du panier avec les détails des produits (nom, prix, quantité, total).
Sauvegarde persistante des données du panier via sessionStorage ou localStorage.
Possibilité de supprimer des articles ou de modifier la quantité.
Filtre Produits :

Intégration d'un filtre par catégorie sur la page catalogue.
Option de basculer entre l’affichage en liste ou en grille, avec un maximum de 12 produits par page.
Personnalisation des Produits :

Les produits du panier peuvent être personnalisés par taille (M, L, XL) avec des ajustements de prix (ex : M = +5%, L = +10%, XL = +20%).
Formulaire Contact :

Remplissage automatique des champs avec l’API RandomUser.
Validation des champs via des expressions régulières (Regex).
Recherche de Produits :

Intégration d’une fonction de recherche permettant de trouver des produits par nom ou catégorie.
Génération de Devis :

Fonctionnalité permettant aux utilisateurs de générer un devis détaillé des produits ajoutés au panier avant de finaliser la commande.
