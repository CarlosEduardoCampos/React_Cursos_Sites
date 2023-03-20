function Evento(){
    const meuEvento = () =>{
        console.log("Opa fui ativado!")
    }
    return(
        <>
            <p>Clique para disparar um Evento</p>
            <button onClick={meuEvento}> Ativar !</button>
        </>
    );
}

export default Evento;