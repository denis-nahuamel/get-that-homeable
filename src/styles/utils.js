
export const contStart = `
    display: flex;
    justify-content: flex-start;
`

export const contStartW100 = `
    ${contStart};
    width: 100%;
`
export const basicContainer = `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
export const container = `
    ${basicContainer};
    justify-content: center;
`
export const contCenterCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`
export const contColumn = `
    display: flex;
    flex-direction: column;
`
export const contColumnStart = `
    ${contColumn};
    align-items: flex-start;
`
export const contColumnAlign = `
    ${contColumn};
    align-items:center;
`
export const contRow = `
    display: flex;
    flex-direction: row;
`
export const contRowBetween = `
    ${contRow};
    justify-content: space-between;
`
export const contRowBetweenW100 = `
    ${contRowBetween};
    width: 100%;
`
export const contRowAround = `
    ${contRow};
    background: #F6F6F9;
    justify-content: space-around;
`
export const contRowAroundFullWidth = `
    ${contRowAround};
    width: 100%
`
export const contColumGap = `
    ${contColumn};
    gap: 20px;
`
export const contColumnCenter = `
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const contRowCenter = `
    ${contRow}
    align-items: center;
`
export const contRowCenterGap = `
    ${contRowCenter};
    gap:20px;
`
export const contRowGap = `
    ${contRow};
    gap:20px;
`

export const contGap = `
    ${basicContainer};
    gap:8px;
    justify-content: space-around;
`

export const line = `
    width: 100%;
    border-bottom: 1px solid black;
    opacity: 0.5;
`