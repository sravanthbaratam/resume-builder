const express = require("express");
const bodyParser = require("body-parser");
// const pdf = require("html-pdf");
const path = require("path");

const app = express();

const pdfTemplate = require("./documents");
const puppeteer = require('puppeteer');

// const options = {
// 	height: "42cm",
// 	width: "29.7cm",
// 	timeout: "6000",
// };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });

// POST route for PDF generation....
app.post("/create-pdf", async (req, res) => {
	// pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
	// 	if (err) {
	// 		console.log(err);
	// 		res.send(Promise.reject());
	// 	} else res.send(Promise.resolve());
	// });

	// Create a browser instance
	const browser = await puppeteer.launch();

	// Create a new page
	const page = await browser.newPage();

	// // Website URL to export as pdf
	// const website_url = 'https://www.bannerbear.com/blog/how-to-download-images-from-a-website-using-puppeteer/';

	// // Open URL in current page
	// await page.goto(website_url, { waitUntil: 'networkidle0' });

	//Get HTML content from HTML file
	const html = pdfTemplate(req.body)
	//fs.readFileSync('sample.html', 'utf-8');
	await page.setContent(html, { waitUntil: 'domcontentloaded' });

	//To reflect CSS used for screens instead of print
	await page.emulateMediaType('screen');

	// Downlaod the PDF
	const pdf = await page.pdf({
		path: path.join(__dirname, `Resume.pdf`),
		margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
		printBackground: true,
		format: 'A4',
	}).then(() => res.send(Promise.resolve()))
		.catch((err) => {
			console.log(err)
			res.send(Promise.reject())
		});

	// Close the browser instance
	await browser.close();

	res.send(Promise.resolve())

});

// GET route -> send generated PDF to client...
app.get("/fetch-pdf", (req, res) => {

	console.log("show");
	const file = path.join(__dirname, `Resume.pdf`);
	console.log(file);
	res.download(file);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
