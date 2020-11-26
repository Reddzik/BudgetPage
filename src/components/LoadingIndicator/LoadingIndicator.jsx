import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "utils/theme";

const loading = keyframes`
0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const Root = styled.div`
  display: inline-block;
  transform: translateZ(1px);
`;

const Content = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: gray;
  animation: ${loading} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const LoadingIndicator = () => {
  return (
    <Root>
      <Content />
    </Root>
  );
};

export default LoadingIndicator;