---
slug: bienvenue
title: Bienvenue
authors: [qleroy]
tags: [chartsgouv]
---

import Image from '@theme/IdealImage';


Le projet **ChartsGouv** est né de l'envie de **proposer un cadre cohérent à la valorisation et la visualisation de données pour les agents de l'Etat**, en se basant sur un outil existant open source de référence que l'on peut personnaliser et faire évoluer pour les besoins de l'administration. 

**Superset** a été créé par le français Maxime Beauchemin (également à l'origine d'Airflow !), est passé sous la gouvernance de la fondation Apache en 2017, et est développé et maintenu par des ingénieurs d'Airbnb, Lyft, Apple... et [utilisé par tant d'autres](https://github.com/apache/superset/blob/master/RESOURCES/INTHEWILD.md).

Superset présente l'avantage de **se connecter à tout type de sources de données** et **rend faisable la conception de graphiques, de filtres et de tableaux de bord pour des utilisateurs non techniques**.

Nous avons constituté **une communauté d'entraide et de partage autour de Superset, ses fonctionnalités cachées et ses possibilités de personnalisation et d'évolution**.

Grâce à DuckDB nous avons montré que Superset pouvait directement ingérer les fichiers CSV ou Parquet hébergés sur data.gouv.fr, **sans avoir besoin de les télécharger ou d'utiliser une chaîne de traitement de données**, ce qui facilite la valorisation directe des données.

Nous avons pu travailler collaborativement sur ce sujet grâce à [notre plateforme Superset sur le SSPCloud de l'Insee](https://chartsgouv.lab.sspcloud.fr/superset/dashboard/dgafp), qui comprend un début du theming de l'interface aux couleurs de l'Etat avec le **DSFR**.

Nous avons mis en place [cette plateforme de documentation](https://etalab-ia.github.io/chartsgouv/) pour détailler dans des articles des solutions à des **problèmes récurrents** comme l'embedding de charts dans un site externe, le templating de requêtes SQL avec Jinja, l'installation et la configuration initiale... 

**Les contributions sont les bienvenues !** 

Liens utiles: 


- [Repo github](https://github.com/etalab-ia/chartsgouv)
- [Découvrir des cas d'usage](https://etalab-ia.github.io/chartsgouv/showcase)
- [Replay de l'intervention lors de l'événement Datarama]( https://www.youtube.com/watch?v=xvrr5X70puo&t=22648s) 

![ChartsGouv Iconographie diverse](./banner.jpg)
![ChartsGouv Iconographie diverse](./banner.png)

<Image 
  img={require('./logos_chartsgouv/lightgrey_rounded1000_chartsgouv_logo.png')} 
/>

![Logo Apache Superset](./superset-logo-horiz-apache.svg)