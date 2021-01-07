import React from 'react';

import './styles.css';

export default function Body() {
  return (
    <div className="body-container">
      <div className="block">
        <div className="green-back">შენი მშვიდი სივრცე</div>
        <div className="description">
          პერსონა, რომელიც ხვდება ჩვენს სივრცეში, იცნობს საკუთარ თავს და ახალ
          მეგობრებს
        </div>
        <div className="buttons">
          <div className="quiz-game">
            <div className="green-button" style={{ marginRight: '10px' }}>
              ქვიზი
            </div>
            <div className="green-button">თამაში</div>
          </div>

          <div className="white-button">კონტაქტი</div>
          <div className="green-button">რეგისტრაცია</div>
        </div>
      </div>
    </div>
  );
}
