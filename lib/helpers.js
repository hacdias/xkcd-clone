const progress = (str) => {
  if (process.stdout.isTTY) {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(str)
  } else {
    console.log(str)
  }
}

const pad = (str, max) => {
  str = str.toString()
  return str.length < max ? pad('0' + str, max) : str
}

const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
}

const escapeHtml = (html) => {
  html.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag)
}

module.exports = {
  progress,
  escapeHtml,
  pad
}
