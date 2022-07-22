/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { backgroundFourthSection, divMembers, titleFourthSection } from "../../styles/home";
import { montW400S36, montW400S48 } from "../../styles/typography";
import MemberTeam from "./member-team";
import imagen from "../../images/profile.jpg"
import { contRow } from "../../styles/utils";

const FourthSection = () => {
    const styledDiv = css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        margin: 1rem;
        gap: 1rem;
    `;
    return (
        <div css={backgroundFourthSection}>
            <div css={titleFourthSection}>Meet the team</div>
            <div css={styledDiv}>
                <MemberTeam image={imagen} name="Denis Nahuamel" />
                <MemberTeam image={imagen} name="Denis Nahuamel" />
                <MemberTeam image={imagen} name="Denis Nahuamel" />
            </div>
        </div>
    )
}
export default FourthSection;