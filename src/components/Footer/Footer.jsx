import "./Footer.css";

const TEAM = [
  { name: "Rubén Ocampo", role: "Fundador", bio: "30 años pescando en el Delta. Elige cada producto del catálogo." },
  { name: "Marta Ibáñez", role: "Atención al cliente", bio: "Te ayuda a armar el equipo según dónde y qué vas a pescar." },
  { name: "Lucas Ferreyra", role: "Guía de pesca", bio: "Organiza las salidas y prueba los señuelos antes de venderlos." },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("");

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="company">
          <h2>El Pique</h2>
          <p>Artículos de pesca para río, laguna y mar.</p>
          <ul className="company-data">
            <li>Tigre, Buenos Aires</li>
            <li>Lunes a sábado de 8 a 19 h</li>
            <li>Whatsapp · Instagram</li>
          </ul>
        </div>

        <ul className="team">
          {TEAM.map((person) => (
            <li className="person-card" key={person.name}>
              <span className="avatar" aria-hidden="true">
                {getInitials(person.name)}
              </span>
              <div>
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
                <p>{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="copy">© {new Date().getFullYear()} El Pique · Que no se te escape.</p>
    </footer>
  );
};
