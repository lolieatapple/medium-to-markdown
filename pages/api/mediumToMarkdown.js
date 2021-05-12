const mediumToMarkdown = require('medium-to-markdown');

export default async (req, res) => {
  console.log(req.query.url);
  // Enter url here
  // return res.end('hello');
  try {
    let ret = await mediumToMarkdown.convertFromUrl(req.query.url);
    res.statusCode = 200
    res.end(ret);
  } catch (error) {
    res.statusCode = 200
    res.json(error);
  }
}


