const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page Example</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            background: #f4f4f4;
        }

        /* Navbar */
        nav {
            background: #1e3a8a;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 50px;
        }

        nav h2 {
            font-size: 28px;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        nav ul li a:hover {
            color: yellow;
        }

        /* Hero Section */
        .hero {
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
            color: white;
        }

        .hero h1 {
            font-size: 55px;
            margin-bottom: 20px;
        }

        .hero p {
            width: 60%;
            font-size: 20px;
            margin-bottom: 30px;
        }

        button {
            padding: 15px 30px;
            border: none;
            background: white;
            color: #2563eb;
            font-size: 18px;
            border-radius: 5px;
            cursor: pointer;
            transition: .3s;
        }

        button:hover {
            background: #111827;
            color: white;
        }

        /* Features */
        .features {
            display: flex;
            justify-content: center;
            gap: 30px;
            padding: 60px;
            flex-wrap: wrap;
        }

        .card {
            width: 300px;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 5px 10px rgba(0,0,0,.2);
            text-align: center;
        }

        .card h3 {
            margin-bottom: 15px;
            color: #2563eb;
        }

        .card p {
            color: #555;
        }

        footer {
            background: #1f2937;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }

        @media(max-width:768px) {

            nav {
                flex-direction: column;
                gap: 15px;
            }

            .hero h1 {
                font-size: 35px;
            }

            .hero p {
                width: 90%;
            }

            .features {
                padding: 20px;
            }
        }
    </style>

</head>

<body>

    <nav>

        <h2>Mudassar (DevOps Engineer)</h2>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

    </nav>

    <section class="hero">

        <h1>Welcome to My DevOps Journey!</h1>

        <p>
            This is a simple Node.js application where
            HTML, CSS and JavaScript are contained inside
            one JavaScript file.
        </p>

        <button onclick="showMessage()">
            Click Me
        </button>

    </section>

    <section class="features">

        <div class="card">
            <h3>HTML</h3>
            <p>
                Build the structure of your web pages using HTML5.
            </p>
        </div>

        <div class="card">
            <h3>CSS</h3>
            <p>
                Design beautiful and responsive websites with CSS.
            </p>
        </div>

        <div class="card">
            <h3>JavaScript</h3>
            <p>
                Make your website interactive using JavaScript.
            </p>
        </div>

    </section>

    <footer>

        <p>
            © 2026 My Website | All Rights Reserved
        </p>

    </footer>

    <script>

        function showMessage() {
            alert("Welcome to My Website!");
        }

    </script>

</body>

</html>
`;


const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(html);

});


server.listen(8085, "0.0.0.0", () => {

    console.log("Server running on http://localhost:8085");

});