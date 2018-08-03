import { injectGlobal } from "styled-components";
import { sanitize } from "./sanitize";

export function injectGlobalCss() {
  return injectGlobal`
    ${sanitize}

    * {
    box-sizing: border-box;
    }
  `;
}
