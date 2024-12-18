import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./sobreMim.module.css"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim(){
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim"    
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Wagner!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto do Wagner"
                className={styles.fotoSobreMim}

            />
            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque lacinia lacus id vulputate. Proin accumsan finibus tincidunt. Morbi semper enim non feugiat accumsan. Pellentesque nec egestas justo. Vivamus congue, orci eget faucibus condimentum, erat augue pulvinar massa, aliquet laoreet nisi felis eget diam. Nam dui mi, convallis id risus sit amet, molestie varius diam. Integer fermentum, massa non eleifend bibendum, felis erat facilisis arcu, et mollis massa massa a diam. In lobortis lorem felis, quis dictum nisl condimentum vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer mi tellus, euismod sed neque vel, faucibus pretium libero. Sed mollis dui quis tempor ultrices. Quisque id tempus dolor. Praesent non molestie urna.
            </p>
            <p className={styles.paragrafo}>
            Duis semper dictum placerat. Integer quis commodo neque, et tempor tortor. Vestibulum condimentum felis eget odio tristique, sagittis rutrum neque pretium. Suspendisse potenti. Vivamus ligula massa, tempus nec mauris id, lobortis ultrices lectus. Aenean sagittis ligula quam, in dignissim mauris volutpat eu. Duis posuere nulla ac convallis bibendum. Phasellus vel tempor orci, id vestibulum nisl. Donec turpis libero, molestie laoreet nulla quis, consequat facilisis magna. Duis luctus tortor libero, ac consequat nunc convallis nec. Aenean vestibulum pulvinar pretium.
            </p>
            <p className={styles.paragrafo}>
            Etiam libero mauris, rhoncus imperdiet congue rhoncus, dictum a ligula. Proin egestas ut urna eu vehicula. Nulla semper nulla id turpis suscipit dapibus. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aenean consequat laoreet lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed placerat pulvinar mi quis sagittis. Proin et sem sodales, interdum tortor ut, lacinia leo. Donec tincidunt arcu vel nisl ultrices placerat.
            </p>
            <p className={styles.paragrafo}>
            Etiam libero mauris, rhoncus imperdiet congue rhoncus, dictum a ligula. Proin egestas ut urna eu vehicula. Nulla semper nulla id turpis suscipit dapibus. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aenean consequat laoreet lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed placerat pulvinar mi quis sagittis. Proin et sem sodales, interdum tortor ut, lacinia leo. Donec tincidunt arcu vel nisl ultrices placerat.
            </p>
        </PostModelo>
    )
}