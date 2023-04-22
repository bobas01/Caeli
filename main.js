btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn5 = document.getElementById('btn5');
btn6 = document.getElementById('btn6');

slide1 = document.getElementById('slide1');
slide2 = document.getElementById('slide2');
slide3 = document.getElementById('slide3');
slide4 = document.getElementById('slide4');
slide5 = document.getElementById('slide5');
slide6 = document.getElementById('slide6');


btn1.addEventListener('click', function () {
  slide2.classList.toggle('active');
  slide1.style.opacity = 0;
  setTimeout(function () {
    slide1.style.display = 'none';
  }, 500);
});
btn2.addEventListener('click', function () {
  slide3.classList.toggle('active2');
  slide2.style.opacity = 0;
  setTimeout(function () {
    slide2.style.display = 'none';
  }, 500);
});

function displaySecondLine() {
  const tableBody = document.getElementById("table-body");

  const secondLine = document.createElement("tr");
  secondLine.className = "second-line";
  secondLine.innerHTML = `
      <td style="text-transform:uppercase;">Second-œuvre</td>
      <td>
      <select>
          <option value="materials1">Liège</option>
          <option value="materials2">Laine de verre</option>
          <option value="materials3">Laine de roche</option>
          <option value="materials4">Polystyrène</option>
          <option value="materials5">Air</option>
          <option value="materials6">Fibre de bois</option>
          <option value="materials7">Ouate de cellulose</option>
          <option value="materials8">Caoutchouc</option>
          <option value="materials9">Chanvre</option>
        </select>
      </td>
      <td>
        <select>
          <option value="materials1">Liège</option>
          <option value="materials2">Laine de verre</option>
          <option value="materials3">Laine de roche</option>
          <option value="materials4">Polystyrène</option>
          <option value="materials5">Air</option>
          <option value="materials6">Fibre de bois</option>
          <option value="materials7">Ouate de cellulose</option>
          <option value="materials8">Caoutchouc</option>
          <option value="materials9">Chanvre</option>
          </select>
          </td>
          <td>
            <select>
              <option value="materials1">Liège</option>
              <option value="materials2">Laine de verre</option>
              <option value="materials3">Laine de roche</option>
              <option value="materials4">Polystyrène</option>
              <option value="materials5">Air</option>
              <option value="materials6">Fibre de bois</option>
              <option value="materials7">Ouate de cellulose</option>
              <option value="materials8">Caoutchouc</option>
              <option value="materials9">Chanvre</option>
            </select>
        
      </td>
      <td>
        <button onclick="displayThirdLine()">Valider</button>
      </td>
    `;

  tableBody.appendChild(secondLine);

  const tableTitle = document.getElementById("table-title");
  const tableText = document.getElementById("table-text");

  tableTitle.innerText = "Second-œuvre";
  tableText.innerText = "Il représente les matériaux pris en sandwich entre la structure et les finitions. Il doit en exister plusieurs, mettez ceux qui sont les plus présents !";
}

function displayThirdLine() {
  const tableBody = document.getElementById("table-body");

  const thirdLine = document.createElement("tr");
  thirdLine.className = "third-line";
  thirdLine.innerHTML = `
      <td style="text-transform:uppercase;">Finitions</td>
      <td>
      <select>
          <option value="materials1">Plâtre</option>
          <option value="materials2">Peinture</option>
          <<option value="materials3">Papier peint</option>
          <option value="materials4">Vynile</option>
          <option value="materials5">PVC</option>
          <option value="materials6">Parquet</option>
          <option value="materials7">Carlage</option>
          <option value="materials8">Stratifié</option>
          <option value="materials9">Moquette</option>
          <option value="materials10">Enduit</option>
        </select>
      </td>
      <td>
        <select>
          <option value="materials1">Plâtre</option>
          <option value="materials2">Peinture</option>
          <option value="materials3">Papier peint</option>
          <option value="materials4">Vynil</option>
          <option value="materials5">PVC</option>
          <option value="materials6">Parquet</option>
          <option value="materials7">Carlage</option>
          <option value="materials8">Stratifié</option>
          <option value="materials9">Moquette</option>
          <option value="materials10">Enduit</option>
        </select>
      </td>
      <td>
        <select>
          <option value="materials1">Plâtre</option>
          <option value="materials2">Peinture</option>
          <option value="materials3">Papier peint</option>
          <option value="materials4">Vynil</option>
          <option value="materials5">PVC</option>
          <option value="materials6">Parquet</option>
          <option value="materials7">Carlage</option>
          <option value="materials8">Stratifié</option>
          <option value="materials9">Moquette</option>
          <option value="materials10">Enduit</option>
        </select>
        
          </td>
          <td>
            <button id="btn3" type=button >Valider</button>
          </td>
        `;

  tableBody.appendChild(thirdLine);

  const tableTitle = document.getElementById("table-title");
  const tableText = document.getElementById("table-text");

  tableTitle.innerText = "Finitions";
  tableText.innerText = "Elles sont tous les matériaux que vous pouvez voir avec vos yeux et qui permettent de peaufiner le rendu de votre pièce. De même ici, renseignez les prédominants !";
  btn3 = document.getElementById('btn3');
  header = document.querySelector('header');
  p1 = document.getElementById('p1Slide4');
  p2 = document.getElementById('p2Slide4');
  p3 = document.getElementById('p3Slide4');
  btn3.addEventListener('click', function () {
    slide4.classList.toggle('active3');
    slide3.style.opacity = 0;
    setTimeout(function () {
      slide3.style.display = 'none';
      header.style.display = 'none';
    }, 500);
    setTimeout(function () {
      p1.style.display = 'block';

    }, 2000);
    setTimeout(function () {
      p2.style.display = 'block';
    }, 5000);
    setTimeout(function () {
      p3.style.display = 'block';
    }, 8000);
    setTimeout(function () {
      slide4.style.display = 'none';
      slide5.style.display = 'block';
    }, 10000);

  });
}
// document.addEventListener("DOMContentLoaded", function (event) {
//   document.querySelector('input[type="range"]').value = 0;
// });
// // Fonction qui crée les divs à chaque fois que l'input range change de valeur
// function createDivs() {
//   // On vide le contenu du container à chaque fois pour éviter les doublons
//   document.getElementById("container").innerHTML = "";

