import React$1 from 'react';

/**
 * Character types supported by the library
 */
type CharacterType = 'phoenix' | 'miles' | 'judge1' | 'judge3';
/**
 * Props for the ObjectionPlayer component
 */
interface ObjectionPlayerProps {
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
interface CharacterConfig {
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
interface ObjectionAssets {
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
interface ObjectionProject {
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

/**
 * ObjectionPlayer Component
 *
 * Renders an Objection.lol style scene player in an iframe
 *
 * @example
 * ```tsx
 * <ObjectionPlayer
 *   character="phoenix"
 *   nameplate="나루호도"
 *   text="이의 있소!"
 * />
 * ```
 */
declare const ObjectionPlayer: React$1.FC<ObjectionPlayerProps>;

/**
 * Generate OBJECTION_ASSETS object for a character
 * Loads the base assets template and updates paths and nameplate
 */
declare function generateAssets(character: CharacterType, nameplate: string, basePath?: string): ObjectionAssets;
/**
 * Generate OBJECTION_PROJECT object
 * Creates a single-frame scene with the specified text
 */
declare function generateProject(character: CharacterType, text: string, pose?: string, options?: Partial<ObjectionPlayerProps>): ObjectionProject;
/**
 * Generate complete HTML for the Objection player
 * This HTML will be injected into an iframe
 */
declare function generatePlayerHTML(props: ObjectionPlayerProps): string;
/**
 * Generate a simple UUID for project IDs
 */
declare function generateUUID(): string;

/**
 * Phoenix Wright character configuration
 */
declare const phoenixConfig: CharacterConfig;

/**
 * Miles Edgeworth character configuration
 */
declare const milesConfig: CharacterConfig;

/**
 * Judge character configuration (default)
 */
declare const judge1Config: CharacterConfig;

/**
 * Judge character configuration (with Gavel Slam)
 */
declare const judge3Config: CharacterConfig;

/**
 * Map of all character configurations
 */
declare const characterConfigs: Record<CharacterType, CharacterConfig>;
/**
 * Get character configuration by character type
 */
declare function getCharacterConfig(character: CharacterType): CharacterConfig;

export { type CharacterConfig, type CharacterType, type ObjectionAssets, ObjectionPlayer, type ObjectionPlayerProps, type ObjectionProject, characterConfigs, ObjectionPlayer as default, generateAssets, generatePlayerHTML, generateProject, generateUUID, getCharacterConfig, judge1Config, judge3Config, milesConfig, phoenixConfig };
