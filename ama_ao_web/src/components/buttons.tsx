import btn from "../styles/buttons.module.css";

export default function PurpleButton({description, redirect}) {
  return (
    <>
      <button className={`${btn.btn} ${btn.btn_purple}`}>
        <a href={redirect}>{description}</a>
      </button>
    </>
  );
}

export function LightButton({description, redirect}) {
  return (
    <>
      <button className={`${btn.btn} ${btn.btn_light}`}>
        <a href={redirect} >{description}</a>
      </button>
    </>
  );
}

export function PurpleButton2({ description, redirect }) {
  return (
    <>
      <button className={`${btn.btn2} ${btn.btn_purple}`}>
        <a href={redirect}>{description}</a>
      </button>
    </>
  );
}
