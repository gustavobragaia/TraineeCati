interface Img{
    src: string;
    alt: string;
}

export function Img(props: Img){
    return (
        <img src={props.src} alt={props.alt}></img>
    )
    }