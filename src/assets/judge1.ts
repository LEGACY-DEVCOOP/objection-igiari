import { CharacterConfig } from '../types';

/**
 * Judge character configuration (default)
 */
export const judge1Config: CharacterConfig = {
  id: 10,
  name: 'The Judge',
  defaultPose: 30, // Stand
  backgroundId: 192,
  side: 'judge',
  resourcePath: 'judge1',
};

/**
 * Available poses for Judge
 */
export const judge1Poses = {
  stand: 30, // Stand pose
};
