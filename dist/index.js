"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ObjectionPlayer: () => ObjectionPlayer,
  characterConfigs: () => characterConfigs,
  default: () => ObjectionPlayer_default,
  generateAssets: () => generateAssets,
  generatePlayerHTML: () => generatePlayerHTML,
  generateProject: () => generateProject,
  generateUUID: () => generateUUID,
  getCharacterConfig: () => getCharacterConfig,
  judge1Config: () => judge1Config,
  judge3Config: () => judge3Config,
  milesConfig: () => milesConfig,
  phoenixConfig: () => phoenixConfig
});
module.exports = __toCommonJS(index_exports);

// src/components/ObjectionPlayer.tsx
var import_react = require("react");

// src/assets/phoenix.ts
var phoenixConfig = {
  id: 1,
  name: "Phoenix Wright",
  defaultPose: 2,
  // Desk Slam
  defaultBubble: 1,
  // Objection!
  backgroundId: 189,
  side: "defense",
  resourcePath: "Pheonix"
  // Note: matches the person-resource folder name
};

// src/assets/miles.ts
var milesConfig = {
  id: 3,
  name: "Miles Edgeworth",
  defaultPose: 13,
  // Arms Crossed
  backgroundId: 194,
  side: "prosecution",
  resourcePath: "Miles"
};

// src/assets/judge1.ts
var judge1Config = {
  id: 10,
  name: "The Judge",
  defaultPose: 30,
  // Stand
  backgroundId: 192,
  side: "judge",
  resourcePath: "judge1"
};

// src/assets/judge3.ts
var judge3Config = {
  id: 10,
  // The Judge
  name: "The Judge",
  defaultPose: 186,
  // Eyes Closed
  defaultBubble: 1,
  // Gavel Slam x3
  backgroundId: 192,
  side: "judge",
  resourcePath: "judgeslam3"
};

// src/assets/index.ts
var characterConfigs = {
  phoenix: phoenixConfig,
  miles: milesConfig,
  judge1: judge1Config,
  judge3: judge3Config
};
function getCharacterConfig(character) {
  return characterConfigs[character];
}

