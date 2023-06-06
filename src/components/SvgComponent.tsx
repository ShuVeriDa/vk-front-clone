import {FC} from 'react';

interface ISvgComponentProps {
  styles?: string
  onClick?: () => void
  width?: string
  height?: string
  fill?: string
}

export const ShowPostMenuSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
      <g id="more_horizontal_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="more_horizontal_24__more_horizontal_24">
          <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path>
          <path
            d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z"
            id="more_horizontal_24__Mask" fill="#AEB7C2">
          </path>
        </g>
      </g>
    </svg>
  );
};

export const FavoritePostSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg onClick={onClick} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none"
         fillRule="evenodd">
        <path
          d="M0 0h24v24H0z"></path>
        <path
          d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
          fill="currentColor" fillRule="nonzero"></path>
      </g>
    </svg>
  );
};

export const CommentPostSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg onClick={onClick} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none"
         fillRule="evenodd">
        <path
          d="M0 0h24v24H0z"></path>
        <path
          d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
          fill="currentColor" fillRule="nonzero"></path>
      </g>
    </svg>
  );
};

export const RepostPostSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return <svg onClick={onClick} className={styles} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none"
       fillRule="evenodd">
      <path
        d="M0 0h24v24H0z"></path>
      <path
        d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 0 0-7.83 10.72.9.9 0 0 0 1.61.46l.19-.24a9.08 9.08 0 0 1 5.84-3.26l.2-.03.01 2.5a2.15 2.15 0 0 0 3.48 1.69l7.82-6.14a2.15 2.15 0 0 0 0-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 0 1 0 .55l-7.82 6.13a.35.35 0 0 1-.57-.28V14.7a.9.9 0 0 0-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 0 1 6.97-6.53.9.9 0 0 0 .79-.9V5.87c0-.2.16-.35.35-.35z"
        fill="currentColor" fillRule="nonzero"></path>
    </g>
  </svg>
}

export const ViewsPostSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return <svg onClick={onClick} fill="none" height="16" viewBox="0 0 16 16" width="16"
              xmlns="http://www.w3.org/2000/svg">
    <g
      fill="currentColor">
      <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
      <path clipRule="evenodd"
            d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
            fillRule="evenodd"></path>
    </g>
  </svg>
}

export const SearchLoaderSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto"}} width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#818c99" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.8474576271186441s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
      </svg>
  </>
}

export const ClearSearchValueSVG: FC<ISvgComponentProps> = ({styles, onClick, height , width}) => {
  return (
    <svg className={styles}
         onClick={onClick}
         height={height ? height : '22'}
         viewBox="0 0 48 48"
         width={width ? width : '22'}
         xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
      <path d="M0 0h48v48h-48z" fill="none"/>
    </svg>
  );
};

export const MagnifierSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg className={styles}
         onClick={onClick}
      enableBackground="new 0 0 32 32"
      id="Editable-line"
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14"
              cy="14"
              fill="none"
              id="XMLID_42_"
              r="9"
              stroke="#8A94A0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
      />
      <line fill="none"
            id="XMLID_44_"
            stroke="#8A94A0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"
      />
    </svg>
  );
};

export const CheckMarkSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5303 5.21967C17.8232 5.51256 17.8232 5.98744 17.5303 6.28033L8.03033 15.7803C7.73744 16.0732 7.26256 16.0732 6.96967 15.7803L2.46967 11.2803C2.17678 10.9874 2.17678 10.5126 2.46967 10.2197C2.76256 9.92678 3.23744 9.92678 3.53033 10.2197L7.5 14.1893L16.4697 5.21967C16.7626 4.92678 17.2374 4.92678 17.5303 5.21967Z" fill="#99A2AD"></path>
    </svg>
  );
};

export const PhotoSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd"
            d="M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 0 0 1.43-.32 3.5 3.5 0 0 0 1.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 0 1-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 0 0-.32-1.43 3.5 3.5 0 0 0-1.53-1.53 3.75 3.75 0 0 0-1.43-.32A43.2 43.2 0 0 0 10 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 0 0-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 0 0 3.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 0 0 2.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 0 0-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 0 0-2.19 2.19zM7.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
            fill="currentColor" fillRule="evenodd"></path>
    </svg>
  );
};

