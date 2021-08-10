
/**
 * This methods transform string of result to an array of values meaning of flags
 * @param flag string
 * @returns string's array 
 */
export const transformFlag = (flag: string | null): string[] => {
    if (flag === undefined || flag === null || flag === '') {
        return [];
    } else {
        const flags = flag.split(',');
        return flags.map(flag => values[flag]);
    }
}

const values: {[key: string]: string} = {
    p       : "requête/réponse proxifiée",
    'w,p'   : "optimisation en cours",
    'f,p'   : "front/forward, proxy",
    'Z,p'   : "page non optimisable",
    'ecc'   : "exclusion via la config client",
    'eec'   : "exclusion via la config du moteur",
    'stc'   : "status code de l'origine différent de 200",
    'ab'    : "exclusion par un test A/B",
    'zc'    : "contenu vide",
    h       : "contenu qui n'est pas du HTML",
    o       : "optimisée",
    '!o'    : "non optimisée",
    c       : "cachée",
    '!c'    : "non cachée",
    'o,c'   : "optimisée, cachée",
    'w,c'   : "réponse en cours d'optimisation mais servie cachée",
    'dc,o'  : "optimisée, cache dynamique",
    sc      : "SmartCache",
    clc     : "Cookie Less Cache",
    pl      : "des liens de preload ont été insérés",
    ed      : "moteur désactivé",
    v       : "objet virtuel",
    vf      : "objet virtuel reconstitué",
    t       : "timeout",
    tb      : "too big",
    e       : "error",
    b       : "blocked",
    uc      : "User Canceled",
    cbo     : "Circuit Breaker Open",
    ccb     : "Cache CallBack",
    of      : "Overflow",
}