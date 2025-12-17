import { CharacterType, ObjectionAssets, ObjectionProject, ObjectionPlayerProps } from '../types';
import { getCharacterConfig } from '../assets';

/**
 * Generate OBJECTION_ASSETS object for a character
 * Loads the base assets template and updates paths and nameplate
 */
export function generateAssets(
  character: CharacterType,
  nameplate: string,
  basePath: string = '/objection-assets'
): ObjectionAssets {
  const config = getCharacterConfig(character);
  const resourcePath = `${basePath}/${config.resourcePath}`;

  // Base assets structure - will be populated with actual character data
  const assets: ObjectionAssets = {
    background: {},
    character: {},
    sound: {},
    music: {},
    evidence: {},
    popup: {},
    dialogueBox: {},
  };

  // Build background configuration
  assets.background[config.backgroundId] = {
    id: config.backgroundId,
    name: `[PW] ${config.side.charAt(0).toUpperCase() + config.side.slice(1)}`,
    url: `${resourcePath}/resources/Images/Backgrounds/Preset/[PW] ${
      config.side.charAt(0).toUpperCase() + config.side.slice(1)
    }.jpg`,
    deskUrl: `${resourcePath}/resources/Images/Backgrounds/Preset_Desk/[PW] ${
      config.side.charAt(0).toUpperCase() + config.side.slice(1)
    }.png`,
    isWide: false,
  };

  // Build character configuration
  assets.character[config.id] = {
    id: config.id,
    isPreset: true,
    name: config.name,
    nameplate: nameplate, // Dynamic nameplate
    side: config.side,
    backgroundId: config.backgroundId,
    blipUrl: `${resourcePath}/resources/Audio/blip.wav`,
    alignment: null,
    galleryAJImageUrl: null,
    galleryImageUrl: `${resourcePath}/resources/Images/Gallery/${config.id}.png`,
    iconUrl: `${resourcePath}/resources/Images/Characters/${config.id}/icon.png`,
    limitWidth: true,
    offsetX: 0,
    offsetY: 0,
    poses: [],
    speechBubbles: [],
    size: 100,
  };

  // Add default pose
  const pose: any = {
    id: config.defaultPose,
    name: 'Default',
    iconUrl: `${resourcePath}/resources/Images/PoseIcons/${config.defaultPose}.png`,
    order: 0,
    idleImageUrl: `${resourcePath}/resources/Images/Characters/${config.id}/Stand.gif`,
    speakImageUrl: `${resourcePath}/resources/Images/Characters/${config.id}/Stand_Talk.gif`,
    poseAudioTicks: [],
    poseFunctionTicks: [],
    poseStates: [],
  };

  // Add special animations for specific characters
  if (character === 'phoenix') {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Slam_Stand.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Slam_Talk.gif`;
    pose.poseAudioTicks = [
      {
        id: 0,
        fileName: `${resourcePath}/resources/Audio/deskslam.mp3`,
        time: 175,
        volume: 100,
      },
    ];
    pose.poseStates = [
      {
        id: 0,
        imageUrl: `${resourcePath}/resources/Images/Characters/${config.id}/Slam.gif`,
        nextPoseDelay: 1100,
        noSpeakDelay: false,
      },
    ];

    // Add Objection! bubble for Phoenix
    assets.character[config.id].speechBubbles.push({
      id: 1,
      name: 'Objection!',
      duration: 950,
      imageUrl: `${resourcePath}/resources/Images/Bubbles/1.png`,
      shake: true,
      fullscreen: false,
      order: 0,
      soundUrl: `${resourcePath}/resources/Audio/Vocal/1/1.mp3`,
    });
  } else if (character === 'miles') {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Arms_Crossed.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Arms_Crossed_Talk.gif`;
  } else if (character === 'judge1') {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Stand.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Stand_Talk.gif`;
  } else if (character === 'judge3') {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Closed_Eyes.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Closed_Eyes.gif`;

    // Add Gavel Slam bubble for Judge3
    assets.character[config.id].speechBubbles.push({
      id: 1,
      name: 'Gavel Slam x3',
      duration: 1600,
      imageUrl: `${resourcePath}/resources/Images/gavel.webp`,
      shake: false,
      fullscreen: true,
      order: 0,
      soundUrl: `${resourcePath}/resources/Audio/Vocal/1/10.mp3`,
    });
  }

  assets.character[config.id].poses.push(pose);

  return assets;
}