export const LocationSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><path
      d="M50 8C34.6 8 22 20.4 22 35.7c0 32.6 25.6 54.9 26.7 55.9.7.6 1.9.6 2.6 0 1.1-1 26.7-23.4 26.7-55.9C78 20.4 65.4 8 50 8zm0 79.3c-5.2-5-24-25-24-51.6C26 22.6 36.8 12 50 12s24 10.6 24 23.7c0 26.6-18.8 46.6-24 51.6zM50 20c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/><path
      fill="#00F" d="M1644-370v1684H-140V-370h1784m8-8H-148v1700h1800V-378z"/>
    </svg>
  );
};

export const MessageBtn: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="feather feather-message-circle">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
};

export const LockSvg: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg className={styles}  onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 12 12"><path d="M6 .5a3 3 0 0 1 3 3V5h.75c.41 0 .75.34.75.76v4.48a.76.76 0 0 1-.75.76h-7.5a.76.76 0 0 1-.75-.76V5.76c0-.42.34-.76.75-.76H3V3.5a3 3 0 0 1 2.82-3H6ZM6 2h-.14A1.5 1.5 0 0 0 4.5 3.5V5h3V3.5C7.5 2.67 6.83 2 6 2Z"></path></svg>
  );
};

export const SettingSvg: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg className={styles}  onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="m7.22 3.38.01-.03a4.15 4.15 0 0 1 .17-.48c.36-.82.95-1.29 1.86-1.36l.16-.01h1.21c1.05.03 1.74.6 2.1 1.7l.05.18.05.16c.01.07.03.14.06.2l.05.14.03.02.06-.02.11-.04.14-.06a5.36 5.36 0 0 1 .17-.08l.03-.01a4.23 4.23 0 0 1 .43-.15c.93-.27 1.68-.08 2.32.61l.1.13.72.88c.63.83.61 1.72 0 2.68l-.12.16-.1.14-.12.18-.06.1-.03.05v.02l.08.05.11.06.13.08c1.21.61 1.71 1.42 1.52 2.54l-.03.16-.22.92c-.13.59-.24.87-.67 1.25a2.13 2.13 0 0 1-1.05.52h-.01a3.92 3.92 0 0 1-.44.06l-.2.02H15.63l-.16.01-.16.02.01.13.01.08.03.15c.07.32.1.62.1.9a2.04 2.04 0 0 1-1.13 1.87l-.15.08-1.02.5c-.9.4-1.72.23-2.48-.47a3.93 3.93 0 0 1-.15-.14l-.13-.14-.11-.13a2.94 2.94 0 0 0-.15-.17l-.09-.08-.04-.04-.08.08-.09.1-.1.1c-.83.99-1.7 1.34-2.77.93l-.15-.06-.91-.45-.28-.13a1.78 1.78 0 0 1-.87-.92 2.15 2.15 0 0 1-.2-1.01v-.02c0-.19.02-.39.06-.6l.04-.2.04-.2.01-.15-.1-.02-.12-.01h-.15a4.14 4.14 0 0 1-.86-.1h-.01a2.05 2.05 0 0 1-1.61-1.53l-.05-.16-.25-1.1c-.2-1.03.2-1.82 1.19-2.41l.17-.1.15-.08.19-.1.13-.1v-.01l-.05-.1-.07-.1-.09-.13a5.2 5.2 0 0 1-.29-.42c-.54-.9-.53-1.72.05-2.52l.1-.14.72-.87c.68-.8 1.56-.96 2.64-.56l.18.08.16.07a2.9 2.9 0 0 0 .19.08l.12.04.03-.02.03-.07.04-.12.04-.15.04-.16Zm4.24.84.01.04.05.14a1.5 1.5 0 0 0 .75.83l.03.01a1.5 1.5 0 0 0 1.13.08l.06-.02a1.47 1.47 0 0 0 .07-.02l.12-.04.06-.03.13-.06.04-.01a2.7 2.7 0 0 1 .41-.16c.27-.08.41-.06.47-.04.06.01.16.05.32.22l.07.09.69.84c.13.18.15.29.15.35 0 .09-.03.27-.23.58l-.08.12-.08.1a4.4 4.4 0 0 0-.18.27l-.02.02-.06.1v.01l-.01.02-.03.05a1.5 1.5 0 0 0-.18 1.06v.01a1.5 1.5 0 0 0 .65.96l.08.05.05.04.1.06.07.03.13.08.04.01c.45.24.62.43.67.52.04.06.09.16.04.42l-.02.12-.2.89c-.07.28-.1.35-.11.37h-.01a.97.97 0 0 1-.1.11.65.65 0 0 1-.36.16 2.36 2.36 0 0 1-.25.04h-.16l-.13.01h-.08a4.55 4.55 0 0 0-.28.02l-.15.02a1.5 1.5 0 0 0-1.32 1.63l.01.12v.07l.02.09.01.06.03.15v.05c.06.23.07.42.07.55 0 .2-.04.3-.07.35a.72.72 0 0 1-.28.24l-.1.05-.98.47c-.2.1-.32.09-.38.07-.08-.01-.23-.06-.46-.28a2.38 2.38 0 0 1-.08-.07l-.1-.1-.09-.11a4.39 4.39 0 0 0-.21-.24l-.02-.01-.08-.09a1.43 1.43 0 0 0-.04-.03l-.04-.04a1.5 1.5 0 0 0-2.05.01l-.08.08a1.43 1.43 0 0 0-.04.04l-.1.1a1.53 1.53 0 0 0-.04.04l-.1.12-.03.03c-.31.37-.53.5-.64.53-.08.03-.19.05-.42-.03l-.1-.04-.86-.42-.24-.12a1.19 1.19 0 0 1-.13-.08v-.01a1.08 1.08 0 0 1-.09-.15.67.67 0 0 1-.06-.34l.04-.36.04-.18a4.38 4.38 0 0 0 .06-.35l.01-.15a1.5 1.5 0 0 0-.43-1.22 1.5 1.5 0 0 0-.86-.43h-.1a1.4 1.4 0 0 0-.06-.02h-.13a1.54 1.54 0 0 0-.06-.01h-.19a2.66 2.66 0 0 1-.55-.07c-.22-.05-.3-.11-.35-.15a.7.7 0 0 1-.17-.32L3.26 12l-.24-1.05c-.04-.22 0-.33.02-.38.04-.08.15-.23.46-.42l.13-.08.12-.06a4.43 4.43 0 0 0 .31-.18l.14-.09a1.5 1.5 0 0 0 .65-.94v-.02a1.5 1.5 0 0 0-.17-1.07l-.05-.09a1.49 1.49 0 0 0-.04-.06l-.07-.11a1.5 1.5 0 0 0-.04-.06l-.09-.12a1.52 1.52 0 0 0-.02-.03c-.31-.4-.37-.65-.38-.76 0-.06 0-.18.15-.4L4.2 6l.68-.83c.16-.18.27-.21.33-.23.1-.02.28-.03.63.1l.13.06.13.05a4.42 4.42 0 0 0 .31.13l.12.04a1.5 1.5 0 0 0 1.14-.05l.03-.02a1.5 1.5 0 0 0 .76-.82l.03-.08.02-.07.04-.12.02-.06.04-.14.01-.04.03-.12.12-.32c.1-.23.19-.32.24-.36.04-.03.13-.09.34-.1l.1-.01h1.14c.24.01.34.07.39.11.07.06.2.2.3.54l.05.14.03.13.1.3ZM10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"></path></svg>
  );
};

