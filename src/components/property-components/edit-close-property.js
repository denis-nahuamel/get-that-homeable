/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { savedPropertyCard } from '../../styles/property-data';
import { contRow } from '../../styles/utils';
import { editProperty } from "../../services/property-service";
const EditCloseProperty = ({id}) => {
    const handleEditProperty = () => {

    }
    const handleCloseProperty = () => {
        editProperty(id,{active: false}).then(response => console.log(response))
    }
    return (
        <div css={savedPropertyCard}>
                <div css={css`${contRow} ; gap:10px;`} onClick={handleEditProperty}>
                    <DriveFileRenameOutlineOutlinedIcon />
                    <div>EDIT</div>
                </div>
                <div css={css`${contRow}; gap:10px;`} onClick={handleCloseProperty}> 
                    <CancelOutlinedIcon />
                   <div> CLOSE</div>
                </div>
        </div>
    )
}
export default EditCloseProperty;