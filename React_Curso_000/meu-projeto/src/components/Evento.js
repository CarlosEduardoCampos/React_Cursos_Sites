function Evento({numero}){
    const meuEvento = () =>{
        console.log(`Opa fui ativado${numero}!`);
    }
    return(
        <>
            <p>Clique para disparar um Evento</p>
            <button onClick={meuEvento}> Ativar !</button>
        </>
    );
}

export default Evento;