export const EditSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg onClick={onClick} className={styles} xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 32 32" width="25px" height="25px">
      <path
        d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/>
    </svg>
  )
}

export const CommentsSvg: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg onClick={onClick} className={styles} fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg"><path d="m27.23 42.14.97 1.15zm-10.09 8.48-.96-1.15zM8.5 15a1.5 1.5 0 0 0 0-3zm20.9 20.67-.97 1.15zm9.46 7.95.96-1.15zM5 36.5v-18H2v18zm9.5 3.5h-6v3h6zm2.5 9.85V42.5h-3v7.35zM26.27 41l-10.1 8.48 1.94 2.3 10.09-8.48zm1.93 2.3c.22-.19.5-.29.8-.29v-3c-1 0-1.97.35-2.73 1zM14 49.85a2.5 2.5 0 0 0 4.1 1.92l-1.92-2.3a.5.5 0 0 1 .82.38zm.5-6.85a.5.5 0 0 1-.5-.5h3a2.5 2.5 0 0 0-2.5-2.5zM2 36.5A6.5 6.5 0 0 0 8.5 43v-3A3.5 3.5 0 0 1 5 36.5zm3-18A3.5 3.5 0 0 1 8.5 15v-3A6.5 6.5 0 0 0 2 18.5zM46.5 5h-28v3h28zM12 11.5v18h3v-18zm41 18v-18h-3v18zM41.5 36h5v-3h-5zm.5 6.85V35.5h-3v7.35zM18.5 36h7.68v-3H18.5zm9.93.82 9.46 7.95 1.93-2.3-9.46-7.95zM26.18 36c.82 0 1.62.29 2.25.82l1.93-2.3A6.5 6.5 0 0 0 26.18 33zM39 42.85c0-.42.5-.65.82-.38l-1.93 2.3A2.5 2.5 0 0 0 42 42.85zM41.5 33a2.5 2.5 0 0 0-2.5 2.5h3a.5.5 0 0 1-.5.5zm8.5-3.5a3.5 3.5 0 0 1-3.5 3.5v3a6.5 6.5 0 0 0 6.5-6.5zm-38 0a6.5 6.5 0 0 0 6.5 6.5v-3a3.5 3.5 0 0 1-3.5-3.5zM18.5 5a6.5 6.5 0 0 0-6.5 6.5h3A3.5 3.5 0 0 1 18.5 8zm28 3a3.5 3.5 0 0 1 3.5 3.5h3A6.5 6.5 0 0 0 46.5 5z" fill="currentColor"></path></svg>
  )
}

