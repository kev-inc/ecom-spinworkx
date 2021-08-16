import { text } from "cheerio/lib/api/manipulation";

const axios = require("axios");
const cheerio = require("cheerio");

export default async function handler(req, res) {
  const link = req.query.link;
  if (link) {
    const html = await axios.get(link);
    const $ = cheerio.load(html.data);
    const name = $("h1.product_title.entry-title");
    const price = $("p.price");
    const tags = [];
    $("div.product_meta > span.posted_in > a").each(function (elm) {
      tags.push($(this).text());
    });
    const desc = $("div.x-tab-content > div > p");
    const img = [];
    $("figure.woocommerce-product-gallery__wrapper > div").each(function (elm) {
      const thumbnail = $(this).attr("data-thumb");
      const src = $(this).find("a").attr("href");
      img.push({ thumbnail, src });
    });
    const colors = [];
    $("select#pa_color > option").each(function (elm) {
      colors.push($(this).text());
    });
    res.status(200).json({
      name: name.text(),
      price: price.text(),
      tags: tags,
      desc: desc.text(),
      img: img,
      colors: colors
    });
  } else {
    res.status(404).json({ message: "Missing 'link' param" });
  }
}
