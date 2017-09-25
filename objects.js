
playlist = {
  Beyonce: 'put a ring on it',
  Swift: 'look what you made me do'
}

function updatePlaylist(playlist,name,title){
  return Object.assign({}, playlist, {[name]: title})
}

function removeFromPlaylist(){
  
}