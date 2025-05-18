const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const App = (() => {
    const cars = ['BMW'];
    const input = $('#input');
    const submit = $('#submit');
    const root = $('#root');

    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times;</span>
                </li>
            `).join('');
            root.innerHTML = html;
            
        },handleDelete(e){
            const deleteBtn= e.target.closest('.delete')
            if(deleteBtn){
                const index=deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
        },
        init() {
            submit.onclick = () => {
                const car = input.value.trim();
                if (car) {
                    this.add(car);
                    this.render();
                    input.value = '';
                    input.focus();
                }
            };
            root.onclick=this.handleDelete.bind(this)
            this.render();
        }
    };
})();

App.init();
