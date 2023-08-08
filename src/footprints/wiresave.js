module.exports = {
    params: {
        wires: []
    },
    body: p => {

        var output = "";

        for (let i = 0; i < p.wires.length; i++) {
            output += `(segment (start ${p.wires[i][0]} ${p.wires[i][1]}) (end ${p.wires[i][2]} ${p.wires[i][3]}) (width 0.25) (layer ${p.wires[i][4]}) ) \n`;
        }

        return output;
    }
}
