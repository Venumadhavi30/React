const customfunc=(reactElement,mainContainer)=>{
//    const rootElement=document.createElement(reactElement.type)
//    rootElement.innerHTML=reactElement.children
//    rootElement.setAttribute('href',reactElement.props.href)
//    rootElement.setAttribute('target',reactElement.props.target)
//    mainContainer.appendChild(rootElement)
   const rootElement=document.createElement(reactElement.type)
   rootElement.innerHTML=reactElement.children
  for (const prop in reactElement.props) {
        rootElement.setAttribute(prop,reactElement.props[prop])
      }
      mainContainer.appendChild(rootElement)
  }


const reactElement={
    type:'a',
    //props is a object( ky value pair)
    props:{
         href:'https://google.com',
         target:'_blank'
    },
    children:'Clik me to visit google'
}
const mainContainer=document.querySelector("#root")
customfunc(reactElement,mainContainer)
