import button from './button.module.css'

function Button () {

    return (
        <div className={styles.button2}>
            <input className={styles.input} placeholder ="Faça aqui a sua pesquisa..."></input>
            <button className={styles.button3}>Pesquisar!</button>
        </div>
    )
}

export default Button