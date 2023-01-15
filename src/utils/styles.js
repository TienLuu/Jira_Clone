import { css } from "styled-components";
import Color from "color";

import { IssueType, IssueStatus, IssuePriority } from "../constants/issues";

export const color = {
   primary: "#0052cc",
   sucess: "#0b875b",
   danger: "#e13c3c",
   warning: "#f89c1c",
   secondary: "#f4f5f7",
   task: "#4fade6",
   priorityArrowUp: "#e9494a",

   textLogo: "#2684ff",
   textDarkest: "#172b4d",
   textDark: "#42526E",
   textMedium: "#5E6C84",
   textLight: "#8993a4",
   textLink: "#0052cc",

   backgroundDarkPrimary: "#0747A6",
   backgroundMedium: "#dfe1e6",
   backgroundLight: "#ebecf0",
   backgroundLightest: "#F4F5F7",
   backgroundLightPrimary: "#D2E5FE",
   backgroundLightSuccess: "#E4FCEF",

   borderLightest: "#dfe1e6",
   borderLight: "#C1C7D0",
   borderInputFocus: "#4c9aff",
};

export const issueTypeColors = {
   [IssueType.TASK]: "#4FADE6", // blue
   [IssueType.BUG]: "#E44D42", // red
};

export const issuePriorityColors = {
   [IssuePriority.HIGH]: "#E9494A", // orange
   [IssuePriority.MEDIUM]: "green", // orange
   [IssuePriority.LOW]: "#2D8738", // green
   [IssuePriority.LOWEST]: "#57A55A", // green
};

export const issueStatusColors = {
   [IssueStatus.BACKLOG]: color.textDark,
   [IssueStatus.INPROGRESS]: "#fff",
   [IssueStatus.SELECTED]: color.textDark,
   [IssueStatus.DONE]: "#fff",
};

export const issueStatusBackgroundColors = {
   [IssueStatus.BACKLOG]: color.backgroundMedium,
   [IssueStatus.INPROGRESS]: color.primary,
   [IssueStatus.SELECTED]: color.backgroundMedium,
   [IssueStatus.DONE]: color.sucess,
};

export const font = {
   size: (size) => `font-size: ${size}px;`,
};

export const mixin = {
   darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
   lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
   rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
   boxShadowMedium: css`
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
   `,
   boxShadowDropdown: css`
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
         rgba(9, 30, 66, 0.31) 0px 0px 1px;
   `,

   boxShadowButton: css`
      box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1),
         0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
         0 1px 2px 0 rgba(0, 0, 0, 0.08);
   `,

   truncateText: css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
   `,
   clickable: css`
      cursor: pointer;
      user-select: none;
   `,
   hardwareAccelerate: css`
      transform: translateZ(0);
   `,
   cover: css`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
   `,
   placeholderColor: (colorValue) => css`
      ::-webkit-input-placeholder {
         color: ${colorValue} !important;
         opacity: 1 !important;
      }
      :-moz-placeholder {
         color: ${colorValue} !important;
         opacity: 1 !important;
      }
      ::-moz-placeholder {
         color: ${colorValue} !important;
         opacity: 1 !important;
      }
      :-ms-input-placeholder {
         color: ${colorValue} !important;
         opacity: 1 !important;
      }
   `,
   scrollableY: css`
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
   `,
   customScrollbar: ({
      width = 8,
      background = color.backgroundMedium,
   } = {}) => css`
      &::-webkit-scrollbar {
         width: ${width}px;
      }
      &::-webkit-scrollbar-track {
         background: none;
      }
      &::-webkit-scrollbar-thumb {
         border-radius: 99px;
         background: ${background};
      }
   `,
   backgroundImage: (imageURL) => css`
      background-image: url("${imageURL}");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: ${color.backgroundLight};
   `,
   backgroundImageSym: (imageURLLeft, imageURLRight) => css`
      background-image: url("${imageURLLeft}"), url("${imageURLRight}");
      background-repeat: no-repeat, no-repeat;
      background-attachment: fixed, fixed;
      background-position: left bottom, right bottom;
   `,
   link: (colorValue = color.textLink) => css`
      cursor: pointer;
      color: ${colorValue};
      ${font.medium}
      &:hover, &:visited, &:active {
         color: ${colorValue};
      }
      &:hover {
         text-decoration: underline;
      }
   `,
   tag: (
      background = color.backgroundMedium,
      colorValue = color.textDarkest
   ) => css`
      display: inline-flex;
      align-items: center;
      height: 24px;
      padding: 0 8px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      color: ${colorValue};
      background: ${background};
      ${font.bold}
      ${font.size(12)}
    i {
         margin-left: 4px;
      }
   `,
};

export const sizes = {
   appNavBarLeftWidth: 64,
   secondarySideBarWidth: 230,
   minViewportWidth: 1000,
};

export const zIndexValues = {
   modal: 1000,
   dropdown: 101,
   navLeft: 100,
};
