btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');

slide1 = document.getElementById('slide1');
slide2 = document.getElementById('slide2');
slide3 = document.getElementById('slide3');
slide4 = document.getElementById('slide4');
slide5 = document.getElementById('slide5');


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
      <td>Seconds œuvres</td>
      <td>
        <select>
          <option value="materials1">Matériaux 1</option>
          <option value="materials2">Matériaux 2</option>
          <<option value="materials3">Matériaux 3</option>
          <option value="materials4">Matériaux 4</option>
          <option value="materials5">Matériaux 5</option>
        </select>
      </td>
      <td>
        <select>
          <option value="materials1">Matériaux 1</option>
          <option value="materials2">Matériaux 2</option>
          <option value="materials3">Matériaux 3</option>
          <option value="materials4">Matériaux 4</option>
          <option value="materials5">Matériaux 5</option>
        </select>
      </td>
      <td>
        <select>
          <option value="materials1">Matériaux 1</option>
          <option value="materials2">Matériaux 2</option>
          <option value="materials3">Matériaux 3</option>
          <option value="materials4">Matériaux 4</option>
          <option value="materials5">Matériaux 5</option>
        </select>
      </td>
      <td>
        <button onclick="displayThirdLine()">Valider</button>
      </td>
    `;

  tableBody.appendChild(secondLine);

  const tableTitle = document.getElementById("table-title");
  const tableText = document.getElementById("table-text");

  tableTitle.innerText = "Seconds œuvres";
  tableText.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa suscipit rerum numquam. Consectetur ab quidem natus nisi, quos, sequi, tempora placeat aliquid nesciunt exercitationem blanditiis commodi maiores reiciendis fuga non!";
}

function displayThirdLine() {
  const tableBody = document.getElementById("table-body");

  const thirdLine = document.createElement("tr");
  thirdLine.className = "third-line";
  thirdLine.innerHTML = `
      <td>Finitions</td>
      <td>
        <select>
          <option value="materials1">Matériaux 1</option>
          <option value="materials2">Matériaux 2</option>
          <option value="materials3">Matériaux 3</option>
          <option value="materials4">Matériaux 4</option>
          <option value="materials5">Matériaux 5</option>
        </select>
      </td>
      <td>
        <select>
          <option value="materials1">Matériaux 1</option>
          <option value="materials2">Matériaux 2</option>
          <option value="materials3">Matériaux 3</option>
          <option value="materials4">Matériaux 4</option>
          <option value="materials5">Matériaux 5</option>
          </select>
          </td>
          <td>
            <select>
              <option value="materials1">Matériaux 1</option>
              <option value="materials2">Matériaux 2</option>
              <option value="materials3">Matériaux 3</option>
              <option value="materials4">Matériaux 4</option>
              <option value="materials5">Matériaux 5</option>
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
  tableText.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa suscipit rerum numquam. Consectetur ab quidem natus nisi, quos, sequi, tempora placeat aliquid nesciunt exercitationem blanditiis commodi maiores reiciendis fuga non!";
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








