function customRender(reactElement,mainContainer){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.target)
    mainContainer.appendChild(domElement)
}

const reactElement ={
    type: 'a', 
    props: {
         href: 'http:://google.com',
         target:'_blank'
    },
    children: 'click me to visit google'
}
const maincontainer = document.querySelector('#root')
CustomRender(reactElement, mainContainer)