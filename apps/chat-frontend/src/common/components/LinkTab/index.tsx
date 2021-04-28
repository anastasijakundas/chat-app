import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';

interface LinkTabProps {
  label?: string;
  to?: string;
  value?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component={Link}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}
export default LinkTab;