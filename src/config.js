import dotenv from 'dotenv';
dotenv.config();

import { MODE } from '../constants/blend_mode.js';
import { NETWORK } from '../constants/network.js';

// Default to BCH output, SOL and ETH are fully functional.
const network = NETWORK.bch;

// General collection metadata.
const collectionName = "light"; // Name of your collection.
const collectionDescription = "light"; // Description of your collection.
const namePrefix = "PoP"; // Prefix for the NFT name.
const description = "prove the proof is yours"; // NFT description.
const baseUri = process.env.PoP_BASE_URI || "ipfs://NewUriToReplace/images";
const baseIconUri = process.env.PoP_BASE_ICON_URI || "ipfs://NewUriToReplace/icons";

// Background for your collection. This is used for OpenAI integration.
const collectionBackground = `none so far`;

// BCMR specific metadata.
const bcmrMetadata = {
  "$schema": "https://cashtokens.org/bcmr-v2.schema.json",
  version: {
    major: 1,
    minor: 0,
    patch: 0
  },
  latestRevision: "",
  registryIdentity: {
    name: "Project Registry",
    description: "Description for your registry.",
    uris: {
      icon: "https://example.com/img/icon.png",
      web: "https://example.com/",
      registry: "https://example.com/.well-known/bitcoin-cash-metadata-registry.json"
    }
  },
  identities: {},
  license: "CC0-1.0"
};

// Set the category to your CashToken genesis unspent.
// https://bitcash.dev/guide/cashtokens.html
const bchMetadata = {
  category: "YOUR_GENESIS_UNSPENT_TX",
  symbol: "PoP",
  uris: {
    icon: "",
    image: "",
    web: "",
    telegram: "",
    twitter: "",
    youtube: "",
    instagram: "",
    reddit: "",
  },
};

const solanaMetadata = {
  symbol: "PoP",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [
    {
      address: "",
      share: 100,
    },
  ],
};
// Simple configuration.
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      {
        name: "Background",options: {bypassDNA: true}},
      { name: "pers"},
    ],
  },
  // {
  //   growEditionSizeTo: 2,
  //   layersOrder: [
  //     {
  //       name: "Background2",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },
  // {
  //   growEditionSizeTo: 3,
  //   layersOrder: [
  //     {
  //       name: "Background3",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },
  // {
  //   growEditionSizeTo: 4,
  //   layersOrder: [
  //     {
  //       name: "Background4",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },
  // {
  //   growEditionSizeTo: 5,
  //   layersOrder: [
  //     {
  //       name: "Background5",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },  {
  //   growEditionSizeTo: 6,
  //   layersOrder: [
  //     {
  //       name: "Background",options: {bypassDNA: false}},
  //     { name: "pers"},
  //   ],
  // },
  // {
  //   growEditionSizeTo: 7,
  //   layersOrder: [
  //     {
  //       name: "Background2",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },
  // {
  //   growEditionSizeTo: 8,
  //   layersOrder: [
  //     {
  //       name: "Background3",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },
  // {
  //   growEditionSizeTo: 9,
  //   layersOrder: [
  //     {
  //       name: "Background4",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },
  // {
  //   growEditionSizeTo: 10,
  //   layersOrder: [
  //     {
  //       name: "Background5",options: {bypassDNA: false,}},
  //       { name: "pers"},
    
  //   ],
  // },
];
// Advanced configuration.
// const layerConfigurations = [
//   {
//     growEditionSizeTo: 5,
//     layersOrder: [
//       {
//         name: "Background",
//         options: {
//           bypassDNA: false,
//         },
//       },
//       { name: "Glow" },
//       { name: "Weapons", options: { blend: MODE.overlay, opacity: 0.9 } },
//       { name: "Body" },
//       { name: "Eyes" },
//     ],
//   },
// ];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: true,
};

// Icon metadata is not supported for Solana.
const iconFormat = {
  enabled: network != NETWORK.sol ? true : false,
  width: 250,
  height: 250,
};

const gif = {
  export: true,
  repeat: 0,
  order: "ASC", // ASC, DESC, MIXED
  quality: 100,
  delay: 10000,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 16 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  creator: layerConfigurations.Heroe,
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 1,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 0,
  order: "DESC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 10000,
  imageName: "preview.gif",
};

export {
  format,
  iconFormat,
  baseUri,
  baseIconUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  bchMetadata,
  bcmrMetadata,
  gif,
  preview_gif,
  collectionName,
  collectionDescription,
  collectionBackground,
};