//   // On boucle de 0 à la valeur de l'input range
//   for (let i = 0; i <= document.querySelector("input[type=range]").value; i += 25) {
//     // On crée une div bigBox
//     const bigBox = document.createElement("div");
//     bigBox.classList.add("bigBox");

//     // On crée deux div littleBox pour chaque bigBox
//     const littleBox1 = document.createElement("div");
//     littleBox1.classList.add("littleBox");
//     littleBox1.innerHTML = '<img src="./img/alarm.svg" alt="alarm"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ducimus.</p>';

//     const littleBox2 = document.createElement("div");
//     littleBox2.classList.add("littleBox");
//     littleBox2.innerHTML = '<img src="./img/pouceVert.svg" alt="pouce vert"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, quisquam?</p>';

//     // On ajoute les littleBox à la bigBox
//     bigBox.appendChild(littleBox1);
//     bigBox.appendChild(littleBox2);

//     // On ajoute la bigBox au container
//     document.getElementById("container").appendChild(bigBox);
//   }
// }

// // Fonction qui vérifie la valeur de l'input range et cache les divs inutiles
// function checkValue() {
//   // On récupère la valeur de l'input range
//   const value = document.querySelector("input[type=range]").value;

//   // On cache toutes les bigBox
//   const bigBoxes = document.querySelectorAll(".bigBox");
//   bigBoxes.forEach((bigBox) => {
//     bigBox.style.display = "none";
//   });

//   // Si la valeur est différente de 0, on affiche la bigBox correspondante
//   if (value !== "0") {
//     const index = value / 25 - 1;
//     bigBoxes[index].style.display = "flex";
//   }
// }
function createDivs() {
  // On vide le contenu du container à chaque fois pour éviter les doublons
  document.getElementById("container").innerHTML = "";

  // On boucle de 0 à la valeur de l'input range
  for (let i = 0; i <= document.querySelector("input[type=range]").value; i += 25) {
    // On crée une div bigBox
    const bigBox = document.createElement("div");
    bigBox.classList.add("bigBox");

    // On crée des div littleBox en fonction de la valeur de l'input range
    let numLittleBoxes;
    switch (i) {
      case 0:
        numLittleBoxes = 0;
        break;
      case 25:
        numLittleBoxes = 1;
        break;
      case 50:
        numLittleBoxes = 1;
        break;
      case 75:
        numLittleBoxes = 1;
        break;
      case 100:
        numLittleBoxes = 1;
        break;
    }

    for (let j = 0; j < numLittleBoxes; j++) {
      const littleBox1 = document.createElement("div");
      littleBox1.classList.add("littleBox");
      let littleBox1Text;
      switch (i+j) {
        case 0:
          littleBox1Text = "Attention, il faut changer les matériaux.";
          break;
        case 25:
          littleBox1Text = "Achète ceci pour améliorer ta performance.";
          break;
        case 50:
          littleBox1Text = "N'oublie pas de prendre une pause.";
          break;
        case 75:
          littleBox1Text = "Oh mon dieu, c'est pas bien.";
          break;
        case 100:
          littleBox1Text = "Fais ça et ça sera très bien.";
          break;
      }
      littleBox1.innerHTML = `<img src="./img/alarm.svg" alt="alarm"><p>${littleBox1Text}</p>`;

      const littleBox2 = document.createElement("div");
      littleBox2.classList.add("littleBox");
      let littleBox2Text;
      switch (i+j) {
        case 0:
          littleBox2Text = "Achète ceci pour réduire les coûts.";
          break;
        case 25:
          littleBox2Text = "N'oublie pas de te reposer.";
          break;
        case 50:
          littleBox2Text = "Oh mon dieu, c'est incroyable.";
          break;
        case 75:
          littleBox2Text = "Fais ça pour obtenir de meilleurs résultats.";
          break;
        case 100:
          littleBox2Text = "Attention, ne fais pas ça !";
          break;
      }
      littleBox2.innerHTML = `<img src="./img/pouceVert.svg" alt="pouce vert"><p>${littleBox2Text}</p>`;

      // On ajoute les littleBox à la bigBox
      bigBox.appendChild(littleBox1);
      bigBox.appendChild(littleBox2);
    }

    // On ajoute la bigBox au container
    document.getElementById("container").appendChild(bigBox);
  }
}



btn5.addEventListener('click', function () {
  slide6.classList.toggle('active6');
  slide5.style.opacity = 0;
  setTimeout(function () {
    slide5.style.display = 'none';
  }, 500);
});

// btn6.addEventListener('click', function(){
//   slide6.style.display = 'none';
//   slide1.style.display = 'block';
// })





