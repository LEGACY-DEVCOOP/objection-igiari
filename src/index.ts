// Main exports
export { ObjectionPlayer } from './components';
export { default } from './components';

// Type exports
export type {
  CharacterType,
  ObjectionPlayerProps,
  CharacterConfig,
  ObjectionAssets,
  ObjectionProject,
} from './types';

// Core engine exports (for advanced usage)
export {
  generateAssets,
  generateProject,
  generatePlayerHTML,
  generateUUID,
} from './core';

// Character configuration exports (for customization)
export {
  characterConfigs,
  getCharacterConfig,
  phoenixConfig,
  milesConfig,
  judge1Config,
  judge3Config,
} from './assets';
