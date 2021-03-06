import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from './Link';

const IconGithub = () => (
  <svg viewBox="0 0 50 50">
    <path
      d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77C7.7,
  29.18,6.74,26,6.74,26a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,
  0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18C9.7,23.08,5.9,21.68,5.9,15.44a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,
  .16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67A5.85,5.85,0,0,1,25,11.07a6.29,
  6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78A16.29,16.29,
  0,0,0,16.29,0Z"
      transform="translate(9 9)"
    />
  </svg>
);

const IconTwitter = () => (
  <svg viewBox="0 0 35 35">
    <path
      d="M33.5,18.9c-0.7,0.3-1.4,0.5-2.1,0.6c0.8-0.5,1.3-1.3,1.6-2.2c-0.7,0.5-1.5,0.8-2.3,1
				C30.1,17.5,29.1,17,28,17c-2,0-3.7,1.8-3.7,4c0,0.3,0,0.6,0.1,0.9c-3-0.2-5.8-1.7-7.6-4.1c-0.3,0.6-0.5,1.3-0.5,2
				c0,1.4,0.6,2.6,1.6,3.3c-0.6,0-1.2-0.2-1.7-0.5c0,0,0,0,0,0.1c0,1.9,1.3,3.5,2.9,3.9c-0.3,0.1-0.6,0.1-1,0.1
				c-0.2,0-0.5,0-0.7-0.1c0.5,1.6,1.8,2.7,3.4,2.7C19.5,30.4,18,31,16.2,31c-0.3,0-0.6,0-0.9-0.1c1.6,1.1,3.5,1.8,5.6,1.8
        c6.7,0,10.4-6,10.4-11.2c0-0.2,0-0.3,0-0.5C32.4,20.4,33.1,19.7,33.5,18.9z"
      transform="translate(-6, -6)"
    />
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 50 50">
    <path
      d="M33.4,33.5h-3.6v-5.6c0-1.3,0-3-1.9-3c-1.9,0-2.1,1.4-2.1,2.9v5.7h-3.6V22h3.4v1.6h0c0.5-0.9,1.6-1.9,3.4-1.9
        c3.6,0,4.3,2.4,4.3,5.5L33.4,33.5L33.4,33.5z M18.3,20.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1
        C20.4,19.5,19.5,20.4,18.3,20.4z M20.1,33.5h-3.6V22h3.6V33.5z M35.2,13H14.8c-1,0-1.8,0.8-1.8,1.7v20.5c0,1,0.8,1.7,1.8,1.7h20.5
        c1,0,1.8-0.8,1.8-1.7V14.7C37,13.8,36.2,13,35.2,13L35.2,13z"
    />
  </svg>
);

const IconMedium = () => (
  <svg viewBox="0 0 50 50">
    <path
      d="M16.9,20c0-0.3-0.1-0.5-0.3-0.7l-2-2.4v-0.4h6.2L25.6,27l4.2-10.5h5.9v0.4L34,18.5c-0.1,0.1-0.2,0.3-0.2,0.5v12
        c0,0.2,0,0.4,0.2,0.5l1.7,1.6v0.4h-8.4v-0.4l1.7-1.7c0.2-0.2,0.2-0.2,0.2-0.5v-9.7l-4.8,12.2h-0.6l-5.6-12.2v8.2
        c0,0.3,0.1,0.7,0.3,0.9l2.2,2.7v0.4h-6.4v-0.4l2.2-2.7c0.2-0.2,0.3-0.6,0.3-0.9V20z"
    />
  </svg>
);

