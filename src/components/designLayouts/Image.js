const Image = ({imgSrc, className}) => {
    return (
        <div>
            <img className={className} src={imgSrc} alt={imgSrc} />
        </div>
    )
}

export default Image;