 /** @jsxImportSource @emotion/react */

import { css, ThemeProvider } from "@emotion/react";

const stylesdiv = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        }
    `;

const Slider = ({photos}) => {
    return (
        <>
        <div css={stylesdiv}>
            {photos.map((photo,idx)=>{
                return (
                    <img width="300px" key={idx} src={photo.url} alt={idx}></img>
                )
            })}
        </div>
        </>

    
    )
}
export default Slider;