"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import googleCloudStorageIcon from "@public/GoogleCloudStorage.png";
import openSourceIcon from "@public/OpenSource.png";
import r2Icon from "@public/r2.png";
import s3Icon from "@public/S3.png";
import boxIcon from "@public/Box.png";
import trelloIcon from "@public/Trello.png";
import serviceNowIcon from "@public/Servicenow.png";
import zAIIcon from "@public/Z_AI.png";

export interface IconProps {
  size?: number;
  className?: string;
}
export interface LogoIconProps extends IconProps {
  src: string | StaticImageData;
}

export const defaultTailwindCSS = "my-auto flex flex-shrink-0 text-default";
export const defaultTailwindCSSBlue = "my-auto flex flex-shrink-0 text-link";

export const LogoIcon = ({
  size = 16,
  className = defaultTailwindCSS,
  src,
}: LogoIconProps) => (
  <Image
    style={{ width: `${size}px`, height: `${size}px` }}
    className={`w-[${size}px] h-[${size}px] object-contain ` + className}
    src={src}
    alt="Logo"
    width="96"
    height="96"
  />
);

// Helper to create simple icon components from react-icon libraries
export function createIcon(
  IconComponent: React.ComponentType<{ size?: number; className?: string }>
) {
  function IconWrapper({
    size = 16,
    className = defaultTailwindCSS,
  }: IconProps) {
    return <IconComponent size={size} className={className} />;
  }

  IconWrapper.displayName = `Icon(${
    IconComponent.displayName || IconComponent.name || "Component"
  })`;
  return IconWrapper;
}

/**
 * Creates a logo icon component that automatically supports dark mode adaptations.
 *
 * Depending on the options provided, the returned component handles:
 * 1. Light/Dark variants: If both `src` and `darkSrc` are provided, displays the
 *    appropriate image based on the current color theme.
 * 2. Monochromatic inversion: If `monochromatic` is true, applies a CSS color inversion
 *    in dark mode for a monochrome icon appearance.
 * 3. Static icon: If only `src` is provided, renders the image without dark mode adaptation.
 *
 * @param src - The image or SVG source used for the icon (light/default mode).
 * @param options - Optional settings:
 *   - darkSrc: The image or SVG source used specifically for dark mode.
 *   - monochromatic: If true, applies a CSS inversion in dark mode for monochrome logos.
 *   - sizeAdjustment: Number to add to the icon size (e.g., 4 to make icon larger).
 *   - classNameAddition: Additional CSS classes to apply (e.g., '-m-0.5' for margin).
 * @returns A React functional component that accepts {@link IconProps} and renders
 *          the logo with dark mode handling as needed.
 */
const createLogoIcon = (
  src: string | StaticImageData,
  options?: {
    darkSrc?: string | StaticImageData;
    monochromatic?: boolean;
    sizeAdjustment?: number;
    classNameAddition?: string;
  }
) => {
  const {
    darkSrc,
    monochromatic,
    sizeAdjustment = 0,
    classNameAddition = "",
  } = options || {};

  const LogoIconWrapper = ({
    size = 16,
    className = defaultTailwindCSS,
  }: IconProps) => {
    const adjustedSize = size + sizeAdjustment;

    // Build className dynamically (only apply monochromatic if no darkSrc)
    const monochromaticClass = !darkSrc && monochromatic ? "dark:invert" : "";
    const finalClassName = [className, classNameAddition, monochromaticClass]
      .filter(Boolean)
      .join(" ");

    // If darkSrc is provided, use CSS-based dark mode switching
    // This avoids hydration issues and content flashing since next-themes
    // sets the .dark class before React hydrates
    if (darkSrc) {
      return (
        <>
          <LogoIcon
            size={adjustedSize}
            className={`${finalClassName} dark:hidden`}
            src={src}
          />
          <LogoIcon
            size={adjustedSize}
            className={`${finalClassName} hidden dark:block`}
            src={darkSrc}
          />
        </>
      );
    }

    return (
      <LogoIcon size={adjustedSize} className={finalClassName} src={src} />
    );
  };

  LogoIconWrapper.displayName = "LogoIconWrapper";
  return LogoIconWrapper;
};