export const LeftArrow: FC<ISvgComponentProps> = ({styles, onClick, width = "50px", height = "50px"}) => {
  return (
    <svg onClick={onClick} className={styles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke={"#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={width} height={height} role="img" aria-label="Left Arrow">
      <path d="M35 10l-15 15 15 15" />
    </svg>
  );
};

export const RightArrow: FC<ISvgComponentProps> = ({ styles, onClick, width = "50px", height = "50px" }) => {
  return (
    <svg onClick={onClick} className={styles}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke={"#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={width} height={height} role="img" aria-label="Right Arrow">
      <path d="M15 10l15 15-15 15" />
    </svg>
  );
};

export const PlayMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick, width = "50px", height = "50px" }) => {
  return (
    <svg className={styles} fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M28 14a14 14 0 1 1-28 0 14 14 0 0 1 28 0zm-8.98.87c.64-.39.64-1.36 0-1.74l-6.6-4c-.64-.38-1.42.1-1.42.87v8c0 .76.78 1.25 1.41.87z" fill="currentColor" fillRule="evenodd"></path></svg>
  );
};

export const PauseMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick, width = "50px", height = "50px" }) => {
  return (
    <svg className={styles} fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M28 14a14 14 0 1 1-28 0 14 14 0 0 1 28 0zM10 9.6c0-.33.27-.6.6-.6h1.8c.33 0 .6.27.6.6v8.8a.6.6 0 0 1-.6.6h-1.8a.6.6 0 0 1-.6-.6zm5 0c0-.33.27-.6.6-.6h1.8c.33 0 .6.27.6.6v8.8a.6.6 0 0 1-.6.6h-1.8a.6.6 0 0 1-.6-.6z" fill="currentColor" fillRule="evenodd"></path></svg>
  );
};

export const PrevMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick, width = "50px", height = "50px" }) => {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 15c.41 0 .75-.34.75-.75v-3.18l7.12 3.82a.94.94 0 0 0 1.38-.83V5.94a.94.94 0 0 0-1.38-.83L6.5 8.93V5.75a.75.75 0 0 0-1.5 0v8.5c0 .41.34.75.75.75z" fill="currentColor"></path></svg>
  );
};
export const NextMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick, width = "50px", height = "50px" }) => {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 5a.75.75 0 0 0-.75.75v3.18L6.38 5.1A.94.94 0 0 0 5 5.94v8.12a.94.94 0 0 0 1.38.83l7.12-3.82v3.18a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75z" fill="currentColor"></path></svg>
  );
};

