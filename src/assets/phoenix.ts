import { CharacterConfig } from '../types';

/**
 * Phoenix Wright character configuration
 */
export const phoenixConfig: CharacterConfig = {
  id: 1,
  name: 'Phoenix Wright',
  defaultPose: 2, // Desk Slam
  defaultBubble: 1, // Objection!
  backgroundId: 189,
  side: 'defense',
  resourcePath: 'Pheonix', // Note: matches the person-resource folder name
};

/**
 * Available poses for Phoenix Wright
 */
export const phoenixPoses = {
  slam: 2, // Desk Slam pose
};
