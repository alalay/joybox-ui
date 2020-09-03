import React from "react";
import { DatePicker } from "./index";
import {
	withKnobs,
	text,
	boolean,
	color,
	select,
} from "@storybook/addon-knobs";

export default {
	title: "DatePicker",
	component: DatePicker,
	decorators: [withKnobs],
};

export const knobsBtn = () => (
);