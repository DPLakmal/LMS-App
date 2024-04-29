import Image from "next/image"


export const Logo = () => {
    return (

        <Image
            height={30}
            width={30}
            src={"https://upload.wikimedia.org/wikipedia/commons/4/40/SLIATE_LOGO2.png"}
            alt={"logo"}
        />
    )
}