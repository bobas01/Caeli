<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caeli</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Seaweed+Script&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Neuton&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <video src="https://video.wixstatic.com/video/c837a6_53b2916af80c46c3a162cacf484f4e30/1080p/mp4/file.mp4" autoplay muted loop></video>
        <div class="wave">
            <img id="spiral" src="./img/spiral.svg" alt="spiral">
            <img src="./img/fougere.png" alt="fougère" id="fougere">
            <img src="./img/palmier.png" alt="palmier" id="palmier">
        </div>
    </header>
    <main>
        <section id="slide1">
            <div class="text">
                <p>Une rénovation est prévue dans votre habitat et vous souhaitez
                    améliorer la qualité d’air intérieur par la même occasion ?</p>
                <p>Laissez-vous guider...</p>
            </div>
            <button id="btn1" class="little" type="button">
                Par ici!
            </button>
            <div class="big">
                <p>&lt;&lt; Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae magnam, debitis facilis maxime fugiat minima, praesentium laudantium rem eveniet, eius error repellat. Dolorum doloribus veritatis blanditiis animi est ipsa quaerat nihil ex impedit rem cumque dolorem accusantium, mollitia pariatur. &gt;&gt;</p>
            </div>

        </section>
        <section id="slide2">
            <div class="text">
                <h2>Fonctionnement</h2>
                <p>Ceci est un texte expliquant comment cela fonctionne et ce qu’il va devoir faire pour blablabla Ceci est un texte expliquant comment cela fonctionne et ce qu’il va devoir faire pour blablabla</p>

            </div>
            <button class="little" id="btn2" type="button">
                Bien compris!
            </button>
            <div class="big">
                <p>&lt;&lt; Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae magnam, debitis facilis maxime fugiat minima, praesentium laudantium rem eveniet, eius error repellat. Dolorum doloribus veritatis blanditiis animi est ipsa quaerat nihil ex impedit rem cumque dolorem accusantium, mollitia pariatur. &gt;&gt;</p>
            </div>

        </section>
        <section id="slide3">
            <div id="table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sol</th>
                            <th>Murs</th>
                            <th>Plafond</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr class="first-line">
                            <td>Gros œuvres</td>
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
                                <button onclick="displaySecondLine()">Valider</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <article id="description">
                    <h2 id="table-title">Gros œuvres</h2>
                    <p id="table-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa suscipit rerum numquam. Consectetur ab quidem natus nisi, quos, sequi, tempora placeat aliquid nesciunt exercitationem blanditiis commodi maiores reiciendis fuga non!</p>
                </article>
            </div>
            <div class="big">
                <p>&lt;&lt; Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae magnam, debitis facilis maxime fugiat minima, praesentium laudantium rem eveniet, eius error repellat. Dolorum doloribus veritatis blanditiis animi est ipsa quaerat nihil ex impedit rem cumque dolorem accusantium, mollitia pariatur. &gt;&gt;</p>
            </div>

        </section>
        <section id="slide4">
            <div id="imgSlide4">
                <img src="./img/spiral.svg" alt="spiral">
                <img src="./img/kite.png" alt="cerf-volant">
            </div>
            <div id="pSlide4">
                <p id="p1Slide4">Vous sentez se vent de renouveau?</p>
                <p id="p2Slide4">Comme un vent d'aire frais...</p>
                <p id="p3Slide4">...Chez vous</p>
            </div>
            <div class="big">
                <p>&lt;&lt; Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae magnam, debitis facilis maxime fugiat minima, praesentium laudantium rem eveniet, eius error repellat. Dolorum doloribus veritatis blanditiis animi est ipsa quaerat nihil ex impedit rem cumque dolorem accusantium, mollitia pariatur. &gt;&gt;</p>
        </section>
        <section id="slide5">
       


            <div class="big">
                <p>&lt;&lt; Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae magnam, debitis facilis maxime fugiat minima, praesentium laudantium rem eveniet, eius error repellat. Dolorum doloribus veritatis blanditiis animi est ipsa quaerat nihil ex impedit rem cumque dolorem accusantium, mollitia pariatur. &gt;&gt;</p>
        </section>
        </section>
    </main>
    <script src="./main.js"></script>
</body>

</html>