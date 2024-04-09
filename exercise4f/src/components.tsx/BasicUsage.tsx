import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const styles = {
  // Replace with your desired styles
  padding: '16px',
  margin: '8px',
  backgroundColor: 'lightblue',
  // You can reference your theme colors if needed
  // color: theme => theme.palette.primary.main,
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
};

const StyledDiv = styled('div')(styles);
const StyledBox = styled(Box)(styles);

export default function BasicUsage() {
  return (
    <>
      <StyledDiv>This div includes styles</StyledDiv>
      <StyledBox>This box has the same styles</StyledBox>
    </>
  );
}

export { StyledDiv, StyledBox };