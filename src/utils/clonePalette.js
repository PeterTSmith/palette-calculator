import cloneSwatch from "./cloneSwatch";

export const clonePalette = (palette) => {
    return palette.map((swatch) => {
        return cloneSwatch(swatch);
    });
}

export default clonePalette;