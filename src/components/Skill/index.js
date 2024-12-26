import React from "react";
import { useNavigate } from "react-router-dom"; // Import de useNavigate
import "./Skill.css"; // Assurez-vous que Skill.css est importé correctement

const Skillpage = () => {
  const navigate = useNavigate(); // Initialisation de useNavigate

  return (
    <div className="container"> {/* La classe container utilise l'image de fond */}
      <button
        onClick={() => navigate(-1)} // Navigation vers la page précédente
        className="back-button"
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#5f43b2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Retour
      </button>
      <p>Skills et outils</p>
      <div className="col">
        <h2 className="titre">Skills</h2>
        <ul className="skill">
          <li>
            <span className="purpleline javascript"></span>
            <em>Javascript</em>
          </li>
          <li>
            <span className="purpleline react"></span>
            <em>React.js</em>
          </li>
          <li>
            <span className="purpleline node"></span>
            <em>Node.js</em>
          </li>
          <li>
            <span className="purpleline html"></span>
            <em>HTML</em>
          </li>
          <li>
            <span className="purpleline css"></span>
            <em>CSS</em>
          </li>
          <li>
            <span className="purpleline sql"></span>
            <em>SQL</em>
          </li>
        </ul>
      </div>
      <div className="col">
        <h2 className="titre">Outils</h2>
        <ul className="skill">
          <li>
            <span className="purpleline win10"></span>
            <em>Windows 10</em>
          </li>
          <li>
            <span className="purpleline powershell"></span>
            <em>Powershell</em>
          </li>
          <li>
            <span className="purpleline linux"></span>
            <em>Linux</em>
          </li>
          <li>
            <span className="purpleline visual"></span>
            <em>Visual code</em>
          </li>
          <li>
            <span className="purpleline git"></span>
            <em>Git Hub</em>
          </li>
          <li>
            <span className="purpleline ps"></span>
            <em>PhotoShop</em>
          </li>
        </ul>
        <h2 className="titre">Passion</h2>
        <ul className="ul2">
          <li>Informatique</li>
          <li>Astronomie</li>
          <li>Science</li>
        </ul>
      </div>
      <div className="col">
        <h2 className="titre">Expérience</h2>
        <ul className="ul2">
          <li>
            2022 Stage de 8 semaines : concevoir un site web en PHP avec SQL,
            HTML, CSS pour la gestion de membre et la location de jouet
          </li>
        </ul>
        <h2 className="titre">Formation</h2>
        <ul className="ul2">
          <li>2021-2022 (Diplôme obtenu)</li>
          <li>Collège Rosemont : AEC en programmation orientée objet</li>
        </ul>
      </div>
    </div>
  );
};

export default Skillpage;
