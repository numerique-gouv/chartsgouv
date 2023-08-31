import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Visualisation de données',
    Svg: require('@site/static/img/banner/barchart_banner.svg').default,
    description: (
      <>
        Une application pour visualiser des données en toute simplicité depuis son navigateur web.
      </>
    ),
  },
  {
    title: 'Tableaux de bord',
    Svg: require('@site/static/img/banner/my-display_banner.svg').default,
    description: (
      <>
        Tableaux de bord interactifs résumant des données en un clin d'oeil, 
        un outil d'aide à la décision.
      </>
    ),
  },
  {
    title: 'Exploration de données',
    Svg: require('@site/static/img/banner/magnifying-glass_banner.svg').default,
    description: (
      <>
        Insérer un texte ici.
      </>
    ),
  },
  {
    title: 'Programme 10%',
    Svg: require('@site/static/img/logos/10pourcent.svg').default,
    description: (
      <>
        La communauté des talents de la data de l'Etat.
        Nos valeurs : « Partage, Ouverture, Curiosité »
      </>
    ),
  },
  {
    title: 'Apache Superset',
    Svg: require('@site/static/img/logos/superset-logo-horiz-apache.svg').default,
    description: (
      <>
        Apache Superset est l'outil open source de référence pour la visualisation de données et les tableaux de bord.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
