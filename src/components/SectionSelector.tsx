import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const SectionSelector: React.FC<{
  sectionId?: number;
  setSectionId: (val: number) => void;
}> = ({ sectionId, setSectionId }) => {
  return (
    <FormControl
      onChange={(e) => {
        const id = Number((e.target as any).value);
        if (!Number.isNaN(id)) {
          setSectionId(id);
        }
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label">Section</FormLabel>
      <RadioGroup row value={sectionId} name="radio-buttons-group">
        <FormControlLabel value="1" control={<Radio />} label="Animation" />
        <FormControlLabel value="177" control={<Radio />} label="Documentary" />
        <FormControlLabel value="188" control={<Radio />} label="Tech" />
        <FormControlLabel value="211" control={<Radio />} label="Food" />
        <FormControlLabel value="160" control={<Radio />} label="Life" />
      </RadioGroup>
    </FormControl>
  );
};
