const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};
const displayQuotes = (quotes) => {
  //   console.log(quotes);
  const blockquote = document.getElementById("quotes-list");
  //   blockquote.innerText = data.quote;
  //   for (let quote of quotes) {
  const li = document.createElement("li");
  li.innerText = quotes.quote;
  blockquote.appendChild(li);
};
