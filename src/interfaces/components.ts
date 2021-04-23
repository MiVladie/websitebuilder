import React from 'react';

export interface IAccordion {
	name: string;
	fields: (IField | IDropdown | ISlider)[];
}

export interface IField {
	name: string;
	type: 'date' | 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time';
	placeholder: string;
	label?: string;
	info?: React.ReactNode;
	prefix?: string;
	rules?: IRules;
}

export interface IRules extends CommonRules {
	isURL?: boolean;
	isRoute?: boolean;
}

export interface IDropdown {
	name: string;
	type: 'dropdown';
	placeholder: string;
	options: IOption[];
	label?: string;
	info?: React.ReactNode;
	rules?: CommonRules;
}

export interface IOption {
	value: number;
	label: string;
}

export interface ISlider {
	name: string;
	type: 'slider';
	defaultValue?: number;
	label?: string;
	info?: React.ReactNode;
	marks?: IMark;
	options?: ISliderOptions;
}

export interface IMark {
	[key: number]: string;
}

export interface ISliderOptions {
	step: number;
	min: number;
	max: number;
	withInput?: boolean;
}

interface CommonRules {
	required?: boolean;
	custom?: (value: string) => string | false;
}
