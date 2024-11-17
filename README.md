#  Storify - Site Web Moderne pour le Shopping en Ligne

**Storify** est un projet qui vise à créer un site web moderne pour offrir aux clients une expérience d'achat fluide et interactive. Le site inclut des fonctionnalités pratiques comme la gestion du panier, des filtres pour les produits, et une interface adaptée à tous les appareils (ordinateur, tablette, smartphone).

---

##  Table des Matières

1. [Objectifs du Projet](#objectifs-du-projet)  
2. [Technologies Utilisées](#technologies-utilisées)  
3. [Pages du Site](#pages-du-site)  
4. [Fonctionnalités](#fonctionnalités)  
5. [Instructions d'Installation](#instructions-dinstallation)  
6. [Contributions](#contributions)  

---

##  Objectifs du Projet

Le projet a pour but :  
- De rendre le shopping en ligne simple et agréable pour les clients.  
- D'offrir un site web réactif qui fonctionne sur tous les appareils.  
- De permettre une gestion facile des produits et du panier.  

---

## 🛠 Technologies Utilisées

- **HTML5** : Pour la structure des pages.  
- **Tailwind** : Pour le design et la mise en page (Flexbox, Grid, Media Queries).  
- **JavaScript** : Pour les interactions dynamiques (ajouter au panier, filtres, etc.).  
- **API RandomUser** : Pour remplir automatiquement les champs du formulaire.  
- **localStorage/sessionStorage** : Pour garder les données du panier après le rechargement de la page.

  
---

##  Pages du Site

- **Page d'Accueil** : Un carrousel montre les produits phares et les promotions.  
- **Page Catalogue** : Affiche les produits avec des options pour filtrer par catégorie et changer le mode d'affichage (grille ou liste).  
- **Page Promotions** : Détail des promotions et offres spéciales.  
- **Page Contactez-Nous** : Un formulaire pour poser des questions ou demander des informations.  

---

##  Fonctionnalités

###  Recherche et Filtrage
- Filtrer les produits par catégorie sur la page Catalogue.  
- Affichage en grille ou liste, avec 12 produits maximum par page.  

###  Gestion du Panier
- Vérifier si un produit est déjà dans le panier avant de l'ajouter.  
- Modifier la quantité ou supprimer un produit.  
- Afficher les détails : nom, quantité, prix unitaire et total.  
- Sauvegarder les données du panier avec localStorage ou sessionStorage.  

###  Personnalisation
- Choisir la taille des produits (M, L, XL) avec un ajustement de prix (+5%, +10%, +20%).  

###  Formulaire Contact
- Remplissage automatique avec l’API RandomUser.  
- Vérification des champs avec Regex pour garantir la validité des informations.  

###  Génération de Devis
- Afficher un récapitulatif avant de finaliser la commande.  

---

##  Instructions d'Installation

- Clonez ce dépôt :  
   ```bash
   git clone https://github.com/votre-repo/storify.git
