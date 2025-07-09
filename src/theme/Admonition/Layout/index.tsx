import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';

import type {Props as BaseProps} from '@theme/Admonition/Layout';

import styles from './styles.module.css';

interface Props extends BaseProps {
    id?: string;
    href?: string;
}

function AdmonitionContainer({
  type,
  className,
  children,
}: Pick<Props, 'type' | 'className'> & {children: ReactNode}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        styles.admonition,
        className,
      )}>
      {children}
    </div>
  );
}

function AdmonitionHeading({icon, title, id, href}: Pick<Props, 'icon' | 'title' | 'id' | 'href'>) {
  return (
    <div className={styles.admonitionHeading}>
      <span className={styles.admonitionIcon}>{icon}</span>
      <a id={id} href={href}>
        {title}
      </a>
    </div>
  );
}

function AdmonitionContent({children}: Pick<Props, 'children'>) {
  return children ? (
    <div className={styles.admonitionContent}>{children}</div>
  ) : null;
}

export default function AdmonitionLayout(props: Props): ReactNode {
  const {type, icon, title, children, className, id, href} = props;
  return (
    <AdmonitionContainer type={type} className={className}>
      {title || icon ? <AdmonitionHeading title={title} icon={icon} id={id} href={href} /> : null}
      <AdmonitionContent>{children}</AdmonitionContent>
    </AdmonitionContainer>
  );
}
