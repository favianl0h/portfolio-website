import React from 'react';

import "../CSS/Component.css";
import "../CSS/Theme.css";
import "../CSS/Class.css";

export default function MyIntroduction() {
  const me = "I'm Favian from Singapore! 🇸🇬 I developed this website myself, and was my first interaction with React, Javascript, HTML and CSS! Aside from Web Dev. and App Dev., I'm also keen on robotics due to its hardware and software aspects.";

  return (
    <div class="row" style={{ height:'80vh', }}>
      <div class="flex-center-children" style={{ width:'65%' }}>
        <div style={{ width:'760px', }}>
          <h1 style={{ fontSize:'72px', marginBottom:'36px', }}>Hello There!</h1>
          <p1>{me}</p1>
        </div>
      </div>
      <div class="flex-center-children dark-background" style={{ width:'35%', }}>
        <img
          src={require("./IMG_2824.JPG")}
          alt="8059A SingNats Robot"
          style={{
            width: 360,
            borderRadius: 24,
          }}
        />
      </div>
    </div>
  );
}
