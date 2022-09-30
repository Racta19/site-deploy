//jshint esversion:9
import './form-input.styles.scss';
const FormInput = ({Label, ...otherProps}) => {
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/>
            { Label && <label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{Label}</label>}
        </div>
    );
};

export default FormInput; 