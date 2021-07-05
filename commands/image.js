const Scrapper = require('images-scraper');

const google = new Scrapper({
  puppeteer: {
    headless: true,
  },
});

module.exports = {
  name: 'image',
  description: 'find image from google',
  async execute(msg, args) {
    const image_query = args.join(' ');
    if (!image_query) return msg.channel.send('please enter an image name');

    const image_results = await google.scrape(image_query, 1);
    msg.channel.send(image_results[0].url);
  },
};
