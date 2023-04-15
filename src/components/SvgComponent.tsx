import {FC} from 'react';

interface ISvgComponentProps {
  styles?: string
  onClick?: () => void
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
  return <svg onClick={onClick} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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

export const ClearSearchValueSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg className={styles}
         onClick={onClick}
         height="22"
         viewBox="0 0 48 48"
         width="22"
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