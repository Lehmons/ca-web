// ****************************************/
// Input
// ****************************************/

import styled from "styled-components";
import { media, font } from "../Styles";
import { motion } from "framer-motion";

const InputStyles = styled(motion.section)`
  font-size: 0;

  input.has-error {
    border-color: ${props => props.theme.error};
    color: ${props => props.theme.error};
  }

  label,
  span.error,
  input {
    font-family: ${font.family100};
  }

  span.error {
    line-height: 1.2;
  }

  input,
  span,
  label {
    font-size: ${font.p};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `};
  }

	button.reset {
		position: absolute;
		display: none;
		user-select: none;
	}

  input {
    font-size: ${font.p};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `};
    ${media.mobileOnly`
      font-size: ${font.pInputMobile};
    `};
  }

  label {
    position: relative;
    display: block;
  }

  input {
    display: block;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.grey300};
    width: 100%;
    padding: 1.2rem 2rem 1.2rem 0;
    transition: border-color ease-in-out 0.25s, color ease-in-out 0.25s, opacity ease-in-out 0.25s;
    border-radius: 0;
    ${media.smallDesktopAndBelow`
			padding: 12px 20px 12px 0;
		`};
    ${media.minDevicePixelRatio2`
      border-bottom: 0.5px solid ${props => props.theme.grey300};
    `};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input.has-value,
  input:focus,
  input:active {
    border-bottom: 1px solid black;
    outline: none;
    ${media.minDevicePixelRatio2`
      border-bottom: 0.5px solid black;
    `};
  }

  input::-webkit-contacts-auto-fill-button {
    right: 1.6rem;
    ${media.smallDesktopAndBelow`
			right: 16px;
		`};
  }

  span.label-title {
    position: absolute;
    display: block;
    top: calc(100% + 2.3rem);
    transform: translateY(-50%);
    padding-left: 0;
    color: ${props => props.theme.grey400};
    transition: all ease-in-out 0.25s;
    pointer-events: none;
    ${media.smallDesktopAndBelow`
      top: calc(100% + 23px);
    `};
  }

  &.secondary input {
    background: transparent;
  }

  &.secondary input:-webkit-autofill,
  &.secondary input:-webkit-autofill:hover,
  &.secondary input:-webkit-autofill:focus,
  &.secondary input.has-value,
  &.secondary input {
    border-left: initial;
    border-right: initial;
    border-top: initial;
  }

  input:focus,
  input.has-value {
    border-color: black;
  }

  input.hasError {
    color: ${props => props.theme.error};
  }

  input.has-value + span {
    transition: color 0.25s ease-in-out, translate 0.25s ease-in-out;
  }

  input:focus + span,
  input.has-value + span {
    color: ${props => props.theme.black};
  }

  span.error {
    color: ${props => props.theme.error};
    margin-top: 3.6rem;
    display: block;
    ${media.smallDesktopAndBelow`
      margin-top: 36px;
    `};
  }
`;

export default InputStyles;
