
import styles from './frase.module.css'


function Frase() {
    return (
        <div className={styles.item}>
        <h1 className={styles.listah1}>Faça seu cadastro! </h1>

        <section >
            
           <div className={styles.containerInput}>
            
           <div className={styles.container1}>
            <p>E-mail:</p><input type='text' placeholder='Digite seu E-mail'></input>
            </div>

            <div className={styles.container1}>
            <p>Nome:</p><input type='text' placeholder='digite o seu nome'></input>
            </div>

            <div className={styles.container1}>
                <p>Telefone:</p><input type='text' placeholder='digite o seu telefone'></input>
            </div>
            

            <div className={styles.container1}> 
                <p>Data de Nascimento:</p><input type='text' placeholder='Data de Nascimento'></input>
            </div>
           

            <div className={styles.container1}>  
                <p>Endereço: </p><input type='text' placeholder='digite o endereço'></input>
            </div>
          

            <div className={styles.container1}>  
                <p>Nacionalidade: </p><input type='text' placeholder='digite a sua nacionalidade'></input>
            </div>
          

            <div className={styles.container1}>
                <p>Senha: </p><input type='text' placeholder='Criar senha'></input>
            </div>
            

           </div>
            
           
        <div >

           <p className={styles.button}><button>Enviar!</button></p>

        </div>
                
        </section>

        
        </div>
    )
}

export default Frase