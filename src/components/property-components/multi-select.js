import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { theme } from '../themes';
import { ThemeProvider } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Buying',
  'Renting'
];

export default function MultipleSelect({onFilterParams}) {
  const [buyRent, setBuyRent] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    
    onFilterParams(filterParams =>({
        ...filterParams,
        page:1,
        operation_rent: value.length ===2?"rent":(value.length ===1 && value[0] ==="Renting")?"rent":null, 
        operation_sale: value.length ===2 ?"sale":(value.length ===1 && value[0] ==="Buying")?"sale":null 
    }))
    setBuyRent(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 1, minWidth: 185 }} size="small">
            <InputLabel id="demo-multiple-checkbox-label" color="pink">Buying & Renting</InputLabel>
            <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple 
            color="pink"
            value={buyRent}
            onChange={handleChange}
            input={<OutlinedInput label="Buying & Renting" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem key={name} value={name}>
                <Checkbox color="pink" checked={buyRent.indexOf(name) > -1} />
                <ListItemText primary={name} color="pink" />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    </ThemeProvider>
  );
}