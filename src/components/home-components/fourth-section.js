/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { backgroundFourthSection, divMembers, titleFourthSection } from "../../styles/home";
import { montW400S36, montW400S48 } from "../../styles/typography";
import MemberTeam from "./member-team";
import imagen from "../../images/profile.jpg"
import { contRow } from "../../styles/utils";

const FourthSection = () => {
    return (
        <div css={backgroundFourthSection}>
            <div css={titleFourthSection}>Meet the team</div>
            <div css={divMembers}>
                <MemberTeam image={imagen} name="Denis Nahuamel" />
                <MemberTeam image={imagen} name="Denis Nahuamel" />
                <MemberTeam image={imagen} name="Denis Nahuamel" />
            </div>
        </div>
    )
}
export default FourthSection;