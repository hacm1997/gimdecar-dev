import { useForm } from "../../../content/hooks/useForm";
import styles from "./form.module.css";
import FormService from "../../../../services/form.service";
import { useEffect } from "react";

const Form = (props: any) => {
  const {
    city,
    address,
    name,
    product,
    cel,
    email,
    dpto,
    formState,
    onInputChange,
    onResetForm,
  }: any = useForm({
    city: "",
    address: "",
    name: "",
    product: "",
    cel: "",
    email: "",
  });

  const dataForm = {
    name: name,
    email: email,
    address: address,
    city: city,
    product: product,
    cel: cel,
    dpto: dpto
  }

  const saveForm = (ev: any) => {
    ev.preventDefault();
    FormService(dataForm)
  }

  const dptoSelect = props.dpto.map((item: any, index: any) => (
    <option key={index} value={item}>{item}</option>
  ));
  const citySelect = props.city.map((item: any, index: any) => (
    <option key={index} value={item}>{item}</option>
  ));

  useEffect(() => {
    props.setSelectDpto(dataForm.dpto);
  }, [dataForm.dpto]);

  return (
    <form id="form-seccion" className={styles.form}>
      <div className={styles.form_container}>
        <div className={styles.content_form}>
          <div className={styles.inputs}>
            <select name="dpto" onChange={onInputChange} required>
              <option value="">Departamento</option>
              {dptoSelect}
            </select>
          </div>
          <div className={styles.inputs}>
            <select name="city" onChange={onInputChange} required>
              <option value="">Ciudad</option>
              {citySelect}
            </select>
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={onInputChange}
              name="address"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={onInputChange}
              name="name"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Producto"
              value={product}
              onChange={onInputChange}
              name="product"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Tel/Cel"
              value={cel}
              onChange={onInputChange}
              name="cel"
            />
          </div>

          <div className={styles.inputs}>
            <input
              required
              type="text"
              placeholder="Email"
              value={email}
              onChange={onInputChange}
              name="email"
            />
          </div>
          <div>
            <button className={styles.button_cotizar} onClick={saveForm} type="submit">Cotizar</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
