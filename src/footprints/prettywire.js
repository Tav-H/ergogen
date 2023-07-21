module.exports = {
    params: {
        flipped: false,
        column_net: undefined,
        row_net: undefined,
        colrow: undefined
    },
    body: p => `





    (segment (start ${p.x + 1.65} ${p.y + 5}) (end ${p.x + 3.81} ${p.y + 5}) (width 0.25) (layer "F.Cu") ) ${p.row_net.str}









    `
}
