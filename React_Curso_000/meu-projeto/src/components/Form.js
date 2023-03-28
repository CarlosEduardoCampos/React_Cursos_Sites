import {useState} from 'react';

function Form()
{
    const cadastrar = (evento) => {
        evento.preventDefault();
        console.log(`O ususario ${name} & ${password} foi cadastrado com sucesso!`);
    }

    const [name='', setName] = useState();
    const [password='', setPassword] = useState();
    return(
        <div>
            <h1>
                Meu Cadastro:
            </h1>

            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor='name'> Nome: </label>
                    <input type='text' id='name' name='name' placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)} value={name}/>
                </div>

                <div>
                    <label htmlFor='password'> Senha: </label>
                    <input type='text' id='password' name='password'onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type='submit' value='Cadastrar'/>
                </div>
            </form>
        </div>
    )
}

export default Form;