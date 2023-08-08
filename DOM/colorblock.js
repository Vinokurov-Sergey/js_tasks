const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector('.blocks');

const createMarkup = quantity => {

    let markup ="";

    for (let i=0; i < quantity; i++) {

        const block = document.createElement('div');
        block.className = "item";
        block.innerText = i + 1;
        markup += block.outerHTML;
    }

    return markup;
}

const colorTheBlock = (block, color) => {
    block.style.backgroundColor = color;
}

quantitySelector.addEventListener('change', e => {

    const quantity = e.target.value;
    const markup = createMarkup(quantity);
    blocksContainer.innerHTML = markup;
})

let changed = false;

colorSelector.addEventListener('change', e => {
    const color = e.target.value;
    const items = document.querySelectorAll('.item');
    changed = !changed;

    for (let i=0; i < items.length; i++) {
        const BlockNumber = i + 1;
        let colorToApply = '';

        if (changed) {
            colorToApply = BlockNumber % 2 != 0 ? color : '#fff';
        } else {
                colorToApply = BlockNumber % 2 == 0 ? color : '#fff';
            }

        colorTheBlock(items[i], colorToApply);
        
    }
})
