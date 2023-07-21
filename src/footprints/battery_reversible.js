module.exports = {
    params: {
        pos: {type: 'net', value: 'pos'},
        neg: {type: 'net', value: 'neg'}
    },
    body: p => `

    (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
    ${p.at /* parametric position */}


    ${''/* the little square masks in the centre */}
    (fp_circle (center 0 0.762) (end 0.125 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 0 0.762) (end 0.125 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 0 -0.762) (end 0.125 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 0 -0.762) (end 0.125 -0.762) (layer F.Mask) (width 0.25))

    ${''/* the square masks on the outside */}
    (fp_poly (pts (xy 0.206 3.08) (xy 1.294 3.08) (xy 1.294 4.096) (xy 0.206 4.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 0.206 3.08) (xy 1.294 3.08) (xy 1.294 4.096) (xy 0.206 4.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -0.206 3.08) (xy -1.294 3.08) (xy -1.294 4.096) (xy -0.206 4.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -0.206 3.08) (xy -1.294 3.08) (xy -1.294 4.096) (xy -0.206 4.096)) (layer F.Mask) (width 0.1))

    ${''/* the input pins */}
    (pad "" thru_hole circle (at -0.75 5.2) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask))
	(pad "" thru_hole circle (at 0.75 5.2) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask))


    ${''/* The arrow shaped pads */}

    (pad "" smd custom (at -0.75 4.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -0.75 3.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad neg smd custom (at -0.75 2.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.neg.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))

    (pad "" smd custom (at -0.75 4.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -0.75 3.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad pos smd custom (at -0.75 2.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.pos.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))



    (pad "" smd custom (at 0.75 4.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 0.75 3.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad pos smd custom (at 0.75 2.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.pos.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))

    (pad "" smd custom (at 0.75 4.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 0.75 3.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad neg smd custom (at 0.75 2.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.neg.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))












    ${''/* the output pins  */}
    (pad neg thru_hole circle (at 0 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.neg.str})
    (pad pos thru_hole circle (at 0 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.pos.str})


    ${''/* the wiring */}
    (pad neg smd custom (at 0 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.neg.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.75 -0.75) (width 0.25))
        (gr_line (start -0.75 -0.75) (end -0.75 -2) (width 0.25))
      ))
    (pad pos smd custom (at 0 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.pos.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.75 0.75) (width 0.25))
        (gr_line (start -0.75 0.75) (end -0.75 3.524) (width 0.25))
      ))
    (pad pos smd custom (at 0 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.pos.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.75 0.75) (width 0.25))
        (gr_line (start 0.75 0.75) (end 0.75 3.524) (width 0.25))
      ))
    (pad neg smd custom (at 0 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.neg.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.75 -0.75) (width 0.25))
        (gr_line (start 0.75 -0.75) (end 0.75 -2) (width 0.25))
      ))

    )

    `
}
