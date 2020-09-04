import React, { PropsWithChildren, ReactNode, useMemo } from "react";
import styled from "styled-components";
import { color, typography } from "../shared/styles";
import { darken, rgba, opacify } from "polished";
import { easing } from "../shared/animation";

const primaryColor = "#247ba0";

const Button = styled.button`
  border: none;
  padding: 12px 24px;
  min-width: 100px;
  font-size: 1rem;
  border-radius: 2px;
  font-family: "PT Sans";
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};
  color: white;
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: ${primaryColor};
  border: solid 1px ${primaryColor};
`;
const TertiaryButton = styled(Button)`
  background-color: transparent;
  color: ${primaryColor};
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
