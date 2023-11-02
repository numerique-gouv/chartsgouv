/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  | 'datagouv'
  | 'opendata'
  | 'sspcloud'
  ;
// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Bulloterie 2023',
    description:
      'Bulloterie Programme 10% Saison 2023',
    preview: require('./showcase/lightgrey_rounded1000_chartsgouv_logo.png'),
    website: 'https://chartsgouv.lab.sspcloud.fr/superset/dashboard/bulloterie/?native_filters_key=nBo82abYlnD5I9pjBKlbGAUTQ67_SSKl1wTPhQwrMpVGAwgr7TC9AoOrweyNLBZp',
    source: 'https://chartsgouv.lab.sspcloud.fr/superset/dashboard/bulloterie/?native_filters_key=nBo82abYlnD5I9pjBKlbGAUTQ67_SSKl1wTPhQwrMpVGAwgr7TC9AoOrweyNLBZp',
    tags: ['favorite', 'sspcloud',],
  },
  {
    title: 'SILL Socle Interministériel des Logiciels Libres',
    description:
      'Dataviz des données du Socle Interministériel des Logiciels Libres (SILL). Ingestion des données avec DuckDB.',
    preview: require('./showcase/dataviz-sill.png'),
    website: 'https://chartsgouv3.lab.sspcloud.fr/superset/dashboard/sill',
    source: 'https://chartsgouv.lab.sspcloud.fr/superset/dashboard/sill',
    tags: ['favorite', 'sspcloud', 'datagouv'],
  },
  {
    title: 'Recensement 2020 Fichier Détail Individus localisés au Canton-ou-Ville',
    description:
      'Exploration des données du recensement 2020 publiés sous format Parquet pour le Fichier Détail Individus localisés au Canton-ou-ville. Ingestion des données avec DuckDB. Croisement avec le Code Officiel Géographique (COG).',
    preview: require('./showcase/dataviz-recensement2020-fd-indcvi.png'),
    website: 'https://nec.qstar.fr/superset/dashboard/recensement2020/?standalone=2',
    source: 'https://nec.qstar.fr/superset/dashboard/recensement2020/?standalone=2',
    tags: ['favorite', 'opendata', 'datagouv'],
  },
  {
    title: 'Fréquentation des musées de France',
    description:
      'Exploration des données publiées par le Ministère de la Culture concernant la fréquentation des musées de France.',
    preview: require('./showcase/dataviz-musees.png'),
    website: 'https://nec.qstar.fr/superset/dashboard/culture/?standalone=2',
    source: 'https://nec.qstar.fr/superset/dashboard/culture/?standalone=2',
    tags: ['favorite', 'opendata', 'datagouv'],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favoris'}),
    description: translate({
      message:
        'Nos tableaux de bord créés avec Apache Superset favoris!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },
  datagouv: {
    label: translate({message: 'data.gouv.fr'}),
    description: translate({
      message:
      'Tableaux de bord exploitant des données de data.gouv.fr',
      id: 'showcase.tag.data_gouv.description'
    }),
    color: '#425a81',
  },
  opendata: {
    label: translate({message: 'open data'}),
    description: translate({
      message:
      'Tableaux de bord exploitant des données issues des plateformes de données ouvertes de l\'État ',
      id: 'showcase.tag.opendata.description'
    }),
    color: '#39ca30',
  },
  sspcloud: {
    label: translate({message: 'SSP Cloud'}),
    description: translate({
      message:
      'Tableaux de bord hébergés sur le SSPCloud de l\'INSEE',
      id: 'showcase.tag.sspcloud.description'
    }),
    color: '#ff562c',
  }
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
