const body = document.body
const textarea = document.getElementsByTagName('textarea')[0]
const div = document.getElementsByTagName('div')[0]

body.addEventListener('keydown', handleKeys)

function handleKeys(event) {
  console.log(event)
  if (event.ctrlKey && event.key === "e") {
    event.preventDefault()
    textarea.value = div.innerText
    textarea.hidden = false
    div.hidden = true
  } else if (event.ctrlKey && event.key === "s") {
    event.preventDefault()
    div.innerText = textarea.value
    textarea.hidden = true
    div.hidden = false
  }

}