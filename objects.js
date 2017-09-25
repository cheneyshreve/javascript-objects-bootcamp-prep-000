
playlist = {
  Beyonce: 'put a ring on it',
  Swift: 'look what you made me do'
}

function updatePlaylist(obj,name,title){
  return Object.assign({}, obj, {[name]: title})
}
