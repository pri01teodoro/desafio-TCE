import styles from "./Form.module.css"; 

// export default function Form({id, titulo, tempoPreparo, porcoes, imagem, descricao}){

export default function Form({id, nome, filiacao, dataNascimento, cpf, cep, logradouro, numero, bairro, cidade, estado, email, telefone}){
    return(
        <main>
            <form className={styles.container__form}>
                <div>
                    <label className={styles.label}>Nome*</label>
                    <input className={styles.input}  type="text" id="nome" placeholder={nome}/>
                </div>

                <div>
                    <label className={styles.label}>Nome da mãe*</label>
                    <input className={styles.input}  type="text" id="filiacaoMae" placeholder={filiacao}/>
                </div>

                <div>
                    <label className={styles.label}>Nome do pai*</label>
                    <input className={styles.input}  type="text" id="filiacaoPai" placeholder={filiacao}/>
                </div>

                <div>
                    <label className={styles.label}>Data de nascimento*</label>
                    <input className={styles.input}  type="date" id="dataNascimento" placeholder={dataNascimento}/>
                </div>

                <div>
                    <label className={styles.label}>CPF*</label>
                    <input className={styles.input}  type="text" id="cpf" placeholder={cpf}/>
                </div>

                <div>
                    <label className={styles.label}>CEP*</label>
                    <input className={styles.input}  type="text" id="cep" placeholder={cep}/>
                </div>

                <div>
                    <label className={styles.label}>Logradouro*</label>
                    <input className={styles.input}  type="text" id="logradouro" placeholder={logradouro}/>
                </div>


                <div>
                    <label className={styles.label}>Número*</label>
                    <input className={styles.input}  type="number" id="numero" placeholder={numero}/>
                </div>

                <div>
                    <label className={styles.label}>Bairro*</label>
                    <input className={styles.input}  type="text" id="bairro" placeholder={bairro}/>
                </div>

                <div>
                    <label className={styles.label}>Cidade*</label>
                    <input className={styles.input}  type="text" id="cidade" placeholder={cidade}/>
                </div>

                <div>
                    <label className={styles.label}>Estado*</label>
                    <input className={styles.input}  type="text" id="estado" placeholder={estado}/>
                </div>

                <div>
                    <label className={styles.label}>E-mail*</label>
                    <input className={styles.input}  type="text" id="email" placeholder={email}/>
                </div>

                <div>
                    <label className={styles.label}>Telefone*</label>
                    <input className={styles.input}  type="text" id="telefone" placeholder={telefone}/>
                </div>                
                
            </form>
        </main>
    )
}