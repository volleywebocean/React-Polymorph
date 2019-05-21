// @flow
import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';

// components
import { Tooltip } from '../source/components/Tooltip';

// themes
import { SimpleTheme } from '../source/themes/simple';
import CustomBubbleTheme from './theme-customizations/Bubble.custom.scss';

// custom styles & theme overrides
import styles from './Tooltip.stories.scss';
import themeOverrides from './theme-overrides/customTooltipBubble.scss';
import { IDENTIFIERS } from '../source/components';

// helpers
import { decorateWithSimpleTheme } from './helpers/theming';

storiesOf('Tooltip', module)

  .addDecorator(decorateWithSimpleTheme)

  // ====== Stories ======

  .add('plain', () => (
    <div className={styles.container}>
      <Tooltip tip="plain tooltip, nothing special about me">
        hover over me
      </Tooltip>
    </div>
  ))

  .add('html', () => (
    <div className={styles.container}>
      <Tooltip
        tip={
          <div>
            I can use <span className={styles.htmlTip}>HTML</span>
          </div>
        }
      >
        hover over me
      </Tooltip>
    </div>
  ))

  .add('isAligningRight', () => (
    <div className={styles.container}>
      <Tooltip isAligningRight tip="I am aligning right">
        hover over me
      </Tooltip>
    </div>
  ))

  .add('isBounded', () => (
    <div className={styles.container}>
      <Tooltip
        isBounded
        tip="Help, I am stuck in this small box"
      >
        hover over me
      </Tooltip>
    </div>
  ))

  .add('with custom class', () => (
    <div className={styles.container}>
      <Tooltip
        className={styles.customTooltip}
        tip="How did I get all the way over here?"
      >
        hover over me
      </Tooltip>
    </div>
  ))

  .add('isOpeningUpward={false}', () => (
    <div className={styles.container}>
      <Tooltip
        isOpeningUpward={false}
        tip="I come from a land down under"
      >
        hover over me
      </Tooltip>
    </div>
  ))

  .add('theme overrides', () => (
    <div className={styles.container}>
      <Tooltip
        themeOverrides={{
          ...SimpleTheme,
          [IDENTIFIERS.BUBBLE]: themeOverrides
        }}
        isOpeningUpward
        isTransparent={false}
        tip="plain tooltip, with theme overrides"
      >
        hover over me
      </Tooltip>
    </div>
  ))

  .add('custom theme', () => (
    <div className={styles.container}>
      <Tooltip
        theme={{ ...SimpleTheme, [IDENTIFIERS.BUBBLE]: CustomBubbleTheme }}
        isTransparent={false}
        tip="plain tooltip, with a custom theme"
      >
        hover over me
      </Tooltip>
    </div>
  ));
