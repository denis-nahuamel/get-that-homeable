/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { imageFourthSection } from '../../styles/home';
const MemberTeam = ({image, name, linkGithub, linkLinkedin})=>{
    return (
        <div>
            <img css={imageFourthSection} src={image} alt={name} />
            <div>{name}</div>
            <div>
                <GitHubIcon />
                <LinkedInIcon />
            </div>
        </div>
    )
}
export default MemberTeam;