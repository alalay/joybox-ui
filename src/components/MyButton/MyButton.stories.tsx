import React from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./index";
import {
  withKnobs,
  text,
  boolean,
  color,
  select
} from "@storybook/addon-knobs";

export default {
  title: "MyButton",
  component: PrimaryButton,
  decorators: [withKnobs]
};

export const test = () => (
  <div>
    <div>
      <p>Primary Button</p>
      <div>
        <PrimaryButton>Hello World</PrimaryButton>
      </div>
    </div>
	<div>
      <p>Secondary Button</p>
      <div>
        <SecondaryButton>Hello World</SecondaryButton>
      </div>
    </div>
	<div>
      <p>Tertiary Button</p>
      <div>
        <TertiaryButton>Hello World</TertiaryButton>
      </div>
    </div>
  </div>
);
