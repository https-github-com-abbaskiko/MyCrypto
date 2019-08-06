import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styled from 'styled-components';
import { Button, Heading } from '@mycrypto/ui';

import { Panel } from 'v2/components';
import './DashboardPanel.scss';

const Content = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

interface Props {
  heading: any;
  children: any;
  headingRight?: string | JSX.Element;
  actionLink?: string;
  className?: string;
  padChildren?: boolean;
}

export const DashboardPanel = ({
  heading,
  headingRight,
  actionLink,
  className = '',
  children,
  padChildren,
  ...rest
}: Props) => {
  return (
    <Panel className={classnames('DashboardPanel', className)} {...rest}>
      <div className="DashboardPanel-headingWrapper">
        <Heading className="DashboardPanel-headingWrapper-heading">{heading}</Heading>
        {headingRight &&
          (actionLink ? (
            <Link to={actionLink}>
              <Button className="DashboardPanel-headingWrapper-button">{headingRight}</Button>
            </Link>
          ) : (
            headingRight
          ))}
      </div>
      {padChildren ? <Content>{children}</Content> : children}
    </Panel>
  );
};