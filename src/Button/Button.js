import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography, shadow } from '../shared/styles';
import { easing } from '../shared/animation';

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const APPEARANCES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const StyledButton = styled.button`
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${props => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  min-width: ${props => (props.size === SIZES.SMALL ? '80px' : '130px')};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  margin: 0;
  background: transparent;
  box-shadow: ${shadow.button};


  font-size: ${props => (props.size === SIZES.SMALL ? typography.size.b1 : typography.size.b2)}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;



  ${props =>props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
    `}

  ${Text} {
    transform: scale3d(1,1,1) translate3d(0,0,0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
    width: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
    vertical-align: top;
    margin-right: ${props => (props.size === SIZES.SMALL ? '4' : '6')}px;
    margin-top: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;
    margin-bottom: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${props =>
    props.minWidth &&
    `
      min-width: ${props.minWidth}px;
    `}

  ${props =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${props =>
    props.isLoading &&
    `
      cursor: progress !important;

      ${Loading} {
        transition: transform 700ms ${easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${props =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === SIZES.SMALL ? '7' : '12'}px;
    `}
  
  ${props =>
    !props.isLoading && !props.disabled &&
    `
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }
      &:active {
        box-shadow: ${shadow.base};
      }
    `}

  ${props =>
    props.appearance === APPEARANCES.PRIMARY && !props.isDarkmode &&
    `
      background: ${color.blue100};
      color: ${color.white100};
      ${!props.isLoading && !props.disabled &&
        `
          &:hover {
            background: ${color.blue200};      
          }
      `}
    `
  }

  ${props =>
    props.appearance === APPEARANCES.PRIMARY && props.isDarkmode &&
    `
      background: ${color.black100};
      color: ${color.white100};
      ${!props.isLoading && !props.disabled &&
        `
          &:hover {
            background: ${color.blue200};      
          }
      `}
    `
  }


  ${props =>
    props.appearance === APPEARANCES.SECONDARY && !props.isDarkmode &&
    `
      color: ${color.gray600};
      border: 1px solid ${color.gray300};

      ${!props.isLoading && !props.disabled &&
        `
          background: ${color.white100};
          &:hover {
            background: ${color.gray300};
          }
        `
      }
      ${props.isLoading  && `background: ${color.white100};`}
    `
  }

  ${props =>
    props.appearance === APPEARANCES.SECONDARY && props.isDarkmode &&
    `
      color: ${color.gray600};
      border: 1px solid ${color.gray300};
      ${!props.isLoading && !props.disabled &&
        `
          background: ${color.white100};
          &:hover {
            background: ${color.gray300};
          }
        `
      }
      ${props.isLoading  && `background: ${color.white100};`}
    `
  }

`;


const ButtonLink = StyledButton.withComponent('a');

const applyStyle = ButtonWrapper => {
  return (
    ButtonWrapper &&
    StyledButton.withComponent(({ containsIcon, isLoading, isUnclickable, ...rest }) => (
      <ButtonWrapper {...rest} />
    ))
  );
};

export function Button({
  isDisabled,
  isLoading,
  loadingText,
  isLink,
  children,
  ButtonWrapper,
  ...props
}) {
  const buttonInner = (
    <Fragment>
      <Text>{children}</Text>
      {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
    </Fragment>
  );

  const StyledButtonWrapper = React.useMemo(() => applyStyle(ButtonWrapper), [ButtonWrapper]);

  let SelectedButton = StyledButton;
  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return (
    <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </SelectedButton>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.node,

  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  isDisabled: PropTypes.bool,
  isDarkmode: PropTypes.bool,
  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: PropTypes.bool,
  containsIcon: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  minWidth: PropTypes.number, 
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.TERTIARY,
  isDarkmode: false,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined,
  minWidth: undefined, 
};