// src/core/engine.ts
function generateAssets(character, nameplate, basePath = "/objection-assets") {
  const config = getCharacterConfig(character);
  const resourcePath = `${basePath}/${config.resourcePath}`;
  const assets = {
    background: {},
    character: {},
    sound: {},
    music: {},
    evidence: {},
    popup: {},
    dialogueBox: {}
  };
  assets.background[config.backgroundId] = {
    id: config.backgroundId,
    name: `[PW] ${config.side.charAt(0).toUpperCase() + config.side.slice(1)}`,
    url: `${resourcePath}/resources/Images/Backgrounds/Preset/[PW] ${config.side.charAt(0).toUpperCase() + config.side.slice(1)}.jpg`,
    deskUrl: `${resourcePath}/resources/Images/Backgrounds/Preset_Desk/[PW] ${config.side.charAt(0).toUpperCase() + config.side.slice(1)}.png`,
    isWide: false
  };
  assets.character[config.id] = {
    id: config.id,
    isPreset: true,
    name: config.name,
    nameplate,
    // Dynamic nameplate
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
    size: 100
  };
  const pose = {
    id: config.defaultPose,
    name: "Default",
    iconUrl: `${resourcePath}/resources/Images/PoseIcons/${config.defaultPose}.png`,
    order: 0,
    idleImageUrl: `${resourcePath}/resources/Images/Characters/${config.id}/Stand.gif`,
    speakImageUrl: `${resourcePath}/resources/Images/Characters/${config.id}/Stand_Talk.gif`,
    poseAudioTicks: [],
    poseFunctionTicks: [],
    poseStates: []
  };
  if (character === "phoenix") {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Slam_Stand.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Slam_Talk.gif`;
    pose.poseAudioTicks = [
      {
        id: 0,
        fileName: `${resourcePath}/resources/Audio/deskslam.mp3`,
        time: 175,
        volume: 100
      }
    ];
    pose.poseStates = [
      {
        id: 0,
        imageUrl: `${resourcePath}/resources/Images/Characters/${config.id}/Slam.gif`,
        nextPoseDelay: 1100,
        noSpeakDelay: false
      }
    ];
    assets.character[config.id].speechBubbles.push({
      id: 1,
      name: "Objection!",
      duration: 950,
      imageUrl: `${resourcePath}/resources/Images/Bubbles/1.png`,
      shake: true,
      fullscreen: false,
      order: 0,
      soundUrl: `${resourcePath}/resources/Audio/Vocal/1/1.mp3`
    });
  } else if (character === "miles") {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Arms_Crossed.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Arms_Crossed_Talk.gif`;
  } else if (character === "judge1") {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Stand.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Stand_Talk.gif`;
  } else if (character === "judge3") {
    pose.idleImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Closed_Eyes.gif`;
    pose.speakImageUrl = `${resourcePath}/resources/Images/Characters/${config.id}/Closed_Eyes.gif`;
    assets.character[config.id].speechBubbles.push({
      id: 1,
      name: "Gavel Slam x3",
      duration: 1600,
      imageUrl: `${resourcePath}/resources/Images/gavel.webp`,
      shake: false,
      fullscreen: true,
      order: 0,
      soundUrl: `${resourcePath}/resources/Audio/Vocal/1/10.mp3`
    });
  }
  assets.character[config.id].poses.push(pose);
  return assets;
}
function generateProject(character, text, pose, options) {
  const config = getCharacterConfig(character);
  const poseId = pose ? parseInt(pose) : config.defaultPose;
  const formattedText = `[#bgmd]${text}`;
  const project = {
    id: generateUUID(),
    type: "scene",
    aliases: [],
    pairs: [],
    groups: [
      {
        id: generateUUID(),
        name: "Main",
        type: "normal",
        frames: [
          {
            characterId: config.id,
            text: formattedText,
            poseId,
            id: 1
          }
        ],
        comments: {}
      }
    ],
    options: {
      autoplaySpeed: options?.autoplaySpeed ?? 500,
      chatbox: "0",
      continueSoundUrl: "",
      textBlipFrequency: options?.textBlipFrequency ?? 64,
      textSpeed: options?.textSpeed ?? 35
    },
    nextFrameId: 2,
    version: 5
  };
  if ((character === "phoenix" || character === "judge3") && config.defaultBubble) {
    project.groups[0].frames[0].speechBubble = config.defaultBubble;
  }
  return project;
}
function generatePlayerHTML(props) {
  const {
    character,
    nameplate,
    text,
    pose,
    autoplay = true,
    assetsBasePath = "/objection-assets"
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
  ` : ""}
</head>
<body>
  <div id="root"></div>
</body>
</html>
  `.trim();
}
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

// src/components/ObjectionPlayer.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ObjectionPlayer = (props) => {
  const {
    character,
    nameplate,
    text,
    pose,
    onComplete,
    className = "",
    style = {},
    assetsBasePath = "/objection-assets",
    maxWidth = "90%"
  } = props;
  const iframeRef = (0, import_react.useRef)(null);
  const [isReady, setIsReady] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    console.log("[ObjectionPlayer] Rendering with:", { character, nameplate, text });
    const html = generatePlayerHTML({
      ...props,
      assetsBasePath,
      maxWidth
    });
    console.log("[ObjectionPlayer] Generated HTML length:", html.length);
    console.log("[ObjectionPlayer] Assets path:", assetsBasePath);
    console.log("[ObjectionPlayer] Generated HTML:", html.substring(0, 500));
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        console.log("[ObjectionPlayer] Injecting HTML into iframe...");
        doc.open();
        doc.write(html);
        doc.close();
        setIsReady(true);
        console.log("[ObjectionPlayer] HTML injected successfully");
        iframe.contentWindow?.addEventListener("error", (e) => {
          console.error("[ObjectionPlayer] iframe error:", e.error || e.message);
        });
        setTimeout(() => {
          const win = iframe.contentWindow;
          const hasAssets = win?.OBJECTION_ASSETS;
          const hasProject = win?.OBJECTION_PROJECT;
          console.log("[ObjectionPlayer] iframe window check:", {
            hasAssets: !!hasAssets,
            hasProject: !!hasProject,
            bodyHTML: doc.body?.innerHTML?.substring(0, 200)
          });
        }, 1e3);
      } else {
        console.error("[ObjectionPlayer] Could not access iframe document");
      }
    } else {
      console.error("[ObjectionPlayer] iframe ref is null");
    }
  }, [character, nameplate, text, pose, assetsBasePath, maxWidth]);
  (0, import_react.useEffect)(() => {
    const handleMessage = (event) => {
      if (event.data.type === "objection-complete") {
        onComplete?.();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onComplete]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `objection-player-container ${className}`,
      style: {
        width: "100%",
        height: "100%",
        minHeight: "400px",
        position: "relative",
        ...style
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "iframe",
          {
            ref: iframeRef,
            title: "Objection Player",
            style: {
              width: "100%",
              height: "100%",
              border: "none",
              display: "block"
            },
            sandbox: "allow-scripts allow-same-origin"
          }
        ),
        !isReady && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "14px",
              color: "#666"
            },
            children: "Loading..."
          }
        )
      ]
    }
  );
};
var ObjectionPlayer_default = ObjectionPlayer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ObjectionPlayer,
  characterConfigs,
  generateAssets,
  generatePlayerHTML,
  generateProject,
  generateUUID,
  getCharacterConfig,
  judge1Config,
  judge3Config,
  milesConfig,
  phoenixConfig
});
//# sourceMappingURL=index.js.map