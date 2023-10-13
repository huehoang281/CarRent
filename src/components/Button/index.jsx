const ButtonCustom = ({content, buttonType, className}) => {
    return (
        <button type="button" class={`btn ${buttonType} ${className} button-custom`}>{content}</button>

    )
}

export default ButtonCustom;