'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ObjectionPlayerProps } from '../types';
import { generatePlayerHTML } from '../core';

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
export const ObjectionPlayer: React.FC<ObjectionPlayerProps> = (props) => {
  const {
    character,
    nameplate,
    text,
    pose,
    onComplete,
    className = '',
    style = {},
    assetsBasePath = '/objection-assets',
    maxWidth = '90%',
  } = props;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log('[ObjectionPlayer] Rendering with:', { character, nameplate, text });

    // Generate HTML for the player
    const html = generatePlayerHTML({
      ...props,
      assetsBasePath,
      maxWidth,
    });

    console.log('[ObjectionPlayer] Generated HTML length:', html.length);
    console.log('[ObjectionPlayer] Assets path:', assetsBasePath);
    console.log('[ObjectionPlayer] Generated HTML:', html.substring(0, 500));

    // Inject HTML into iframe
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;

      if (doc) {
        console.log('[ObjectionPlayer] Injecting HTML into iframe...');
        doc.open();
        doc.write(html);
        doc.close();
        setIsReady(true);
        console.log('[ObjectionPlayer] HTML injected successfully');

        // Listen for errors inside iframe
        iframe.contentWindow?.addEventListener('error', (e) => {
          console.error('[ObjectionPlayer] iframe error:', e.error || e.message);
        });

        // Check if Objection engine loaded
        setTimeout(() => {
          const win = iframe.contentWindow as any;
          const hasAssets = win?.OBJECTION_ASSETS;
          const hasProject = win?.OBJECTION_PROJECT;
          console.log('[ObjectionPlayer] iframe window check:', {
            hasAssets: !!hasAssets,
            hasProject: !!hasProject,
            bodyHTML: doc.body?.innerHTML?.substring(0, 200)
          });
        }, 1000);
      } else {
        console.error('[ObjectionPlayer] Could not access iframe document');
      }
    } else {
      console.error('[ObjectionPlayer] iframe ref is null');
    }
  }, [character, nameplate, text, pose, assetsBasePath, maxWidth]);

  useEffect(() => {
    // Listen for completion messages from iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'objection-complete') {
        onComplete?.();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onComplete]);

  return (
    <div
      className={`objection-player-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        position: 'relative',
        ...style,
      }}
    >
      <iframe
        ref={iframeRef}
        title="Objection Player"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        sandbox="allow-scripts allow-same-origin"
      />
      {!isReady && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '14px',
            color: '#666',
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default ObjectionPlayer;
