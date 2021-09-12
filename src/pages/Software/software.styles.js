import styled from '@emotion/styled/macro';
import theme from '@bit/mik-technology.core.theme';
import { Box } from '@chakra-ui/react';

export const BgBox = styled(Box)`
  width: 100%;
`;

export const Thead = styled.thead`
  background-color: ${theme.colors.gray['100']};
  border: 1px solid ${theme.colors.gray['300']};
`;