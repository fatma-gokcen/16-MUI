import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function MUISelect() {
    const [age, setAge] = useState("");
    const handleChange = (e) => {
        setAge(e.target.value);
    };
    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> age</InputLabel>
                    <
                        labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={age}
                    label="Age"
                    onChange={handleChange}
>





                </FormControl>
            </Select>
        </Box>



    </div >
  )
}
