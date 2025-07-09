function card(props){
    const {imgSrc, title, titleHref, btnHref, description } = props;
    function buttonClick(btnHref){

    }

    return(
        <div
            class=""
        >
            <img
                src={imgSrc}
                class=""
                alt="image Not Fount"
            />
            <a href={titleHref}>
                <h3
                    className="text-center text-white font-bold"
                >
                    {title}
                </h3>
            </a>
            <p>
                {description}
            </p>
            <button>
                buttonClick();
            </button>
        </div>
    );
}
export default card;