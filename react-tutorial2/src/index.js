const iconElement = React.createElement('img', {
    src: '/assets/icons/spinner.svg',
    alt: '',
    height: 12,
    key: 'faddwq',
})

const buttonElement = React.createElement('button', {
    type: 'button',
    className: 'button',
    disabled: true,
    children: ['업로드 중', iconElement],
})

console.log(buttonElement)

const rootNode = document.getElementById('root')
// ReactDOM API를 사용해서 가상 DOM 노드를 실제 DOM 노드에 마운트
ReactDOM.render(buttonElement, rootNode)
