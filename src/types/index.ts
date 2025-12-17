/**
 * Character types supported by the library
 */
export type CharacterType = 'phoenix' | 'miles' | 'judge1' | 'judge3';

/**
 * Props for the ObjectionPlayer component
 */
export interface ObjectionPlayerProps {
  /** Character to display */
  character: CharacterType;
  /** Character nameplate text */
  nameplate: string;
  /** Dialogue text to display */
  text: string;
  /** Character pose ID (optional, uses default if not specified) */
  pose?: string;
  /** Auto-start playback on load (default: true) */
  autoplay?: boolean;
  /** Text display speed (default: 35) */
  textSpeed?: number;
  /** Autoplay speed in milliseconds (default: 500) */
  autoplaySpeed?: number;
  /** Text blip frequency (default: 64) */
  textBlipFrequency?: number;
  /** Callback when playback completes */
  onComplete?: () => void;
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Base path for assets (default: '/objection-assets') */
  assetsBasePath?: string;
  /** Maximum width for the player (default: '90%') */
  maxWidth?: string;
}

/**
 * Character configuration
 */
export interface CharacterConfig {
  id: number;
  name: string;
  defaultPose: number;
  defaultBubble?: number;
  backgroundId: number;
  side: 'defense' | 'prosecution' | 'judge';
  resourcePath: string;
}

/**
 * Objection.lol ASSETS object structure
 */
export interface ObjectionAssets {
  background: Record<string, any>;
  character: Record<string, any>;
  sound: Record<string, any>;
  music: Record<string, any>;
  evidence: Record<string, any>;
  popup: Record<string, any>;
  dialogueBox: Record<string, any>;
}

/**
 * Objection.lol PROJECT object structure
 */
export interface ObjectionProject {
  id: string;
  type: string;
  aliases: any[];
  pairs: any[];
  groups: Array<{
    id: string;
    name: string;
    type: string;
    frames: Array<{
      characterId: number;
      text: string;
      speechBubble?: number;
      poseId: number;
      id: number;
    }>;
    comments: Record<string, any>;
  }>;
  options: {
    autoplaySpeed: number;
    chatbox: string;
    continueSoundUrl: string;
    textBlipFrequency: number;
    textSpeed: number;
  };
  nextFrameId: number;
  version: number;
}
