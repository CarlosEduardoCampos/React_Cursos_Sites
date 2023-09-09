import styles from './ProjectFom.module.css';
import Input from '../form/Inputs';
import Select from '../form/Select';
import SubmitButton from '../form/SubimitButton';

function ProjectForm({btnText}){
    return(
        <form method="get" className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />

            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
            />
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;