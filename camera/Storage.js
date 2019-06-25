const React = require('react')
import firebase, { storage, database } from '../firebase'
class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      file: null,
      url: null,
      images: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.storePhoto = this.storePhoto.bind(this)
    this.deletePhoto = this.deletePhoto.bind(this)
  }
  handleChange(e) {
    this.setState({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])
    })
  }
  storePhoto() {
    const key = database.ref().child(this.state.user.uid).push().key
    const img = storage.ref().child(this.state.user.uid).child(key)
    img.put(this.state.file).then((snap) => {
      database.ref().child(this.state.user.uid).child(key).set({
        "url" : snap.metadata.downloadURLs[0]
      })
    })
    
    this.setState({
      file: null,
      url: null,
    })
  }
  deletePhoto(event) {
    let uid = this.state.user.uid
    let img = event.target.name
    storage.ref().child(uid).child(img).delete()
    database.ref().child(uid).child(img).remove()
  }
  componentDidMount() {
    const ref = database.ref().child(this.state.user.uid)
    ref.on('child_added', (child) => {
      let images = this.state.images.slice()
      images.push({
        key: child.key,
        url: child.val().url
      })
      this.setState({images})
    })
    ref.on('child_removed', (child) => {
      let images = this.state.images.filter((image) => {
        return image.url != child.val().url
      })
      this.setState({images})
    })
  }
  render() {
    const previewStyle = {
      maxHeight: "100px",
      maxWidth: "100px"
    }
    const imgStyle = {
      maxHeight: "400px",
      maxWidth: "400px"
    }
    return (
      <div>
        <input id="input" type="file" onChange={this.handleChange}/>
        <img src={this.state.url} style={previewStyle}/>
        <button onClick={this.storePhoto}>upload</button>
        {this.state.images.map((image) =>
          <div key={image.key}>
            <img src={image.url} style={imgStyle}/>
            <button onClick={this.deletePhoto} 
               name={image.key}>remove</button>
          </div>
        )}
      </div>
    );
  }
}
module.exports = Upload