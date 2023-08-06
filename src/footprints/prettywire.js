const { sqrt, pow, sin, cos, atan, pi } = require('mathjs')
module.exports = {
    params: {
        column_net: undefined,
        row_net: undefined,
        colrow: undefined,
        diodes: true,
        switches: true,
        switchtype: "mx",
        hotswap: true,
        reversible: false
    },
    body: p => {
    function rel(loc_x, loc_y) {
        const centerdist = sqrt((pow(loc_x, 2) + pow(loc_y, 2)));
        var angle = atan((loc_y/loc_x)) / (pi/180);
        angle -= p.rot;
        var new_x = (cos(angle * (pi/180)) * centerdist);
        var new_y = (sin(angle * (pi/180)) * centerdist);
        if (loc_x < 0) {
            new_x = -new_x;
            new_y = -new_y;
        }
        new_x += p.x;
        new_y += p.y;
        return [new_x, new_y];
    }

    function wire(start_x, start_y, end_x, end_y, net, layer) {
        const start = rel(start_x, start_y);
        const end = rel(end_x, end_y);
        return `(segment (start ${start[0]} ${start[1]}) (end ${end[0]} ${end[1]}) (width 0.25) (layer ${layer}) ) ${net} \n`;
    }

    var output = "";

    const diode = "".concat(
        wire(1.65, 5, 3.81, 5, p.colrow.str, "F.Cu"),
        wire(-1.65, 5, -3.81, 5, p.colrow.str, "F.Cu"),
        wire(1.65, 5, 3.81, 5, p.colrow.str, "B.Cu"),
        wire(-1.65, 5, -3.81, 5, p.colrow.str, "B.Cu")
    )

    const choc_hotswap_top = "".concat(
        wire(2.8575, 4.0475, 3.81, 5, p.colrow.str, "F.Cu"),
        wire(2.8575, -5.5325, 2.8575, 4.0475, p.colrow.str, "F.Cu"),
        wire(-8.275, -3.75, -3.897, -8.128, p.column_net.str, "F.Cu"),
        wire(-3.897, -8.128, 5.872, -8.128, p.column_net.str, "F.Cu"),
        wire(5.872, -8.128, 7, -7, p.column_net.str, "F.Cu")
    )

    const choc_hotswap_bottom = "".concat(
        wire(3.81, 0.8, 3.81, 5, p.colrow.str, "B.Cu"),
        wire(-3.03, -6.04, 3.81, 0.8, p.colrow.str, "B.Cu"),
        wire(8.275, -3.75, 8.275, -5.725, p.column_net.str, "B.Cu"),
        wire(8.275, -5.725, 7, -7, p.column_net.str, "B.Cu")
    )

    const mx_hotswap_top = "".concat(
        wire(7.085, -2.54, 7.085, 1.725, p.colrow.str, "F.Cu"),
        wire(7.085, 1.725, 3.81, 5, p.colrow.str, "F.Cu"),
        wire(-5.842, -5.08, -3.922, -7, p.column_net.str, "F.Cu"),
        wire(-3.922, -7, 7, -7, p.column_net.str, "F.Cu")
    )

    const mx_hotswap_bottom = "".concat(
        wire(-7.085, -2.54, -7.085, 0.535, p.colrow.str, "B.Cu"),
        wire(-7.085, 0.535, -4.572, 3.048, p.colrow.str, "B.Cu"),
        wire(-4.572, 3.048, 1.858, 3.048, p.column_net.str, "B.Cu"),
        wire(1.858, 3.048, 3.81, 5, p.column_net.str, "B.Cu"),
        wire(5.842, -5.842, 7, -7, p.column_net.str, "B.Cu")
    )

    const via_loc = rel(7, -7);

    const column_via = `
      (module VIA-0.6mm (layer F.Cu) (tedit 591DBFB0)
      (at ${via_loc[0]} ${via_loc[1]} ${p.rot})
      ${'' /* footprint reference */}
      (fp_text reference REF** (at 0 1.4) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value VIA-0.6mm (at 0 -1.4) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

      ${'' /* via */}
      (pad 1 thru_hole circle (at 0 0) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.column_net.str})
      )
    `

    if (p.switches) {
        if (p.switchtype == "mx") {
            if (p.hotswap) {
                output += column_via + mx_hotswap_bottom;
                if (p.reversible) {
                    output += mx_hotswap_top;
                }
            }
        }
        else if (p.switchtype == "choc") {
            if (p.hotswap) {
                output += column_via + choc_hotswap_bottom;
                if (p.reversible) {
                    output += choc_hotswap_top;
                }
            }
        }
    }

    if (p.diodes) {
        output += diode;
    }

    return output;

    }
}
