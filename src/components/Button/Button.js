/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PropTypes from 'prop-types';

import RegularButton from './components/RegularButton';
import { sizes } from '../../styles/constants';

const { KILO, MEGA, GIGA } = sizes;

/**
 * A button component with support for the anchor and button
 * element as well as a button-looking button and a text link.
 */
const Button = RegularButton;

Button.KILO = KILO;
Button.MEGA = MEGA;
Button.GIGA = GIGA;

Button.propTypes = {
  /**
   * Should the Button be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * URL the Button should lead to. Causes the Button to render an <a> tag.
   */
  href: PropTypes.string,
  /**
   * Renders a primary button using the brand color.
   */
  primary: PropTypes.bool,
  /**
   * Size of the button. Use the Button's KILO, MEGA, or GIGA properties.
   */
  size: PropTypes.oneOf([Button.KILO, Button.MEGA, Button.GIGA]),
  /**
   * Renders a secondary button.
   */
  secondary: PropTypes.bool,
  /**
   * Trigger stretch (full width) styles on the component.
   */
  stretch: PropTypes.bool,
  /**
   * Link target. Should only be passed, if href is passed, too.
   */
  target: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  href: null,
  primary: false,
  secondary: false,
  size: Button.MEGA,
  stretch: false,
  target: null
};

/**
 * @component
 */
export default Button;
