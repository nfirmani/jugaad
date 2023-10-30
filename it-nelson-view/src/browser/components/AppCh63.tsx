import * as React from "react";

const lists = [
  { id: 1, name: "Importante" },
  { id: 2, name: "Film da vedere" },
  { id: 3, name: "Libri da leggere" },
];

export function AppCh63() {
  const [listIdx, setListIdx] = React.useState(1);
  //const [contatore, setContatore] = React.useState(0);
  /*   return (
    <div>
      <p>Hai cliccato {listIdx} volte</p>
      <button onClick={() => setListIdx(listIdx + 1)}>
        Cliccami
      </button>
    </div>
  );
} */

  return (
    <ul className="nav nav-pills flex-column">
      {lists.map((t, idx) => {
        return (
          <li
            className={`nav-link ${listIdx === idx ? "active" : ""}`}
            key={t.id}
            onClick={() => setListIdx(idx)}
          >
            {t.name}
          </li>
        );
      })}
    </ul>
  );
}
