import { CharacterConfig, CharacterType } from '../types';
import { phoenixConfig } from './phoenix';
import { milesConfig } from './miles';
import { judge1Config } from './judge1';
import { judge3Config } from './judge3';

/**
 * Map of all character configurations
 */
export const characterConfigs: Record<CharacterType, CharacterConfig> = {
  phoenix: phoenixConfig,
  miles: milesConfig,
  judge1: judge1Config,
  judge3: judge3Config,
};

/**
 * Get character configuration by character type
 */
export function getCharacterConfig(character: CharacterType): CharacterConfig {
  return characterConfigs[character];
}

export { phoenixConfig, milesConfig, judge1Config, judge3Config };
