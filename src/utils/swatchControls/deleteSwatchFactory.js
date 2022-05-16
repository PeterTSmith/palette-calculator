import clonePalette from "../clonePalette";

export const deleteSwatchFactory = (palette, setPalette, activeSwatchId, setActiveSwatchId) => {
    return () => {
        if(palette.length === 1) {
            return;
        }

        const newPalette = clonePalette(palette.filter((swatch) => activeSwatchId !== swatch.id));

        for(let i in palette) {
            if(palette[i].id !== activeSwatchId) {
                continue;
            }

            if(parseInt(i) === palette.length - 1) {
                setActiveSwatchId(palette[parseInt(i)-1].id);
            } else {
                setActiveSwatchId(palette[parseInt(i)+1].id);
            }
            break;
        }

        setPalette(newPalette);
    };
}

export default deleteSwatchFactory;