module.exports = {
    params: {
        flipped: false,
        connection: undefined
    },
    body: p => `

    (module wiring (layer F.Cu) (tstamp 5BF2CC94)
    ${p.at /* parametric position */}

    (pad diode_top smd custom (at 0 -5 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.connection.str}
     (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 1.65 0) (end 3.81 0) (width 0.25))
        (gr_line (start -1.65 0) (end -3.81 0) (width 0.25))
      ))






    )
    `
}
