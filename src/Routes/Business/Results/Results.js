import React from "react";
import { useContext } from "react";
import AppContext from "../../../AppContext";
import SkillButton from "../../../Components/Utilities/SkillButton/SkillButton";
import Header from "../../../Components/Header/Header";
import ResultCard from "./components/ResultCard";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import "./Results.css";

export default function Results(props) {
  const context = useContext(AppContext);

  const skills = context.MustHaveSkills.map((item, index) => {
    if (item.skill !== "-") {
      return (
        <SkillButton
          key={index}
          index={index}
          skill={item.skill}
          name={item.skill}
        />
      );
    } else {
      return null;
    }
  });
  const results = context.resultArray.map((item, index) => {
    return (
      <ResultCard
        key={index}
        id={item.id}
        image={item.image}
        name={item.nickname}
        skills={item.skills}
        levels={item.levels}
      />
    );
  });

  return (
    <section className="result-container">
      <Header />
      <article className="skills-container">
        {skills}
        <SmallButton
          className="BTS-btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          onClick={() => {
            props.history.push("/Business/Search");
            context.resetSkills();
          }}
        >
          <i className="fas fa-undo"></i>
        </SmallButton>
      </article>
      <article className="results">{results}</article>
    </section>
  );
}
