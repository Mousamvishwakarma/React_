function customRender(reactElement, mainContainer) {
const domElement= document.createElement
(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in props){
    if(prop == children) continue;
}
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http:://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)