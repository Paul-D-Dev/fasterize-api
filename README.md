# fasterize-api

## Contexte

Dans le cadre d'un entretien technique, on m'a demandé de réaliser une API avec Node JS from scratch qui a pour but de recevoir une requête GET avec un paramètre. 
L'objectif de l'API est de vérifier si le paramètre qui est une URL est un site optimisé par l'entreprise Fasterize. A cet effet, il faut récupérer les HEADERS de l'URL à l'aide de la librairie fetch-node avec la méthode headers.
La réponse de la requête doit retourner un objet. 
L'API a été soumise à des tests unitaires à l'aide de Jest.

## Tâches réalisées
  - Création du projet avec Node JS et le framework Express
  - Architecture du projet en 3 couches (Controllers, Services, Repositories)
  - Appels d'API tierces
  - Création d'une route GET avec un paramètre
  - Création d'une fonction qui vérifie que le paramètre est sous la forme d'une URL
  - Gestion des erreurs
  - Utilisation d'interfaces pour gérer les types
  - Tests unitaires


## Environnement technique
  - Node JS
  - Express
  - Typescript
  - Jest
