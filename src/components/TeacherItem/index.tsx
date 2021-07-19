import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/-jdEDkVf4Vw0/YPXQOsfipeI/AAAAAAAAFKY/8Mee1FxDkXoHchaORVSlbR9uCQhpMHL5QCEwYBhgLKtMDABHVOhy7ZBfhrr3vpLdp2c08r03ukmGxETL4b0DrRYLzuuTpXVr83zoK33sZT9FB4XKBGtcIljuBDOnZzaNx78amFc8FbyYZPDBt5d6FAMudRaSBBub53rAtxSUNBCJ_zjKN3HJOGXH9qKg5IcijIwX6NSMgeOFI6ATHGAeBWxJOWmF0NiGQB1H1w2oj5VJ82EEWCUnRMVflkqMj9Me0Qb_3MSCWGh8xlcWJNZtEq5kKpHkIogwERLis_4c8q7B-NnL6Ukqxftxub5xSos5fNlEs8_aEnn8Z7t3bYVpDqDrrFwhfIUN4qqhSnnoKfEssI1UY0TS6pob5nu_YWPU8tJM8Lm4npD36euua6_A5yFdKKyNTirQb0tOC7BYYv1qJk4r2CJw3I6PCdQMCLa2uGIfJMcjx7KRD8DREnXX2EZMn2wdZNd8yJa_bVYsbopvhLresPm42Z-bJ1J4u_-GH8dKbow55_NldJ6Rbs1E0Ic2Q1UZVdjz359E1vDOFeE7hQcIjCNS89LkHUc_Qd_oOBJARC9ewbAwlb5xoFiEXW8qr7clHdy4zrPSjWb6kv_YJiHe06tGAyv3Bv5PIARG1IdP2Q9pyBJclYTVUs7Cu-Hc5NxAwrNzXhwY/w140-h140-p/ProfilePicturePhoto"
          alt="Felipe"
        />
        <div>
          <strong>Felipe Coelho</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Aulas de Física bem estruturadas e divertidas.
        <br /> <br />
        Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
        Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
        15 reais.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 15,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
