// triangle

callId('triangle-btn').addEventListener('click', ()=>{
   const b =  getInputValue("triangle1");
   const h =  getInputValue("triangle2");
   const formula  = 0.5 * b * h
   const setArea = setText('area1', formula)
})

// rectangle

callId("rectangle-btn").addEventListener("click", () => {
  const w = getInputValue("rectangle1");
  const l = getInputValue("rectangle2");
  const formula = w * l;
  const setArea = setText("area2", formula);
});

// Parallelogram 

callId("parallelogram-btn").addEventListener("click", () => {
  const b = getInputValue("parallelogram1");
  const h = getInputValue("parallelogram1");
  const formula = b * h
  const setArea = setText("area3", formula);
});

// Rhombus

callId("rhombus-btn").addEventListener("click", () => {
  const d1 = getInputValue("rhombus1");
  const d2 = getInputValue("rhombus2");
  const formula = 0.5 * d1 * d2;
  const setArea = setText("area4", formula);
});

// Pentagon 

callId("pentagon-btn").addEventListener("click", () => {
  const p = getInputValue("pentagon1");
  const b = getInputValue("pentagon2");
  const formula = 0.5 * p * b;
  const setArea = setText("area5", formula);
});

// Ellipse

callId("ellipse-btn").addEventListener("click", () => {
  const a = getInputValue("ellipse1");
  const b = getInputValue("ellipse2");
  let formula = 3.14 * a * b;
  formula.toFixed(2);
  const setArea = setText("area6", formula);
});