/**
 * Generate OBJECTION_PROJECT object
 * Creates a single-frame scene with the specified text
 */
export function generateProject(
  character: CharacterType,
  text: string,
  pose?: string,
  options?: Partial<ObjectionPlayerProps>
): ObjectionProject {
  const config = getCharacterConfig(character);
  const poseId = pose ? parseInt(pose) : config.defaultPose;

  // Add [#bgmd] tag before the text as specified
  const formattedText = `[#bgmd]${text}`;

  const project: ObjectionProject = {
    id: generateUUID(),
    type: 'scene',
    aliases: [],
    pairs: [],
    groups: [
      {
        id: generateUUID(),
        name: 'Main',
        type: 'normal',
        frames: [
          {
            characterId: config.id,
            text: formattedText,
            poseId: poseId,
            id: 1,
          },
        ],
        comments: {},
      },
    ],
    options: {
      autoplaySpeed: options?.autoplaySpeed ?? 500,
      chatbox: '0',
      continueSoundUrl: '',
      textBlipFrequency: options?.textBlipFrequency ?? 64,
      textSpeed: options?.textSpeed ?? 35,
    },
    nextFrameId: 2,
    version: 5,
  };

  // Add speech bubble for characters that have one
  if ((character === 'phoenix' || character === 'judge3') && config.defaultBubble) {
    project.groups[0].frames[0].speechBubble = config.defaultBubble;
  }

  return project;
}

/**
 * Generate complete HTML for the Objection player
 * This HTML will be injected into an iframe
 */
export function generatePlayerHTML(props: ObjectionPlayerProps): string {
  const {
    character,
    nameplate,
    text,
    pose,
    autoplay = true,
    assetsBasePath = '/objection-assets',
  } = props;

  const assets = generateAssets(character, nameplate, assetsBasePath);
  const project = generateProject(character, text, pose, props);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Objection Player</title>
  <style>
    html, body, #root {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: black;
    }

    /* Hide control buttons */
    #root > div > div:nth-child(2) {
      display: none !important;
    }
  </style>

  <script>
    window.OBJECTION_EXPORT_MODE = true;
    window.locale = 'en';
    window.OBJECTION_ASSETS = ${JSON.stringify(assets)};
    window.OBJECTION_PROJECT = ${JSON.stringify(project)};
  </script>

  <script defer src="${assetsBasePath}/js/export.js"></script>

  ${autoplay ? `
  <script>
    // Auto-start playback when page loads
    window.addEventListener('load', function() {
      // Wait for React to mount and render
      setTimeout(function() {
        // Find and click the play button
        const playButton = document.querySelector('button[aria-label*="play"], button[title*="play"], button:has(svg)');
        if (playButton) {
          playButton.click();
          console.log('[Objection] Auto-play triggered');
        } else {
          // Try alternative selectors
          const buttons = document.querySelectorAll('button');
          for (let btn of buttons) {
            if (btn.textContent.toLowerCase().includes('play') ||
                btn.querySelector('svg') ||
                btn.innerHTML.includes('M11')) {
              btn.click();
              console.log('[Objection] Auto-play triggered (alternative)');
              break;
            }
          }
        }
      }, 500);
    });
  </script>
  ` : ''}
</head>
<body>
  <div id="root"></div>
</body>
</html>
  `.trim();
}

/**
 * Generate a simple UUID for project IDs
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Export all functions
 */
export { generateUUID };
