import desjardinsB2B from "../../medias/desjardins-b2b.svg";

export const homeObg1 = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topline: "À propos : Programmeur full-stack",
  headLine:
    "Motivé, débrouillard et doté d'une excellente capacité de résolution de problèmes",
  description:
    "Autrefois électricien, j'ai décidé de changer de carrière pendant la pandémie pour relever de nouveaux défis et utiliser mon plein potentiel.",
  buttonLabel: "Retour au début",
  imgStart: false,
  img: require("../../medias/me.png"),
  widthSet: false,
  dark: false,
  marginSet: true,
  primary: true,
  darkText: false,
};

export const homeObg2 = {
  id: "parcour",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topline: "Parcours",
  headLine:
    "Passionné par l'informatique depuis mon jeune âge, en commençant avec un Commodore 64",
  description:
    "J'ai connu MS-DOS, Windows 3.1, les premiers modems et l'arrivée d'internet, puis je suis resté en veille continue sur l'évolution technologique.",
  buttonLabel: "Retour au début",
  imgStart: true,
  widthSet: false,
  img: require("../../medias/com64.webp"),
  dark: false,
  marginSet: true,
  primary: true,
  darkText: true,
};

export const homeObg3 = {
  id: "exp",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topline: "Expérience : Développeur ServiceNow | JavaScript",
  headLine:
    "Mon parcours chez Fx Innovation m'a permis d'acquérir une solide expérience sur la plateforme ServiceNow.",
  description:
    "J'ai également acquis une solide expérience en JavaScript sur ServiceNow, et je travaille actuellement sur un blog scientifique personnel, développé avec Next.js, que je gère entièrement, de la conception au déploiement, en passant par l'écriture des articles.",
  buttonLabel: "Retour au début",
  imgStart: false,
  img: require("../../medias/exp.webp"),
  widthSet: false,
  dark: false,
  marginSet: true,
  primary: true,
  darkText: false,
};

export const homeObg4 = {
  id: "desjardins",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topline: "Expérience : Desjardins | API REST & B2B",
  headLine:
    "Pilotage du volet B2B ServiceNow avec 3 fournisseurs intégrés",
  description:
    "Chez Desjardins, j'ai pris en charge des flux API REST au cœur des échanges B2B, avec suivi de 3 fournisseurs, coordination d'intégrations transverses et production d'une documentation claire pour accélérer les livraisons.",
  buttonLabel: "Retour au début",
  imgStart: true,
  img: desjardinsB2B,
  widthSet: false,
  dark: false,
  marginSet: true,
  primary: true,
  darkText: true,
};
