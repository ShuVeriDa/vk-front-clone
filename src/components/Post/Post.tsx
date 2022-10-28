import {FC, useEffect, useRef, useState} from 'react';

import styles from './Post.module.scss'
import defaultAvatar from './../../assets/defaultAvatar.png'
import {Link, NavLink} from "react-router-dom";

const crudList = ['Удалить запись', "Редактировать", "Выключить комментарий"]

interface PostPropsType {
}

export const Post: FC<PostPropsType> = () => {
  const refOut = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refOut.current && !event.composedPath().includes(refOut.current)) {
        setShow(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.addEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={defaultAvatar} alt=""/>
        </div>
        <div className={styles.nameAndDate}>
          <span className={styles.name}>
             <Link to={'/'}>Biltoyn SaIid-Muhammad</Link>
          </span>
          <span className={styles.date}>
            <Link to={'/'}>28 октябрь 2022 в 18:07</Link>
          </span>
        </div>
        <div ref={refOut} className={styles.crudComponent}>
          <div className={styles.svgComponent}>
            <svg onClick={() => setShow(!show)} width="24" height="24" viewBox="0 0 24 24"
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
          </div>
          <div className={`${styles.crud} ${show ? styles.show : ''}`}>
            <ul>
              {crudList.map((list, i) => <li key={i}>
                {list}
              </li>)}
            </ul>
          </div>

        </div>
      </div>
      <div className={styles.postText}>
        <span className={styles.text}>Post</span>
      </div>
      <div className={styles.bottom}>
          <button className={styles.bottomBtn}>
                      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none"
                                                                                                            fillRule="evenodd"><path
                        d="M0 0h24v24H0z"></path><path
                        d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                        fill="currentColor" fillRule="nonzero"></path></g></svg>

          </button>
        <button className={styles.bottomBtn}>
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none"
                                                                                                fillRule="evenodd"><path
            d="M0 0h24v24H0z"></path><path
            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
            fill="currentColor" fillRule="nonzero"></path></g></svg>
        </button>
        <button className={styles.bottomBtn}>
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none"
                                                                                                fillRule="evenodd"><path
            d="M0 0h24v24H0z"></path><path
            d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 0 0-7.83 10.72.9.9 0 0 0 1.61.46l.19-.24a9.08 9.08 0 0 1 5.84-3.26l.2-.03.01 2.5a2.15 2.15 0 0 0 3.48 1.69l7.82-6.14a2.15 2.15 0 0 0 0-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 0 1 0 .55l-7.82 6.13a.35.35 0 0 1-.57-.28V14.7a.9.9 0 0 0-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 0 1 6.97-6.53.9.9 0 0 0 .79-.9V5.87c0-.2.16-.35.35-.35z"
            fill="currentColor" fillRule="nonzero"></path></g></svg>
        </button>
        <span>
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g
            fill="currentColor"><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path><path clipRule="evenodd"
                                                                                                   d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
                                                                                                   fillRule="evenodd"></path></g></svg>
        </span>
        {/*<span>*/}
        {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" preserveAspectRatio="xMidYMid meet" style={{width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)"}}><defs><clipPath id="__lottie_element_30"><rect width="64" height="64" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_32"><path d="M0,0 L512,0 L512,512 L0,512z"></path></clipPath><radialGradient id="__lottie_element_39" spreadMethod="pad" gradientUnits="userSpaceOnUse" cx="11" cy="-24" r="78.1542012445136" fx="11" fy="-24"><stop offset="1%" stop-color="rgb(255,51,71)"></stop><stop offset="82%" stop-color="rgb(231,32,53)"></stop><stop offset="100%" stop-color="rgb(207,13,35)"></stop></radialGradient></defs><g clip-path="url(#__lottie_element_30)"><g clip-path="url(#__lottie_element_32)" transform="matrix(0.125,0,0,0.125,0,0)" opacity="1" style={{display: "block"}}><g transform="matrix(6,0,0,6,256,256)" opacity="1" style={{display: "block"}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_39)" fill-opacity="1" d=" M32,0 C32,17.670000076293945 17.670000076293945,32 0,32 C-17.670000076293945,32 -32,17.670000076293945 -32,0 C-32,-17.670000076293945 -17.670000076293945,-32 0,-32 C17.670000076293945,-32 32,-17.670000076293945 32,0z"></path></g></g><g transform="matrix(6,0,0,6,256,256)" opacity="1" style={{display: "block"}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M19,-3.5350000858306885 C19,4.623000144958496 4.315000057220459,13.680999755859375 0.7110000252723694,15.781000137329102 C0.21899999678134918,16.069000244140625 -0.3840000033378601,16.069000244140625 -0.8880000114440918,15.803999900817871 C-4.638999938964844,13.75 -19,4.6570000648498535 -19,-3.5350000858306885 C-19,-9.315999984741211 -14.869000434875488,-14 -8.940999984741211,-14 C-5.214000225067139,-14 -1.9190000295639038,-12.142000198364258 0,-9.3149995803833 C1.9190000295639038,-12.142000198364258 5.214000225067139,-14 8.940999984741211,-14 C14.869000434875488,-14 19,-9.315999984741211 19,-3.5350000858306885z"></path></g></g></g></g></svg>*/}
        {/*</span>*/}
      </div>
    </div>
  );
};