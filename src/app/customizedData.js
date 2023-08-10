const postListC = document.querySelector('.custom')


export const setupCustomized = (dataC) => {
    if (dataC && dataC.name && dataC.data) { 
        const li = `
            <li class="list-group-item list-group-item-action list-group-item-dark">
                <h5>${dataC.name}</h5>
                <p>${dataC.data}</p>
            </li>
        `;
        
        postListC.innerHTML = li;
    } else {
        postListC.innerHTML = '<h1>Log in to see your data</h1>';
    }
};