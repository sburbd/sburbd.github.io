// divId.map((el, i) => {
//   <MainButton
//     id = {el}
//     key = {i}
//     label={this.state.name[el]}
//   />
// })

<MainButton label={this.state.name[0]} url={this.state.link[0]} />
<MainButton label={this.state.name[1]} url={this.state.link[1]} />
<MainButton label={this.state.name[2]} url={this.state.link[2]} />


// handleClick = (index) => {
//   console.log(this.activeIndex)
//   this.setState({
//   activeIndex: index})
// }

// handleClick() {
//   var select = document.getElementById(this.props.id)
//   var el = document.getElementsByClassName('buttons')
//   for (var i = 0; i < el.length; i++ ) {
//     el[i].classList.remove('visible')
//     el[i].classList.add('invisible')
//   }
//   select.classList.remove('invisible')
//   select.classList.add('visible')
// }

// <div>
//   <article className='home-div'>
//     <h1>Name Lastname</h1>
//     Landing page
//   </article>
//
//   <article className='about-div'>
//     <h1>About</h1>
//     Basic information
//   </article>
//
//   <article className='about-div'>
//     <h1>Projects</h1>
//     Github links
//   </article>
// </div>


// index={ i }
// isActive={ this.state.activeIndex === i }
// label={details.label}

const dn = [Home, About, Projects]

console.log(d)
for (var i = 0; i<3; i++){
  dn[i]['DivName'] = dn[i]
}






background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);


const d = [
  {id:'home', label:'Home', divName: Home},
  {id:'about', label:'About', divName: About},
  {id:'projects', label:'Projects', divName: Projects},
]

// const dn = [Home, About, Projects]
//
// console.log(d)
// for (var i = 0; i<3; i++){
//   console.log(dn[i])
//   Object.assign({key3: "value3"})
//   dn[i].div = dn[i]
//   console.log(d)
// }
// console.log(d)
//
// const DivName = Home
