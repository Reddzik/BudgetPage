import styled from "styled-components";

const RootButton = styled.button`
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.dark.gray : colors.blue.main};
  cursor: inherit;
  border: 2px solid black;
  background-color: #aaa;
  cursor: ${(props) =>
    props.to || props.onClick || props.type === "submit"
      ? "pointer"
      : "default"};
  transition: 0.3s linear;
  outline: none;
  &:hover {
    transform: scale(1.1);
  }
`;

export const NormalButton = styled(RootButton)`
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.red.normal : colors.dark.gray};
  color: ${({ primary, theme: { colors } }) => (primary ? "#fff" : "black")};
  padding: ${({ theme: { spacing } }) => `${spacing.xs / 2}px ${spacing.xs}px`};
  border-radius: 4px;
`;
export const InlineButton = styled(RootButton)`
  &:hover {
    background-color: white;
  }
`;
