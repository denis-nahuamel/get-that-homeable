 /** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

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
    let defaultPhoto = "https://res.cloudinary.com/dashujoof/image/upload/v1657861293/rwuv3fhpesvi7a5xgqkw.png";

    return (
        <>
        <div css={stylesdiv}>
            {photos.length === 0 ? (
            <img width="300px" key={1} src={defaultPhoto} alt={"default img"}></img>) :
            (photos.map((photo,idx)=>{
                return (
                    <img width="300px" key={idx} src={photo.url} alt={idx}></img>
                )
            }))
        }
        </div>
        </>
    )
}
export default Slider;