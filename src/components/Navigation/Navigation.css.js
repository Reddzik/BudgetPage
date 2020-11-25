import styled from "styled-components";

import Wrapper from "../Wrapper";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.dark.gray};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm}px 0;
`;

export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
`;