// ============================================================================
// GENERIC SVG COMPONENTS (sorted alphabetically)
// ============================================================================
export const MacIcon = ({
  size = 16,
  className = "my-auto flex flex-shrink-0 ",
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.5 4.5a2 2 0 0 1 2 2v2h-2a2 2 0 1 1 0-4Zm4 4v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2h-3Zm0 2h3v3h-3v-3Zm5-2v-2a2 2 0 1 1 2 2h-2Zm0 7h2a2 2 0 1 1-2 2v-2Zm-7 0v2a2 2 0 1 1-2-2h2Z"
      />
    </svg>
  );
};
export const OnyxLogoTypeIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  const aspectRatio = 641 / 162; // Calculate the aspect ratio of the original SVG
  const height = size / aspectRatio; // Calculate the height based on the aspect ratio

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 641 162"
      style={{ width: `${size}px`, height: `${height}px` }}
      className={`w-[${size}px] h-[${height}px] ` + className}
    >
      <path
        fill="#6abf4b"
        d="M127.64,85.62c2.04,2.39,4.04,4.79,5.98,7.23,1-.12,1.99-.26,2.98-.4-2.79-2.49-5.7-4.82-8.7-7.01-.09.06-.17.12-.26.18"
      />
      <path
        fill="#0085d6"
        d="M122.97,65.1c3.38,1.19,6.72,2.41,10.02,3.71.8-.61,1.6-1.22,2.38-1.84-4.11-.85-8.25-1.47-12.4-1.87"
      />
      <path
        fill="#0085d6"
        d="M161.85,79.82c-2.04-3.11-4.62-4.78-7.14-6.25-2.78-1.51-5.6-2.69-8.45-3.67-1.08,1.14-2.18,2.25-3.3,3.32,3.08,1.53,6.02,3.2,8.58,5.18,1.93,1.46,3.74,3.19,4.41,4.75.62,1.61.36,1.97-.76,3.18-1.25,1.12-3.29,2.22-5.5,3.05-2.22.84-4.63,1.49-7.08,2.02-1.98.4-3.99.74-6.02,1.04-.99.15-1.98.28-2.98.4-6.29.77-12.72,1.11-19.14,1.22-.91.01-1.82.03-2.73.03-7.05,0-14.13-.26-21.19-.77-2-.15-4-.31-6-.49-1.41-.13-2.82-.24-4.23-.39-6.78-.71-13.54-1.65-20.21-2.88-3.59-.66-7.15-1.4-10.68-2.25-1.73-.41-3.43-.87-5.13-1.34-1.97-.55-3.92-1.14-5.83-1.78-1.25-.42-2.49-.86-3.71-1.32-2.34-.89-4.6-1.9-6.65-3.04-2.02-1.1-3.96-2.43-4.97-3.65-.52-.6-.76-1.09-.83-1.32-.09-.23,0-.48.18-1.03.56-1.13,2.47-2.57,4.5-3.69,2.78-1.59,6-2.79,9.34-3.8-1.08-1.34-2.14-2.71-3.15-4.13-.38-.54-.75-1.08-1.13-1.62-2.79.6-5.6,1.4-8.43,2.56-2.76,1.18-5.69,2.56-8.22,5.9-.54.97-1.21,1.8-1.48,3-.16.58-.3,1.17-.41,1.76-.09.59-.06,1.21-.06,1.82.16,2.46,1.17,4.47,2.24,6.01,2.2,3.12,4.75,4.95,7.26,6.68,1.96,1.28,3.95,2.35,5.96,3.32.6.29,1.19.57,1.79.84,1.59.73,3.18,1.39,4.79,2.01,3.67,1.42,7.38,2.6,11.1,3.68,6.97,1.95,14.02,3.42,21.1,4.53,2.04.32,4.09.61,6.14.88,1.75.23,3.51.44,5.26.63.54.05,1.08.1,1.63.15,8.06.77,16.15,1.16,24.25,1.09,2.35-.02,4.69-.07,7.04-.16,2.86-.14,5.72-.33,8.58-.58.11,0,.21-.02.32-.03,6.39-.57,12.78-1.48,19.13-3.05,1.51-.37,3.01-.77,4.52-1.23.13-.04.27-.07.4-.11,2.73-.84,5.45-1.82,8.16-3.13,2.68-1.32,5.46-2.87,7.86-5.73,1.17-1.45,2.24-3.43,2.42-5.7.13-2.22-.51-4.47-1.57-5.94"
      />
      <path
        fill="#0085d6"
        d="M54.79,58.54c-3.56-.01-7.13.11-10.71.38,1.33,1.51,2.73,2.99,4.16,4.45,2.5-.51,5.04-.96,7.58-1.37-.36-1.15-.7-2.3-1.03-3.46"
      />
      <path
        fill="#0085d6"
        d="M72.8,59.71c-1.93-.24-3.88-.44-5.82-.61.15.42.29.84.44,1.26,1.79-.22,3.58-.44,5.38-.66"
      />
      <path
        fill="#6abf4b"
        d="M86.05,54.88c-7.61-5.76-15.75-10.85-24.49-15.05.4,1.97.86,3.95,1.36,5.93,7.77,2.59,15.44,5.83,23.13,9.12"
      />
      <path
        fill="#db4487"
        d="M114.48,94.08c2.02-1.19,4.04-2.41,6.02-3.67,2.4-1.55,4.79-3.14,7.14-4.79.09-.06.17-.12.26-.18,5.26-3.69,10.34-7.67,15.06-12.21,1.12-1.08,2.22-2.18,3.3-3.32.1-.1.19-.2.29-.3,1.94-2.09,3.81-4.3,5.5-6.79,1.66-2.49,3.29-5.22,3.95-8.9.29-1.84.23-4.09-.75-6.15-1-1.99-2.68-3.61-4.33-4.36-3.32-1.67-6.39-1.83-9.31-1.84-5.83.15-11.21,1.34-16.47,2.84-5.25,1.54-10.33,3.46-15.25,5.7,5.32-.99,10.61-1.92,15.89-2.5,5.26-.52,10.59-.94,15.51-.26,2.4.3,4.83.89,6.2,1.9,1.34,1.09,1.29,1.53.94,3.14-.52,1.59-1.74,3.57-3.24,5.39-1.5,1.84-3.26,3.61-5.12,5.29-1.51,1.34-3.09,2.63-4.69,3.9-.79.62-1.58,1.24-2.38,1.84-5.77,4.35-12,8.31-18.32,12.02-7.82,4.53-15.88,8.71-24.11,12.5,7.06.51,14.13.78,21.19.77.91,0,1.82-.02,2.73-.03"
      />
      <path
        fill="#db4487"
        d="M59.39,72.44c-.33.15-.66.31-.99.46.34.29.68.58,1.01.87.12-.09.24-.18.37-.28-.13-.35-.26-.71-.39-1.06"
      />
      <path
        fill="#db4487"
        d="M67.69,102.72c-3.44,1.22-6.9,2.36-10.37,3.4-4.96,1.47-9.98,2.68-14.93,3.49-2.47.4-4.93.65-7.28.69-2.3.06-4.64-.12-6.13-.68-.76-.26-1.2-.56-1.38-.73-.19-.16-.24-.42-.36-.98-.08-1.26.85-3.46,2.05-5.44,1.61-2.76,3.8-5.41,6.18-7.95-1.61-.62-3.2-1.28-4.79-2.01-.6-.27-1.19-.55-1.79-.84-2.12,1.92-4.15,4.01-6.02,6.43-1.8,2.41-3.65,5.07-4.17,9.22.02,1.11-.14,2.16.22,3.34.15.58.33,1.16.52,1.73.22.56.55,1.08.86,1.61,1.37,2.05,3.25,3.29,4.94,4.09,3.46,1.6,6.59,1.91,9.63,2.15,3.03.17,5.93,0,8.79-.26,5.71-.54,11.2-1.69,16.6-3.02,6.14-1.57,12.14-3.5,18.03-5.68-1.55-2.53-3.04-5.09-4.49-7.67-2.05-.26-4.1-.56-6.14-.88"
      />
      <path
        fill="#db4487"
        d="M47.56,78.52c-3.09,1.77-6.12,3.65-9.09,5.68,1.91.64,3.86,1.23,5.83,1.78,1.91-1.7,3.88-3.36,5.88-4.99-.88-.81-1.75-1.64-2.62-2.47"
      />
      <path
        fill="#ffad00"
        d="M124.94,115.15c-1.18-3.56-2.52-7.04-4.03-10.44-.11,0-.21.02-.32.03.57,3.1,1.11,6.19,1.57,9.27.92.39,1.85.77,2.78,1.14"
      />
      <path
        fill="#ffad00"
        d="M123.11,134.86c-.3,2.4-.89,4.83-1.9,6.2-1.09,1.34-1.53,1.29-3.14.94-1.59-.53-3.57-1.74-5.39-3.24-1.84-1.5-3.61-3.26-5.3-5.12-6.13-6.92-11.47-14.87-16.37-23.05-3.49-1.98-6.93-4.04-10.3-6.2-.54-.05-1.08-.1-1.63-.15-1.76-.19-3.51-.4-5.26-.63,1.44,2.59,2.94,5.14,4.49,7.67.57.94,1.15,1.88,1.74,2.8,5.98,9.25,12.47,18.26,20.8,26.05,2.09,1.94,4.3,3.81,6.79,5.5,2.49,1.66,5.22,3.29,8.9,3.95,1.84.29,4.09.23,6.15-.75,1.99-1,3.61-2.68,4.36-4.33,1.67-3.33,1.83-6.4,1.84-9.31-.08-3.16-.47-6.2-1.05-9.15-1.53-.36-3.04-.76-4.53-1.19.21,3.43.24,6.82-.2,10.03"
      />
      <path
        fill="#ffad00"
        d="M51.14,42.4c.6,3.89,1.44,7.69,2.37,11.45.4,1.57.84,3.14,1.28,4.69.33,1.16.67,2.31,1.03,3.46,1.09,3.52,2.29,7,3.58,10.44.13.35.26.71.39,1.06.11.3.23.59.35.89,5.16,4.4,10.55,8.6,16.06,12.6,1.14.83,2.29,1.65,3.45,2.46-1.49-3.06-2.92-6.14-4.3-9.25-2.9-6.52-5.57-13.14-7.92-19.84-.15-.42-.3-.84-.44-1.26-.94-2.73-1.82-5.47-2.64-8.22-.51-1.71-.98-3.42-1.42-5.13-.5-1.98-.96-3.95-1.36-5.93-.26-1.29-.5-2.58-.71-3.87-.4-2.47-.65-4.93-.69-7.28-.05-2.3.12-4.64.68-6.13.26-.76.56-1.2.73-1.38.16-.19.42-.24.98-.36,1.26-.08,3.46.85,5.44,2.05,4.1,2.39,7.96,6.05,11.6,9.75,7.39,7.47,13.87,16.04,20.35,24.69-4.21-9.97-9.43-19.52-15.92-28.46-3.36-4.4-6.88-8.71-11.66-12.4-2.41-1.8-5.07-3.65-9.22-4.16-1.11.02-2.16-.14-3.34.21-.58.15-1.16.33-1.73.52-.56.21-1.08.55-1.61.86-2.05,1.37-3.29,3.25-4.09,4.94-1.6,3.46-1.91,6.59-2.15,9.63-.13,2.34-.06,4.6.1,6.82.05.66.1,1.32.16,1.97.16,1.74.39,3.45.65,5.15"
      />
      <path
        fill="#6abf4b"
        d="M144.89,110.45c.94,2.23,1.64,4.63,1.45,6.32-.27,1.71-.68,1.89-2.25,2.38-1.64.34-3.96.28-6.29-.11-2.34-.38-4.75-1.02-7.15-1.79-1.92-.64-3.82-1.34-5.72-2.1-.93-.37-1.86-.75-2.78-1.14-5.83-2.48-11.57-5.41-17.19-8.53-8.11.07-16.2-.32-24.25-1.09,3.38,2.16,6.81,4.22,10.3,6.2,2.04,1.16,4.1,2.3,6.19,3.39,8.33,4.27,16.9,8.2,26.11,10.86,1.49.43,3,.83,4.53,1.19.13.03.27.07.4.1,2.79.64,5.63,1.15,8.63,1.37,2.99.2,6.16.24,9.68-1.03,1.74-.67,3.65-1.85,4.95-3.73,1.22-1.86,1.79-4.13,1.61-5.93-.21-3.72-1.61-6.45-3.06-8.98-1.65-2.7-3.51-5.13-5.49-7.4-1.5.45-3.01.85-4.52,1.23,1.9,2.86,3.62,5.79,4.85,8.79"
      />
      <path
        fill="#6abf4b"
        d="M36.34,66.36c2.47,3.06,5.08,5.94,7.76,8.73,1.14,1.16,2.29,2.31,3.46,3.43.86.83,1.74,1.66,2.61,2.47,3.22,2.98,6.54,5.83,9.94,8.57,6.67,1.23,13.43,2.17,20.21,2.88,1.41.15,2.82.26,4.23.4-1.65-1.12-3.29-2.25-4.91-3.39-1.15-.81-2.31-1.63-3.45-2.46-5.52-4.01-10.9-8.2-16.06-12.6-.24-.2-.48-.41-.71-.61-.34-.29-.68-.58-1.01-.87-2.18-1.9-4.31-3.82-6.4-5.8-1.29-1.22-2.54-2.47-3.78-3.73-1.43-1.46-2.82-2.94-4.16-4.45-.87-.99-1.73-1.99-2.55-3-1.58-1.94-3.03-3.95-4.24-5.96-1.2-1.96-2.21-4.08-2.48-5.64-.15-.78-.12-1.32-.06-1.56.04-.24.24-.42.67-.8,1.05-.7,3.43-.99,5.74-.95,3.19.01,6.58.58,9.98,1.38-.26-1.7-.49-3.42-.65-5.15-.06-.65-.12-1.31-.16-1.97-2.72-.88-5.55-1.59-8.58-2-2.98-.36-6.21-.63-10.07,1-.95.58-1.94.96-2.79,1.86-.43.42-.84.86-1.24,1.32-.38.47-.66,1.02-.96,1.55-1.09,2.21-1.22,4.46-1.07,6.32.35,3.8,1.64,6.66,2.95,9.42,1.06,2.09,2.25,4.01,3.5,5.86.37.55.75,1.09,1.13,1.62,1.01,1.42,2.07,2.79,3.15,4.13"
      />
      <path
        fill="#7b868c"
        d="M245.42,97h-43.08c1.3,10.42,8.82,17.23,19.13,17.23,6.51,0,12.22-2.4,16.33-6.71l4.31,4.51c-5.01,5.51-12.42,8.72-21.24,8.72-15.53,0-26.25-10.92-26.25-26.65s10.82-26.55,26.15-26.65c17.03,0,25.45,11.72,24.64,29.55M238.41,90.79c-.5-10.22-7.31-16.83-17.63-16.83s-17.33,6.61-18.43,16.83h36.07Z"
      />
      <rect fill="#7b868c" x="253.93" y="90.76" width="17.33" height="6.29" />
      <path
        fill="#7b868c"
        d="M327.93,87.94v32.46h-7.81v-30.45c0-9.42-5.61-15.03-14.93-15.03-10.42.1-16.83,7.01-17.73,17.23v28.25h-7.81v-52.69h7.81v11.62c3.71-8.01,10.82-11.82,20.44-11.92,12.62,0,20.04,7.71,20.04,20.54"
      />
      <path
        fill="#7b868c"
        d="M393.54,93.95c0,15.73-11.12,26.75-26.75,26.75s-26.75-11.02-26.75-26.75,11.02-26.55,26.75-26.55,26.75,10.92,26.75,26.55M347.86,94.05c0,11.82,7.81,19.83,18.93,19.83s18.93-8.01,18.93-19.83-7.92-19.74-18.93-19.74-18.93,8.12-18.93,19.74"
      />
      <polygon
        fill="#7b868c"
        points="404.76 67.7 421.59 112.48 438.32 67.7 446.24 67.7 425.5 120.39 417.39 120.39 396.45 67.7 404.76 67.7"
      />
      <path
        fill="#7b868c"
        d="M464.36,52.57c0,3-2.2,5.31-5.11,5.31s-5.11-2.3-5.11-5.31,2.2-5.31,5.11-5.31,5.11,2.21,5.11,5.31M463.16,120.39h-7.71v-52.69h7.71v52.69Z"
      />
      <path
        fill="#7b868c"
        d="M530.48,87.94v32.46h-7.81v-30.45c0-9.42-5.61-15.03-14.92-15.03-10.42.1-16.83,7.01-17.73,17.23v28.25h-7.81v-52.69h7.81v11.62c3.71-8.01,10.82-11.82,20.44-11.92,12.62,0,20.04,7.71,20.04,20.54"
      />
      <path
        fill="#7b868c"
        d="M557.23,62.39v6.91h15.13v6.11h-15.13v44.98h-7.71v-44.98h-6.81v-6.11h6.81v-5.91c0-11.42,8.11-17.73,16.93-17.63,4.01,0,8.11,1.3,11.32,3.71l-3.21,6.01c-2.4-1.7-5.31-2.7-8.01-2.7-5.11-.1-9.32,3.4-9.32,9.62"
      />
      <path
        fill="#7b868c"
        d="M627.55,93.95c0,15.73-11.12,26.75-26.75,26.75s-26.75-11.02-26.75-26.75,11.02-26.55,26.75-26.55,26.75,10.92,26.75,26.55M581.87,94.05c0,11.82,7.81,19.83,18.93,19.83s18.93-8.01,18.93-19.83-7.91-19.74-18.93-19.74-18.93,8.12-18.93,19.74"
      />
    </svg>
  );
};
export const WindowsIcon = ({
  size = 16,
  className = "my-auto flex flex-shrink-0 ",
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill="currentColor"
        d="M3 3h8v8H3V3zm10 0h8v8h-8V3zm-10 10h8v8H3v-8zm10 0h8v8h-8v-8z"
      />
    </svg>
  );
};

// ============================================================================
// THIRD-PARTY / COMPANY ICONS (Alphabetically)
// Only icons that don't yet have opal logo equivalents remain here.
// ============================================================================
export const BoxIcon = createLogoIcon(boxIcon);
export const GoogleStorageIcon = createLogoIcon(googleCloudStorageIcon, {
  sizeAdjustment: 4,
  classNameAddition: "-m-0.5",
});
export const OpenSourceIcon = createLogoIcon(openSourceIcon);
export const R2Icon = createLogoIcon(r2Icon);
export const S3Icon = createLogoIcon(s3Icon);
export const ServiceNowIcon = createLogoIcon(serviceNowIcon);
export const TrelloIcon = createLogoIcon(trelloIcon);
export const ZAIIcon = createLogoIcon(zAIIcon);
