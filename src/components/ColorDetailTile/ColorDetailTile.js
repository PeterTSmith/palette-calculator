import './ColorDetailTile.css';

export const ColorDetailTile = (props) => {
    const { hue, sat, val } = props;
    return (
        <div className='colorDetailTile'>
            <div className='colorPatch' style={{backgroundColor: `hsl(${hue}, ${sat}%, ${val}%)`}} />
            <div className='hsvDetails'>
                <HSVDetailRow type="hue" number={hue} />
                <HSVDetailRow type="sat" number={sat} />
                <HSVDetailRow type="val" number={val} />
            </div>
        </div>
    );
}

const HSVDetailRow = (props) => {
    const { type, number} = props;
    return (
        <div className='hsvDetailRow'>
            <div>
                {type}:
            </div>
            <div>
                {number}
            </div>
        </div>
    );
}