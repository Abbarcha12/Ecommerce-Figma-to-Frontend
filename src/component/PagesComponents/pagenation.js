import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons() {
 return (
  <Stack spacing={2}>

   <Pagination count={3} hidePrevButton hideNextButton color="secondary" />
  </Stack>
 );
}