const IconAbitCompany = () => (
  <svg viewBox="0 0 80 80">
    <path
      d="M36.85,32.86,35.09,31.1a7.56,7.56,0,0,1-1.14.95,8.65,8.65,0,0,1-1.28.71,6.74,6.74,0,0,1-1.38.47,
    7.44,7.44,0,0,1-1.42.24H28.4A7.57,7.57,0,0,1,27,33.19a11.81,11.81,0,0,1-1.38-.52c-.43-.19-.85-.47-1.28-.71a9.25,
    9.25,0,0,1-2-2,5.57,5.57,0,0,1-.71-1.28A11.81,11.81,0,0,1,21,27.26a7.57,7.57,0,0,1-.28-1.42V24.36A7.92,7.92,0,0,1,
    21,22.89a11.72,11.72,0,0,1,.47-1.38,6.78,6.78,0,0,1,.71-1.28,10.43,10.43,0,0,1,.95-1.09,7.56,7.56,0,0,1,1.14-.95,
    8.3,8.3,0,0,1,1.28-.76,11.82,11.82,0,0,1,1.38-.52,7.35,7.35,0,0,1,1.47-.28,4.61,4.61,0,0,1,.81,0h.66c.47,0,1,.14,
    1.47.24a6.86,6.86,0,0,1,1.38.52,5.71,5.71,0,0,1,1.28.76,7.56,7.56,0,0,1,1.14.95l1.76-1.76,10-10a23.45,23.45,0,0,
    0-3.37-2.8,23.17,23.17,0,0,0-3.8-2.18L34.81,12.82h0A12.54,12.54,0,0,0,32.58,12l3-11.16A27.12,27.12,0,0,0,
    31.2.09C30.53,0,29.82,0,29.11,0a18.68,18.68,0,0,0-2.28.09A26.65,26.65,0,0,0,22.51.9l3,11.16h0a12.07,12.07,0,0,
    0-2.18.81L18.38,2.37a23,23,0,0,0-3.75,2.23l6.65,9.5h0a10.62,10.62,0,0,0-1.76,1.52L11.3,7.45a27.06,27.06,0,0,0-2.8,
    3.37L18,17.47h0a16.61,16.61,0,0,0-1.14,2L6.46,14.58a26.51,26.51,0,0,0-1.52,4.08,22.31,22.31,0,0,0-.71,4.27c0,
    .71-.09,1.38-.09,2.09a17.55,17.55,0,0,0,.09,2.23l11.54-.95h0a12.83,12.83,0,0,0,.43,2.28l-11.11,3a24.3,24.3,0,0,
    0,1.52,4L17.1,30.77h0a10.53,10.53,0,0,0,1.19,2l-9.5,6.65a20.78,20.78,0,0,0,2.8,3.32,26.62,26.62,0,0,0,3.32,
    2.8L21.56,36a13.82,13.82,0,0,0,2,1.19h0L18.66,47.72a21,21,0,0,0,4.08,1.47A27.07,27.07,0,0,0,27,50l1-11.54a11.15,
    11.15,0,0,0,1.23,0h1.09l1,11.44a25.09,25.09,0,0,0,4.27-.71l-3-11.16a12.07,12.07,0,0,0,2.18-.81h0L39.7,47.77a25.33,
    25.33,0,0,0,3.8-2.18,27.06,27.06,0,0,0,3.37-2.8Z"
      transform="translate(13, 15)"
    />
  </svg>
);

const SocialIcon = ({ social, link }) => {
  const selectSocial = () => {
    switch (social) {
      case 'twitter':
        return (
          <Link to={link}>
            <SocialIconWrapper twitter>
              <IconTwitter />
            </SocialIconWrapper>
          </Link>
        );
      case 'linkedin':
        return (
          <Link to={link}>
            <SocialIconWrapper linkedin>
              <IconLinkedin />
            </SocialIconWrapper>
          </Link>
        );
      case 'medium':
        return (
          <Link to={link}>
            <SocialIconWrapper medium>
              <IconMedium />
            </SocialIconWrapper>
          </Link>
        );
      case 'github':
        return (
          <Link to={link}>
            <SocialIconWrapper github>
              <IconGithub />
            </SocialIconWrapper>
          </Link>
        );
      case 'abitcompany':
        return (
          <Link to={link}>
            <SocialIconWrapper abitcompany>
              <IconAbitCompany />
            </SocialIconWrapper>
          </Link>
        );
      default:
        return <div />;
    }
  };
  return <div>{selectSocial()}</div>;
};

SocialIcon.propTypes = {
  social: PropTypes.string,
  link: PropTypes.string,
};

const SocialIconWrapper = styled.div`
  height: 40px;
  width: 40px;
  @media screen and (max-width: 750px), (max-height: 750px) {
    height: 35px;
    width: 35px;
    margin: 0 12px;
  }
  @media screen and (max-width: 525px), (max-height: 525px) {
    height: 30px;
    width: 30px;
    margin: 0 10px;
  }
  transform: rotate(45deg);
  ${props =>
    props.facebook &&
    css`
      background-color: #3b5998;
    `};
  ${props =>
    props.twitter &&
    css`
      background-color: #1da1f2;
    `};
  ${props =>
    props.linkedin &&
    css`
      background-color: #0077b5;
    `};
  ${props =>
    props.medium &&
    css`
      background-color: #000;
    `};
  ${props =>
    props.github &&
    css`
      background-color: #000;
    `};
  ${props =>
    props.abitcompany &&
    css`
      background-color: #0c35fb;
    `};

  border-radius: 6px;
  transition: all 1s;
  margin: 0 15px;
  position: relative;
  svg {
    transition: all 1s;
    transform: rotate(-45deg);
    fill: white;
  }
  &:hover {
    transform: rotate(360deg);
    svg {
      transform: rotate(-360deg);
    }
  }
`;
export {
  IconGithub,
  IconTwitter,
  IconLinkedin,
  IconMedium,
  SocialIcon,
  IconAbitCompany,
};