export const AudioIconSVG: FC<ISvgComponentProps> = ({ styles, onClick, fill}) => {
  return (
    <svg onClick={onClick} className={styles} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m0 0h24v24h-24z" opacity=".4"/><path d="m13 11.4849987v5.6482897c0 4.5123987-.8747233 5.3834431-4.37440289 5.8421935-1.6682259.2186769-3.62559711-.5384568-3.62559711-3.1617096 0-1.2814037.80181302-2.498263 2.46114282-2.8162494 1.26723039-.2428462-.09078118.0181935 2.77607228-.5140396.6959753-.1292083.7748413-.3782301.7748413-.908791 0-.2664094-.0013183-2.5951438-.0022416-4.1936475l-.0073943-.0003862v-4.31781414s-.0054461-2.05827203 0-3.08739758c.0065136-1.23086488.6796458-1.68321833 2.6637921-2.08397579 0 0 3.0232113-.57396781 4.6852252-.87541989.367783-.06670761.6485622.07018054.6485622.49202579 0 0-.0106774 2.62210108 0 4.05433854.0031006.41590408-.168424.60420104-.5899711.67902227-1.6816987.29848801-4.8649278.86036181-4.8649278.86036181-.3738792.09182758-.5451011.35499958-.5451011.73329156z" fill={fill} fillRule="nonzero"/></g></svg>
  );
};

export const RepeatMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick, width = "50px", height = "50px" }) => {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M2 12a5.9 5.9 0 0 1 5.9-5.9h10.03l-.56-.56a.9.9 0 1 1 1.27-1.28l2.1 2.1a.9.9 0 0 1 0 1.28l-2.1 2.1a.9.9 0 0 1-1.27-1.28l.56-.56H7.91A4.1 4.1 0 0 0 3.8 12v.1a.9.9 0 0 1-1.8 0zm19.1-1c.5 0 .9.4.9.9v.1a5.9 5.9 0 0 1-5.9 5.9H6.07l.57.56a.9.9 0 1 1-1.28 1.28l-2.1-2.1a.9.9 0 0 1 0-1.28l2.1-2.1a.9.9 0 0 1 1.28 1.28l-.57.56H16.1a4.1 4.1 0 0 0 4.1-4.1v-.1c0-.5.4-.9.9-.9z"></path></g></svg>
  );
};

export const RandomMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick, width = "50px", height = "50px" }) => {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M2.9 6.1a.9.9 0 0 0 0 1.8c2.63 0 4.5 1.61 6.38 3.7-1 1.19-1.95 2.28-2.97 3.11a5.34 5.34 0 0 1-3.4 1.39.9.9 0 0 0 0 1.8c1.78 0 3.26-.76 4.53-1.8 1.1-.88 2.1-2.02 3.04-3.12a25.34 25.34 0 0 0 3.04 3.16A6.98 6.98 0 0 0 18 17.9h.93l-.57.56a.9.9 0 1 0 1.28 1.28l2.1-2.1a.9.9 0 0 0 0-1.28l-2.1-2.1a.9.9 0 1 0-1.28 1.28l.57.56H18a5.2 5.2 0 0 1-3.34-1.36c-1-.81-1.91-1.88-2.92-3.05l-.23-.28C9.4 8.96 6.87 6.1 2.9 6.1zm9.42 2.3A8.84 8.84 0 0 1 18 6.1h.93l-.57-.56a.9.9 0 1 1 1.28-1.28l2.1 2.1a.9.9 0 0 1 0 1.28l-2.1 2.1a.9.9 0 0 1-1.28-1.28l.57-.56H18c-1.72 0-3.22.79-4.52 1.89a.9.9 0 1 1-1.16-1.38z"></path></g></svg>
  );
};
export const PlaylistMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick}) => {
  return (
    <svg className={styles} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M17.9 11.9a.9.9 0 1 0-1.8 0v3.2h-3.2a.9.9 0 1 0 0 1.8h3.2v3.2a.9.9 0 0 0 1.8 0v-3.2h3.2a.9.9 0 0 0 0-1.8h-3.2zm-14-5h14.2a.9.9 0 1 0 0-1.8H3.9a.9.9 0 1 0 0 1.8zm0 3.2a.9.9 0 1 0 0 1.8h9.2a.9.9 0 0 0 0-1.8zm0 5a.9.9 0 1 0 0 1.8h5.2a.9.9 0 0 0 0-1.8z"></path></g></svg>
  );
};

export const UploadMusicSVG: FC<ISvgComponentProps> = ({ styles, onClick}) => {
  return (
    <svg className={styles} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M19 19a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zm-7-2a1 1 0 0 1-1-1V5.41l-4.3 4.3a1 1 0 0 1-1.31.08l-.1-.08a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.42 0l6 6a1 1 0 0 1-1.42 1.42L13 5.4V16a1 1 0 0 1-1 1z"></path></g></svg>
  );
};



