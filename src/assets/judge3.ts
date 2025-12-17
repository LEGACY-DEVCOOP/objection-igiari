import { CharacterConfig } from '../types';

/**
 * Judge character configuration (with Gavel Slam)
 */
export const judge3Config: CharacterConfig = {
  id: 10, // The Judge
  name: 'The Judge',
  defaultPose: 186, // Eyes Closed
  defaultBubble: 1, // Gavel Slam x3
  backgroundId: 192,
  side: 'judge',
  resourcePath: 'judgeslam3',
};

/**
 * Available poses for Judge3
 */
export const judge3Poses = {
  eyesClosed: 186, // Eyes Closed pose
};
