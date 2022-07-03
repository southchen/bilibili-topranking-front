import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RangeSelector: React.FC<{
  rangeId?: number;
  setRangeId: (val: number) => void;
}> = ({ rangeId, setRangeId }) => {
  return (
    <FormControl
      onChange={(e) => {
        const id = Number((e.target as any).value);
        if (!Number.isNaN(id)) {
          setRangeId(id);
        }
      }}
    >
      <FormLabel>Range</FormLabel>
      <RadioGroup row name="radio-buttons-group" value={rangeId}>
        <FormControlLabel value="7" control={<Radio />} label="7-Day" />
        <FormControlLabel value="3" control={<Radio />} label="3-Day" />
      </RadioGroup>
    </FormControl>
  );
};
