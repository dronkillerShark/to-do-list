let isMarked = false;
            const init = function(){
                const ntC = document.querySelector(".Notes");
                const notes = {...localStorage};
                for (const [key, value] of Object.entries(notes)) {
                    if(value.startsWith('<s>') && value.endsWith('</s>')){
                        isMarked = true;
                    }
                    const html = `
                <div class="${value.split(' ')
                .join('')
                .replaceAll(/[^a-zA-Z ]/g, '')
                .replaceAll(/[0-9]/g, '')}s">
                <h1 class="${value.split(' ')
                .join('').replaceAll(/[^a-zA-Z ]/g, '')
                .replaceAll(/[0-9]/g, '')}a">${value}</h1>
                <button class="${value
                    .split(' ')
                    .join('')
                    .replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}h btn btn-danger">delete</button>
                <button class="${value
                    .split(' ')
                    .join('')
                    .replaceAll(/[^a-zA-Z ]/g, '')
                    .replaceAll(/[0-9]/g, '')}e btn btn-success">${isMarked? "mark" : "unmark"} as completed</button>
                </div>`;
                const tss = value;
                let css = tss;
                ntC.insertAdjacentHTML('afterbegin', html);
                document.querySelector(`.${tss.split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}h`).addEventListener("click", ()=>{
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}a`).innerHTML = '';
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).remove();
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}h`).remove();
                    localStorage.removeItem(css);
                 });
                const tog = function(){
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).textContent = `${isMarked? 'unmark':'mark'} as completed`;
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).addEventListener("click", ()=>{
                   const txt = document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}a`).textContent;
                   document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}a`).innerHTML = `<s>${txt}</s>`;
                   document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).textContent = "unmark as completed";
                   localStorage.removeItem(txt);
                   localStorage.setItem(`<s>${txt}</s>`, `<s>${txt}</s>`);
                   css = `<s>${txt}</s>`;
                   document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).addEventListener("click", ()=>{
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}a`).innerHTML = txt;
                    localStorage.removeItem(`<s>${txt}</s>`);
                    localStorage.setItem(txt, txt);
                    isMarked = false;
                    css = txt;
                    tog();
                   })
                })
                }
                tog();
                }
            };
            init();

            const inpTask = document.querySelector(".newTask");
            const btnTask = document.querySelector(".btnNew");
            const ntC = document.querySelector(".Notes");
            btnTask.addEventListener("click", (e)=>{
                e.preventDefault();
                if(inpTask.value == '') return;
                localStorage.setItem(inpTask.value, inpTask.value);
                const html = `
                <div class="${(inpTask.value).split(' ')
                .join('')
                .replaceAll(/[^a-zA-Z ]/g, '')
                .replaceAll(/[0-9]/g, '')}s">
                <h1 class="${(inpTask.value).split(' ')
                .join('').replaceAll(/[^a-zA-Z ]/g, '')
                .replaceAll(/[0-9]/g, '')}a">${inpTask.value}</h1>
                <button class="${(inpTask.value)
                    .split(' ')
                    .join('')
                    .replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}h btn btn-danger">delete</button>
                <button class="${(inpTask.value)
                    .split(' ')
                    .join('')
                    .replaceAll(/[^a-zA-Z ]/g, '')
                    .replaceAll(/[0-9]/g, '')}e btn btn-success">mark as completed</button>
                </div>`;
                ntC.insertAdjacentHTML('afterbegin', html);
                document.querySelector(`.${(inpTask.value).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}h`).addEventListener("click", ()=>{
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}s`).innerHTML = '';
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}s`).remove();
                    localStorage.removeItem(css);
                 });
                 const tss = inpTask.value;
                 let css = tss;
                const tog = function(){
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).textContent = "mark as completed";
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).addEventListener("click", ()=>{
                   const txt = document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}a`).textContent;
                   document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}a`).innerHTML = `<s>${txt}</s>`;
                   document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).textContent = "unmark as completed";
                   localStorage.removeItem(txt);
                   localStorage.setItem(`<s>${txt}</s>`, `<s>${txt}</s>`);
                   css = `<s>${txt}</s>`;
                   document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}e`).addEventListener("click", ()=>{
                    document.querySelector(`.${(tss).split(' ').join('').replaceAll(/[^a-zA-Z ]/g, '').replaceAll(/[0-9]/g, '')}a`).innerHTML = txt;
                    localStorage.removeItem(`<s>${txt}</s>`);
                    localStorage.setItem(txt, txt);
                    css = txt;
                    tog();
                   })
                })
                }
                tog();
                inpTask.value = '';
            });