import { css } from "styled-components";

/*! sanitize.css v6.0.0 | CC0 License | github.com/csstools/sanitize.css */

export const sanitize = css`
  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  html {
    line-height: 1.15;
    cursor: default;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: break-word;
  }

  body {
    margin: 0;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  main {
    display: block;
  }

  nav ol,
  nav ul {
    list-style: none;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  ::-moz-selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }

  ::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border-style: none;
  }

  svg {
    fill: currentColor;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  table {
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    overflow: visible;
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  input {
    overflow: visible;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    display: inline-block;
    vertical-align: baseline;
  }

  select {
    text-transform: none;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  dialog {
    background-color: white;
    border: solid;
    color: black;
    display: block;
    height: -moz-fit-content;
    height: -webkit-fit-content;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  [hidden] {
    display: none;
  }

  [aria-busy="true"] {
    cursor: progress;
  }

  [aria-controls] {
    cursor: pointer;
  }

  [aria-disabled],
  [disabled] {
    cursor: disabled;
  }

  [aria-hidden="false"][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }
`;
