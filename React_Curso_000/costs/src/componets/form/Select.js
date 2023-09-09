import styles from './Select.module.css';

function Select({type, text, name, options, placeholder, handleOnChange, value})
{
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select type={type} name={name} id={name}>
                <option selected>Selecione uma opção</option>
            </select>
        </div>
    );
}

export default Select;