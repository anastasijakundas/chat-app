import React from 'react';
import Tab from '@material-ui/core/Tab';

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}
export default LinkTab;