import styled from 'styled-components';
import { system } from 'styled-system';
import {
  border,
  color,
  flexbox,
  space,
  layout,
  shadow,
  typography,
} from 'styled-system';

export const Box = styled('div')(
  border,
  color,
  flexbox,
  shadow,
  layout,
  space,
  typography,
  system({
    borderCollapse: true,
  })
);