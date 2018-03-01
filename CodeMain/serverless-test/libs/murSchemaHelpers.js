export let calcInitShareVal = (initShrPc, initNbShr) => {
  return((initShrPc * initNbShr) / initNbShr).toString()
}

export let calcInitTotVal = (initShrPc, initNbShr) => {
  return(initShrPc * initNbShr).toString()
}
