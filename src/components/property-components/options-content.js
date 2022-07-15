/**@jsxImportSource  @emotion/react*/
import {css} from "@emotion/react";
import { ThemeProvider } from "@emotion/react"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { toggle } from "../../styles/form"
import { contColumn, contRow } from "../../styles/utils";
import { theme } from "../themes"

export const PriceContent = () => {
    return (
        <div>
            <div>SALARY RANGE</div>
            <div>
                <input placeholder="min"></input> - 
                <input placeholder="max"></input>
            </div>
            <div><button>DONE</button></div>
        </div>
    )
}
export const PropertyContent = () => {
    return (
        <div>
            <div>PROPERTY TYPE</div>
            <div>
                <input type="checkbox"/> Houses
                <input type="checkbox"/> Apartments 
                
            </div>
            <div><button>DONE</button></div>
        </div>
    )
}
export const BedsBathsContent = () => {
    return (
        <div>
            <div css={css`${contColumn}`}>
               <label>BEDS</label> 
                <ThemeProvider theme={theme}>
                        <ToggleButtonGroup
                            color="pink"
                            exclusive
                            aria-label="text alignment"
                            >
                            <ToggleButton
                            css={css`${toggle}`} value="rent" aria-label="left aligned">
                                Any
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="1" aria-label="centered">
                                1+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="2" aria-label="centered">
                                2+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="3" aria-label="centered">
                                3+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="4" aria-label="centered">
                                4+
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ThemeProvider>
            </div>
            <div css={css`${contColumn}`}>
               <label>BATHS</label> 
                <ThemeProvider theme={theme}>
                        <ToggleButtonGroup
                            color="pink"
                            exclusive
                            aria-label="text alignment"
                            >
                            <ToggleButton
                            css={css`${toggle}`} value="rent" aria-label="left aligned">
                                Any
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="1" aria-label="centered">
                                1+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="2" aria-label="centered">
                                2+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="3" aria-label="centered">
                                3+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="4" aria-label="centered">
                                4+
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ThemeProvider>
            </div>
            <div>
        
            </div>
            <div><button>DONE</button></div>
        </div>
    )
}
const ReturnContent = ({type})=>{
    if(type==="price") return <PriceContent />
    if(type==="property_type") return <PropertyContent />
    if(type==="beds_baths") return <BedsBathsContent />
}
export default ReturnContent;