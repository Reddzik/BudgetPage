import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// eslint-disable-next-line no-undef
export default createGlobalStyle`
  ${normalize}
  
  ul{
    list-style:none;
    li+li{
      margin-left: ${({ theme }) => theme.spacing.xs}px;
    }
  }

`;
