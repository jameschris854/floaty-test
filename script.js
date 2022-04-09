console.log('hi')


const el = document.querySelector('.root')

console.log(el)

el.insertAdjacentHTML('beforeend',`<div class="bot-wrapper">
<div class="bot-container">
    <div class="header-container">Bot Name</div>
    <div class="form-wrapper">
        <input />
        <input />
        <button class="submit">Submit</div>
    </div>
</div>
</div>`)

