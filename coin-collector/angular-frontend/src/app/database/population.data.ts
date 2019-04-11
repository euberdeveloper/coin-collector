import { Parametro, Ambito, Unit } from './indexed-db.interface';

export const ambiti: Ambito[] = [
    { id: 'REP_VEN', display: 'Repubblica di Venezia' },
    { id: 'VE1_RSA', display: 'Vittorio Emanuele I' },
    { id: 'CFE_RSA', display: 'Carlo Felice' },
    { id: 'CAL_RSA', display: 'Carlo Alberto' },
    { id: 'VE2_RSA', display: 'Vittorio Emanuele II - Re di Sardegna' },
    { id: 'VE2_REL', display: 'Vittorio Emanuele II - Re eletto' },
    { id: 'VE2_RIT', display: 'Vittorio Emanuele I - Re d\'Italia' },
    { id: 'UM1_RIT', display: 'Umberto I' },
    { id: 'VE3_RIT', display: 'Vittorio Emanuele III' },
    { id: 'UM1_COL', display: 'Umberto I - Colonie' },
    { id: 'VE3_COL', display: 'Vittorio Emanuele III - Colonie' },
    { id: 'AFS_COL', display: 'Amministrazione Fiduciaria Italiana Somalia' },
    { id: 'ITA_LIR', display: 'Repubblica Italiana' },
    { id: 'SMN_LIR', display: 'San Marino' },
    { id: 'VAT_LIR', display: 'Città del Vaticano' }
];

export const conservazioni: Parametro[] = [
    { value: 'B' },
    { value: 'MB' },
    { value: 'qBB' },
    { value: 'BB' },
    { value: 'BB+' },
    { value: 'qSPL' },
    { value: 'SPL' },
    { value: 'SPL+' },
    { value: 'qFDC' },
    { value: 'FDC' },
    { value: 'FDC ecc' }
];

export const contorni: Parametro[] = [
    { value: 'LISCIO' },
    { value: 'RIGATO' },
    { value: 'FERT FERT FERT' },
    { value: '1 ROSETTA' },
    { value: '2 ROSETTE' },
    { value: 'RILIEVO' },
    { value: 'ZIGRINATO' }
];

export const denominazioni: Parametro[] = [
    { value: 'VALORE' },
    { value: 'DONNA SU PRORA' },
    { value: 'SPIGA' },
    { value: 'IMPERO' },
    { value: 'CINQUANTENARIO' },
    { value: 'APE' },
    { value: 'ESP MILANO' },
    { value: 'DONNA LIBRATA' },
    { value: 'ESAGONO' },
    { value: 'AQUILA' },
    { value: 'LEONI' },
    { value: 'QUADRIGA LENTA' },
    { value: 'QUADRIGA VELOCE' },
    { value: 'BUONO' },
    { value: 'AQUILOTTO' },
    { value: 'FAMIGLIA' },
    { value: 'ARATRICE' },
    { value: 'BIGA' },
    { value: 'FASCIO' },
    { value: 'FASCETTO' },
    { value: 'CAPPELLONE' },
    { value: 'LITTORE' },
    { value: 'VETTA D\'ITALIA' }
];
  
export const materiali: Parametro[] = [
    { value: 'RAME' },
    { value: 'RAME DORATO' },
    { value: 'BRONZO' },
    { value: 'NICHELIO' },
    { value: 'ACMONITAL AM' },
    { value: 'ACMONITAL M' },
    { value: 'ORO' },
    { value: 'ARGENTO' },
    { value: 'MISTURA' }
];

export const rarita: Parametro[] = [
    { value: 'C' },
    { value: 'CC' },
    { value: 'NC' },
    { value: 'R1' },
    { value: 'R2' },
    { value: 'R3' },
    { value: 'R4' },
    { value: 'R5' }
];

export const segniZecche: Parametro[] = [
    { value: 'M' },
    { value: 'W' },
    { value: 'N' },
    { value: 'B' },
    { value: 'H' },
    { value: 'CM' },
    { value: 'R' },
    { value: 'B.' },
    { value: 'R.' },
    { value: 'F MONTE' },
    { value: 'TB' },
    { value: 'MBN' },
    { value: 'NBN' },
    { value: 'TBN' },
    { value: 'NN' },
    { value: 'FIRENZE' },
    { value: 'BOLOGNA' },
    { value: 'F SU TB' },
    { value: 'p AQUILA' },
    { value: 'V. AQUILA' },
    { value: 'L. AQUILA' },
    { value: 'F. AQUILA' }
];
  
export const sovranita: Parametro[] = [
    { value: 'RE DI SARDEGNA' },
    { value: 'RE ELETTO D\'ITALIA' },
    { value: 'RE D\'ITALIA' },
    { value: 'RE DELL\'ALBANIA' },
    { value: 'RE DELL\'ERITREA' },
    { value: 'RE DELLA SOMALIA' }
];

export const sovrani: Parametro[] = [
    { value: 'VITTORIO EMANUELE I'},
    { value: 'CARLO FELICE' },
    { value: 'CARLO ALBERTO' },
    { value: 'VITTORIO EMANUELE II' },
    { value: 'UMBERTO PRIMO' },
    { value: 'VITTORIO EMANUELE III' }
];

export const stati: Parametro[] = [
    { value: 'ITALIA'},
    { value: 'FRANCIA' },
    { value: 'INGHILTERRA' },
    { value: 'VENEZIA' }
];

export const nominali: Parametro[] = [
    { value: '1 CENT'},
    { value: '2 CENT' },
    { value: '5 CENT' },
    { value: '10 CENT' },
    { value: '20 CENT' },
    { value: '25 CENT' },
    { value: '50 CENT' },
    { value: '1 LIRA' },
    { value: '2 LIRE' },
    { value: '5 LIRE' },
    { value: '10 LIRE' },
    { value: '20 LIRE' },
    { value: '50 LIRE' },
    { value: '100 LIRE' },
    { value: 'BUONO 1 LIRA' },
    { value: 'BUONO 2 LIRE' },
    { value: '0,05 LEK' },
    { value: '0,10 LEK' },
    { value: '0,20 LEK' },
    { value: '0.50 LEK' },
    { value: '1 LEK' },
    { value: '2 LEK' },
    { value: '5 LEK' },
    { value: '6 LEK' },
    { value: 'TAL ITA' },
    { value: 'TAL PIU' },
    { value: '1 BESA' },
    { value: '2 BESE' },
    { value: '4 BESE' },
    { value: '1/4 RUPIA' },
    { value: '1/2 RUPIA' },
    { value: '1 RUPIA' }
];

export const zecche: Parametro[] = [
    { value: 'ROMA' },
    { value: 'MILANO' },
    { value: 'TORINO' },
    { value: 'NAPOLI' },
    { value: 'GENOVA' },
    { value: 'FIRENZE' },
    { value: 'PARIGI' },
    { value: 'STRASBURGO' },
    { value: 'BIRMINGAM' },
    { value: 'VENEZIA' }
];

export const pesi: Unit[] = [
    { unit: 'g', prefix: true },
    { unit: 'oz', prefix: false }
];

export const lunghezze: Unit[] = [
    { unit: 'm', prefix: true },
    { unit: 'in', prefix: false },
    { unit: 'ft', prefix: false }
];