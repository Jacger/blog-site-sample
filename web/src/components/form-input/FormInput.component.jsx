import "./FormInput.style.scss";

function FormInput({ label, ...otherProps }) {
  console.log('FormInput');

  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
