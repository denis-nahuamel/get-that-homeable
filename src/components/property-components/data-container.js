/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { contRow, contRowCenter, line } from "../../styles/utils";
import { theme } from "../themes";
const DataContainer = (data) =>{
    const {bedrooms, bathrooms, area, pets} = data;
    return (
        <>
        <div css={css`${line}`}></div>
        <div css={css`${contRow}; gap:6px`}>
            
             <ThemeProvider theme={theme}>
                <div css={css`${contRowCenter}`}>
                    <BedOutlinedIcon color="gray" fontSize="small" />
                    <p>{bedrooms} bedrooms</p>
                </div>
                <div css={css`${contRowCenter}`}>
                    <BathtubOutlinedIcon color="gray" />
                    <p>{bathrooms} bathrooms</p>
                </div>
                <div css={css`${contRowCenter}`}>
                    <img  src={process.env.PUBLIC_URL+ "/bx-area.png"}/>
                    <p>{area} m2</p>
                </div>
                <div css={css`${contRowCenter}`}>
                    <PetsOutlinedIcon color="gray"/>
                    {bedrooms==="si"?<p>pets allowed</p>: <p>not allowed</p>}
                </div>
             </ThemeProvider> 
        </div>
        <div css={css`${line}`}></div>
        </>
    )
}
export default DataContainer;