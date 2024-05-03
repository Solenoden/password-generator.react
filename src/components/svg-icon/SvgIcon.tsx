type SvgIconProps = { iconPath: string, viewboxWidth: string, viewboxHeight: string, svgInnerId: string, isClickable?: boolean }

function SvgIcon(props: SvgIconProps) {
    return (
        <svg className={props.isClickable ? 'clickable' : ''} preserveAspectRatio="xMidYMid meet"
             viewBox={`0 0 ${props.viewboxWidth} ${props.viewboxHeight}`} height="100%" width="100%">
            <use xlinkHref={`${props.iconPath}#${props.svgInnerId}`}></use>
        </svg>
    );
}

export default SvgIcon;
