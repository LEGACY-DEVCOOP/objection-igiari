import { CharacterConfig } from '../types';

/**
 * Miles Edgeworth character configuration
 */
export const milesConfig: CharacterConfig = {
  id: 3,
  name: 'Miles Edgeworth',
  defaultPose: 13, // Arms Crossed
  backgroundId: 194,
  side: 'prosecution',
  resourcePath: 'Miles',
};

/**
 * Available poses for Miles Edgeworth
 */
export const milesPoses = {
  armsCrossed: 13, // Arms Crossed pose
};
