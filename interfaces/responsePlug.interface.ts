export interface ResponsePlug {
    plugged: boolean,
    statusCode: number,
    fstrzFlags?: string[],
    cloudfrontStatus?: string,
    cloudfrontPOP?: string
}