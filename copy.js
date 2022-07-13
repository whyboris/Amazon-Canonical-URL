if (window.location.href.includes("amazon.com")) {
  console.log("Amazon canonical URL:")

  const link = document.querySelector('link[rel="canonical"]');

  const href = link?.href;

  if (href) {
    console.log(href)
    copyText(href)
  } else {
    console.log("canonical URL not found")
  }

} else {
  console.log("NOT AMAZON!")
}

function copyText(textToCopy) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    //clipboard successfully set
    console.log('copied to clipboard')
  }, () => {
    //clipboard write failed, use fallback
    console.log('ERROR copying to clipboard')
  });
}