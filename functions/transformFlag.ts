
/**
 * This methods transform string of result to an array of values meaning of flags
 * @param flag string
 * @returns string's array 
 */
export const transformFlag = (flag: string): string[] => {
    if (flag === undefined || flag === null) {
        return [];
    } else {
        const flags = flag.split(',');
        return flags.map(flag => values[flag]);
    }
}

const values: any = {
    h: "contenu qui n'est pas du HTML",
    o: "optimisée",
    '!o': "non optimisée",
    c: "cachée",
    '!c': "non cachée",
    'o,c': "optimisée, cachée",
    'w,c': "réponse en cours d'optimisation mais servie cachée",
    'dc,o': "optimisée, cache dynamique",
    sc: "SmartCache",
    clc: "Cookie Less Cache",
    pl: "des liens de preload ont été insérés",
    ed: "moteur désactivé",
    v: "objet virtuel",
    vf: "objet virtuel reconstitué",
    t: "timeout",
    tb: "too big",
    e: "error",
    b: "blocked",
    uc: "User Canceled",
    cbo: "Circuit Breaker Open",
    ccb: "Cache CallBack",
    of: "Overflow",
}